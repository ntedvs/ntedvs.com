import { experience } from "~/components/portfolio/experience-data"

export function CareerRouteSection() {
  return (
    <section id="experience" className="scroll-mt-24 bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <h2 className="font-serif text-5xl sm:text-6xl">Experience</h2>

        <div className="relative mt-16 sm:mt-24">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-3 w-px bg-ink/15 sm:left-1/3"
          />

          {experience.map((item) => (
            <article
              key={item.company}
              className="relative grid gap-8 py-12 pl-10 sm:grid-cols-12 sm:pl-0"
            >
              <span
                aria-hidden="true"
                className="absolute top-16 left-3 size-3 -translate-x-1/2 rounded-full bg-accent ring-8 ring-paper sm:left-1/3"
              />

              <div className="sm:col-span-4">
                <p className="font-serif text-4xl sm:text-5xl">{item.date}</p>
                <p className="mt-3 text-sm text-ink/50">{item.location}</p>
              </div>

              <div className="sm:col-span-7 sm:col-start-6">
                <h3 className="font-serif text-4xl sm:text-5xl">{item.company}</h3>
                <p className="mt-3 text-lg text-ink/55">{item.role}</p>
                <p className="mt-8 max-w-2xl text-lg text-ink/70">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
