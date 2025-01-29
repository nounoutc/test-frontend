import { CardDescription, CardTitle, CardWrapper, SubscribeButton } from "../styles/globalStyles";

import { Newsletter } from "../types/newsletter";

interface NewsletterCardProps {
  newsletter: Newsletter;
  hasAccess: boolean;
}

export default function NewsletterCard({ newsletter, hasAccess }: NewsletterCardProps) {
  return (
    <CardWrapper>
      <CardTitle>{newsletter.title}</CardTitle>
      <CardDescription>{newsletter.description}</CardDescription>
      <SubscribeButton isSubscribed={hasAccess}>
        {hasAccess ? "S'inscrire" : "S'abonner"}
      </SubscribeButton>
    </CardWrapper>
  );
}
