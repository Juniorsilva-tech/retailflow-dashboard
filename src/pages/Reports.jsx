import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { useContext, useMemo } from 'react'
import { DataContext } from '../context/DataContext'
import { formatCurrency } from '../utils/formatCurrency'

export default function Reports() {
  const { customers, orders, payments } = useContext(DataContext)

  const data = useMemo(() => {
    const delinquent = customers.filter(customer => customer.status === 'inadimplente')
    const monthOrders = orders.filter(order => order.orderDate?.startsWith('2026-05'))
    const received = payments.reduce((sum, payment) => sum + Number(payment.paidAmount || 0), 0)
    const pending = payments.reduce((sum, payment) => sum + Number(payment.remainingAmount || 0), 0)
    const statusCount = orders.reduce((acc, order) => {
      acc[order.orderStatus] = (acc[order.orderStatus] || 0) + 1
      return acc
    }, {})
    const topCustomers = customers.map(customer => {
      const total = payments.filter(payment => payment.customerId === customer.id).reduce((sum, payment) => sum + Number(payment.totalAmount || 0), 0)
      return { ...customer, total }
    }).sort((a, b) => b.total - a.total).slice(0, 5)
    return { delinquent, monthOrders, received, pending, statusCount, topCustomers }
  }, [customers, orders, payments])

  return (
    <div className="space-y-6">
      <div><p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">Relatórios</p><h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">Leitura rápida do negócio</h2><p className="mt-2 text-slate-400">Indicadores simples calculados com base nos dados locais.</p></div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card><p className="text-sm text-slate-400">Recebido</p><p className="mt-3 text-3xl font-black">{formatCurrency(data.received)}</p></Card>
        <Card><p className="text-sm text-slate-400">Pendente</p><p className="mt-3 text-3xl font-black">{formatCurrency(data.pending)}</p></Card>
        <Card><p className="text-sm text-slate-400">Pedidos do mês</p><p className="mt-3 text-3xl font-black">{data.monthOrders.length}</p></Card>
        <Card><p className="text-sm text-slate-400">Inadimplentes</p><p className="mt-3 text-3xl font-black">{data.delinquent.length}</p></Card>
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <h3 className="text-xl font-black">Top clientes por valor</h3>
          <div className="mt-5 space-y-3">
            {data.topCustomers.map(customer => (
              <div key={customer.id} className="flex items-center justify-between rounded-2xl bg-white/[0.035] p-4">
                <div><p className="font-bold">{customer.name}</p><p className="text-sm text-slate-400">{customer.city}</p></div>
                <p className="font-black text-sky-200">{formatCurrency(customer.total)}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="text-xl font-black">Pedidos por status</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {Object.entries(data.statusCount).map(([status, count]) => (
              <div key={status} className="rounded-2xl bg-white/[0.035] p-4"><Badge>{status}</Badge><p className="mt-3 text-3xl font-black">{count}</p></div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
