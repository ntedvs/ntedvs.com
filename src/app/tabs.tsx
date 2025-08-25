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
      <div className="mb-2 flex rounded-md bg-shade p-1">
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

      <div>{tabs[tab].component}</div>
    </>
  )
}

function Projects() {
  return (
    <div className="flex flex-col gap-2">
      <Thing
        title="Oderum"
        subtitle="Next, Tailwind, Drizzle, Postgres, Stripe"
        description="Oderum is an all in one fragrance collection website. Use AI to discover new fragrances, search through notes, and write reviews. Create lists of your favorite fragrances and customize your profile. Tools allow users to filter fragrances, build pyramids, and more."
      />

      <Thing
        title="Jazzio"
        subtitle="React, Tailwind, Firebase"
        description="Jazzio is a membership, verification, and auditing platform for the US Embassy Addis Ababa. It leverages QR codes to streamline admissions and implements analytics for event holders. Designed to support both English and Amharic speakers, Jazzio has gained over 20,000 members."
      />

      <Thing
        title="Shrine"
        subtitle="Rust"
        description="Built a high-performance chess engine in Rust using bitboards and the minimax algorithm. Successfully implemented transposition tables, alpha-beta pruning, and killer move heuristics for enhanced move generation and efficient board state processing."
      />
    </div>
  )
}

function Experience() {
  return (
    <div className="flex flex-col gap-2">
      <Thing
        title="Software Engineer Intern"
        subtitle="US Embassy Addis Ababa, May 2024 - Jun 2024"
        description="Designed an inventory management platform, implemented autonomous paperwork systems, and aided with technical support."
      />

      <Thing
        title="Freelance Web Developer"
        subtitle="Various Locations, Aug 2023 - May 2025"
        description="Built websites for several non-profit organizations based in Africa, implementing donation platforms and membership management tools."
      />
    </div>
  )
}

function Education() {
  return (
    <div className="flex flex-col gap-2">
      <Thing
        title="Bachelor of Science in Computer Science"
        subtitle="University of Pittsburgh, Aug 2025 - May 2029"
        description="Details coming soon"
      />

      <Thing
        title="International Baccalaureate"
        subtitle="International Community School of Addis Ababa, Aug 2021 - May 2024"
        description="Focused on computer science, math, and business."
      />
    </div>
  )
}

function Thing({
  title,
  subtitle,
  description,
}: {
  title: string
  subtitle: string
  description: string
}) {
  return (
    <div className="trap">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mb-2 italic">{subtitle}</p>
      <p className="text-muted">{description}</p>
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
        "Vite",
        "Java",
        "JavaScript",
        "Jest",
        "Linux",
        "MCP",
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
        "Supabase",
        "Tailwind",
        "TypeScript",
        "Ollama",
        "Unity",
        "Unreal",
        "Vercel",
        "WebAssembly",
        "WebSockets",
        "Tauri",
      ]
        .sort()
        .map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
    </div>
  )
}
