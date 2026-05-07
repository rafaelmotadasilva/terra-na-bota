import styles from './Hero.module.css'
import { useLeadsCount } from '@/lib/useLeadsCount'

export function Hero() {
  const count = useLeadsCount()

  return (
    <section className={styles.hero} id="topo">
      {/* Dois painéis de fundo */}
      <div className={styles.panels} aria-hidden="true">
        <div className={styles.panelLeft} />
        <div className={styles.panelRight} />
      </div>

      {/* Linha divisória central */}
      <div className={styles.divider} aria-hidden="true" />

      {/* Gradiente de legibilidade */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Conteúdo sobre o painel esquerdo */}
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

        {count !== null && count > 0 && (
          <p className={styles.proof}>
            <span className={styles.proofDot} />
            <span><span className={styles.proofNum}>{count}</span> pessoas já na lista</span>
          </p>
        )}
      </div>
    </section>
  )
}
