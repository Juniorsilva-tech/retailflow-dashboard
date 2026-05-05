import { Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import OrderFilters from '../components/orders/OrderFilters'
import OrderForm from '../components/orders/OrderForm'
import OrderTable from '../components/orders/OrderTable'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import { useOrders } from '../hooks/useOrders'

export default function Orders() {
  const { orders, customers, addOrder, updateOrder, deleteOrder } = useOrders()
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [feedback, setFeedback] = useState('')

  const filtered = useMemo(() => orders.filter(order => {
    const text = `${order.title} ${order.description} ${order.customer?.name || ''}`.toLowerCase()
    return text.includes(search.toLowerCase()) && (status === 'all' || order.orderStatus === status)
  }), [orders, search, status])

  const closeModal = () => { setModalOpen(false); setEditing(null) }
  const submit = data => {
    if (editing) { updateOrder(editing.id, data); setFeedback('Pedido atualizado com sucesso.') }
    else { addOrder(data); setFeedback('Pedido criado com sucesso.') }
    closeModal()
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">Pedidos</p><h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">Operação de pedidos</h2><p className="mt-2 text-slate-400">Gerencie pedidos, status de entrega e status de pagamento.</p></div><Button onClick={() => setModalOpen(true)}><Plus size={18} /> Novo pedido</Button></div>
      {feedback && <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3 text-sm font-bold text-emerald-200">{feedback}</div>}
      <OrderFilters search={search} setSearch={setSearch} status={status} setStatus={setStatus} />
      <OrderTable orders={filtered} onEdit={order => { setEditing(order); setModalOpen(true) }} onDelete={deleteOrder} />
      <Modal open={modalOpen} title={editing ? 'Editar pedido' : 'Novo pedido'} onClose={closeModal}><OrderForm customers={customers} initialData={editing} onSubmit={submit} onCancel={closeModal} /></Modal>
    </div>
  )
}
