import Home from '@/components/Home';

export const metadata = {
  description:
    'A highly opinionated and complete starter for Next.js projects ready to production. Includes Typescript, Styled Components, Prettier, ESLint, Husky, SEO, and more.',
  keywords:
    'next, starter, typescript, tailwind css, prettier, eslint, husky, seo',
  title: 'Jeet Boilerplate Home page',
};

export default async function HomePage() {
  
  // Meta tags for home page 
  return <Home />
}
