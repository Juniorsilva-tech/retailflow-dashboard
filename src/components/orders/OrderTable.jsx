import { Edit, Trash2 } from 'lucide-react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Table from '../ui/Table'
import EmptyState from '../ui/EmptyState'
import { formatCurrency } from '../../utils/formatCurrency'
import { formatDate } from '../../utils/formatDate'

export default function OrderTable({ orders, onEdit, onDelete }) {
  if (!orders.length) return <EmptyState title="Nenhum pedido encontrado" />
  return (
    <Table columns={['Pedido', 'Cliente', 'Valor', 'Status', 'Vencimento', 'Ações']} data={orders} renderRow={order => (
      <tr key={order.id}>
        <td className="px-4 py-4"><p className="font-bold">{order.title}</p><p className="mt-1 text-xs text-slate-400">{order.description}</p></td>
        <td className="px-4 py-4 text-sm text-slate-300">{order.customer?.name || '-'}</td>
        <td className="px-4 py-4 font-black text-sky-200">{formatCurrency(order.totalAmount)}</td>
        <td className="px-4 py-4"><div className="flex flex-wrap gap-2"><Badge>{order.orderStatus}</Badge><Badge>{order.paymentStatus}</Badge></div></td>
        <td className="px-4 py-4 text-sm text-slate-300">{formatDate(order.dueDate)}</td>
        <td className="px-4 py-4"><div className="flex gap-2"><Button variant="secondary" onClick={() => onEdit(order)}><Edit size={16} /></Button><Button variant="danger" onClick={() => onDelete(order.id)}><Trash2 size={16} /></Button></div></td>
      </tr>
    )} />
  )
}
