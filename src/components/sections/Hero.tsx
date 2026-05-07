import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="topo">
      <div className={styles.heroBg} />

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
