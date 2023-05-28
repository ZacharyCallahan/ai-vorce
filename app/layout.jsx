import AppStateProvider from "./AppStateContext";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["cyrillic"] });

export const metadata = {
    title: "AI-vorce",
    description: "AI-vorce is a web app that helps you not get divorced.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* TODO: extract data and put into metadata var */}
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </head>
        <body className={`${rubik.className} bg-background`}>
                <AppStateProvider>{children}</AppStateProvider>
            </body>
        </html>
    );
}
