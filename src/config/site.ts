export const SITE = {
  name: 'JUSTIN.',
  title: 'JUSTIN. | Disrupt. Operate. Lead.',
  description: 'Driving industry disruption with over $100 million in lifetime volume sold. Scaling businesses to 8-figures through relationship-first strategy and AI.',
  url: 'https://justinphillips.com',
  twitterHandle: '@justinphillips',
  socials: {
    twitter: 'https://twitter.com/justinphillips',
    instagram: 'https://instagram.com/justinphillips',
    linkedin: 'https://linkedin.com/in/justinphillips',
  },
  image: {
    src: '/og-image.jpg',
    alt: 'JUSTIN. Disrupt. Operate. Lead.',
  },
} as const;

export type SiteConfig = typeof SITE;
