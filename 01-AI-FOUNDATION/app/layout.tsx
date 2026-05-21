import './globals.css';
import './styles/theme.css';
import './styles/tokens.css';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

export const metadata = {
  title: 'AI Foundation – Interactive Lesson',
  description: 'Premium educational concept page for Gradient Descent',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Detect system preference on mount
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(media.matches ? 'dark' : 'light');
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light');
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <html lang="en" data-theme={theme} style={{ scrollBehavior: 'smooth' }}>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@600&family=Outfit:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-primary text-primary">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="px-12 py-24 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
