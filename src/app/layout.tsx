import "@/styles/globals.css"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: { default: "Nathaniel Davis", template: "%s | Nathaniel Davis" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-background text-foreground ${inter.className}`}>
        <main className="mx-auto my-12 max-w-3xl">{children}</main>
      </body>
    </html>
  )
}
