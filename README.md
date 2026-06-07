# RetailFlow Dashboard

Demo funcional de dashboard SaaS desenvolvida para demonstrar habilidades em **React**, **CRUD**, **interfaces modernas**, **dashboards responsivos** e experiência de produto aplicada a pequenos negócios.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwind-css&logoColor=38BDF8)
![Recharts](https://img.shields.io/badge/Recharts-111827?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## Live Demo

**Deploy:** https://retailflow-dashboard.vercel.app  
**GitHub:** https://github.com/Juniorsilva-tech/retailflow-dashboard

![Dashboard](out_dash.png)
![Customer map](out_map_check.png)

---

## Sobre o Projeto

O **RetailFlow Dashboard** é uma demo técnica e visual criada para simular um dashboard SaaS moderno voltado para pequenos negócios.

O objetivo principal do projeto não é representar um produto comercial finalizado, mas sim demonstrar:

- construção de interfaces profissionais;
- organização de dashboards;
- experiência de produto;
- CRUDs completos;
- componentização em React;
- responsividade;
- UI moderna;
- organização de aplicações Front-end.

A aplicação atualmente funciona como uma **demo funcional premium**, utilizando dados simulados e persistência local via `localStorage`.

---

## Natureza da Aplicação

Este projeto deve ser entendido como uma **demo funcional de Front-end**.

Ele foi criado para demonstrar capacidade técnica, experiência visual e construção de interfaces modernas.

Atualmente:

- não possui backend real;
- não possui autenticação;
- utiliza persistência local;
- não é um SaaS comercial finalizado.

Mesmo assim, a aplicação foi construída buscando transmitir sensação de produto real e experiência moderna de dashboard.

---

## Objetivo Profissional

Este projeto foi desenvolvido para demonstrar capacidade prática em:

- Front-end React;
- dashboards SaaS;
- CRUD completo;
- UI/UX;
- componentização;
- tabelas, filtros e modais;
- organização de aplicações web modernas.

Também serve como demonstração de potencial para freelas, vagas e futuros projetos comerciais.

---

## Funcionalidades

### Dashboard

- Métricas principais
- Receita recebida
- Valor pendente
- Pagamentos atrasados
- Ticket médio
- Gráficos financeiros
- Pedidos recentes
- Mapa regional de clientes
- Alertas financeiros

### Clientes

- Criar clientes
- Editar clientes
- Excluir clientes
- Busca dinâmica
- Filtros por status
- Badges visuais

### Pedidos

- CRUD de pedidos
- Status de pedido
- Integração com clientes
- Controle de pagamentos
- Filtros dinâmicos

### Pagamentos

- Controle financeiro
- Marcar pagamentos como pagos
- Detecção de status
- Valor restante
- CRUD de pagamentos

### Relatórios

- Receita recebida
- Receita pendente
- Clientes inadimplentes
- Top clientes
- Métricas do mês
- Relatórios visuais

---

## Stack Utilizada

### Front-end

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React
- Recharts

### Persistência

- localStorage

### Deploy e Versionamento

- Vercel
- Git
- GitHub

---

## Persistência Local

Os dados da aplicação são persistidos localmente usando `localStorage`.

Isso permite:

- criar registros;
- editar registros;
- excluir registros;
- manter dados salvos após atualização da página.

A proposta atual é demonstrar arquitetura de interface e experiência de produto antes da integração com backend real.

---

## Estrutura do Projeto

```txt
retailflow-dashboard/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── context/
    ├── data/
    ├── hooks/
    ├── layouts/
    ├── pages/
    ├── components/
    └── utils/
```

---

## Rodando Localmente

```bash
# Clone o repositório
git clone https://github.com/Juniorsilva-tech/retailflow-dashboard.git

# Entre na pasta
cd retailflow-dashboard

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

Acesse:

```txt
http://localhost:5173
```

---

## Build de Produção

```bash
npm run build
npm run preview
```

---

## Próximos Passos

- Integração com Supabase.
- Autenticação de usuários.
- Rotas privadas.
- Exportação de relatórios.
- React Hook Form + Zod.
- Página individual de clientes.
- Melhorias em responsividade.
- Dados dinâmicos reais.
- Estudos de caso no portfólio.

---

## Observação

Esta aplicação ainda não é um SaaS comercial completo.

A proposta atual é demonstrar:

- qualidade visual;
- estrutura de Front-end;
- experiência de produto;
- organização de código;
- capacidade técnica para vagas e freelas.

---

## Contato

**Maurício da Conceição Silva Júnior**

- GitHub: https://github.com/Juniorsilva-tech
- Email: mauriciojr07052006@gmail.com
- WhatsApp: +55 24 99262-5175

---

## Licença

Projeto desenvolvido para fins de portfólio, estudo e demonstração profissional.
