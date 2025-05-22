import face from "@/photos/face.png"
import Image from "next/image"
import Link from "next/link"
import {
  FaGithubSquare as GitHub,
  FaLinkedin as LinkedIn,
} from "react-icons/fa"
import Tabs from "./tabs"

export default function Home() {
  return (
    <>
      <Image
        src={face}
        alt="Nathaniel Davis"
        width={100}
        height={100}
        className="mx-auto rounded-full"
      />

      <h1 className="mt-2 text-center text-4xl font-bold">Nathaniel Davis</h1>
      <p className="mb-2 text-center text-xl text-muted">Software Engineer</p>

      <div className="mb-12 flex justify-center gap-2">
        <Link href="https://github.com/ntedvs" target="_blank">
          <GitHub className="size-10 text-muted" />
        </Link>

        <Link href="https://www.linkedin.com/in/ntedvs" target="_blank">
          <LinkedIn className="size-10 text-muted" />
        </Link>
      </div>

      <Tabs />
    </>
  )
}
