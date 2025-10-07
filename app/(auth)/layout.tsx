import Image from "next/image";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="flex flex-col md:flex-row  bg-white justify-between ">
                    <Image src='/img/log1.jpg' alt="hero img" width={500} height={200} className="flex-1 object-cover h-screen bg-blend-overlay" />
                    <div className="flex-1">{children}</div>
                </div>


            </body>
        </html>
    );
}
