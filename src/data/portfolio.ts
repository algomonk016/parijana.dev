export interface NavLink {
  label: string
  href: string
  cta?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Contact', href: 'mailto:hello@parijana.dev', cta: true },
];

export const stats = [
  { target: 24, suffix: '+', label: 'Projects Built' },
  { target: 6, suffix: '+', label: 'Years Learning' },
  { target: 40, suffix: '+', label: 'Articles Written' },
  { target: 12, suffix: '+', label: 'Experiments' },
] as const;

export const tags = [
  'Frontend Architecture',
  'Systems Thinking',
  'AI Applications',
  'Product Building',
  'Distributed Systems',
  'Developer Experience',
] as const;

export interface Project {
  title: string;
  description: string;
  tag: string;
  stack: string[];
  href: string;
}

export const projects: Project[] = [
  {
    title: 'Chaturang',
    description: 'An AI-powered chess platform that adapts to your playstyle. Real-time analysis, personalized coaching, and pattern recognition that improves the more you play.',
    tag: 'AI · Chess',
    stack: ['TypeScript', 'Stockfish', 'WebSockets'],
    href: '#',
  },
  {
    title: 'EmpathLingua',
    description: 'A communication and negotiation training platform powered by language models. Practice difficult conversations in a safe, judgment-free environment with real-time feedback.',
    tag: 'NLP · Training',
    stack: ['Python', 'LLMs', 'React'],
    href: '#',
  },
  {
    title: 'Kafka Playground',
    description: 'An interactive learning environment for distributed systems. Visualize message queues, experiment with partitions and consumer groups, and understand Kafka through hands-on exploration.',
    tag: 'Systems · Learning',
    stack: ['Java', 'Kafka', 'Docker'],
    href: '#',
  },
] as const;

export interface TimelineStep {
  stepNumber: string;
  title: string;
  description: string;
}

export const timelineSteps: TimelineStep[] = [
  {
    stepNumber: '01',
    title: 'Learn',
    description: 'Understand the domain deeply. Read papers, study systems, talk to users. Build mental models before writing a line of code.',
  },
  {
    stepNumber: '02',
    title: 'Build',
    description: 'Iterate fast, but build with care. Good architecture is invisible. Write code that your future self will thank you for.',
  },
  {
    stepNumber: '03',
    title: 'Share',
    description: 'Document, write, teach. Knowledge compounds when shared. Every article, talk, or open-source contribution makes the next person faster.',
  },
  {
    stepNumber: '04',
    title: 'Scale',
    description: 'When something works, make it work for more. Productize the insight, systematize the process, and measure what matters.',
  },
] as const;

export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'Blog', href: '#blog' },
  { label: 'Email', href: 'mailto:hello@parijana.dev' },
] as const;
