import Link from 'next/link';

export const dynamic = 'force-static';

export default function Datenschutz() {
  return <main className="legal-page"><Link href="/" className="legal-back">← Zurück zu Mühlis</Link><p className="kicker">Rechtliches</p><h1>Datenschutz</h1><p className="legal-notice">Diese Seite ist ein Platzhalter und wird vor der öffentlichen Freigabe durch die vollständige Datenschutzerklärung ersetzt.</p><section><h2>Verantwortliche Stelle</h2><p>Die vollständigen Kontaktdaten werden ergänzt.</p></section><section><h2>Externe Links</h2><p>Diese Website verlinkt auf Instagram und Google Maps. Erst beim Öffnen dieser Links gelten die Datenschutzbestimmungen der jeweiligen Anbieter.</p></section></main>;
}
