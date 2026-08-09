import { Metadata } from "next"
import { Gelasio, Inter } from "next/font/google"
// oxlint-disable-next-line import/no-unassigned-import
import "~/globals.css"

const serif = Gelasio({ variable: "--font-serif-source" })
const sans = Inter({ variable: "--font-sans-source" })

export const metadata: Metadata = {
  title: "Nathaniel Davis",
  description:
    "Nathaniel Davis is a software engineer building full-stack products, intelligent systems, and polished digital experiences.",
}

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={serif.variable + " " + sans.variable}>
      <body className="flex min-h-dvh flex-col antialiased">
        <main className="grow">{children}</main>
      </body>
    </html>
  )
}
