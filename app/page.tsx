export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="VirtualByte Studios"
              className="h-9 w-9"
            />
            <span className="text-lg font-semibold tracking-tight">
              VirtualByte Studios
            </span>
          </div>
          <a
            href="mailto:calum@virtualbyte.co.uk"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Contact Me
          </a>
        </div>
      </header>

      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/bg.png"
            alt="Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-28 text-center sm:py-36">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Contract Programming and UI for Games
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-base text-zinc-200 sm:text-lg">
            VirtualByte partners with studios and creators to ship robust
            gameplay systems, tools, and polished user interfaces.
          </p>
          <div className="mt-2 flex items-center justify-center gap-3">
            <a
              href="mailto:calum@virtualbyte.co.uk"
              className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card/50 p-6">
            <h3 className="mb-2 text-lg font-semibold">Gameplay & Systems</h3>
            <p className="text-sm text-muted-foreground">
              Networked gameplay, data-driven systems, tools, and
              performance-minded scripting.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card/50 p-6">
            <h3 className="mb-2 text-lg font-semibold">UI/UX Implementation</h3>
            <p className="text-sm text-muted-foreground">
              Responsive, accessible interfaces with smooth interactions,
              animation, and polish.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card/50 p-6">
            <h3 className="mb-2 text-lg font-semibold">Consulting & Support</h3>
            <p className="text-sm text-muted-foreground">
              Short or long-term contracts, I am able to work around your budget
              and schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="rounded-xl border border-blue-400/30 bg-blue-500/10 p-6 text-center">
          <p className="text-sm font-medium text-blue-100 sm:text-base">
            Polished code and UI delivered across experiences reaching millions
            of players.
          </p>
        </div>
      </section>

      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/clfr.png"
            alt="CL Facility Roleplay"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-20 sm:grid-cols-2 sm:gap-10 sm:py-24">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-300/80">
              Current Work
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              CL Facility Roleplay
            </h2>
            <p className="mt-4 text-sm leading-6 text-zinc-200">
              Facility Roleplay® is based off the ConX Studio Lore “Centum
              Laboratories®”. Facility Roleplay is a roleplay game placing you
              as a member of the Corporate Facility within a biological research
              company named Centum Laboratories. The world faces the horrors of
              a deadly disease; it’s up to us to prevent further damage and save
              humanity.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <a
                href="https://www.roblox.com/games/6416498845/CL-Facility-Roleplay"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white shadow hover:bg-blue-500"
              >
                View on Roblox
              </a>
              <a
                href="https://www.conxstudios.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-blue-300/40 px-4 py-2 font-medium text-blue-200 hover:bg-blue-400/10"
              >
                Client: ConX Studios LLC
              </a>
            </div>
          </div>
          <div className="flex items-end justify-start gap-8 sm:justify-end">
            <div className="rounded-lg border border-white/15 bg-white/5 p-4 text-center">
              <div className="text-3xl font-semibold text-white">14.7M</div>
              <div className="text-xs uppercase tracking-wide text-zinc-300">
                Game plays
              </div>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/5 p-4 text-center">
              <div className="text-3xl font-semibold text-white">2M</div>
              <div className="text-xs uppercase tracking-wide text-zinc-300">
                Unique users
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-xl border border-border bg-card/50 p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-blue-300/80">
            Coming Soon
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            New Games In Development
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            More experiences are on the way to the platform. I&apos;m excited to
            be collaborating with ConX Studios again to deliver polished
            gameplay, systems and UI. Stay tuned.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <a
              href="https://www.conxstudios.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-md border border-blue-300/40 px-4 py-2 text-sm font-medium text-blue-300 hover:bg-blue-400/10"
            >
              ConX Studios
            </a>
            <a
              href="https://discord.gg/j4A5dkEhRF"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-500"
            >
              Join our Discord
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} VirtualByte Ltd</span>
          <a
            href="mailto:calum@virtualbyte.co.uk"
            className="text-blue-400 hover:text-blue-300"
          >
            calum@virtualbyte.co.uk
          </a>
        </div>
      </footer>
    </main>
  );
}
