# Allan Correa (Tsu) — Portfólio

Site pessoal em HTML semântico, CSS e JavaScript, publicado no GitHub Pages em [itsthetsu.github.io](https://itsthetsu.github.io/).

## Sobre esta atualização

- Perfil profissional atualizado para **Atendente Helpdesk de Suporte na VSM Informática**.
- Experiência anterior no Grupo Mello Assis, graduação em Engenharia de Software (UNIFRAN) e curso técnico no SENAI.
- Projetos com referências verificadas: MyList, NoteBlock e Servidor da Tropinha.
- Laboratório identificado como estudos/protótipos, sem links ou funcionalidades inventadas.
- UI de alto contraste com laranja, roxo, preto/off-white e detalhes em azul.
- Menu mobile, âncoras, filtros acessíveis, botão de copiar e-mail, animações leves e `prefers-reduced-motion`.
- Mockups SVG/CSS conceituais; **não** representam capturas nem dados de aplicativos reais.

## Execução local

O site não requer compilação ou `npm install`. Abra `index.html` em um servidor estático, por exemplo:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000/`.

## Publicação

O GitHub Pages publica o conteúdo do diretório raiz da branch `main`. As pastas dos outros projetos no mesmo repositório não devem ser excluídas durante alterações no portfólio.

## Estrutura

- `index.html` — marcação e conteúdo.
- `style/style.css` — CSS de produção.
- `style/style.scss` — entrada Sass que carrega o CSS de produção sem duplicá-lo.
- `js/main.js` — navegação, filtros, revelação leve e copiar e-mail.
- `favicon.svg` — ícone original.

Os links sociais e de contato são links diretos reais; não existe formulário falso ou coleta de dados neste site.
