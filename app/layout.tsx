import '@/app/ui/global.css';
import { inter, megrim } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`${megrim.className} antialiased`}>{children}</body>
    {/*<body >{children}</body>*/}
    </html>
  );
}
