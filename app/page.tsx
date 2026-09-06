import { ArrowUpRight, Camera, MapPin, Phone } from 'lucide-react';

const instagram = 'https://www.instagram.com/cafemuehlis/?hl=de';
const directions =
  'https://www.google.com/maps/place/Hauptstra%C3%9Fe+24,+32609+H%C3%BCllhorst';

const highlights = [
  {
    eyebrow: '01 / Matcha',
    title: 'Green mood.',
    text: 'Eiskalt, cremig und genau der kleine Farbflash für deinen Tag.',
    image: '/images/matcha-cookie.jpg',
    position: 'object-[58%_center]',
  },
  {
    eyebrow: '02 / Sweets',
    title: 'Made for a treat.',
    text: 'Cookies, Zimtschnecken und süße Lieblingsmomente – frisch für deine Pause.',
    image: '/images/cookie-coffee.jpg',
    position: 'object-center',
  },
  {
    eyebrow: '03 / Coffee',
    title: 'Good coffee, good people.',
    text: 'Kaffeespezialitäten, ein offener Tresen und ein Platz, an dem man gern hängen bleibt.',
    image: '/images/counter.jpg',
    position: 'object-center',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero relative min-h-[770px] overflow-hidden bg-[#171817] text-white">
        <img
          src="/images/exterior.jpg"
          alt="Außenansicht von Mühlis in Hüllhorst"
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] opacity-80"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,15,14,.86)_0%,rgba(14,15,14,.62)_41%,rgba(14,15,14,.15)_100%)]" />
        <nav className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
          <a
            href="#top"
            aria-label="Mühlis Startseite"
            className="brand text-4xl leading-none sm:text-5xl"
          >
            Mühlis
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            <a className="transition hover:text-white" href="#specials">
              Unser Café
            </a>
            <a className="transition hover:text-white" href="#besuchen">
              Besuchen
            </a>
          </div>
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/35 px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-[#171817]"
          >
            Instagram <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
        <div
          id="top"
          className="relative mx-auto flex min-h-[665px] w-full max-w-[1440px] flex-col justify-end px-6 pb-14 sm:px-10 sm:pb-20 lg:px-14"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#bcda53]">
            Café &amp; Concept Store · Hüllhorst
          </p>
          <h1 className="max-w-4xl text-[clamp(3.5rem,9vw,9.5rem)] font-semibold leading-[.82] tracking-[-.075em]">
            Born in a<br />
            <span className="font-light italic tracking-[-.1em]">Library.</span>
          </h1>
          <div className="mt-9 flex max-w-md flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="text-base leading-relaxed text-white/80">
              Kaffee, Matcha und Süßes für deine kleine Auszeit – mitten in
              Hüllhorst.
            </p>
            <a
              href="#besuchen"
              className="inline-flex shrink-0 items-center gap-2 font-medium text-[#bcda53] transition hover:text-white"
            >
              Komm vorbei <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="specials"
        className="bg-[#eeefeb] px-6 py-20 sm:px-10 sm:py-28 lg:px-14"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Deine kleine Auszeit</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-[.95] tracking-[-.055em] text-[#171817] sm:text-6xl">
                Lieblingsdrinks treffen auf süße Versuchungen.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#60645e]">
              Mit viel Liebe ausgesucht und täglich anders – schau vorbei und
              entdecke deinen Favoriten.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="group relative min-h-[500px] overflow-hidden rounded-[1.65rem] bg-[#292c27] text-white"
              >
                <img
                  src={item.image}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover ${item.position} transition duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5" />
                <div className="relative flex h-full min-h-[500px] flex-col justify-between p-7">
                  <p className="text-xs font-semibold uppercase tracking-[.2em] text-white/85">
                    {item.eyebrow}
                  </p>
                  <div>
                    <h3 className="text-4xl font-semibold tracking-[-.055em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/80">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171817] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-14">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="relative">
            <img
              src="/images/founder.jpg"
              alt="Nils Mühlenweg im Café Mühlis"
              className="aspect-[1.45/1] w-full rounded-[1.65rem] object-cover object-top"
            />
            <p className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[.14em] text-[#171817]">
              Mühlis, Hüllhorst
            </p>
          </div>
          <div className="lg:pl-8">
            <p className="eyebrow text-[#bcda53]">Ganz persönlich</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[.95] tracking-[-.055em] sm:text-6xl">
              Ein Ort für gute Gespräche und noch bessere Pausen.
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/70">
              Mühlis ist der Treffpunkt für Kaffee-Liebhaber:innen, Matcha-Fans
              und alle, die zwischen Alltag und Wochenende kurz genießen wollen.
            </p>
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#bcda53] transition hover:text-white"
            >
              Mehr von Mühlis auf Instagram <Camera className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="grid bg-[#dce668] md:grid-cols-2">
        <img
          src="/images/cookies.jpg"
          alt="Frisch dekorierte Cookies bei Mühlis"
          className="h-[470px] w-full object-cover md:h-full"
        />
        <div className="flex min-h-[470px] flex-col justify-between p-8 text-[#171817] sm:p-12 lg:p-16">
          <p className="eyebrow">Fresh from the counter</p>
          <div>
            <h2 className="max-w-lg text-5xl font-semibold leading-[.9] tracking-[-.065em] sm:text-7xl">
              A little sweet never hurt.
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-[#404439]">
              Ob Cookie, Zimtschnecke oder saisonales Special: Bei uns gibt’s
              immer einen Grund, noch ein bisschen zu bleiben.
            </p>
          </div>
        </div>
      </section>

      <section
        id="besuchen"
        className="bg-[#f7f6f2] px-6 py-20 sm:px-10 sm:py-28 lg:px-14"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <p className="eyebrow">Besuch uns</p>
            <h2 className="mt-3 text-5xl font-semibold leading-[.9] tracking-[-.065em] text-[#171817] sm:text-7xl">
              See you at
              <br />
              <span className="italic font-light">Mühlis.</span>
            </h2>
            <p className="mt-7 max-w-sm text-base leading-relaxed text-[#60645e]">
              Du findest uns im Herzen von Hüllhorst. Aktuelle Öffnungszeiten
              und Specials teilen wir auf Instagram.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[1.65rem] border border-[#d7d8d1] bg-[#d7d8d1] sm:grid-cols-2">
            <a
              href={directions}
              target="_blank"
              rel="noreferrer"
              className="group bg-white p-7 transition hover:bg-[#dce668] sm:p-9"
            >
              <MapPin className="h-6 w-6 text-[#171817]" />
              <p className="mt-12 text-xs font-semibold uppercase tracking-[.16em] text-[#70736b]">
                Adresse
              </p>
              <p className="mt-2 text-xl font-semibold tracking-[-.03em] text-[#171817]">
                Hauptstraße 24
                <br />
                32609 Hüllhorst
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                Route starten <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="tel:+4915568265353"
              className="group bg-white p-7 transition hover:bg-[#dce668] sm:p-9"
            >
              <Phone className="h-6 w-6 text-[#171817]" />
              <p className="mt-12 text-xs font-semibold uppercase tracking-[.16em] text-[#70736b]">
                Telefon
              </p>
              <p className="mt-2 text-xl font-semibold tracking-[-.03em] text-[#171817]">
                01556
                <br />
                8265353
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                Jetzt anrufen <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#171817] px-6 py-8 text-white sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="brand text-4xl">Mühlis</span>
          <div className="flex gap-5 text-sm text-white/65">
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
            <a href="tel:+4915568265353" className="hover:text-white">
              Telefon
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
