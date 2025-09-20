import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "فروشگاه محصولات",
  description: "ساخته شده برای فروشگاه فارسی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ResponsiveNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
