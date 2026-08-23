'use client'

import { useEffect, useState } from 'react'

type Lang = 'de' | 'en'

const films = [
  { id: '-ZOak8djgV0', title: 'Live Sessions', frame: '1' },
  { id: 'Ef2hWobQi88', title: 'Music Films', frame: '2' },
  { id: 'SKURpqoLL2Y', title: 'Artist Stories', frame: '1' },
  { id: 'IaaOhY9ivI0', title: 'Visual Worlds', frame: '2' },
  { id: 'O84e_areg_g', title: 'BES · AI Band Visuals', frame: '1' },
]

const copy = {
  de: {
    eyebrow: 'Media Productions · Berlin', navWork: 'Arbeiten', navOffer: 'Angebot', navContact: 'Kontakt',
    hero: 'Bilder, die nach euch klingen.',
    intro: 'Live-Musik, Musikvideos und visuelle Welten für Artists mit etwas zu sagen.',
    reel: 'Arbeiten ansehen', inquire: 'Projekt anfragen', scroll: 'Scrollen, um Arbeiten zu sehen',
    selected: 'Ausgewählte Arbeiten', selectedIntro: 'Fünf visuelle Richtungen — von direkter Live-Energie bis zu künstlich erzeugten Welten.',
    profileTitle: 'Eine Person.\nDer ganze Film.',
    profileText: 'Scheibe Erde bin ich: Konzept, Kamera, Ton, Schnitt und Finish aus einer Hand. Das hält die Wege kurz, die Kosten fair und die Idee im Zentrum.',
    syncTitle: 'Live, direkt, synchron.',
    syncText: 'Wir können gemeinsam im Raum aufnehmen — mit sauber synchronisiertem Mehrspur-Ton und Bild. Kein nachträgliches Zusammenpuzzeln, sondern ein Film, der wirklich klingt wie der Moment.',
    creativeTitle: 'Kontrolliert unberechenbar.',
    creativeText: 'Ich arbeite auch mit ungewöhnlichen digitalen Werkzeugen. Die etwas verrückten Takes sind kein Fehler: Sie geben euren Videos eine eigene Handschrift und halten den Blick dort, wo er bleiben soll.',
    services: 'Was ich mache', serviceText: 'Ein kleines Studio für große Wirkung — persönlich, schnell und ohne unnötige Abstimmungsschleifen.',
    items: [['01', 'Live Sessions', 'Mehrspur-Ton, mehrere Kameras, ein fertiger Film.', 'ab 390 €'], ['02', 'Content-Abo', 'Jeden Monat ein Drehtag: Reels, Fotos und EPK-Clips, die eure Veröffentlichung tragen.', 'ab 590 € / Monat'], ['03', 'Musikvideos', 'Konzept, Dreh und Postproduktion — real, generiert oder dazwischen.', 'ab 1.500 €']],
    priceNote: 'Alle Preise netto. Vor jeder Buchung bekommt ihr ein Festpreisangebot.',
    frameAlt: 'Standbild aus dem Film',
    cta: 'Lasst uns etwas machen, das bleibt.', ctaText: 'Erzählt mir von eurem nächsten Release, eurer Tour oder der Idee, die noch keine Form hat.', write: 'Schreibt mir', footer: 'Scheibe Erde Media Productions · Berlin · DE / EN / ES', watch: 'Film auf YouTube öffnen', upcoming: 'Premiere · 01.09.',
  },
  en: {
    eyebrow: 'Media Productions · Berlin', navWork: 'Work', navOffer: 'Services', navContact: 'Contact',
    hero: 'Pictures that sound like you.', intro: 'Live music, music videos and visual worlds for artists with something to say.', reel: 'Explore the work', inquire: 'Start a project', scroll: 'Scroll to explore the work',
    selected: 'Selected work', selectedIntro: 'Five visual directions — from direct live energy to artificially created worlds.',
    profileTitle: 'One person.\nThe whole film.', profileText: 'Scheibe Erde is me: concept, camera, sound, edit and finish from one hand. Shorter paths, fairer costs, and the idea stays at the centre.', syncTitle: 'Live, direct, in sync.', syncText: 'We can record together in the room — with clean multitrack sound and picture. No stitching the moment back together later: a film that really sounds like the moment.', creativeTitle: 'Controlled unpredictability.', creativeText: 'I also work with unusual digital tools. The slightly wild shots are not a mistake: they give your videos a distinct signature and keep the viewer looking.',
    services: 'What I do', serviceText: 'A small studio for a strong impact — personal, fast and without unnecessary approval loops.', items: [['01', 'Live Sessions', 'Multitrack sound, multiple cameras, one finished film.', 'from €390'], ['02', 'Content Subscription', 'One shoot day every month: reels, photos and EPK clips to carry your release.', 'from €590 / month'], ['03', 'Music Videos', 'Concept, shoot and post — real, generated or somewhere in between.', 'from €1,500']],
    priceNote: 'All prices net. You get a fixed quote before anything is booked.',
    frameAlt: 'Still from the film',
    cta: 'Let’s make something that lasts.', ctaText: 'Tell me about your next release, your tour, or the idea that has not found its shape yet.', write: 'Write to me', footer: 'Scheibe Erde Media Productions · Berlin · DE / EN / ES', watch: 'Open film on YouTube', upcoming: 'Premiere · Sep 01',
  },
}

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scheibe-erde-logo-8PjWFO5GUlgr0ZWUNV4je0eTz0GRla.png'

