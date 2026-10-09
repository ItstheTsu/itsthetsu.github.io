# Portfólio pessoal — Allan Correa (Tsu)

Site pessoal hospedado no GitHub Pages: **https://itsthetsu.github.io/**.

## Estrutura

- `index.html`: conteúdo semântico (início, sobre, trajetória, projetos, tecnologias e contato)
- `style/style.css`: estilos finais publicados
- `style/style.scss`: fonte compatível com Sass mantida em sincronia com o CSS
- `js/main.js`: menu responsivo, navegação ativa, filtros, animações e progresso de leitura
- `favicon.svg`: marca simplificada
- `img/`: imagens históricas preservadas
- `blococraft/`: projeto do servidor Minecraft preservado
- `vsm-landing/`: landing page demonstrativa e independente; **não é uma página oficial da VSM**

## Paleta

- Preto / azul noite: `#080911`, `#0d101c`
- Roxo: `#ad84ff`, `#9d6cff`
- Laranja: `#ff993f`, `#ff792e`
- Azul claro: `#77c8ff`
- Branco: `#f7f8ff`

## Recursos

- Estrutura fluida com Grid e Flexbox, sem seções fixas em 100vh
- Navegação responsiva com abertura/fechamento por teclado
- Seção de projetos com filtro por categoria
- Preferência por movimento reduzido respeitada
- Links externos seguros e elementos interativos acessíveis
- Nenhuma dependência JavaScript obrigatória

## Desenvolvimento local

Na pasta raiz do repositório:

```sh
python -m http.server 8000
```

Abra `http://localhost:8000`.

## Testes

Validar sintaxe JavaScript com `node --check js/main.js` e inspeção visual com um navegador local. O deploy é gerenciado pelo GitHub Pages no branch `main`.

---

© Allan Correa. Portfólio pessoal.
