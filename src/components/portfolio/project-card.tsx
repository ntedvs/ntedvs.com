type Tone = "accent" | "ink"
type Shape = "circles" | "bars" | "grid"

export interface Project {
  number: string
  name: string
  metric: string
  metricLabel: string
  description: string
  stack: string[]
  tone: Tone
  shape: Shape
  href?: string
}

const toneClasses: Record<Tone, string> = {
  accent: "bg-accent text-paper",
  ink: "bg-ink text-paper",
}

const gridCells = ["01", "02", "03", "04", "05", "06", "07", "08", "09"]

function ProjectDecoration({ shape }: { shape: Shape }) {
  if (shape === "circles") {
    return (
      <>
        <div className="absolute -top-16 -right-12 size-56 rounded-full border border-current opacity-20" />
        <div className="absolute -bottom-24 -left-10 size-64 rounded-full border border-current opacity-20" />
      </>
    )
  }

  if (shape === "bars") {
    return (
      <>
        <div className="absolute -top-10 right-8 h-72 w-12 rotate-12 border border-current opacity-20" />
        <div className="absolute -top-6 right-24 h-72 w-12 rotate-12 border border-current opacity-20" />
        <div className="absolute -top-2 right-40 h-72 w-12 rotate-12 border border-current opacity-20" />
      </>
    )
  }

  return (
    <div className="absolute top-8 right-8 grid grid-cols-3 gap-3 opacity-20">
      {gridCells.map((cell) => (
        <span key={cell} className="size-12 border border-current" />
      ))}
    </div>
  )
}

function ProjectContent({ project, showDivider }: { project: Project; showDivider: boolean }) {
  return (
    <>
      <div
        className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden p-6 sm:p-8 ${toneClasses[project.tone]}`}
      >
        <ProjectDecoration shape={project.shape} />
        <div className="relative text-xs uppercase opacity-65">
          <span>{project.number}</span>
        </div>
        <div className="relative">
          <p className="font-serif text-5xl sm:text-6xl">{project.metric}</p>
          <p className="mt-2 text-sm opacity-65">{project.metricLabel}</p>
        </div>
      </div>

      <div
        className={`flex min-h-80 flex-col bg-paper p-6 sm:p-8 ${showDivider ? "lg:border-l lg:border-ink/15" : ""}`}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-4xl">{project.name}</h3>
          {project.href ? (
            <span
              aria-hidden="true"
              className="text-2xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              ↗
            </span>
          ) : null}
        </div>
        <p className="mt-6 text-ink/65">{project.description}</p>
        <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-10 text-xs text-ink/45 uppercase">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export function ProjectCard({ project, showDivider }: { project: Project; showDivider: boolean }) {
  const className = "group block bg-paper"

  return project.href ? (
    <a className={className} href={project.href}>
      <ProjectContent project={project} showDivider={showDivider} />
    </a>
  ) : (
    <article className={className}>
      <ProjectContent project={project} showDivider={showDivider} />
    </article>
  )
}
