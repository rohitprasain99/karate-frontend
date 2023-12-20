import { Nunito_Sans } from "next/font/google";

import "./globals.css";
// import "@mantine/core/styles.css";
// import "@mantine/notifications/styles.css";

import type { Metadata } from "next";
// import { ColorSchemeScript } from "@mantine/core";
// import MantineTheme from "@/lib/MantineUI";

const font = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karate Nepal",
  description: "Developed by PaldorTech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* <ColorSchemeScript /> */}</head>
      <body className={`text-xs md:text-lg ${font.className}`}>
        {/* <MantineTheme> */}
        {children}
        {/* </MantineTheme> */}
      </body>
    </html>
  );
}
