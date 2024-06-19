import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: {
  template:"Abu_Bakar" ,
  default: "Abu Bakar PIAIC Last - Class Of Bahria Audotarium"
}

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavbarDemo />
          {children}
      
        
        </body>
    </html>
  );
}
