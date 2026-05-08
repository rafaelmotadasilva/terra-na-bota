import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Manifesto } from '@/components/sections/Manifesto'
import { PorQueExiste } from '@/components/sections/PorQueExiste'
import { Produto } from '@/components/sections/Produto'
import { CTAFinal } from '@/components/sections/CTAFinal'
import { Footer } from '@/components/sections/Footer'
import { useReveal } from '@/lib/useReveal'

const SITE_URL = 'https://terranabota.com.br'
const TITLE = 'Terra na Bota | Estiloso na fazenda. Selvagem na cidade.'
const DESCRIPTION = 'Chelsea boot de couro para quem não escolhe entre o campo e a cidade. Entre na lista e garanta acesso antecipado com preço exclusivo.'

const Home: NextPage = () => {
  useReveal()

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={SITE_URL} />
        {/* Preload dos painéis do hero — ambos candidatos ao LCP */}
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1577387262136-6ac70fb6a070?w=960&q=85&auto=format&fit=crop&crop=bottom"
        />
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1608256264403-74a5ab98311e?w=960&q=85&auto=format&fit=crop&crop=center"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Terra na Bota" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Terra na Bota — Estiloso na fazenda. Selvagem na cidade." />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <PorQueExiste />
        <Produto />
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
