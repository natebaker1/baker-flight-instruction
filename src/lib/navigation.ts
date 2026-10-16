export const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/services', label: 'Services' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' }
];

export const footerLinks = [
  { href: '/support', label: 'Support' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' }
];

export const legacyRoutes: Record<string, string> = {
  '/index.html': '/',
  '/about.html': '/about',
  '/services.html': '/services',
  '/resources.html': '/resources',
  '/contact.html': '/contact',
  '/support.html': '/support',
  '/privacy.html': '/privacy',
  '/terms.html': '/terms'
};
