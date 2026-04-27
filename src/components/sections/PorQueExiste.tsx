import styles from './PorQueExiste.module.css'

const itens = [
  {
    num: '01',
    titulo: 'As botas do mercado escolhem um lado',
    texto: 'Ou country demais para a cidade. Ou urbanas demais para a fazenda. Nenhuma foi feita para quem vive nos dois.',
  },
  {
    num: '02',
    titulo: 'Identidade não é tendência',
    texto: 'Quem tem raiz não muda de estilo quando muda de endereço. A bota vai junto — no barro e no asfalto.',
  },
  {
    num: '03',
    titulo: 'O couro conta uma história',
    texto: 'Cada marca de uso é parte de quem usa. Feita para envelhecer com caráter, não para descarte.',
  },
  {
    num: '04',
    titulo: 'Presença é inegociável',
    texto: 'Uma bota que impõe respeito no ambiente em que estiver. Não por grito — por substância.',
  },
]

const pilares = [
  { titulo: 'Raiz + Ambição', desc: 'Campo na essência, cidade na atitude' },
  { titulo: 'Rústico + Urbano', desc: 'Couro que resiste em qualquer terreno' },
  { titulo: 'Força + Presença', desc: 'O estilo que não pede licença' },
]

export function PorQueExiste() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <h2>Por que<br />existe.</h2>
          <p>A maioria das botas é feita para um mundo só.<br />Esta não.</p>
        </div>

        <div className={`${styles.grid} reveal reveal-delay-1`}>
          {itens.map((item) => (
            <div key={item.num} className={styles.item}>
              <span className={styles.num}>{item.num}</span>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.bottom} reveal reveal-delay-2`}>
          <div>
            <blockquote className={styles.quote}>
              &ldquo;A maioria das botas é feita para{' '}
              <em>um mundo só</em>.<br />
              A Terra na Bota é para quem vive nos dois.&rdquo;
            </blockquote>
            <p className={styles.attr}>
              <span className={styles.attrLine} />
              Manifesto da marca
            </p>
          </div>
          <div className={`${styles.pilares} reveal reveal-delay-3`}>
            {pilares.map((p) => (
              <div key={p.titulo} className={styles.pilar}>
                <span className={styles.pilarIcon}>★</span>
                <div>
                  <strong>{p.titulo}</strong>
                  <span>{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
