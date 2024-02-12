import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";


const inter = Inter_Tight({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "JuFu",
  description: "Jubilant Funicular",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex h-screen w-screen ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          <main className="flex flex-col w-full h-screen">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
