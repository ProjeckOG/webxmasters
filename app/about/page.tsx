
// AboutPage.tsx
import React from 'react';

// You might want to create separate files for each of these components and import them instead.
// For brevity, they are included directly here.

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="my-8">
    <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
    {children}
  </div>
);

const WelcomeSection: React.FC = () => (
  <Section title="Welcome to Our Forum">
    <p className="text-center text-lg">
      A community dedicated to empowering webmasters and developers by providing the latest in webmaster tools,
      including website builders, mobile app builders, AI tools, and more.
    </p>
  </Section>
);

const MissionSection: React.FC = () => (
  <Section title="Our Mission">
    <p className="text-center text-lg">
      We're committed to offering a platform where professionals can discover, evaluate, and discuss the best tools
      for web development and management, fostering innovation and efficiency in the digital space.
    </p>
  </Section>
);

const OfferSection: React.FC = () => (
  <Section title="What We Offer">
    <div className="text-lg">
      <ul className="list-disc list-inside">
        <li>Expert Reviews and Comparisons</li>
        <li>User Testimonials and Success Stories</li>
        <li>Community-Driven Insights and Recommendations</li>
      </ul>
    </div>
  </Section>
);

const CommunitySection: React.FC = () => (
  <Section title="Community Highlights">
    <p className="text-center text-lg">
      Our forum thrives on the active participation of its members. From sharing personal success stories to helping
      others solve technical challenges, every contribution enriches our community.
    </p>
  </Section>
);

const JoinUsSection: React.FC = () => (
  <Section title="Join Us">
    <p className="text-center text-lg">
      Ready to dive in? Sign up today to become part of a vibrant community of webmasters and tech enthusiasts,
      gain access to exclusive content, and stay updated on the latest tools.
    </p>
  </Section>
);

const AboutPage: React.FC = () => (
  <div className="max-w-4xl mx-auto p-4">
    <WelcomeSection />
    <MissionSection />
    <OfferSection />
    <CommunitySection />
    <JoinUsSection />
  </div>
);

export default AboutPage;
