"use client";

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export default function RootLayout({ children }) {
	
	return (
		<html lang="en">
		<body className={`${geistSans.variable} ${geistMono.variable}`}>
		<GoogleAnalytics gaId="G-TH20891YX2" />
			<Navbar />
			{children}
			<Footer />
		</body>
		</html>
	);
}