function BackgroundReel() {
  return <div className="reel-bg" aria-hidden="true">
    <video className="reel-video" autoPlay muted loop playsInline preload="metadata" poster={logo}>
      <source src="/rell-web.mp4" type="video/mp4" />
    </video>
    <div className="reel-shade" />
  </div>
}

export default function Page() {
  const [lang, setLang] = useState<Lang>('de'); const t = copy[lang]
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  return <main className="site-shell">
    <section className="hero" id="top"><BackgroundReel /><nav className="nav" aria-label="Main navigation"><a className="brand" href="#top"><img className="brand-wordmark" src={logo} alt="Scheibe Erde Media Productions" /></a><div className="nav-links"><a href="#work">{t.navWork}</a><a href="#services">{t.navOffer}</a><a href="#contact">{t.navContact}</a><div className="language"><button aria-pressed={lang === 'de'} onClick={() => setLang('de')}>DE</button><span>/</span><button aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button></div></div></nav><div className="hero-content"><p className="kicker">{t.eyebrow}</p><h1>{t.hero}</h1><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button button-light" href="#work">{t.reel}<span>↘</span></a><a className="text-link" href="#contact">{t.inquire} <span>↗</span></a></div></div><p className="scroll-note">↓ &nbsp; {t.scroll}</p></section>
    <section className="work-section" id="work"><div className="section-heading"><div><p className="kicker">01 / {t.selected}</p><h2>{t.selected}</h2></div><p>{t.selectedIntro}</p></div><div className="film-grid">{films.map((film, index) => <a className={`film-card card-${index + 1}`} href={`https://youtu.be/${film.id}`} target="_blank" rel="noreferrer" key={film.id}>{film.id === 'O84e_areg_g' ? <video className="film-preview" autoPlay muted loop playsInline preload="auto" aria-label={`${film.title} — Scheibe Erde`}><source src="/webshow.mp4" type="video/mp4" /></video> : <img className="film-preview" src={`https://i.ytimg.com/vi/${film.id}/maxresdefault.jpg`} alt={`${film.title} — ${t.frameAlt}`} loading="lazy" />}<span className="film-overlay"><small>0{index + 1}</small><strong>{film.title}</strong><em>{index === 4 ? t.upcoming : t.watch} ↗</em></span></a>)}</div></section>
    <section className="profile-section"><img className="profile-logo" src={logo} alt="Scheibe Erde" /><div className="profile-intro"><p className="kicker">02 / {t.profileTitle.split('\n')[0]}</p><h2>{t.profileTitle}</h2><p>{t.profileText}</p></div><div className="profile-details"><article><h3>{t.syncTitle}</h3><p>{t.syncText}</p></article><article><h3>{t.creativeTitle}</h3><p>{t.creativeText}</p></article></div></section>
    <section className="services-section" id="services"><div className="section-heading"><div><p className="kicker">03 / {t.services}</p><h2>{t.services}</h2></div><p>{t.serviceText}</p></div><div className="service-list">{t.items.map((item) => <article key={item[0]}><span className="service-number">{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p><span className="service-price">{item[3]}</span><span className="service-arrow">↗</span></article>)}</div><p className="price-note">{t.priceNote}</p></section>
    <section className="contact-section" id="contact"><div className="contact-mark"><img src={logo} alt="Scheibe Erde" /></div><p className="kicker">04 / {t.navContact}</p><h2>{t.cta}</h2><p>{t.ctaText}</p><a className="button button-dark" href="mailto:scheibeerdemedia@protonmail.com">{t.write} <span>↗</span></a><p className="contact-email">scheibeerdemedia@protonmail.com</p></section><footer><span>{t.footer}</span><a href="#top">↑ Back to top</a></footer>
  </main>
}
