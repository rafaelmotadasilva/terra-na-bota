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
    <section className={styles.section} id="produto">
      <div className={styles.inner}>

        {/* Esquerda — texto e specs */}
        <div className={styles.texto}>
          <p className={`${styles.label} reveal`}>
            <span className={styles.labelLine} />
            Produto
          </p>

          <h2 className={`${styles.titulo} reveal reveal-delay-1`}>
            Modelo 01.
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
              src="https://images.unsplash.com/photo-1577387280394-12fd9389ac86?w=800&q=85&auto=format&fit=crop"
              alt="Bota de couro em ambiente urbano"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className={styles.img}
            />
          </div>
          <div className={styles.imgWrap}>
            <Image
              src="https://images.unsplash.com/photo-1608256255256-411200dde1ee?w=800&q=85&auto=format&fit=crop"
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
