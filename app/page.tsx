'use client'

import { useEffect, useState } from 'react'

type Lang = 'de' | 'en'

const films = [
  { id: '-ZOak8djgV0', title: 'Live Sessions', color: '#F2A93B' },
  { id: 'Ef2hWobQi88', title: 'Music Films', color: '#E2564D' },
  { id: 'SKURpqoLL2Y', title: 'Artist Stories', color: '#3FBBA4' },
  { id: 'O84e_areg_g', title: 'BES · AI Band Visuals', color: '#9B7BFF' },
]

const AI_FILM = 'O84e_areg_g'

const copy = {
  de: {
    eyebrow: 'Media Productions · Berlin', navWork: 'Arbeiten', navOffer: 'Angebot', navContact: 'Kontakt',
    hero: 'Bilder, die nach euch klingen.',
    intro: 'Live-Musik, Musikvideos und visuelle Welten für Artists mit etwas zu sagen.',
    reel: 'Arbeiten ansehen', inquire: 'Projekt anfragen', scroll: 'Scrollen, um Arbeiten zu sehen',
    selected: 'Ausgewählte Arbeiten', selectedIntro: 'Vier visuelle Richtungen — von direkter Live-Energie bis zu künstlich erzeugten Welten.',
    profileTitle: 'Eine Person.\nDer ganze Film.',
    profileText: 'Scheibe bin ich: Konzept, Kamera, Ton, Schnitt und Finish aus einer Hand. Das hält die Wege kurz, die Kosten fair und die Idee im Zentrum.',
    syncTitle: 'Live, direkt, synchron.',
    syncText: 'Wir können gemeinsam im Raum aufnehmen — mit sauber synchronisiertem Mehrspur-Ton und Bild. Kein nachträgliches Zusammenpuzzeln, sondern ein Film, der wirklich klingt wie der Moment.',
    creativeTitle: 'Kontrolliert unberechenbar.',
    creativeText: 'Ich arbeite auch mit ungewöhnlichen digitalen Werkzeugen. Die etwas verrückten Takes sind kein Fehler: Sie geben euren Videos eine eigene Handschrift und halten den Blick dort, wo er bleiben soll.',
    services: 'Was ich mache',
    serviceText: 'Video, Ton, Fotos und Web — alles aus einer Hand. Der eigentliche Unterschied ist die Planung: ein Ablauf, in dem jedes Stück zum nächsten passt, statt fünf Dienstleister, die nicht miteinander reden.',
    items: [
      { n: '01', title: 'Live Sessions', text: 'Mehrspur-Ton, mehrere Kameras, ein fertiger Film.', was: '390 €', price: '300 €' },
      { n: '02', title: 'Content-Abo', text: 'Jeden Monat ein Drehtag: Reels, Fotos und EPK-Clips, die eure Veröffentlichung tragen.', was: '590 €', price: '500 € / Monat' },
      { n: '03', title: 'Musikvideos', text: 'Konzept, Dreh und Postproduktion — real, generiert oder dazwischen.', was: '1.500 €', price: '1.410 €' },
      { n: '04', title: 'Fotos & Web', text: 'Bandfotos, Pressebilder und eine Website, die dieselbe Sprache sprechen wie eure Videos.', was: '', price: 'auf Anfrage' },
      { n: '05', title: 'Studio & Produktion', text: 'Aufnahme, Mix und Produktion — Spur für Spur, stundenweise oder als ganzes Projekt.', was: '', price: 'stundenweise' },
    ],
    offer: 'Startangebot · 90 € Rabatt auf alle Pakete in den ersten drei Monaten.',
    priceNote: 'Alle Preise netto. Vor jeder Buchung bekommt ihr ein Festpreisangebot.',
    frameAlt: 'Standbild aus dem Film',
    notes: {
      '-ZOak8djgV0': 'So klingt ihr wirklich — an einem Nachmittag gefilmt.',
      'Ef2hWobQi88': 'Ein Song, ein Film. Eure Geschichte in Bildern.',
      'SKURpqoLL2Y': 'Zeigt, wer hinter der Musik steht.',
      'O84e_areg_g': 'Wenn die Kamera nicht reicht: gebaute Welten.',
    } as Record<string, string>,
    market: 'Zum Vergleich: freie Editoren in Berlin liegen bei 490–600 € pro Drehtag, ein einfaches Musikvideo beginnt bei etwa 1.000 €.',
    cta: 'Lasst uns etwas machen, das bleibt.', ctaText: 'Erzählt mir von eurem nächsten Release, eurer Tour oder der Idee, die noch keine Form hat.', write: 'Schreibt mir', footer: 'Scheibe Media Production · Berlin · DE / EN / ES', watch: 'Film auf YouTube öffnen', upcoming: 'Premiere · 01.09.',
  },
  en: {
    eyebrow: 'Media Productions · Berlin', navWork: 'Work', navOffer: 'Services', navContact: 'Contact',
    hero: 'Pictures that sound like you.', intro: 'Live music, music videos and visual worlds for artists with something to say.', reel: 'Explore the work', inquire: 'Start a project', scroll: 'Scroll to explore the work',
    selected: 'Selected work', selectedIntro: 'Four visual directions — from direct live energy to artificially created worlds.',
    profileTitle: 'One person.\nThe whole film.', profileText: 'Scheibe is me: concept, camera, sound, edit and finish from one hand. Shorter paths, fairer costs, and the idea stays at the centre.', syncTitle: 'Live, direct, in sync.', syncText: 'We can record together in the room — with clean multitrack sound and picture. No stitching the moment back together later: a film that really sounds like the moment.', creativeTitle: 'Controlled unpredictability.', creativeText: 'I also work with unusual digital tools. The slightly wild shots are not a mistake: they give your videos a distinct signature and keep the viewer looking.',
    services: 'What I do',
    serviceText: 'Video, sound, photos and web — all from one hand. The real difference is the planning: one process where each piece fits the next, instead of five suppliers who never talk to each other.',
    items: [
      { n: '01', title: 'Live Sessions', text: 'Multitrack sound, multiple cameras, one finished film.', was: '€390', price: '€300' },
      { n: '02', title: 'Content Subscription', text: 'One shoot day every month: reels, photos and EPK clips to carry your release.', was: '€590', price: '€500 / month' },
      { n: '03', title: 'Music Videos', text: 'Concept, shoot and post — real, generated or somewhere in between.', was: '€1,500', price: '€1,410' },
      { n: '04', title: 'Photos & Web', text: 'Band photos, press images and a website that speak the same language as your videos.', was: '', price: 'on request' },
      { n: '05', title: 'Studio & Production', text: 'Recording, mixing and production — track by track, by the hour or as a whole project.', was: '', price: 'by the hour' },
    ],
    offer: 'Launch offer · €90 off every package for the first three months.',
    priceNote: 'All prices net. You get a fixed quote before anything is booked.',
    frameAlt: 'Still from the film',
    notes: {
      '-ZOak8djgV0': 'This is how you actually sound — filmed in one afternoon.',
      'Ef2hWobQi88': 'One song, one film. Your story in pictures.',
      'SKURpqoLL2Y': 'Show who stands behind the music.',
      'O84e_areg_g': 'When a camera is not enough: built worlds.',
    } as Record<string, string>,
    market: 'For comparison: freelance editors in Berlin charge €490–600 per shoot day, and a simple music video starts around €1,000.',
    cta: 'Let’s make something that lasts.', ctaText: 'Tell me about your next release, your tour, or the idea that has not found its shape yet.', write: 'Write to me', footer: 'Scheibe Media Production · Berlin · DE / EN / ES', watch: 'Open film on YouTube', upcoming: 'Premiere · Sep 01',
  },
}

