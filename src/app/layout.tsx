import "../styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const jost = localFont({
  src: "../fonts/Jost-VariableFont_wght.ttf",
  display: "swap",
});

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
    <html lang="en">
      <body
        className={`${jost.className} bg-secondary-light-grey text-body-1 text-secondary-dark-blue antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
