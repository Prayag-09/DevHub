import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import "../styles/global.css";
export const metadata: Metadata = {
  title: "DevHub",
  description:
    "Welcome to DevHub, your go-to destination for all things tech! As a dynamic online community, DevHub empowers developers, engineers, and tech enthusiasts to collaborate, share knowledge, and solve problems together. With intuitive features like question posting, voting, and advanced search, DevHub makes it easy to find answers, explore new concepts, and stay updated on the latest trends in programming and technology. Join DevHub today and dive into a world of learning, sharing, and innovation",
  icons: {
    icon: '"/app/favicon.ico"',
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
