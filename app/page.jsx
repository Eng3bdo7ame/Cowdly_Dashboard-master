"use client";
import React, { useEffect, useState } from "react";
import Dashboard from "./dashboard/page";
import Login from "./Login";
import Cookies from "js-cookie";

export default function Home() {
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
        <main className="overflow-hidden">
            
            {isLoggedIn  ? (
                <Dashboard /> 
            ) : (
                <Login /> 
            )}
        </main>
    );
}
