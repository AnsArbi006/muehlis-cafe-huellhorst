import Link from 'next/link';

export const dynamic = 'force-static';

export default function Impressum() {
  return <main className="legal-page"><Link href="/" className="legal-back">← Zurück zu Mühlis</Link><p className="kicker">Rechtliches</p><h1>Impressum</h1><p className="legal-notice">Die vollständigen Angaben werden vor der öffentlichen Freigabe ergänzt.</p><section><h2>Angaben gemäß § 5 TMG</h2><p>Mühlis<br />Hauptstraße 24<br />32609 Hüllhorst</p><p>Vertretungsberechtigte Person und E-Mail-Adresse folgen.</p></section></main>;
}
