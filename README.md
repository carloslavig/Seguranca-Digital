# 🔐 Segurança Digital — Proteção Contra Engenharia Social

> Projeto extensionista universitário de conscientização sobre golpes digitais,
> desenvolvido como aplicação web bilíngue (PT | EN) com tema claro e escuro.

---

## 📋 Sobre o Projeto

Este site foi desenvolvido como **atividade extensionista** no curso de **Engenharia da Computação — GranFaculdade**, com o objetivo de informar e conscientizar pessoas — especialmente aquelas com **mais de 50 anos** — sobre os riscos da engenharia social e os golpes digitais mais comuns.

O conteúdo é apresentado de forma simples e acessível, sem jargão técnico, para que qualquer pessoa possa compreender e se proteger independentemente de sua familiaridade com tecnologia.

---

## ✨ Funcionalidades

- 🌐 **Bilíngue** — alternância completa entre Português (BR) e Inglês com um clique
- 🌙 **Tema claro e escuro** — troca de aparência sem recarregar a página
- 📱 **Responsivo** — funciona em celular, tablet e desktop
- ✅ **Checklist interativo** — com barra de progresso para o usuário acompanhar sua segurança digital
- 🎞️ **Animações de entrada** — seções aparecem com transição suave ao navegar
- 🗂️ **Navegação SPA** — troca de seções sem recarregar o navegador; cada clique substitui completamente o conteúdo visível
- 🆘 **Guia pós-golpe** — passo a passo claro do que fazer caso a pessoa já tenha sido vítima

---

## 🗂️ Estrutura do Projeto

```
seguranca-digital/
├── index.html   # Estrutura e conteúdo do site (HTML semântico)
├── style.css    # Estilos, variáveis de tema e layout responsivo
├── script.js    # Interatividade: navegação, idioma, tema, checklist, animações
└── README.md    # Este arquivo
```

### Detalhamento dos arquivos

| Arquivo | Responsabilidade |
|---|---|
| `index.html` | Marcação semântica, textos bilíngues via `<span class="i18n">`, estrutura das 5 seções, atributos `data-nav` para navegação |
| `style.css` | Variáveis CSS para temas, controle de visibilidade das seções, componentes visuais, animações e media queries |
| `script.js` | Navegação entre seções, alternância de idioma, tema, checklist e scroll reveal — tudo via `addEventListener`, sem `onclick` inline no HTML |

---

## 📄 Seções do Site

| Seção | Conteúdo |
|---|---|
| **Início** | Hero com chamada principal e estatísticas sobre golpes digitais no Brasil |
| **Como Acontece** | 6 tipos de ataques de engenharia social explicados com exemplos reais |
| **Como se Proteger** | 8 dicas práticas em linguagem acessível |
| **Checklist** | Lista interativa para o usuário avaliar sua segurança digital |
| **Fui Vítima** | Passo a passo do que fazer caso a pessoa tenha caído em um golpe |
| **Sobre** | Informações sobre os autores e o contexto do projeto extensionista |

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

# Ou simplesmente arrastar o arquivo index.html para qualquer navegador
```

> **Compatibilidade:** funciona normalmente ao abrir via `file://` (duplo clique no arquivo),
> sem necessidade de servidor local.

---

## 🌍 Como Publicar Online (gratuito)

### GitHub Pages
1. Suba os arquivos para um repositório no GitHub
2. Vá em **Settings → Pages**
3. Selecione a branch `main` e a pasta `/ (root)`
4. Clique em **Save** — o site ficará disponível em `https://carloslavig.github.io/seguranca-digital`

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
| **HTML5** | Estrutura semântica, atributos `data-nav` para navegação e `data-pt`/`data-en` para i18n |
| **CSS3** | Custom Properties (variáveis de tema), Flexbox, Grid, animações e media queries |
| **JavaScript (ES6)** | Manipulação de DOM, `IntersectionObserver`, controle de estado de idioma e navegação |
| **Google Fonts** | Fontes Fraunces (títulos) e DM Sans (corpo) |

Nenhuma biblioteca ou framework externo foi utilizado — o projeto é 100% HTML, CSS e JavaScript puro.

---

## 🎨 Sistema de Temas

