import SessionWrapper from "@/components/SessionWrapper";

import Navbar from "../components/Navbar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
        {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
