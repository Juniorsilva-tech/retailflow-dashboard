import { AlertTriangle, CheckCircle, CreditCard, DollarSign, Users } from 'lucide-react'
import StatCard from '../components/dashboard/StatCard'
import SalesChart from '../components/dashboard/SalesChart'
import PaymentStatusChart from '../components/dashboard/PaymentStatusChart'
import RecentOrders from '../components/dashboard/RecentOrders'
import CustomersRegionMap from '../components/dashboard/CustomersRegionMap'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { useDashboardMetrics } from '../hooks/useDashboardMetrics'
import { formatCurrency } from '../utils/formatCurrency'

export default function Dashboard() {
  const metrics = useDashboardMetrics()
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-300">
          Overview
        </p>
        <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-5xl">
          Visão geral do negócio
        </h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Acompanhe clientes, vendas, pedidos, pagamentos e presença regional no seu painel.
        </p>
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <StatCard title="Total de clientes" value={metrics.totalCustomers} icon={Users} />
        <StatCard title="Recebido" value={metrics.totalRevenue} icon={DollarSign} money />
        <StatCard title="Valor pendente" value={metrics.pendingAmount} icon={CreditCard} money />
        <StatCard title="Pagamentos pendentes" value={metrics.pendingPayments} icon={AlertTriangle} />
        <StatCard title="Pagamentos atrasados" value={metrics.latePayments} icon={AlertTriangle} />
        <StatCard title="Ticket médio" value={metrics.averageTicket} icon={CheckCircle} money />
      </section>
      <section className="grid gap-4 xl:grid-cols-[1.35fr_0.65fr]">
        <SalesChart data={metrics.salesByMonth} />
        <PaymentStatusChart data={metrics.paymentStatus} />
      </section>
      <CustomersRegionMap />
      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.75fr]">
        <RecentOrders orders={metrics.recentOrders} />
        <Card>
          <h3 className="text-xl font-black">Atenção financeira</h3>
          <div className="mt-5 space-y-3">
            {metrics.attentionPayments.map(payment => (
              <div key={payment.id} className="rounded-2xl bg-white/[0.04] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-bold">{payment.customer?.name}</p>
                    <p className="mt-1 text-sm text-slate-400">{payment.order?.title}</p>
                  </div>
                  <Badge>{payment.status}</Badge>
                </div>
                <p className="mt-3 text-sm font-black text-orange-300">
                  Restante: {formatCurrency(payment.remainingAmount)}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  )
}
