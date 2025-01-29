import Header from "./components/Header";
import NewsletterSection from "./components/NewsletterSection";
import { fetchNewsletters } from "./lib/fetchNewsletters";
import { fetchUser } from "./lib/fetchUser";

export default async function NewslettersPage(): Promise<JSX.Element> {
  const newsletters = await fetchNewsletters();
  const user = await fetchUser();
  return (
    <main>
      <Header />
      <NewsletterSection
        newsletters={newsletters}
        user={user}  
      />
    </main>
  );
}
