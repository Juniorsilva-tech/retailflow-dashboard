import Input from '../ui/Input'
import Select from '../ui/Select'

export default function OrderFilters({ search, setSearch, status, setStatus }) {
  return (
    <div className="grid gap-3 md:grid-cols-[1fr_220px]">
      <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar pedido..." />
      <Select value={status} onChange={e => setStatus(e.target.value)}><option value="all">Todos os status</option><option value="novo">Novo</option><option value="em andamento">Em andamento</option><option value="concluído">Concluído</option><option value="cancelado">Cancelado</option></Select>
    </div>
  )
}
