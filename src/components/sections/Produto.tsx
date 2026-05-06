import Image from 'next/image'
import styles from './Produto.module.css'

const specs = [
  { label: 'Construção', valor: 'Goodyear welt' },
  { label: 'Cabedal', valor: 'Couro bovino integral' },
  { label: 'Solado', valor: 'Borracha natural antiderrapante' },
  { label: 'Forro', valor: 'Couro natural respirável' },
  { label: 'Cano', valor: '18 cm — elástico duplo lateral' },
]

export function Produto() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Esquerda — texto e specs */}
        <div className={styles.texto}>
          <p className={`${styles.label} reveal`}>
            <span className={styles.labelLine} />
            Produto
          </p>

          <h2 className={`${styles.titulo} reveal reveal-delay-1`}>
            Chelsea Boot.
          </h2>

          <p className={`${styles.desc} reveal reveal-delay-1`}>
            Couro bovino. Goodyear welt.
            <br />Presença que não precisa de apresentação.
          </p>

          <ul className={`${styles.specs} reveal reveal-delay-2`}>
            {specs.map((s) => (
              <li key={s.label} className={styles.spec}>
                <span className={styles.specLabel}>{s.label}</span>
                <span className={styles.specValor}>{s.valor}</span>
              </li>
            ))}
          </ul>

          <p className={`${styles.badge} reveal reveal-delay-3`}>
            <span className={styles.badgeDot} />
            Pré-venda em breve
          </p>
        </div>

        {/* Direita — duas imagens */}
        <div className={`${styles.imagens} reveal reveal-delay-2`}>
          <div className={styles.imgWrap}>
            <Image
              src="https://images.unsplash.com/photo-1542838687-3b96f76e49b4?w=800&q=85&auto=format&fit=crop"
              alt="Bota de couro em ambiente urbano"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className={styles.img}
            />
          </div>
          <div className={styles.imgWrap}>
            <Image
              src="https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&q=85&auto=format&fit=crop"
              alt="Bota de couro em ambiente natural"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className={styles.img}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
