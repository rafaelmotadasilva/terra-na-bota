import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'A Marca', href: '#manifesto' },
  { label: 'Por que existe', href: '#por-que-existe' },
  { label: 'O Produto', href: '#produto' },
  { label: 'Lista de espera', href: '#lista' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={styles.inner}>
        <a href="/" className={styles.logo} aria-label="Terra na Bota — página inicial">
          <img
            src="/assets/logo/logo-white.svg"
            alt="Terra na Bota"
            height={22}
            onError={(e) => {
              const t = e.currentTarget
              t.style.display = 'none'
              const fb = t.nextElementSibling as HTMLElement
              if (fb) fb.style.display = 'block'
            }}
          />
          <span className={styles.logoText} style={{ display: 'none' }}>
            TERRA ★ NA BOTA
          </span>
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className={`${styles.hamburger} ${open ? styles.open : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ''}`}
        aria-label="Menu mobile"
        aria-hidden={!open}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
