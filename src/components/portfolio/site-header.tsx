export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="font-serif text-xl" aria-label="Nathaniel Davis, home">
          ND<span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary navigation" className="flex items-center gap-5 text-sm sm:gap-8">
          <a className="transition-colors hover:text-accent" href="#experience">
            Experience
          </a>
          <a className="transition-colors hover:text-accent" href="#projects">
            Projects
          </a>
        </nav>

        <span className="hidden text-sm sm:block">nate@qstreet.org</span>
      </div>
    </header>
  )
}
