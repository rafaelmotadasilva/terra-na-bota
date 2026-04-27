import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />

      {/* Nav */}
      <nav className={styles.nav}>
        <a href="/" className={styles.navLogo} aria-label="Terra na Bota — página inicial">
          <img
            src="/assets/logo/logo-white.svg"
            alt="Terra na Bota"
            height={26}
            onError={(e) => {
              const t = e.currentTarget
              t.style.display = 'none'
              const fallback = t.nextElementSibling as HTMLElement
              if (fallback) fallback.style.display = 'block'
            }}
          />
          <span className={styles.navLogoText} style={{ display: 'none' }}>
            TERRA ★ NA BOTA
          </span>
        </a>
        <a href="#lista" className={styles.navCta}>Reservar meu lugar</a>
      </nav>

      {/* Conteúdo */}
      <div className={styles.content}>
        <p className={styles.kicker}>
          <span className={styles.kickerLine} />
          Pré-lançamento
        </p>

        <h1 className={styles.h1}>
          Estiloso<br />na fazenda.
        </h1>
        <p className={styles.h1Accent}>
          Selvagem<br />na cidade.
        </p>

        <p className={styles.tagline}>
          <strong>O chão lembra quem pisa forte.</strong>
          <br />
          Uma bota para quem não escolhe entre a raiz e a rua.
        </p>

        <div className={styles.actions}>
          <a href="#lista" className={styles.btnPrimary}>
            Reservar meu lugar
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator 
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>Rolar</span>
        <span className={styles.scrollLine} />
      </div>
      */}
    </section>
  )
}
