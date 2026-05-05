import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Select from '../ui/Select'

const empty = { customerId: '', orderId: '', totalAmount: 0, paidAmount: 0, paymentMethod: 'Pix', dueDate: '', notes: '' }

export default function PaymentForm({ customers, orders, initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState(empty)
  useEffect(() => { setForm(initialData || { ...empty, customerId: customers[0]?.id || '', orderId: orders[0]?.id || '', totalAmount: orders[0]?.totalAmount || 0 }) }, [initialData, customers, orders])
  function update(field, value) {
    const next = { ...form, [field]: value }
    if (field === 'orderId') {
      const order = orders.find(item => item.id === value)
      if (order) { next.customerId = order.customerId; next.totalAmount = order.totalAmount }
    }
    setForm(next)
  }
  const handleSubmit = event => { event.preventDefault(); if (!form.customerId || !form.orderId) return; onSubmit(form) }
  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <Select label="Pedido" value={form.orderId} onChange={e => update('orderId', e.target.value)} required>{orders.map(order => <option key={order.id} value={order.id}>{order.title}</option>)}</Select>
      <Select label="Cliente" value={form.customerId} onChange={e => update('customerId', e.target.value)} required>{customers.map(customer => <option key={customer.id} value={customer.id}>{customer.name}</option>)}</Select>
      <div className="grid gap-4 sm:grid-cols-2"><Input label="Valor total" type="number" min="0" value={form.totalAmount} onChange={e => update('totalAmount', e.target.value)} /><Input label="Valor pago" type="number" min="0" value={form.paidAmount} onChange={e => update('paidAmount', e.target.value)} /></div>
      <div className="grid gap-4 sm:grid-cols-2"><Select label="Forma de pagamento" value={form.paymentMethod} onChange={e => update('paymentMethod', e.target.value)}><option value="Pix">Pix</option><option value="Cartão">Cartão</option><option value="Dinheiro">Dinheiro</option><option value="Boleto">Boleto</option><option value="Outro">Outro</option></Select><Input label="Vencimento" type="date" value={form.dueDate} onChange={e => update('dueDate', e.target.value)} /></div>
      <Input label="Observações" value={form.notes} onChange={e => update('notes', e.target.value)} />
      <div className="flex justify-end gap-3"><Button type="button" variant="secondary" onClick={onCancel}>Cancelar</Button><Button type="submit">Salvar pagamento</Button></div>
    </form>
  )
}
