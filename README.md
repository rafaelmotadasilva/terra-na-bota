# TERRA ★ NA BOTA -- Landing Page

Stack: Next.js 14 · TypeScript · CSS Modules  
Deploy: Vercel · Domínio via Cloudflare

---

## Estrutura do projeto

```
src/
├── components/
│   └── sections/
│       ├── Hero.tsx + Hero.module.css
│       ├── Manifesto.tsx + Manifesto.module.css
│       ├── PorQueExiste.tsx + PorQueExiste.module.css
│       ├── CTAFinal.tsx + CTAFinal.module.css
│       └── Footer.tsx + Footer.module.css
├── lib/
│   ├── useReveal.ts       -- animações de scroll
│   └── useCounter.ts      -- contador de leads
├── pages/
│   ├── _document.tsx      -- GA4, Meta Pixel, JSON-LD, meta tags
│   ├── _app.tsx
│   ├── index.tsx          -- página principal
│   ├── privacidade.tsx    -- Política de Privacidade (LGPD)
│   └── api/
│       └── subscribe.ts   -- captura de leads (4 opções de integração)
└── styles/
    ├── globals.css         -- variáveis, fontes, reset
    └── Privacidade.module.css
public/
├── assets/
│   ├── logo/
│   │   ├── logo-white.svg   ← colocar aqui
│   │   └── logo-dark.svg    ← colocar aqui
│   └── images/
│       └── hero.jpg          ← colocar aqui (1920x1080, WebP preferido)
├── favicon.ico
├── favicon.svg
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── site.webmanifest
├── sitemap.xml
└── robots.txt
```

---

## Setup local

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.local.example .env.local
# Editar .env.local com seus valores

# 3. Rodar em desenvolvimento
npm run dev
# Abrir http://localhost:3000
```

---

## Arquivos para colocar no lugar

### Logos
Copiar do Inkscape para `public/assets/logo/`:
- `logo-white.svg` -- versão branca (fundo escuro)
- `logo-dark.svg` -- versão preta (fundo claro)

### Imagem do hero
Colocar em `public/assets/images/hero.jpg`
- Resolução mínima: 1920x1080px
- Formato preferido: WebP ou JPG otimizado
- Composição: sujeito à direita, espaço vazio à esquerda

### Favicons
Usar realfavicongenerator.net com a estrela isolada:
- Gera todos os tamanhos automaticamente
- Baixar e colocar na pasta `public/`

### OG Image
Criar uma imagem 1200x630px para preview no WhatsApp/redes sociais
Salvar em `public/og-image.jpg`

---

## Fonte Arpona

A Arpona é usada exclusivamente na logo (SVG).  
Para usar nos títulos do site, descomentar o @font-face em `globals.css`
e colocar o arquivo em `public/fonts/arpona-semibold.woff2`.

Atualmente os títulos usam **Playfair Display** (Google Fonts, gratuita).

---

## Integração de leads

Editar `src/pages/api/subscribe.ts` e escolher uma opção:

| Opção | Serviço | Custo | Variáveis no .env.local |
|-------|---------|-------|------------------------|
| A | Google Sheets | Grátis | SHEETS_WEBHOOK |
| B | Mailchimp | Grátis até 500 contatos | MAILCHIMP_* |
| C | ConvertKit | Grátis até 1.000 contatos | CONVERTKIT_* |
| D | Brevo | Grátis 300 e-mails/dia | BREVO_* |

**Recomendação para começar:** Opção A (Google Sheets), zero configuração,
zero custo, os leads ficam numa planilha acessível.

---

## Analytics

### GA4
1. Criar propriedade no Google Analytics
2. Copiar o Measurement ID (G-XXXXXXXXXX)
3. Colocar em `NEXT_PUBLIC_GA_ID` no .env.local
4. Subir a variável também nas configurações da Vercel

### Meta Pixel (quando começar tráfego pago)
1. Criar pixel no Facebook Business Manager
2. Copiar o Pixel ID
3. Colocar em `NEXT_PUBLIC_META_PIXEL_ID` no .env.local

---

## Deploy na Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy de preview
vercel

# Deploy de produção
vercel --prod
```

### Variáveis de ambiente na Vercel
Acessar: vercel.com → projeto → Settings → Environment Variables  
Adicionar todas as variáveis do .env.local.

---

## Domínio via Cloudflare

```
1. Vercel → projeto → Settings → Domains → Add Domain
   Digitar: terranabota.com.br

2. Vercel vai mostrar o valor do CNAME

3. Cloudflare → DNS → Adicionar registro:
   Tipo:  CNAME
   Nome:  @ (ou www)
   Valor: cname.vercel-dns.com
   Proxy: OFF (DNS Only, ícone cinza, não laranja)

4. SSL é gerado automaticamente pela Vercel em ~2 minutos
```

---

## Checklist pré-lançamento

- [ ] Logos nos caminhos corretos em /public/assets/logo/
- [ ] Imagem do hero em /public/assets/images/hero.jpg
- [ ] OG image em /public/og-image.jpg
- [ ] Favicons gerados e colocados em /public/
- [ ] .env.local configurado com GA4 e integração de leads
- [ ] Variáveis subidas na Vercel
- [ ] Domínio configurado no Cloudflare
- [ ] SSL ativo (HTTPS)
- [ ] Testar formulário em produção
- [ ] Testar preview do OG no WhatsApp (enviar o link para si mesmo)
- [ ] Testar em mobile (320px, 375px, 414px)
- [ ] Verificar GA4 recebendo dados

---

## Contato

contato@terranabota.com.br  
instagram.com/useterranabota
