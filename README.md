# 🔐 Segurança Digital — Proteção Contra Engenharia Social

> Projeto extensionista universitário de conscientização sobre golpes digitais,
> desenvolvido como site bilíngue (PT | EN) com tema claro e escuro.

---

## 📋 Sobre o Projeto

Este site foi desenvolvido como **atividade extensionista** no curso de **Engenharia da Computação — GranFaculdade**, com o objetivo de informar e conscientizar pessoas — especialmente aquelas com **mais de 50 anos** — sobre os riscos da engenharia social e os golpes digitais mais comuns.

O conteúdo é apresentado de forma simples e acessível, sem jargão técnico, para que qualquer pessoa possa compreender e se proteger independentemente de sua familiaridade com tecnologia.

---

## ✨ Funcionalidades

- 🌐 **Bilíngue** — alternância completa entre Português (BR) e Inglês com um clique
- 🌙 **Tema claro e escuro** — troca de aparência sem recarregar a página
- 📱 **Responsivo** — funciona em celular, tablet e desktop
- ✅ **Checklist interativo** — com barra de progresso para o usuário acompanhar sua segurança
- 🎞️ **Animações suaves** — elementos entram na tela conforme o usuário rola a página
- 🗂️ **Navegação SPA-like** — troca de seções sem recarregar o navegador

---

## 🗂️ Estrutura do Projeto

```
seguranca-digital/
├── index.html   # Estrutura e conteúdo do site (HTML semântico)
├── style.css    # Estilos, variáveis de tema e layout responsivo
├── script.js    # Interatividade: idioma, tema, checklist, animações
└── README.md    # Este arquivo
```

### Detalhamento dos arquivos

| Arquivo | Responsabilidade |
|---|---|
| `index.html` | Marcação semântica, conteúdo bilíngue via `data-pt` / `data-en`, estrutura das 5 seções |
| `style.css` | Variáveis CSS para temas, componentes visuais, grid, animações e media queries |
| `script.js` | Lógica de idioma, tema, navegação entre seções, checklist e scroll reveal |

---

## 📄 Seções do Site

| Seção | Conteúdo |
|---|---|
| **Início** | Hero com chamada principal e estatísticas sobre golpes digitais no Brasil |
| **Como Acontece** | 6 tipos de ataques de engenharia social explicados com exemplos reais |
| **Como se Proteger** | 8 dicas práticas em linguagem acessível |
| **Checklist** | Lista interativa para o usuário avaliar sua segurança digital |
| **Sobre** | Informações sobre o autor e o contexto do projeto extensionista |

---

## 🚀 Como Executar

Não requer instalação, servidor ou dependências. Basta:

1. Baixar ou clonar este repositório
2. Abrir o arquivo `index.html` diretamente no navegador

```bash
# Clonar o repositório
git clone https://github.com/carloslavig/seguranca-digital.git

# Entrar na pasta
cd seguranca-digital

# Abrir no navegador (Linux/Mac)
open index.html

# Ou simplesmente arrastar o arquivo index.html para o navegador
```

---

## 🌍 Como Publicar Online (gratuito)

### GitHub Pages
1. Suba os arquivos para um repositório no GitHub
2. Vá em **Settings → Pages**
3. Selecione a branch `main` e a pasta `/ (root)`
4. Clique em **Save** — o site ficará disponível em `https://seu-usuario.github.io/seguranca-digital`

### Netlify
1. Acesse [netlify.com](https://netlify.com) e crie uma conta gratuita
2. Arraste a pasta do projeto para a área de deploy
3. O site ficará online em segundos com URL gerada automaticamente

### Vercel
1. Acesse [vercel.com](https://vercel.com) e conecte ao GitHub
2. Importe o repositório e clique em **Deploy**

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica e atributos de internacionalização |
| **CSS3** | Custom Properties (variáveis), Grid, Flexbox, animações e media queries |
| **JavaScript (ES6+)** | Manipulação de DOM, IntersectionObserver, controle de estado |
| **Google Fonts** | Fontes Fraunces (títulos) e DM Sans (corpo) |

Nenhuma biblioteca ou framework externo foi utilizado — o projeto é 100% HTML, CSS e JavaScript puro.

---

## 🎨 Sistema de Temas

O site utiliza **CSS Custom Properties** (variáveis CSS) para implementar os temas claro e escuro. A troca é feita alterando o atributo `data-theme` no elemento `<html>`:

```css
/* Tema escuro (padrão) */
[data-theme="dark"] {
  --bg: #0d1117;
  --accent: #2dd4bf;
  /* ... */
}

/* Tema claro */
[data-theme="light"] {
  --bg: #f5f7fa;
  --accent: #0d9488;
  /* ... */
}
```

```js
// Alternância no JavaScript
html.setAttribute('data-theme', isDark ? 'light' : 'dark');
```

---

## 🌐 Sistema Bilíngue

A internacionalização foi implementada sem bibliotecas externas. Cada elemento com texto traduzível recebe dois atributos HTML:

```html
<h2 data-pt="Como os Golpes Acontecem"
    data-en="How Scams Happen">
  Como os Golpes Acontecem
</h2>
```

O JavaScript percorre todos esses elementos e atualiza o `innerHTML` ao trocar o idioma:

```js
document.querySelectorAll('[data-pt]').forEach(el => {
  el.innerHTML = el.getAttribute('data-' + currentLang);
});
```

---

## 📖 Contexto Acadêmico

- **Tipo:** Atividade Extensionista Universitária
- **Curso:** Engenharia da Computação
- **Instituição:** GranFaculdade
- **Público-alvo:** Pessoas com 50 anos ou mais
- **Objetivo:** Democratizar o acesso à informação sobre segurança digital

---

## 👤 Autor

**Carlos Lavigne**
Desenvolvedor em formação com background em Relações Internacionais e experiência em suporte técnico bilíngue. Acredita que tecnologia só faz sentido quando está acessível a todos.

- GitHub: [@carloslavig](https://github.com/carloslavig)
- LinkedIn: [linkedin.com/in/carloslavig](https://www.linkedin.com/in/carloslavig/)

---

## 📜 Licença

Este projeto é de uso educacional e livre para fins não comerciais.
Sinta-se à vontade para adaptar e reutilizar com os devidos créditos.

---

*Se você acredita ter sido vítima de um golpe digital, ligue para **197** (Polícia Civil) ou **151** (Procon).*
