import { Inter, PT_Sans_Caption } from "next/font/google"

import { Header } from "./header"
import { Footer } from "./footer"
import { CallToAction } from "@/templates/landingpage/sections"

type LayoutProps = {
  children: React.ReactNode
}
const inter = Inter({ subsets: ["latin"] })

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sans"
})

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${inter.className} ${ptSansCaption.className} relative flex min-h-screen flex-col`}
    >
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <CallToAction />
      <Footer />
    </div>
  )
}
