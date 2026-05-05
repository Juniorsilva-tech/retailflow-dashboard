import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Select from '../ui/Select'

const empty = { customerId: '', title: '', description: '', totalAmount: 0, orderStatus: 'novo', paymentStatus: 'pendente', orderDate: new Date().toISOString().slice(0, 10), dueDate: '' }

export default function OrderForm({ customers, initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState(empty)
  useEffect(() => { setForm(initialData || { ...empty, customerId: customers[0]?.id || '' }) }, [initialData, customers])
  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }))
  const handleSubmit = event => { event.preventDefault(); if (!form.customerId || !form.title.trim()) return; onSubmit(form) }
  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <Select label="Cliente" value={form.customerId} onChange={e => update('customerId', e.target.value)} required>{customers.map(customer => <option key={customer.id} value={customer.id}>{customer.name}</option>)}</Select>
      <Input label="Título" value={form.title} onChange={e => update('title', e.target.value)} placeholder="Ex: Landing page premium" required />
      <Input label="Descrição" value={form.description} onChange={e => update('description', e.target.value)} placeholder="Resumo do pedido" />
      <div className="grid gap-4 sm:grid-cols-2"><Input label="Valor total" type="number" min="0" value={form.totalAmount} onChange={e => update('totalAmount', e.target.value)} /><Input label="Vencimento" type="date" value={form.dueDate} onChange={e => update('dueDate', e.target.value)} /></div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Select label="Status do pedido" value={form.orderStatus} onChange={e => update('orderStatus', e.target.value)}><option value="novo">Novo</option><option value="em andamento">Em andamento</option><option value="concluído">Concluído</option><option value="cancelado">Cancelado</option></Select>
        <Select label="Status do pagamento" value={form.paymentStatus} onChange={e => update('paymentStatus', e.target.value)}><option value="pendente">Pendente</option><option value="parcial">Parcial</option><option value="pago">Pago</option><option value="atrasado">Atrasado</option></Select>
      </div>
      <div className="flex justify-end gap-3"><Button type="button" variant="secondary" onClick={onCancel}>Cancelar</Button><Button type="submit">Salvar pedido</Button></div>
    </form>
  )
}
