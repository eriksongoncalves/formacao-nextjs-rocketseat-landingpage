"use client"

import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const pathname = usePathname()
  const linkPath = typeof href === "string" ? href : href.pathname
  const isActive = pathname === linkPath || pathname?.startsWith(`${linkPath}/`)

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-blue-500",
        isActive ? "text-blue-500" : "text-gray-100"
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}
