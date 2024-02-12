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
      <body className={`flex flex-col h-screen w-screen ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex w-screen h-full">
            <Sidebar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
