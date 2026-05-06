import { useState } from 'react'
import styles from './CTAFinal.module.css'
import { useLeadsCount } from '@/lib/useLeadsCount'

export function CTAFinal() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [lgpd, setLgpd] = useState(false)
  const [lgpdError, setLgpdError] = useState(false)
  const count = useLeadsCount()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!lgpd) { setLgpdError(true); return }

    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('subscribe failed')

      setStatus('success')

      // Dispara evento GA4
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'generate_lead', {
          event_category: 'Lista de espera',
          event_label: 'CTA Final',
        })
      }

      // Dispara evento Meta Pixel
      if (typeof window !== 'undefined' && (window as any).fbq) {
        ;(window as any).fbq('track', 'Lead')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.section} id="lista">
      <div className={styles.inner}>
        <p className={styles.label}>
          <span className={styles.labelLine} />
          Lista de espera
          <span className={styles.labelLine} />
        </p>

        <h2 className={`${styles.title} reveal`}>
          O chão lembra<br />quem pisa forte.
        </h2>

        <p className={`${styles.sub} reveal reveal-delay-1`}>
          Quem entrar agora sabe antes.
          <br /><strong>E paga menos quando abrir.</strong>
        </p>

        {status === 'success' ? (
          <div className={`${styles.success} reveal`}>
            <p className={styles.successTitle}>Você está dentro.</p>
            <p className={styles.successSub}>Você vai saber antes de todo mundo. Fica de olho.</p>
          </div>
        ) : (
          <form
            className={`${styles.formWrap} reveal reveal-delay-2`}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={styles.form}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className={styles.input}
                required
                autoComplete="email"
                aria-label="Endereço de e-mail"
              />
              <button
                type="submit"
                className={styles.btn}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Entrando...' : 'Estou dentro'}
                {status !== 'loading' && (
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                    <path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>

            {/* LGPD */}
            <label className={`${styles.lgpd} ${lgpdError ? styles.lgpdError : ''}`}>
              <input
                type="checkbox"
                checked={lgpd}
                onChange={(e) => { setLgpd(e.target.checked); setLgpdError(false) }}
                aria-required="true"
              />
              <span>
                Concordo com a{' '}
                <a href="/privacidade" target="_blank" rel="noopener noreferrer">
                  Política de Privacidade
                </a>
                . Seus dados não serão compartilhados com terceiros.
              </span>
            </label>

            {lgpdError && (
              <p className={styles.lgpdMsg}>
                Aceite a política de privacidade para continuar.
              </p>
            )}

            {status === 'error' && (
              <p className={styles.errorMsg}>
                Confere o e-mail e tenta de novo.
              </p>
            )}

            <p className={styles.note}>
              Lançamento limitado · Acesso antecipado · Sem spam
            </p>
          </form>
        )}

        {count !== null && count > 0 && (
          <div className={styles.counter}>
            <span className={styles.counterDot} />
            <span>
              <span className={styles.counterNum}>{count}</span> pessoas na lista — lançamento limitado
            </span>
          </div>
        )}

      </div>
    </section>
  )
}
