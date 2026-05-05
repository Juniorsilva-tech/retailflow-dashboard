import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Select from '../ui/Select'

const empty = { name: '', phone: '', email: '', city: '', status: 'ativo', notes: '' }

export default function CustomerForm({ initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState(empty)
  useEffect(() => { setForm(initialData || empty) }, [initialData])
  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }))
  const handleSubmit = event => { event.preventDefault(); if (!form.name.trim()) return; onSubmit(form) }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <Input label="Nome" value={form.name} onChange={e => update('name', e.target.value)} placeholder="Nome do cliente" required />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Telefone" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="(00) 00000-0000" />
        <Input label="Email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="cliente@email.com" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Cidade" value={form.city} onChange={e => update('city', e.target.value)} placeholder="Cidade" />
        <Select label="Status" value={form.status} onChange={e => update('status', e.target.value)}>
          <option value="ativo">Ativo</option><option value="vip">VIP</option><option value="inativo">Inativo</option><option value="inadimplente">Inadimplente</option>
        </Select>
      </div>
      <label><span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Observações</span><textarea value={form.notes} onChange={e => update('notes', e.target.value)} className="min-h-28 w-full rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-white outline-none focus:border-sky-300/50" /></label>
      <div className="flex justify-end gap-3"><Button type="button" variant="secondary" onClick={onCancel}>Cancelar</Button><Button type="submit">Salvar cliente</Button></div>
    </form>
  )
}
