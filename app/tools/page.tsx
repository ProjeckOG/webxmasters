import Dropdown from "./components/category-dropdown";
import Filters from "./components/filters";

export default function Tools() {
  return (
    <main className="">
      <h1 className="text-center text-4xl font-bold my-10"> WEBMASTERS TOOLS LIST</h1>
      <Dropdown label={"Kobe"} options={[]} />
      <Filters label={"Web App"} onClose={function (): void {
        throw new Error("Function not implemented.");
      } } />
    </main>
  )
}
