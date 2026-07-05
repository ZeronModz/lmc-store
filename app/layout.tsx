import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { m3Theme } from "./theme";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LMC 8.4 Config Store",
  description: "Download the best Material 3 styled configs for LMC 8.4 Camera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={m3Theme}>
          <CssBaseline />
          <Navbar />
          <main style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
