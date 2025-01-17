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
  title: "Adrián Martín Barceló | Frontend Web Developer | React - Next & TypeScript",
  description: "Portfolio of Adrián Martín Barceló, a web developer specializing in creating high-performing, user-centric web applications using React, TypeScript, and Next.js.",
  keywords: "Adrian Martin Barcelo, frontend developer, React, TypeScript, UI/UX design, portfolio, web development, JavaScript, Tailwind CSS, Docker",
  authors: [{ name: "Adrián Martín Barceló" }],
  openGraph: {
    title: "Adrián Martín Barceló | Frontend Web Developer | React & TypeScript",
    description: "Portfolio of Adrián Martín Barceló, a web developer specializing in creating high-performing, user-centric web applications using React, TypeScript, and Next.js.",
    url: "https://admartinbarcelo.com/",
    type: "website",
    images: [
      {
        url: "https://admartinbarcelo.com/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Adrián Martín Barceló - Frontend Web Developer Portfolio",
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

  const facebookAppId = '616839594047355'; 

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description ?? ""} />
        <meta name="keywords" content={metadata.keywords ?? ""} />
        <meta name="author" content={metadata.authors?.[0]?.name ?? ""} />
        <meta name="viewport" content={`width=${viewport.width}, initial-scale=${viewport.initialScale}`} />
        <meta property="og:title" content={metadata.openGraph?.title ?? ""} />
        <meta property="og:description" content={metadata.openGraph?.description ?? ""} />
        <meta property="og:url" content={metadata.openGraph?.url?.toString() ?? ""} />
        <meta property="og:type" content={metadata.openGraph?.type ?? ""} />
        <meta property="og:image" content={metadata.openGraph?.images?.[0]?.url ?? ""} />
        <meta property="fb:app_id" content={facebookAppId} />
        {metadata.openGraph && Object.entries(metadata.openGraph).map(([key, value]) => (
          typeof value === 'string' || typeof value === 'number' ? // Comprobación para evitar errores con arrays
            <meta property={`og:${key}`} content={value} key={`og:${key}`} /> : null
        ))}
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