const logoLight = '/scheibe-white.png'   // sobre fondo oscuro
const logoDark  = '/scheibe-black.png'   // sobre fondo claro

const EMAIL = 'scheibeerdemedia@protonmail.com'
const PHONE = '+49 1575 7148947'
const PHONE_HREF = '+4915757148947'

function BackgroundReel() {
  return <div className="reel-bg" aria-hidden="true">
    <video className="reel-video" autoPlay muted loop playsInline preload="metadata" poster={logoLight}>
      <source src="/rell-web.mp4" type="video/mp4" />
    </video>
    <div className="reel-shade" />
  </div>
}

export default function Page() {
  const [lang, setLang] = useState<Lang>('de'); const t = copy[lang]
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  return <main className="site-shell">
    <section className="hero" id="top"><BackgroundReel /><nav className="nav" aria-label="Main navigation"><a className="brand" href="#top"><img className="brand-wordmark" src={logoLight} alt="Scheibe Media Production" /></a><div className="nav-links"><a href="#work">{t.navWork}</a><a href="#services">{t.navOffer}</a><a href="#contact">{t.navContact}</a><div className="language"><button aria-pressed={lang === 'de'} onClick={() => setLang('de')}>DE</button><span>/</span><button aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button></div></div></nav><div className="hero-content"><p className="kicker">{t.eyebrow}</p><h1>{t.hero}</h1><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button button-light" href="#work">{t.reel}<span>↘</span></a><a className="text-link" href="#contact">{t.inquire} <span>↗</span></a></div></div><p className="scroll-note">↓ &nbsp; {t.scroll}</p></section>
    <section className="work-section" id="work"><div className="section-heading"><div><p className="kicker">01 / {t.selected}</p><h2>{t.selected}</h2></div><p>{t.selectedIntro}</p></div><div className="film-grid">{films.map((film, index) => <a className={`film-card card-${index + 1}`} style={{ '--c': film.color } as React.CSSProperties} href={`https://youtu.be/${film.id}`} target="_blank" rel="noreferrer" key={film.id}>{film.id === AI_FILM ? <video className="film-preview" autoPlay muted loop playsInline preload="auto" aria-label={`${film.title} — Scheibe`}><source src="/webshow.mp4" type="video/mp4" /></video> : <img className="film-preview" src={`https://i.ytimg.com/vi/${film.id}/maxresdefault.jpg`} alt={`${film.title} — ${t.frameAlt}`} loading="lazy" />}<span className="film-overlay"><small>0{index + 1}</small><strong>{film.title}</strong><em>{film.id === AI_FILM ? t.upcoming : t.watch} ↗</em></span><span className="film-note">{t.notes[film.id]}</span></a>)}</div></section>
    <section className="profile-section"><img className="profile-logo" src={logoLight} alt="Scheibe" /><div className="profile-intro"><p className="kicker">02 / {t.profileTitle.split('\n')[0]}</p><h2>{t.profileTitle}</h2><p>{t.profileText}</p></div><div className="profile-details"><article><h3>{t.syncTitle}</h3><p>{t.syncText}</p></article><article><h3>{t.creativeTitle}</h3><p>{t.creativeText}</p></article></div></section>
    <section className="services-section" id="services"><div className="section-heading"><div><p className="kicker">03 / {t.services}</p><h2>{t.services}</h2></div><p>{t.serviceText}</p></div><p className="offer-banner">{t.offer}</p><div className="service-list">{t.items.map((item) => <article key={item.n}><span className="service-number">{item.n}</span><h3>{item.title}</h3><p>{item.text}</p><span className="service-price">{item.was && <s>{item.was}</s>}{item.price}</span><span className="service-arrow">↗</span></article>)}</div><p className="market-note">{t.market}</p><p className="price-note">{t.priceNote}</p></section>
    <section className="contact-section" id="contact"><div className="contact-mark"><img src={logoDark} alt="Scheibe" /></div><p className="kicker">04 / {t.navContact}</p><h2>{t.cta}</h2><p>{t.ctaText}</p><a className="button button-dark" href={`mailto:${EMAIL}`}>{t.write} <span>↗</span></a><p className="contact-name">Chema Gracia</p><p className="contact-email"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p><p className="contact-email"><a href={`tel:${PHONE_HREF}`}>{PHONE}</a></p></section><footer><span>{t.footer}</span><a href="#top">↑ Back to top</a></footer>
  </main>
}
