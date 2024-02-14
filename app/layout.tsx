import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css";


const inter = Inter_Tight({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Vclass",
  description: "KNUST Virtual Classroom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-screen w-screen ${inter.className} overflow-x-hidden bg-fixed`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="mt-[70px] bg-neutral-50 dark:bg-black/5 flex w-screen h-fit min-h-[calc(100vh-70px)]">
            <Sidebar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
