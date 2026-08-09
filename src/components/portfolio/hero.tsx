import ChromaticWaves from "~/components/chromatic-waves"

const waveColors = ["#171713", "#812e72", "#f4f1ea", "#812e72", "#171713"]

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full overflow-hidden sm:w-4/5 lg:w-3/5">
        <div className="wave-mask absolute inset-0">
          <ChromaticWaves
            bgColor="transparent"
            colors={waveColors}
            frequency={2.8}
            speed={2.2}
            cellSize={15}
            gamma={4.5}
            paletteBias={-1.8}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl">Staying curious</h1>
          <p className="mt-8 max-w-lg text-base text-ink/65 sm:text-lg">
            Currently studying computer science and building whatever seems worth making.
          </p>
        </div>
      </div>
    </section>
  )
}