O site utiliza **CSS Custom Properties** para implementar os temas claro e escuro. A troca é feita alterando o atributo `data-theme` no `<html>`:

```css
[data-theme="dark"] {
  --bg: #0d1117;
  --accent: #2dd4bf;
}

[data-theme="light"] {
  --bg: #f5f7fa;
  --accent: #0d9488;
}
```

```js
document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
```

---

## 🌐 Sistema Bilíngue (i18n)

A internacionalização foi implementada sem bibliotecas externas. Textos traduzíveis ficam dentro de `<span class="i18n">` com os atributos `data-pt` e `data-en`:

```html
<span class="i18n"
  data-pt="Como os Golpes Acontecem"
  data-en="How Scams Happen">
  Como os Golpes Acontecem
</span>
```

O JavaScript atualiza **apenas** esses spans ao trocar o idioma, sem tocar nos atributos de navegação:

```js
document.querySelectorAll('span.i18n').forEach(el => {
  el.innerHTML = el.getAttribute('data-' + currentLang);
});
```

> **Por que `span.i18n` e não `[data-pt]`?**
> Versões anteriores usavam `[data-pt]` diretamente nos elementos de navegação.
> Isso fazia o sistema de idioma sobrescrever os atributos `data-nav` dos botões,
> quebrando a navegação ao trocar o idioma. A solução foi separar os textos
> traduzíveis em `<span class="i18n">` filhos, isolando completamente
> o i18n da lógica de navegação.

---

## 🧭 Sistema de Navegação

A navegação funciona como uma SPA (Single Page Application): apenas uma seção é exibida por vez, e ao clicar em um link a seção anterior some completamente antes da nova aparecer.

### Como funciona

Cada elemento clicável de navegação recebe o atributo `data-nav` com o ID da seção destino:

```html
<!-- Links da navbar -->
<a href="#" data-nav="ataques">Como Acontece</a>

<!-- Botões dentro do conteúdo -->
<button data-nav="dicas">Como se Proteger</button>
```

O CSS controla a visibilidade exclusivamente por classes:

```css
.section        { display: none; }   /* todas ocultas por padrão */
.section.active { display: block; }  /* apenas a ativa aparece   */
#home.active    { display: flex; }   /* home usa flex, não block  */
```

O JavaScript registra listeners diretamente em cada elemento `[data-nav]`:

```js
document.querySelectorAll('[data-nav]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    showSection(el.getAttribute('data-nav'));
  });
});
```

> **Detalhe importante:** o `#home` usa `display: flex` em vez de `display: block`.
> Por isso ele tem sua própria regra `#home.active { display: flex }`.
> Se `display: flex` fosse declarado diretamente no `#home` (sem o `.active`),
> ele sobrescreveria o `display: none` do `.section` e o hero nunca sumia
> ao navegar para outra seção — bug corrigido na v5.

---

## 📖 Contexto Acadêmico

- **Tipo:** Atividade Extensionista Universitária
- **Curso:** Engenharia da Computação
- **Instituição:** GranFaculdade
- **Público-alvo:** Pessoas com 50 anos ou mais
- **Objetivo:** Democratizar o acesso à informação sobre segurança digital

---

## 👥 Autores

**Carlos Lavigne**
Desenvolvedor em formação com background em Relações Internacionais e experiência em suporte técnico bilíngue. Acredita que tecnologia só faz sentido quando está acessível a todos.

- GitHub: [@carloslavig](https://github.com/carloslavig)
- LinkedIn: [linkedin.com/in/carloslavig](https://www.linkedin.com/in/carloslavig/)

**Janaína Santos Mendes**
Integrante do projeto extensionista, responsável pela pesquisa de conteúdo e comunicação com o público-alvo. Sua sensibilidade para entender as necessidades das pessoas mais vulneráveis ao ambiente digital foi essencial para tornar as informações do site claras, humanas e acessíveis.

---

## 📜 Licença

Este projeto é de uso educacional e livre para fins não comerciais.
Sinta-se à vontade para adaptar e reutilizar com os devidos créditos.

---

*Se você acredita ter sido vítima de um golpe digital, ligue para **197** (Polícia Civil) ou **151** (Procon).*
