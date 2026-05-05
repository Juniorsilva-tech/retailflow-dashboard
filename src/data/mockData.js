export const initialCustomers = [
  { id: 'c1', name: 'Princessmel Modas', phone: '(24) 99262-5175', email: 'contato@princessmel.com', city: 'Angra dos Reis', status: 'vip', notes: 'Cliente recorrente com foco em moda, beleza e produtos cristãos.', createdAt: '2026-04-02' },
  { id: 'c2', name: 'Barbearia Alpha', phone: '(24) 98888-1000', email: 'alpha@barbearia.com', city: 'Angra dos Reis', status: 'ativo', notes: 'Precisa de landing page e controle simples de pagamentos.', createdAt: '2026-04-14' },
  { id: 'c3', name: 'Studio Bella', phone: '(24) 97777-9090', email: 'bella@studio.com', city: 'Paraty', status: 'inadimplente', notes: 'Possui pendência de pagamento.', createdAt: '2026-04-20' },
  { id: 'c4', name: 'Mercadinho Central', phone: '(24) 96666-8080', email: 'central@mercado.com', city: 'Angra dos Reis', status: 'ativo', notes: 'Cliente interessado em dashboard financeiro.', createdAt: '2026-04-28' },
]

export const initialOrders = [
  { id: 'o1', customerId: 'c1', title: 'Dashboard financeiro da loja', description: 'Sistema para acompanhar clientes, vendas e pagamentos.', totalAmount: 3200, orderStatus: 'em andamento', paymentStatus: 'parcial', orderDate: '2026-05-01', dueDate: '2026-05-22' },
  { id: 'o2', customerId: 'c2', title: 'Landing page premium', description: 'Página de conversão com CTA para WhatsApp.', totalAmount: 850, orderStatus: 'concluído', paymentStatus: 'pago', orderDate: '2026-04-24', dueDate: '2026-05-03' },
  { id: 'o3', customerId: 'c3', title: 'Site institucional', description: 'Site responsivo com galeria e contato.', totalAmount: 1200, orderStatus: 'novo', paymentStatus: 'atrasado', orderDate: '2026-04-18', dueDate: '2026-04-30' },
]

export const initialPayments = [
  { id: 'p1', customerId: 'c1', orderId: 'o1', totalAmount: 3200, paidAmount: 1600, paymentMethod: 'Pix', status: 'parcial', dueDate: '2026-05-22', paidAt: '', notes: 'Primeira parcela recebida.' },
  { id: 'p2', customerId: 'c2', orderId: 'o2', totalAmount: 850, paidAmount: 850, paymentMethod: 'Cartão', status: 'pago', dueDate: '2026-05-03', paidAt: '2026-05-02', notes: 'Pagamento finalizado.' },
  { id: 'p3', customerId: 'c3', orderId: 'o3', totalAmount: 1200, paidAmount: 0, paymentMethod: 'Boleto', status: 'atrasado', dueDate: '2026-04-30', paidAt: '', notes: 'Cliente precisa ser contatado.' },
]
