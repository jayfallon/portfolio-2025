import HeaderAuth from "@/components/header-auth";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { createClient } from "@/utils/supabase/server";
import MouseSpotlight from "@/app/components/MouseSpotlight";
import UploadPortfolioButton from "@/components/upload-portfolio-button";

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
    creator: "@jayfallon", // Replace with your Twitter handle
  },
  verification: {
    // google: "your-google-site-verification", // Add if you have Google Search Console verification
    // yandex: "your-yandex-verification", // Add if you need Yandex verification
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  // Add any other viewport settings you need
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <MouseSpotlight />
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
          <div className="flex gap-5 items-center font-semibold">
            <Link href={"/"}>Home</Link>
            <div className="flex items-center gap-2">
              <UploadPortfolioButton />
            </div>
          </div>
          <HeaderAuth />
        </div>
      </nav>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="group/spotlight relative">{children}</div>
      </div>
      <footer>
        <div className="text-sm text-center w-1/2 mx-auto md:w-full py-4 text-slate-400 ">
          I drew full inspiration from{" "}
          <Link
            className="hover:text-teal-300"
            href="https://brittanychiang.com/"
            target="_blank"
            title="View Brittany Chiang's Portfolio"
            aria-label="View Brittany Chiang's Portfolio"
          >
            Brittany Chiang
          </Link>{" "}
          for this portfolio design.
        </div>
      </footer>
    </main>
  );
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {user ? (
            <AuthenticatedLayout>{children}</AuthenticatedLayout>
          ) : (
            <main className="relative">
              <MouseSpotlight />
              <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
                <div className="group/spotlight relative">{children}</div>
              </div>
              <footer>
                <div className="text-sm text-center w-1/2 mx-auto md:w-full py-4 text-slate-400 ">
                  I drew full inspiration from{" "}
                  <Link
                    className="hover:text-teal-300"
                    href="https://brittanychiang.com/"
                    target="_blank"
                    title="View Brittany Chiang's Portfolio"
                    aria-label="View Brittany Chiang's Portfolio"
                  >
                    Brittany Chiang
                  </Link>{" "}
                  for this portfolio design.
                </div>
              </footer>
            </main>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
