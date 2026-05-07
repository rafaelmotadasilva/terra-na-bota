import styles from './Manifesto.module.css'

export function Manifesto() {
  return (
    <section className={styles.manifesto} id="manifesto">
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
            Tem marca que pede pra você escolher. Campo ou cidade. Interior ou asfalto.
            A Terra na Bota foi feita pra quem{' '}
            <em>não reconhece essa divisão.</em>
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
