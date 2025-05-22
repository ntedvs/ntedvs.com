"use client"

import { useState } from "react"

export default function Tabs() {
  const [tab, setTab] = useState(0)

  return (
    <>
      <div className="flex rounded-md bg-shade p-1">
        {["Projects", "Experience", "Education", "Skills"].map(
          (label, index) => (
            <button
              onClick={() => setTab(index)}
              className={`w-full rounded-md p-1 ${tab === index ? "bg-background text-foreground" : "text-muted"}`}
              key={index}
            >
              {label}
            </button>
          ),
        )}
      </div>

      <div className="mt-2">
        {[<Projects />, <Experience />, <Education />, <Skills />][tab]}
      </div>
    </>
  )
}

function Projects() {
  return (
    <div className="flex flex-col gap-2">
      <div className="trap">
        <h2 className="text-xl font-bold">Oderum</h2>

        <p className="text-muted">
          Oderum is an all in one fragrance collection website. Use AI to
          discover new fragrances, search through notes, and write reviews.
          Create lists of your favorite fragrances and customize your profile.
          Tools allow users to filter fragrances, build pyramids, and more.
        </p>
      </div>

      <div className="trap">
        <h2 className="text-xl font-bold">Jazzio</h2>

        <p className="text-muted">
          Jazzio is a membership, verification, and auditing platform for the US
          Embassy Addis Ababa. It leverages QR codes to streamline admissions
          and implements analytics for event holders. Designed to support both
          English and Amharic speakers, Jazzio has gained over 20,000 members.
        </p>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div className="flex flex-col gap-2">
      <div className="trap">
        <h2 className="text-xl font-bold">Software Engineer Intern</h2>

        <p className="text-muted">
          Designed an inventory management platform, implemented autonomous
          paperwork systems, and aided with technical support.
        </p>
      </div>

      <div className="trap">
        <h2 className="text-xl font-bold">Freelance Web Developer</h2>

        <p className="text-muted">
          Built websites for several non-profit organizations based in Africa,
          implementing donation platforms and membership management tools.
        </p>
      </div>
    </div>
  )
}

function Education() {
  return (
    <div className="trap">
      <h2 className="text-xl font-bold">
        Bachelor of Science in Computer Science
      </h2>

      <p className="text-muted">University of Pittsburgh</p>
    </div>
  )
}

function Skills() {
  return (
    <div className="trap flex flex-wrap justify-around gap-4">
      {[
        "JavaScript",
        "Bash",
        "TypeScript",
        "Rust",
        "Python",
        "Java",
        "React",
        "Next.js",
        "Tailwind",
        "HTML",
        "CSS",
        "Git",
        "Linux",
        "WebAssembly",
        "WebSockets",
        "AWS",
        "GCP",
        "Vercel",
        "Firebase",
        "PyTorch",
        "Stripe",
        "SEO",
        "PostgreSQL",
        "Drizzle",
        "Prisma",
        "SQLite",
        "MongoDB",
        "Redis",
        "Pinecone",
        "Jest",
        "Playwright",
        "Unity",
        "Unreal",
        "Express",
        "FastAPI",
        "Docker",
        "Remix",
        "Svelte",
        "Blender",
      ]
        .sort()
        .map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
    </div>
  )
}
