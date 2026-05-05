# RetailFlow Dashboard

Dashboard SaaS premium para pequenos negócios controlarem **clientes, pedidos, pagamentos e cobranças**.

🔗 **Deploy:** https://retailflow-dashboard.vercel.app  
👨‍💻 **Autor:** Maurício Júnior  
📌 **Status:** Demo funcional premium com dados simulados e persistência local

---

## Sobre o projeto

O **RetailFlow** é uma demonstração funcional de um dashboard SaaS para pequenos negócios. Ele foi criado como projeto de portfólio Front-end React para mostrar domínio de interface, organização de código, CRUD, responsividade, dashboards e experiência de produto.

A versão atual usa **dados simulados + localStorage**, ou seja: os dados podem ser criados, editados e removidos no navegador e continuam salvos localmente após atualizar a página.

O objetivo desta versão não é ser um SaaS completo ainda, mas sim uma **demo premium, visualmente forte e tecnicamente organizada**, pronta para evoluir para Supabase, autenticação e banco real.

---

## Objetivo profissional

Este projeto foi desenvolvido para demonstrar habilidades importantes para vagas de **estágio/primeira oportunidade como Front-end React** e também para servir como vitrine de freelas para pequenos negócios.

Ele mostra capacidade de construir:

- interfaces SaaS modernas;
- dashboards responsivos;
- CRUD funcional;
- tabelas, filtros e modais;
- visual premium dark mode;
- gráficos e métricas;
- experiência de produto aplicada a negócio real.

---

## Stack utilizada

- **React**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Framer Motion**
- **Lucide React**
- **Recharts**
- **localStorage**
- **Vercel**
- **Git/GitHub**

---

## Funcionalidades

### Dashboard

- Cards de métricas principais
- Receita recebida
- Valor pendente
- Pagamentos pendentes
- Pagamentos atrasados
- Ticket médio
- Gráfico de vendas por mês
- Gráfico de status de pagamentos
- Pedidos recentes
- Atenção financeira
- Mapa de clientes por região

### Clientes

- Criar cliente
- Editar cliente
- Excluir cliente
- Buscar cliente
- Filtrar por status
- Status visual com badges

### Pedidos

- Criar pedido
- Editar pedido
- Excluir pedido
- Filtrar pedidos
- Relacionar pedido com cliente
- Status de pedido e pagamento

### Pagamentos

- Criar pagamento
- Editar pagamento
- Excluir pagamento
- Marcar como pago
- Calcular valor restante
- Detectar status de pagamento

### Relatórios

- Valor recebido
- Valor pendente
- Clientes inadimplentes
- Pedidos do mês
- Top clientes por valor
- Pedidos por status

---

## Persistência local

A versão atual salva os dados no navegador usando `localStorage`.

Isso significa que a demo funciona sem backend e sem consumir projeto do Supabase, mas ainda permite uma experiência mais próxima de um sistema real.

Dados persistidos localmente:

- clientes;
- pedidos;
- pagamentos.

---

## Estrutura do projeto

```txt
retailflow-dashboard/
├── index.html
├── package.json
├── README.md
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── context/
│   │   └── DataContext.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── components/
│   │   ├── ui/
│   │   ├── dashboard/
│   │   ├── customers/
│   │   ├── orders/
│   │   └── payments/
│   └── utils/
```

---

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse:

```txt
http://localhost:5173
```

---

## Build de produção

```bash
npm run build
```

Visualizar build local:

```bash
npm run preview
```

---

## Roadmap

Próximos passos planejados:

- adicionar prints reais no README;
- melhorar mapa com dados dinâmicos dos clientes;
- adicionar página de detalhes do cliente;
- adicionar validação com React Hook Form + Zod;
- conectar Supabase Database;
- adicionar Supabase Auth;
- proteger rotas privadas;
- exportar relatórios;
- criar estudo de caso no portfólio.

---

## Observação

Esta é uma **demo funcional premium**, não um SaaS comercial completo em produção.

A proposta é demonstrar interface, fluxo, organização e potencial de produto. A integração com backend real está planejada para uma próxima versão.

---

Desenvolvido por **Maurício Júnior**.
