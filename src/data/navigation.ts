export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'ai', label: 'AI', href: '#ai' },
  { id: 'certifications', label: 'Certs', href: '#certifications' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
