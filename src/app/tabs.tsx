"use client"

import { useState } from "react"

export default function Tabs() {
  const [tab, setTab] = useState(0)

  const tabs = [
    { label: "Projects", component: <Projects /> },
    { label: "Experience", component: <Experience /> },
    { label: "Education", component: <Education /> },
    { label: "Skills", component: <Skills /> },
  ]

  return (
    <>
      <div className="flex rounded-md bg-shade p-1">
        {tabs.map(({ label }, index) => (
          <button
            onClick={() => setTab(index)}
            className={`w-full rounded-md p-1 ${tab === index ? "bg-background" : "text-muted"}`}
            key={index}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-2">{tabs[tab].component}</div>
    </>
  )
}

function Projects() {
  return (
    <div className="flex flex-col gap-2">
      <div className="trap">
        <h2 className="text-2xl font-bold">Oderum</h2>
        <p className="mb-2 italic">Next, Tailwind, Drizzle, Postgres, Stripe</p>

        <p className="text-muted">
          Oderum is an all in one fragrance collection website. Use AI to
          discover new fragrances, search through notes, and write reviews.
          Create lists of your favorite fragrances and customize your profile.
          Tools allow users to filter fragrances, build pyramids, and more.
        </p>
      </div>

      <div className="trap">
        <h2 className="text-2xl font-bold">Jazzio</h2>
        <p className="mb-2 italic">React, Tailwind, Firebase</p>

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
        <h2 className="text-2xl font-bold">Software Engineer Intern</h2>
        <p className="mb-2 italic">
          US Embassy Addis Ababa, May 2024 - Jun 2024
        </p>

        <p className="text-muted">
          Designed an inventory management platform, implemented autonomous
          paperwork systems, and aided with technical support.
        </p>
      </div>

      <div className="trap">
        <h2 className="text-2xl font-bold">Freelance Web Developer</h2>
        <p className="mb-2 italic">Various Locations, Aug 2023 - May 2025</p>

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
    <div className="flex flex-col gap-2">
    <div className="trap">
      <h2 className="text-2xl font-bold">
        Bachelor of Science in Computer Science
      </h2>
      <p className="mb-2 italic">
        University of Pittsburgh, Aug 2025 - May 2029
      </p>

      <p className="text-muted">Details coming soon</p>
    </div>

      <div className="trap">
      <h2 className="text-2xl font-bold">
International Baccalaureate      
      </h2>
      <p className="mb-2 italic">
        International Community School of Addis Ababa, Aug 2021 - May 2024
      </p>

      <p className="text-muted">Details coming soon</p>
    </div>
      </div>
  )
}

function Skills() {
  return (
    <div className="trap flex flex-wrap justify-center gap-4">
      {[
        "AWS",
        "Azure",
        "Bash",
        "Blender",
        "CSS",
        "Cloudflare",
        "Docker",
        "Drizzle",
        "Express",
        "FastAPI",
        "Firebase",
        "GCP",
        "Git",
        "HTML",
        "Java",
        "JavaScript",
        "Jest",
        "Linux",
        "MongoDB",
        "Netlify",
        "Next.js",
        "Pinecone",
        "Playwright",
        "PostgreSQL",
        "Prisma",
        "Python",
        "React",
        "Redis",
        "Remix",
        "Rust",
        "SQLite",
        "Svelte",
        "Stripe",
        "Tailwind",
        "TypeScript",
        "Unity",
        "Unreal",
        "Vercel",
        "WebAssembly",
        "WebSockets",
      ]
        .sort()
        .map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
    </div>
  )
}
