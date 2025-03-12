import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
// Load Outfit font
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={` antialiased pt-10`}
      >
        <Providers >{children}</Providers>
      </body>
    </html>
  );
}
