import { CardsGrid, SectionWrapper } from "../styles/globalStyles";

import Divider from "./Divider";
import { Newsletter } from "../types/newsletter";
import NewsletterCard from "./NewsletterCard";
import { User } from "../types/user";

interface NewsletterSectionProps {
  newsletters: Newsletter[];
  user: User;
}

// Helper function to check if the user has access to a specific newsletter
const hasAccess = (newsletter: Newsletter, user: User): boolean => {
  // If the newsletter has no specific subscriptions, or if the user has a valid subscription
  return newsletter.subscriptions.length === 0 ||
    newsletter.subscriptions.some((right) => user?.subscriptions.includes(right));
};

// Function to group newsletters by their site property
const groupNewslettersBySite = (newsletters: Newsletter[]) => {
  // Using reduce to create an object where each key is a site, and each value is an array of newsletters for that site
  return newsletters.reduce((groups, newsletter) => {
    if (!groups[newsletter.site]) {
      groups[newsletter.site] = []; 
    }
    groups[newsletter.site].push(newsletter);
    return groups; 
  }, {} as Record<string, Newsletter[]>);
};
export default function NewsletterSection({ newsletters, user }: NewsletterSectionProps) {
  const groupedNewsletters = groupNewslettersBySite(newsletters);

  return (
    <SectionWrapper>
      {Object.entries(groupedNewsletters).map(([site, siteNewsletters]) => (
        <div key={site}>
          <Divider title={site} />
          <CardsGrid>
            {siteNewsletters.map((newsletter) => {

              return <NewsletterCard key={newsletter.id} newsletter={newsletter} hasAccess={hasAccess(newsletter, user)} />;
            })}
          </CardsGrid>
        </div>
      ))}
    </SectionWrapper>
  );
}