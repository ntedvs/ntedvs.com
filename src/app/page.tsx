import { CareerRouteSection } from "~/components/portfolio/career-route-section"
import { Hero } from "~/components/portfolio/hero"
import { ProjectCard, type Project } from "~/components/portfolio/project-card"
import { SiteHeader } from "~/components/portfolio/site-header"

const projects: Project[] = [
  {
    number: "01",
    name: "Jazzio",
    metric: "30,000+",
    metricLabel: "users",
    description:
      "A membership platform for the U.S. Embassy with QR-based guard check-in and automated weekly security reporting.",
    stack: ["React", "Tailwind", "Firebase", "Google Cloud"],
    tone: "accent",
    shape: "circles",
  },
  {
    number: "02",
    name: "Oderum",
    metric: "1,000s",
    metricLabel: "training pairs",
    description:
      "A fragrance database and social discovery platform with subscriptions and fine-tuned vector search for natural-language queries.",
    stack: ["Next.js", "PostgreSQL", "Stripe"],
    tone: "ink",
    shape: "bars",
    href: "https://oderum.com",
  },
  {
    number: "03",
    name: "Shrine",
    metric: "8+ ply",
    metricLabel: "search depth",
    description:
      "A UCI-compatible engine that searches millions of positions using minimax and alpha-beta pruning.",
    stack: ["Rust", "UCI", "Game search"],
    tone: "accent",
    shape: "grid",
  },
]

export default function Home() {
  return (
    <div className="overflow-clip">
      <SiteHeader />
      <main>
        <Hero />

        <CareerRouteSection />

        <section id="projects" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
            <div className="mb-12 flex items-end justify-between gap-8 sm:mb-16">
              <h2 className="font-serif text-5xl sm:text-6xl">Projects</h2>
              <p className="hidden text-xs text-ink/55 uppercase sm:block">2023–2026</p>
            </div>

            <div className="grid overflow-hidden border border-ink/15 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} showDivider={index > 0} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
            <footer className="flex flex-col gap-5 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Nathaniel Davis</p>
              <div className="flex gap-6">
                <a
                  className="transition-colors hover:text-ink"
                  href="https://github.com/ntedvs"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="transition-colors hover:text-ink"
                  href="https://linkedin.com/in/ntedvs"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <span>nate@qstreet.org</span>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}
