import { ThemeProvider } from "next-themes";
import "./globals.css";
import { fontClasses } from "./fonts";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Jay Fallon | Software Engineer",
  description:
    "Software engineer specializing in building exceptional digital experiences with expertise in full-stack development, cloud architecture, and scalable solutions.",
  keywords: [
    "Jay Fallon",
    "Software Engineer",
    "Full Stack Developer",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Cloud Architecture",
  ],
  authors: [{ name: "Jay Fallon" }],
  creator: "Jay Fallon",
  publisher: "Jay Fallon",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: defaultUrl,
    title: "Jay Fallon | Software Engineer",
    description:
      "Software engineer specializing in building exceptional digital experiences with expertise in full-stack development, cloud architecture, and scalable solutions.",
    siteName: "Jay Fallon Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Fallon | Software Engineer",
    description:
      "Software engineer specializing in building exceptional digital experiences with expertise in full-stack development, cloud architecture, and scalable solutions.",
    creator: "@jayfallon",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={fontClasses} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
