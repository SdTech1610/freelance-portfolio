import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || "https://sdtech.world"),
  title: {
    default: "Smit Doshi | Full Stack Developer & Freelancer",
    template: "%s | Smit Doshi",
  },
  description: "Senior Full Stack Developer specializing in modern web applications, high-performance APIs, and scalable freelance solutions.",
  keywords: ["Freelance Developer", "Full Stack Developer", "Next.js Expert", "React Developer", "SD Tech World"],
  authors: [{ name: "Smit Doshi" }],
  creator: "Smit Doshi",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.BASE_URL || "https://sdtech.world",
    title: "Smit Doshi | Full Stack Developer & Freelancer",
    description: "Building modern, high-performance web experiences with Next.js and TypeScript.",
    siteName: "Smit Doshi Portfolio",
    images: [
      {
        url: "/logo.png", // Using the logo as a fallback OG image
        width: 800,
        height: 600,
        alt: "SD Tech World Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smit Doshi | Full Stack Developer & Freelancer",
    description: "Building modern, high-performance web experiences with Next.js and TypeScript.",
    creator: "@smitdoshi",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Smit Doshi",
    "url": process.env.BASE_URL || "https://freelance.sdtechworld.in",
    "jobTitle": "Full Stack Developer & Freelancer",
    "sameAs": [
      "https://github.com/SdTech1610",
      "https://www.linkedin.com/in/smit-doshi-9990b020b/",
      "https://x.com/smi_t1610"
    ],
    "description": "Senior Full Stack Developer specializing in Next.js, TypeScript, and high-performance web applications."
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/logo.png"/>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <meta name="google-site-verification" content="H--DFpR3lw7lYr7p2p3-owXffs5AX5BSr0euVAzEj_E" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-QJQNJTBJPR"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QJQNJTBJPR');
        `}
      </Script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
