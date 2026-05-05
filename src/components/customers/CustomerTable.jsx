import { Edit, Trash2 } from 'lucide-react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Table from '../ui/Table'
import EmptyState from '../ui/EmptyState'

export default function CustomerTable({ customers, onEdit, onDelete }) {
  if (!customers.length) return <EmptyState title="Nenhum cliente encontrado" />
  return (
    <Table columns={['Cliente', 'Contato', 'Cidade', 'Status', 'Ações']} data={customers} renderRow={customer => (
      <tr key={customer.id}>
        <td className="px-4 py-4"><p className="font-bold">{customer.name}</p><p className="mt-1 text-xs text-slate-400">{customer.notes}</p></td>
        <td className="px-4 py-4 text-sm text-slate-300"><p>{customer.phone}</p><p className="text-slate-500">{customer.email}</p></td>
        <td className="px-4 py-4 text-sm text-slate-300">{customer.city}</td>
        <td className="px-4 py-4"><Badge>{customer.status}</Badge></td>
        <td className="px-4 py-4"><div className="flex gap-2"><Button variant="secondary" onClick={() => onEdit(customer)}><Edit size={16} /></Button><Button variant="danger" onClick={() => onDelete(customer.id)}><Trash2 size={16} /></Button></div></td>
      </tr>
    )} />
  )
}
