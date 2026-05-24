import { Geist, Geist_Mono, Instrument_Sans, Montserrat } from "next/font/google"

import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { Header } from "@/components/header";

const montserratHeading = Montserrat({ subsets: ['latin'], variable: '--font-heading' });

const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
})

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex flex-col min-h-svh">
            <Header />
            <main>{children}</main>
        </div>
    )
}
