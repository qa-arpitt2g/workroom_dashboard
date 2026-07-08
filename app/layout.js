import './globals.css';

export const metadata = {
  title: 'Dashboard | Minimal & Modern',
  description: 'Track task progress and team performance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
