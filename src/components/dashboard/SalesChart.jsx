import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Card from '../ui/Card'
import { formatCurrency } from '../../utils/formatCurrency'

export default function SalesChart({ data }) {
  return (
    <Card className="h-[340px]">
      <div className="mb-5">
        <h3 className="text-xl font-black">Vendas por mês</h3>
        <p className="mt-1 text-sm text-slate-400">Evolução de receita recebida</p>
      </div>
      <ResponsiveContainer width="100%" height="78%">
        <AreaChart data={data}>
          <defs><linearGradient id="sales" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#38bdf8" stopOpacity={0.45} /><stop offset="95%" stopColor="#38bdf8" stopOpacity={0} /></linearGradient></defs>
          <CartesianGrid stroke="rgba(255,255,255,.07)" />
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" tickFormatter={value => `R$${value}`} />
          <Tooltip formatter={value => formatCurrency(value)} contentStyle={{ background: '#0b1020', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16 }} />
          <Area type="monotone" dataKey="vendas" stroke="#38bdf8" fill="url(#sales)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
