"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "../public/css/bootstrap-select.min.css";
import "../public/css/bootstrap.css";
import "../public/css/animate.min.css";
import "../public/css/animation.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <html lang="en">
      <body className={`body ${inter.className}`}>
        {isLoggedIn && (
          <>
            <Header />
            <Sidebar />
          </>
        )}
        {children}
      </body>
    </html>
  );
}
