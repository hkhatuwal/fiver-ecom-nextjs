import './globals.css'
import { Quicksand} from 'next/font/google'
import Navbar from "@/components/common/Navbar";
import React from "react";
import Footer from "@/components/common/Footer";

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>

      {children}

      <Footer/>
      </body>
    </html>
  )
}
