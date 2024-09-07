"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  display: "auto",
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  display: "auto",
  subsets: ["latin"],
  variable: "--font-header",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Session;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <SessionProvider session={params}>
        <body
          className={`${nunito.variable} ${poppins.variable} bg-default-light`}
        >
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
