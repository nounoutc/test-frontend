import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import { Newsletter } from "../types/newsletter";

export async function fetchNewsletters(): Promise<Newsletter[]> {
  return Promise.resolve(NEWSLETTER_ITEMS);
}
