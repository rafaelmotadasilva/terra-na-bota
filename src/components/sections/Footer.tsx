import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <a href="/" className={styles.logo} aria-label="Terra na Bota">
          <img
            src="/assets/logo/logo-white.svg"
            alt="Terra na Bota"
            height={18}
            onError={(e) => {
              const t = e.currentTarget
              t.style.display = 'none'
              const fb = t.nextElementSibling as HTMLElement
              if (fb) fb.style.display = 'inline'
            }}
          />
          <span style={{ display: 'none' }}>TERRA ★ NA BOTA</span>
        </a>

        <p className={styles.frase}>
          Estiloso na fazenda ★ Selvagem na cidade
        </p>

        <div className={styles.links}>
          <a
            href="https://instagram.com/useterranabota"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagram}
          >
            ★ @useterranabota
          </a>
          <a href="mailto:contato@terranabota.com.br">
            contato@terranabota.com.br
          </a>
          <a href="/privacidade">Política de Privacidade</a>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Terra na Bota. Todos os direitos reservados.
        </p>

        <a
          href="https://github.com/rafaelmotadasilva"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.credits}
        >
          Desenvolvido por Rafael Mota · Infraestrutura &amp; Cloud
        </a>

      </div>
    </footer>
  )
}
