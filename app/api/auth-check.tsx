import { createServerClient, type CookieOptions, serialize } from "@supabase/ssr";
import { type NextApiRequest, type NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Initialize Supabase client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies[name];
        },
        set(name: string, value: string, options: CookieOptions) {
          res.setHeader("Set-Cookie", serialize(name, value, options));
        },
        remove(name: string, options: CookieOptions) {
          res.setHeader("Set-Cookie", serialize(name, "", options));
        },
      },
    }
  );

  if (req.method === "POST") {
    const { type, value } = req.body; // Expecting 'type' to be either 'username' or 'email'
    const columnName = type === 'email' ? 'email' : 'username';

    try {
      // Query the database to see if an entry with the given username or email exists
      const { data, error } = await supabase
        .from('users')
        .select('id') // Selecting 'id' as we just need to know if a record exists
        .eq(columnName, value)
        .single(); // Using .single() to return the first match, if any

      if (error && error.message !== 'Item not found') {
        // If there is any error other than 'Item not found', throw the error
        throw error;
      }

      // If data is found, the field is not available
      if (data) {
        res.status(200).json({ available: false, message: `${columnName} is already taken.` });
      } else {
        // If no data is found, the field is available
        res.status(200).json({ available: true, message: `${columnName} is available.` });
      }
    } catch (error) {
      console.error(`Error checking ${columnName} availability:`, error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(400).json({ error: "Invalid request" });
  }
}
