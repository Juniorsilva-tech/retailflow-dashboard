import { CheckCircle, Edit, Trash2 } from 'lucide-react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Table from '../ui/Table'
import EmptyState from '../ui/EmptyState'
import { formatCurrency } from '../../utils/formatCurrency'
import { formatDate } from '../../utils/formatDate'

export default function PaymentTable({ payments, onEdit, onDelete, onMarkPaid }) {
  if (!payments.length) return <EmptyState title="Nenhum pagamento encontrado" />
  return (
    <Table columns={['Cliente', 'Pedido', 'Valores', 'Status', 'Vencimento', 'Ações']} data={payments} renderRow={payment => (
      <tr key={payment.id}>
        <td className="px-4 py-4 font-bold">{payment.customer?.name || '-'}</td>
        <td className="px-4 py-4 text-sm text-slate-300">{payment.order?.title || '-'}</td>
        <td className="px-4 py-4 text-sm"><p className="font-black text-sky-200">{formatCurrency(payment.totalAmount)}</p><p className="text-slate-400">Pago: {formatCurrency(payment.paidAmount)}</p><p className="text-slate-500">Resta: {formatCurrency(payment.remainingAmount)}</p></td>
        <td className="px-4 py-4"><Badge>{payment.status}</Badge></td>
        <td className="px-4 py-4 text-sm text-slate-300">{formatDate(payment.dueDate)}</td>
        <td className="px-4 py-4"><div className="flex flex-wrap gap-2">{payment.status !== 'pago' && <Button variant="secondary" onClick={() => onMarkPaid(payment.id)}><CheckCircle size={16} /></Button>}<Button variant="secondary" onClick={() => onEdit(payment)}><Edit size={16} /></Button><Button variant="danger" onClick={() => onDelete(payment.id)}><Trash2 size={16} /></Button></div></td>
      </tr>
    )} />
  )
}
