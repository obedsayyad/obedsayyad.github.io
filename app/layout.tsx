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
  title: "View Resume",
  description:
    "Modern web developer & designer crafting responsive websites, landing pages, and web apps. I design clean, user-focused interfaces in Figma and convert them into pixel-perfect, scalable code with performance in mind. Let’s bring your vision to life.",
  keywords: [
    "Front-End Developer",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "JavaScript Developer",
    "UI/UX Design",
    "Responsive Web Design",
    "Tailwind CSS",
    "Web Development Projects",
    "Modern Web Technologies",
  ],
  authors: [{ name: "Obed Sayyad", url: "https://obed1s.vercel.app/" }],
  openGraph: {
    title: "View Resume",
    description:
      "Modern web developer & designer crafting responsive websites, landing pages, and web apps. I design clean, user-focused interfaces in Figma and convert them into pixel-perfect, scalable code with performance in mind. Let’s bring your vision to life.",
    url: "https://obed1s.vercel.app/",
    siteName: "View Resume",
    images: [
      {
        url: "https://i.imgur.com/PJpbJrr.jpeg",
        width: 1200,
        height: 630,
        alt: "Obed Sayyad Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "View Resume",
    description:
      "Modern web developer & designer crafting responsive websites, landing pages, and web apps. I design clean, user-focused interfaces in Figma and convert them into pixel-perfect, scalable code with performance in mind. Let’s bring your vision to life.",
    images: ["https://i.imgur.com/PJpbJrr.jpeg"],
  },
  robots: "index, follow",
  other: {
    "google-site-verification": "JnogjLesr1mnfyUqR7XDEpMwIE3bbNF2nJjmvXuzz70",
  },
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
        {children}
      </body>
    </html>
  );
}
