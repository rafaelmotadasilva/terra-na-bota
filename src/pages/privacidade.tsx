import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Privacidade.module.css'

const Privacidade: NextPage = () => {
  return (
    <>
      <Head>
        <title>Política de Privacidade | Terra na Bota</title>
        <meta name="description" content="Política de privacidade da Terra na Bota. Saiba como tratamos seus dados." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className={styles.page}>
        <header className={styles.header}>
          {/* Fundo claro (--areia) → logo preta */}
          <a href="/" className={styles.logo} aria-label="Terra na Bota — página inicial">
            <img
              src="/assets/logo/logo-black.svg"
              alt="Terra na Bota"
              className={styles.logoImg}
              onError={(e) => {
                const t = e.currentTarget
                t.style.display = 'none'
                const fb = t.nextElementSibling as HTMLElement
                if (fb) fb.style.display = 'inline'
              }}
            />
            <span style={{ display: 'none' }}>TERRA ★ NA BOTA</span>
          </a>
        </header>

        <main className={styles.content}>
          <h1>Política de Privacidade</h1>
          <p className={styles.updated}>Última atualização: abril de 2026</p>

          <section>
            <h2>1. Quem somos</h2>
            <p>
              Terra na Bota é uma marca de lifestyle country-urbano, operada por Rafael Mota,
              com sede no Brasil. Contato: <a href="mailto:contato@terranabota.com.br">contato@terranabota.com.br</a>
            </p>
          </section>

          <section>
            <h2>2. Quais dados coletamos</h2>
            <p>Coletamos apenas o endereço de e-mail fornecido voluntariamente ao se cadastrar na lista de espera.</p>
            <p>Não coletamos dados sensíveis, documentos de identidade ou informações de pagamento nesta etapa.</p>
          </section>

          <section>
            <h2>3. Para que usamos seus dados</h2>
            <p>Seu e-mail é utilizado exclusivamente para:</p>
            <ul>
              <li>Comunicar o lançamento da marca e do produto</li>
              <li>Enviar condições especiais de pré-venda para quem está na lista</li>
              <li>Informar sobre novidades da Terra na Bota</li>
            </ul>
            <p>Seus dados <strong>não são compartilhados, vendidos ou cedidos</strong> a terceiros.</p>
          </section>

          <section>
            <h2>4. Base legal (LGPD)</h2>
            <p>
              O tratamento dos seus dados tem como base legal o <strong>consentimento</strong> (Art. 7º, I da Lei 13.709/2018 — LGPD),
              fornecido no momento do cadastro na lista de espera.
            </p>
          </section>

          <section>
            <h2>5. Por quanto tempo guardamos seus dados</h2>
            <p>
              Mantemos seu e-mail enquanto você fizer parte da lista de espera ou até que solicite a exclusão.
              Após o lançamento, os dados serão mantidos apenas se você continuar optando por receber comunicações da marca.
            </p>
          </section>

          <section>
            <h2>6. Seus direitos</h2>
            <p>Em conformidade com a LGPD, você tem direito a:</p>
            <ul>
              <li>Confirmar a existência do tratamento dos seus dados</li>
              <li>Acessar seus dados</li>
              <li>Corrigir dados incompletos ou incorretos</li>
              <li>Solicitar a exclusão dos seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
            <p>
              Para exercer qualquer desses direitos, entre em contato pelo e-mail:{' '}
              <a href="mailto:contato@terranabota.com.br">contato@terranabota.com.br</a>
            </p>
          </section>

          <section>
            <h2>7. Cookies e analytics</h2>
            <p>
              Utilizamos o Google Analytics 4 para entender como os visitantes interagem com o site.
              Os dados coletados são anonimizados e usados apenas para melhorar a experiência do usuário.
              Você pode desabilitar o rastreamento nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2>8. Contato</h2>
            <p>
              Dúvidas sobre esta política? Fale com a gente:{' '}
              <a href="mailto:contato@terranabota.com.br">contato@terranabota.com.br</a>
            </p>
          </section>
        </main>

        <footer className={styles.footer}>
          <a href="/">← Voltar para a página inicial</a>
          <p>© {new Date().getFullYear()} Terra na Bota. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  )
}

export default Privacidade
