import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import Card from '../ui/Card'
const COLORS = ['#34d399', '#fbbf24', '#a78bfa', '#fb7185']
export default function PaymentStatusChart({ data }) {
  return (
    <Card className="h-[340px]">
      <div className="mb-5"><h3 className="text-xl font-black">Status de pagamentos</h3><p className="mt-1 text-sm text-slate-400">Distribuição dos recebimentos</p></div>
      <ResponsiveContainer width="100%" height="60%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={58} outerRadius={90} paddingAngle={5}>
            {data.map((entry, index) => <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Tooltip contentStyle={{ background: '#0b1020', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16 }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-2">
        {data.map((item, index) => <div key={item.name} className="flex items-center gap-2 rounded-xl bg-white/[0.04] px-3 py-2 text-sm text-slate-300"><span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[index % COLORS.length] }} />{item.name}: {item.value}</div>)}
      </div>
    </Card>
  )
}
