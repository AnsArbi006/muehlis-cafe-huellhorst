import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mühlis – Café & Concept Store in Hüllhorst',
  description: 'Specialty Coffee, Matcha und süße Auszeiten im Herzen von Hüllhorst.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
