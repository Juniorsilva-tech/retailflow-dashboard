import { Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import PaymentFilters from '../components/payments/PaymentFilters'
import PaymentForm from '../components/payments/PaymentForm'
import PaymentTable from '../components/payments/PaymentTable'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import { usePayments } from '../hooks/usePayments'

export default function Payments() {
  const { payments, customers, orders, addPayment, updatePayment, deletePayment, markPaymentAsPaid } = usePayments()
  const [status, setStatus] = useState('all')
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [feedback, setFeedback] = useState('')

  const filtered = useMemo(() => payments.filter(payment => status === 'all' || payment.status === status), [payments, status])
  const closeModal = () => { setModalOpen(false); setEditing(null) }
  const submit = data => {
    if (editing) { updatePayment(editing.id, data); setFeedback('Pagamento atualizado com sucesso.') }
    else { addPayment(data); setFeedback('Pagamento criado com sucesso.') }
    closeModal()
  }
  const markPaid = id => { markPaymentAsPaid(id); setFeedback('Pagamento marcado como pago.') }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">Pagamentos</p><h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">Controle financeiro</h2><p className="mt-2 text-slate-400">Acompanhe valores pagos, pendentes, parciais e atrasados.</p></div><Button onClick={() => setModalOpen(true)}><Plus size={18} /> Novo pagamento</Button></div>
      {feedback && <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3 text-sm font-bold text-emerald-200">{feedback}</div>}
      <PaymentFilters status={status} setStatus={setStatus} />
      <PaymentTable payments={filtered} onEdit={payment => { setEditing(payment); setModalOpen(true) }} onDelete={deletePayment} onMarkPaid={markPaid} />
      <Modal open={modalOpen} title={editing ? 'Editar pagamento' : 'Novo pagamento'} onClose={closeModal}><PaymentForm customers={customers} orders={orders} initialData={editing} onSubmit={submit} onCancel={closeModal} /></Modal>
    </div>
  )
}
