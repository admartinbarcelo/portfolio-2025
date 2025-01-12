import { Inter, Calistoga } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import './globals.css';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata = {
  title: "Adrian Martin Barcelo - Portfolio",
  description: "Welcome to my personal portfolio. Explore my projects, skills, and experience.",
  keywords: "Adrian Martin Barcelo, portfolio, web developer, projects, skills, experience",
  authors: [{ name: "Adrian Martin Barcelo" }],
  openGraph: {
    title: "Adrian Martin Barcelo - Portfolio",
    description: "Welcome to my personal portfolio. Explore my projects, skills, and experience.",
    url: "https://your-portfolio-url.com",
    type: "website",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Adrian Martin Barcelo - Portfolio",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metadata.description ?? ""} />
        <meta name="keywords" content={metadata.keywords ?? ""} />
        <meta name="author" content={metadata.authors?.[0]?.name ?? ""} />
        <meta name="viewport" content={`width=${viewport.width}, initial-scale=${viewport.initialScale}`} />
        <meta property="og:title" content={metadata.openGraph?.title ?? ""} />
        <meta property="og:description" content={metadata.openGraph?.description ?? ""} />
        <meta property="og:url" content={metadata.openGraph?.url?.toString() ?? ""} />
        <meta property="og:type" content={metadata.openGraph?.type ?? ""} />
        <meta property="og:image" content={metadata.openGraph?.images?.[0]?.url ?? ""} />
        <title>{metadata.title ?? ""}</title>
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}