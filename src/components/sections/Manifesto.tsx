import styles from './Manifesto.module.css'

export function Manifesto() {
  return (
    <section className={styles.manifesto}>
      <div className={styles.inner}>
        <div className={styles.sidebar}>
          <p className={`${styles.label} reveal`}>★ Terra ★ Cidade</p>
        </div>
        <div className={styles.text}>
          <h2 className="reveal reveal-delay-1">
            Dois mundos.<br />Um estilo.
          </h2>
          <div className={`${styles.divider} reveal reveal-delay-2`} />
          <p className="reveal reveal-delay-2">
            A Terra na Bota nasce do conflito que a maioria das marcas ignora.
            Campo e cidade não são opostos — são{' '}
            <em>dois lados do mesmo homem.</em>
          </p>
          <p className="reveal reveal-delay-3">
            Poeira e concreto. Couro e metal. Raiz e atitude.<br />
            Para quem não se encaixa em um lugar só.
          </p>
        </div>
      </div>
    </section>
  )
}
