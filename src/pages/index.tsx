import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { Hero } from '@/components/sections/Hero'
import { Manifesto } from '@/components/sections/Manifesto'
import { PorQueExiste } from '@/components/sections/PorQueExiste'
import { CTAFinal } from '@/components/sections/CTAFinal'
import { Footer } from '@/components/sections/Footer'
import { useReveal } from '@/lib/useReveal'

const SITE_URL = 'https://terranabota.com.br'
const TITLE = 'Terra na Bota | Estiloso na fazenda, selvagem na cidade'
const DESCRIPTION = 'Botas para quem não escolhe um lado. Pré-lançamento. Quem entra na lista agora paga menos no dia que abrir.'

const Home: NextPage = () => {
  useReveal()

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:title" content="Terra na Bota ★ Estiloso na fazenda. Selvagem na cidade." />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />

        {/* Twitter */}
        <meta name="twitter:title" content="Terra na Bota ★ Estiloso na fazenda. Selvagem na cidade." />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Head>

      <main>
        <Hero />
        <Manifesto />
        <PorQueExiste />
        <CTAFinal />
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default Home
