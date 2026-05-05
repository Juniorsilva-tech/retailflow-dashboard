import Select from '../ui/Select'
export default function PaymentFilters({ status, setStatus }) {
  return <div className="grid gap-3 md:grid-cols-[220px]"><Select value={status} onChange={e => setStatus(e.target.value)}><option value="all">Todos os status</option><option value="pendente">Pendente</option><option value="parcial">Parcial</option><option value="pago">Pago</option><option value="atrasado">Atrasado</option></Select></div>
}
