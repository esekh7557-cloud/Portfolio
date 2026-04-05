export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 px-6 py-10 text-white sm:px-10">
      <main className="mx-auto flex w-full max-w-4xl flex-1 items-center">
        <section className="w-full rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-2xl shadow-black/30 backdrop-blur sm:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300">
            Contact Details
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Reach DigitQuo with the updated contact information below.
          </h1>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                Contact Number
              </p>
              <a
                href="tel:7385693147"
                className="mt-3 block text-xl font-semibold text-white transition hover:text-emerald-300"
              >
                7385693147
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                Email
              </p>
              <a
                href="mailto:digitquo@gmail.com"
                className="mt-3 block break-all text-xl font-semibold text-white transition hover:text-emerald-300"
              >
                digitquo@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-white/10 bg-black/20 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Address
            </p>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-zinc-100">
              Ramnagar, Betim, Bardez, North Goa, India
            </p>
          </div>
        </section>
      </main>

      <footer className="pt-8 text-center text-sm text-zinc-400">
        Made by Ebrahim Sekh from DigitQuo
      </footer>
    </div>
  );
}
