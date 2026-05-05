import Input from '../ui/Input'
import Select from '../ui/Select'

export default function CustomerFilters({ search, setSearch, status, setStatus }) {
  return (
    <div className="grid gap-3 md:grid-cols-[1fr_220px]">
      <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar cliente por nome..." />
      <Select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="all">Todos os status</option><option value="ativo">Ativo</option><option value="vip">VIP</option><option value="inativo">Inativo</option><option value="inadimplente">Inadimplente</option>
      </Select>
    </div>
  )
}
