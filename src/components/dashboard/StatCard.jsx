import Card from '../ui/Card'
import { formatCurrency } from '../../utils/formatCurrency'

export default function StatCard({ title, value, icon: Icon, money = false }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-400">{title}</p>
          <p className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">{money ? formatCurrency(value) : value}</p>
        </div>
        {Icon && <div className="rounded-2xl border border-sky-300/20 bg-sky-400/10 p-3 text-sky-200"><Icon size={20} /></div>}
      </div>
    </Card>
  )
}
