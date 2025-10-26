import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zouheir Electric",
  description: "Zouheir Electric — catalog of Vimar Idea electrical plates, switches and outlets.",
  keywords: [
    "Zouheir Electric",
    "Vimar",
    "Vimar Idea",
    "electrical",
    "plates",
    "switches",
    "outlets",
    "electrical accessories",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD Organization - update `url` and `telephone` to your live domain/phone before publishing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zouheir Electric",
              url: "https://projc-zes.vercel.app/",
              telephone: "+96103816746",
              sameAs: ["https://wa.me/96103816746"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
