import { Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import CustomerFilters from '../components/customers/CustomerFilters'
import CustomerForm from '../components/customers/CustomerForm'
import CustomerTable from '../components/customers/CustomerTable'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import { useCustomers } from '../hooks/useCustomers'

export default function Customers() {
  const { customers, addCustomer, updateCustomer, deleteCustomer } = useCustomers()
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [feedback, setFeedback] = useState('')

  const filtered = useMemo(() => customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = status === 'all' || customer.status === status
    return matchesSearch && matchesStatus
  }), [customers, search, status])

  const closeModal = () => { setModalOpen(false); setEditing(null) }
  const submit = data => {
    if (editing) { updateCustomer(editing.id, data); setFeedback('Cliente atualizado com sucesso.') }
    else { addCustomer(data); setFeedback('Cliente criado com sucesso.') }
    closeModal()
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">Clientes</p><h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">Base de clientes</h2><p className="mt-2 text-slate-400">Cadastre, filtre e acompanhe clientes ativos, VIPs e inadimplentes.</p></div><Button onClick={() => setModalOpen(true)}><Plus size={18} /> Novo cliente</Button></div>
      {feedback && <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3 text-sm font-bold text-emerald-200">{feedback}</div>}
      <CustomerFilters search={search} setSearch={setSearch} status={status} setStatus={setStatus} />
      <CustomerTable customers={filtered} onEdit={customer => { setEditing(customer); setModalOpen(true) }} onDelete={deleteCustomer} />
      <Modal open={modalOpen} title={editing ? 'Editar cliente' : 'Novo cliente'} onClose={closeModal}><CustomerForm initialData={editing} onSubmit={submit} onCancel={closeModal} /></Modal>
    </div>
  )
}
