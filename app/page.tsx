import { ArrowUpRight, Camera, Clock3, MapPin, Phone } from 'lucide-react';

export const dynamic = 'force-static';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const localPath = (path: string) => `${basePath}${path}`;
const instagram = 'https://www.instagram.com/cafemuehlis/?hl=de';
const directions = 'https://www.google.com/maps/place/Hauptstra%C3%9Fe+24,+32609+H%C3%BCllhorst';
const googleReviews = 'https://www.google.com/search?q=M%C3%BChlis+H%C3%BCllhorst+Rezensionen';

const gallery = [
  { src: localPath('/images/matcha-cookie.jpg'), alt: 'Iced Matcha Latte und Cookie', className: 'gallery-matcha' },
  { src: localPath('/images/counter.jpg'), alt: 'Der helle Tresen von Mühlis', className: 'gallery-counter' },
  { src: localPath('/images/strawberry-pastry.jpg'), alt: 'Süßes Gebäck mit Erdbeeren', className: 'gallery-sweet' },
];

const reviews = [
  { name: 'Selina Ingram', quote: '„Die Zimtschnecken und Getränke auch top.“' },
  { name: 'Jannes', quote: '„Kleines, neu eröffnetes Café in Hüllhorst mit richtig viel Charme.“' },
  { name: 'Kerstin Kerkhoff', quote: '„Die Atmosphäre ist super gemütlich und modern.“' },
];

function Logo({ inverted = false }: { inverted?: boolean }) {
  return <img src={localPath('/images/muehlis-logo.png')} alt="Mühlis" className={`logo ${inverted ? 'logo-inverted' : ''}`} />;
}

export default function Home() {
  return (
    <main id="content">
      <header className="site-header">
        <a href="#top" aria-label="Mühlis Startseite"><Logo /></a>
        <nav aria-label="Hauptnavigation" className="site-nav">
          <a href="#cafe">Café</a>
          <a href="#stimmen">Stimmen</a>
          <a href="#besuch">Besuch</a>
        </nav>
        <a href={instagram} target="_blank" rel="noreferrer" className="nav-link">Instagram <ArrowUpRight size={15} /></a>
      </header>

      <section id="top" className="hero-editorial">
        <div className="hero-copy">
          <p className="kicker">Hüllhorst · Hauptstraße 24</p>
          <h1>Specialty Coffee<br /><em>&amp; Matcha.</em></h1>
          <p className="hero-intro">Ein Ort für guten Kaffee, Matcha und kleine Pausen. Komm vorbei, wie du bist.</p>
          <div className="hero-actions">
            <a href={directions} target="_blank" rel="noreferrer" className="primary-action">Route öffnen <MapPin size={17} /></a>
            <a href="#besuch" className="text-link">Öffnungszeiten <ArrowUpRight size={17} /></a>
          </div>
        </div>
        <figure className="hero-image"><img src={localPath('/images/exterior.jpg')} alt="Außenansicht des Café Mühlis in Hüllhorst" /></figure>
      </section>

      <section id="cafe" className="intro-section">
        <div className="section-mark">01</div>
        <div>
          <p className="kicker">Großstadt-Vibes im Dorf</p>
          <h2>Gemacht für<br />deine <em>Auszeit.</em></h2>
        </div>
        <p className="intro-text">Mühlis verbindet hochwertige Kaffeespezialitäten, cremige Matcha-Variationen und frische süße Teilchen mit einem klaren, persönlichen Raumgefühl.</p>
      </section>

      <section className="gallery-section" aria-label="Einblicke bei Mühlis">
        <div className="gallery-grid" role="region" aria-label="Mühlis Galerie" tabIndex={0}>
          {gallery.map((image) => <figure key={image.src} className={image.className}><img src={image.src} alt={image.alt} /></figure>)}
        </div>
        <p className="gallery-caption">Coffee, Matcha &amp; something sweet.</p>
      </section>

      <section className="story-section">
        <div className="story-photo"><img src={localPath('/images/founder.jpg')} alt="Nils Mühlenweg im Café Mühlis" /></div>
        <div className="story-copy">
          <p className="kicker">Über Mühlis</p>
          <h2>Ein Café, das<br /><em>bleiben lässt.</em></h2>
          <p>Ein kurzer Espresso, ein Matcha mit Freund:innen oder ein süßer Moment zwischendurch: Mühlis ist ein unkomplizierter Treffpunkt mitten in Hüllhorst.</p>
          <p>Mit Liebe zum Detail, guten Produkten und Platz für alle, die kurz ankommen möchten.</p>
          <a href={instagram} target="_blank" rel="noreferrer" className="text-link">Mehr auf Instagram <Camera size={17} /></a>
        </div>
      </section>

      <section id="stimmen" className="reviews-section">
        <div className="reviews-heading"><p className="kicker">Stimmen aus Hüllhorst</p><h2>What they<br /><em>say.</em></h2></div>
        <div className="rating-card">
          <p className="rating-number">4,9<span>/5</span></p>
          <p>Google · 61 Rezensionen</p>
          <p className="rating-note">Stand: September 2026</p>
          <a href={googleReviews} target="_blank" rel="noreferrer" className="text-link">Alle Rezensionen <ArrowUpRight size={17} /></a>
        </div>
        <div className="review-list">
          {reviews.map((review) => <blockquote key={review.name}><p>{review.quote}</p><footer>— {review.name}, Google</footer></blockquote>)}
        </div>
      </section>

      <section id="besuch" className="visit-section">
        <div className="visit-heading"><p className="kicker">Komm vorbei</p><h2>See you at<br /><em>Mühlis.</em></h2><p>Für tagesaktuelle Specials und kurzfristige Änderungen schau gern bei Instagram vorbei.</p></div>
        <div className="visit-details">
          <a className="visit-card" href={directions} target="_blank" rel="noreferrer"><MapPin size={21} /><div><p className="detail-label">Adresse</p><p>Hauptstraße 24<br />32609 Hüllhorst</p></div><ArrowUpRight size={19} /></a>
          <a className="visit-card" href="tel:+4915568265353"><Phone size={21} /><div><p className="detail-label">Telefon</p><p>01556 8265353</p></div><ArrowUpRight size={19} /></a>
          <div className="hours-card"><Clock3 size={21} /><div><p className="detail-label">Öffnungszeiten</p><dl><div><dt>Mo–Di</dt><dd>geschlossen</dd></div><div><dt>Mi–Fr</dt><dd>11–18 Uhr</dd></div><div><dt>Sa–So</dt><dd>12–17 Uhr</dd></div></dl></div></div>
        </div>
      </section>

      <footer className="site-footer">
        <Logo inverted />
        <p>Specialty Coffee &amp; Matcha<br />Hauptstraße 24 · 32609 Hüllhorst</p>
        <div><a href={instagram} target="_blank" rel="noreferrer">Instagram</a><a href={localPath('/impressum')}>Impressum</a><a href={localPath('/datenschutz')}>Datenschutz</a></div>
      </footer>

      <nav className="mobile-dock" aria-label="Schnellzugriff">
        <a href={directions} target="_blank" rel="noreferrer"><MapPin size={18} aria-hidden="true" /><span>Route</span></a>
        <a href="tel:+4915568265353"><Phone size={18} aria-hidden="true" /><span>Anrufen</span></a>
        <a href={instagram} target="_blank" rel="noreferrer"><Camera size={18} aria-hidden="true" /><span>Instagram</span></a>
      </nav>
    </main>
  );
}
