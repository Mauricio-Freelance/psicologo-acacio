# Template para APlicações Web com React

Este projeto é basicamente a criação de um modelo de projetos web usando React sem a dependência de Frameworks como Nest, Next e por ai vai

## Motivo

Básicamente sou alguem leigo quando o assunto é JS, e as documentações dos frameworks assuntam os leigos. Para conseguir usar tais frameworks, precisarei assitir diversos cursos e fazer projetos de cursos para conseguir me familiarizar com o framework. Então resolvi não fazer cursos e tentar construir do zero a minha própria estrutura usando o que aprendi pesquisando e estudando.

Caso goste, fique a vontade para usar o meu modelo.

## Estrutura

```bash
app/
├── App.tsx
├── assets/
│   ├── icons/
│   └── images/
├── components/
├── constants/
├── data/
├── main.tsx
├── pages/
├── redux/
├── routers/
├── services/
├── styles/
│   ├── colors/
│   ├── fonts/
│   └── global.css
├── tests/
│   └── mocks/
├── types/
└── utils/

docs/
└── README.txt

public/
├── index.html
└── ...

.gitignore
eslint.config.js
package.json
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
README.md
```

### app/

- **App.tsx**: Componente principal da aplicação.
- **assets/**: Contém ícones e imagens utilizados na aplicação.
  - **icons/**: Ícones da aplicação.
  - **images/**: Imagens da aplicação.
- **components/**: Componentes reutilizáveis da aplicação.
- **constants/**: Constantes utilizadas na aplicação.
- **data/**: Dados persistidos (arquivos .json, .txt, etc).
- **main.tsx**: Ponto de entrada da aplicação React.
- **pages/**: Páginas da aplicação.
- **redux/**: Configuração do Redux para gerenciamento de estado.
- **routers/**: Configuração das rotas da aplicação.
- **services/**: Serviços da aplicação (ex: chamadas de API).
- **styles/**: Estilos da aplicação.
  - **colors/**: Definições de cores.
  - **fonts/**: Definições de fontes.
  - **global.css**: Estilos globais da aplicação.
- **tests/**: Testes da aplicação.
  - **mocks/**: Dados de mocks para testes.
- **types/**: Definições de tipos TypeScript.
- **utils/**: Funções utilitárias.

### docs/

- **README.txt**: Documentação da aplicação.

### public/

- Arquivos públicos da aplicação.

### Configuração e Build

- **.gitignore**: Arquivos e diretórios ignorados pelo Git.
- **eslint.config.js**: Configuração do ESLint.
- **index.html**: Arquivo HTML principal.
- **package.json**: Dependências e scripts do projeto.
- **tsconfig.app.json**: Configuração do TypeScript para a aplicação.
- **tsconfig.json**: Configuração principal do TypeScript.
- **tsconfig.node.json**: Configuração do TypeScript para Node.js.
- **vite.config.ts**: Configuração do Vite.

### Raiz do Projeto

- **README.md**: Documentação principal do projeto.

## Vite

O Vite é uma ferramenta de build e servidor de desenvolvimento frontend que se destaca pela sua extrema velocidade e simplicidade. Ele visa proporcionar uma experiência de desenvolvimento mais ágil e eficiente, principalmente para aplicações web modernas.

**Resumo sobre o Vite:**

- **Foco principal:** Desenvolvimento rápido e eficiente de aplicações frontend.
- **Agnóstico a frameworks:** Suporta diversos frameworks JavaScript, como React, Vue, Svelte, entre outros.
- **Servidor de desenvolvimento extremamente rápido:** Utiliza o ES modules nativo para servir o código fonte durante o desenvolvimento, o que resulta em um tempo de inicialização e hot module replacement (HMR) muito rápidos.
- **Build otimizado para produção:** Usa o Rollup para gerar bundles otimizados para produção, com code splitting e outras otimizações de desempenho.
- **Configuração simplificada:** Oferece uma configuração padrão que funciona muito bem na maioria dos casos, com a possibilidade de customização quando necessário.

## Bibliotecas Usadas neste Template

- Axios: Uso de Requsições HTTP com Qualidade e Facilidade
- Styles-Components: Facilidade de Estilizar Componentes, com qualidade de desenvolvimento

## OBS

Este template está em processo de construção e nem sei quando ficará pronto, mas conforme meus estudos avancem, continuarei atualizando o template.
