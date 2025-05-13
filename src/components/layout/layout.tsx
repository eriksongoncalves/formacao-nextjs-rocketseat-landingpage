import { Inter } from "next/font/google"

import { Header } from "../header"
import { Footer } from "../footer"

type LayoutProps = {
  children: React.ReactNode
}
const inter = Inter({ subsets: ["latin"] })

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${inter.className} relative flex min-h-screen flex-col`}>
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}
