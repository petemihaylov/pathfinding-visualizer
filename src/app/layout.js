import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pathfinding',
  description: 'Pathfinding visualizer on a real map. Anywhere in the world.',
  keywords: ['pathfinding', 'visualizer', 'map', 'dijkstra visualizer'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
