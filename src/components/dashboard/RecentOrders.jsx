import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { formatCurrency } from '../../utils/formatCurrency'

export default function RecentOrders({ orders }) {
  return (
    <Card>
      <h3 className="text-xl font-black">Pedidos recentes</h3>
      <div className="mt-5 space-y-3">
        {orders.map(order => (
          <div key={order.id} className="flex flex-col justify-between gap-3 rounded-2xl bg-white/[0.035] p-4 sm:flex-row sm:items-center">
            <div><p className="font-bold">{order.title}</p><p className="mt-1 text-sm text-slate-400">{order.customer?.name || 'Cliente removido'}</p></div>
            <div className="flex flex-wrap items-center gap-2"><Badge>{order.orderStatus}</Badge><span className="font-black text-sky-200">{formatCurrency(order.totalAmount)}</span></div>
          </div>
        ))}
      </div>
    </Card>
  )
}
