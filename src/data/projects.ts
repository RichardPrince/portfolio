export interface Project {
  number: string
  name: string
  description: string
  techStack: string[]
  url: string
  techLine: string
  image?: string
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'MochiFind',
    description:
      'Full-stack mobile plushie aggregator pulling real-time Etsy marketplace data with account creation, saved items, and purchase redirect. Features a server-side API proxy layer with CORS allowlisting, IP-based rate limiting, and multi-tier CDN caching. Architected for multi-retailer expansion including Amazon and Walmart.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Vercel Serverless', 'Supabase', 'Etsy API v3'],
    url: 'https://mochifind.com',
    techLine: 'React Native / TypeScript / Supabase',
    image: '/projects/mochifind.png',
  },
  {
    number: '02',
    name: 'Pomodoro Timer',
    description:
      'Portfolio-worthy Pomodoro timer with a soft organic aesthetic. Features configurable work/break durations, session tracking with daily stats, auto-start, light/dark mode, browser notifications, keyboard shortcuts, and PWA support for mobile install.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    url: 'https://github.com/RichardPrince/pomodoro',
    techLine: 'React / TypeScript / Tailwind',
    image: '/projects/pomodoro.png',
  },
  {
    number: '03',
    name: 'Pokedex',
    description:
      'A React-based Pokedex built with Vite that renders original Pokemon sprites in a clean, browsable interface. A quick project born out of an appreciation for the classic sprite art.',
    techStack: ['React', 'JavaScript', 'Vite', 'CSS'],
    url: 'https://richardprince.github.io/Pokedex/',
    techLine: 'React / JavaScript / Vite',
    image: '/projects/pokedex.png',
  },
  {
    number: '04',
    name: 'Chicky Apiary',
    description:
      'Bee-themed portfolio website built for a social media and marketing professional. Custom design with playful branding, responsive layout, and clean presentation of client work and services.',
    techStack: ['HTML', 'CSS'],
    url: 'https://richardprince.github.io/chicky-apiary/',
    techLine: 'HTML / CSS',
    image: '/projects/chicky-apiary.png',
  },
  {
    number: '05',
    name: 'OC Auto Repair',
    description:
      'Full website for a family-owned auto repair shop in Fountain Valley, CA. Features service listings, reviews integration, business hours, and a click-to-call CTA. Built for trust and local SEO with fast load times and mobile-first design.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    url: 'https://ocautorepair.vercel.app/',
    techLine: 'HTML / CSS / Vercel',
    image: '/projects/oc-auto-repair.png',
  },
]
