import { MapPin, Navigation, RadioTower } from 'lucide-react'
import Card from '../ui/Card'

const regions = [
  { city: 'Angra dos Reis', state: 'RJ', clients: 2, orders: 3, x: '63%', y: '62%', tone: 'sky' },
  { city: 'Paraty', state: 'RJ', clients: 1, orders: 1, x: '58%', y: '70%', tone: 'violet' },
  { city: 'Rio de Janeiro', state: 'RJ', clients: 1, orders: 2, x: '70%', y: '58%', tone: 'emerald' },
  { city: 'São Paulo', state: 'SP', clients: 1, orders: 1, x: '49%', y: '77%', tone: 'amber' },
]

const toneClass = {
  sky: 'bg-sky-300 shadow-[0_0_30px_rgba(125,211,252,.85)]',
  violet: 'bg-violet-300 shadow-[0_0_30px_rgba(196,181,253,.85)]',
  emerald: 'bg-emerald-300 shadow-[0_0_30px_rgba(110,231,183,.85)]',
  amber: 'bg-amber-300 shadow-[0_0_30px_rgba(252,211,77,.85)]',
}

export default function CustomersRegionMap() {
  return (
    <Card className="overflow-hidden">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-black">Clientes por região</h3>
          <p className="mt-1 text-sm text-slate-400">Distribuição visual dos clientes ativos e oportunidades.</p>
        </div>
        <div className="rounded-2xl border border-sky-300/20 bg-sky-400/10 p-3 text-sky-200">
          <Navigation size={20} />
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[280px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#050816]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_45%,rgba(56,189,248,.22),transparent_34%),radial-gradient(circle_at_28%_72%,rgba(168,85,247,.16),transparent_28%)]" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:38px_38px]" />

          <div className="absolute left-[28%] top-[18%] h-[72%] w-[46%] rounded-[48%_42%_52%_46%] border border-sky-200/20 bg-sky-300/[0.035] shadow-[inset_0_0_80px_rgba(56,189,248,.08)]" />
          <div className="absolute left-[42%] top-[45%] h-[28%] w-[33%] rounded-[60%_46%_55%_42%] border border-violet-200/20 bg-violet-300/[0.035]" />
          <div className="absolute left-[55%] top-[52%] h-[24%] w-[27%] rounded-[45%_60%_38%_52%] border border-emerald-200/20 bg-emerald-300/[0.035]" />

          {regions.map(region => (
            <div key={region.city} className="absolute" style={{ left: region.x, top: region.y }}>
              <span className={`absolute -left-2 -top-2 h-4 w-4 rounded-full ${toneClass[region.tone]}`} />
              <span className="absolute -left-5 -top-5 h-10 w-10 animate-ping rounded-full border border-sky-200/30" />
            </div>
          ))}

          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-sky-200">
              <RadioTower size={14} /> Live region insight
            </div>
            <p className="mt-2 text-sm text-slate-300">Maior concentração atual em Angra dos Reis, com expansão visual para cidades próximas.</p>
          </div>
        </div>

        <div className="space-y-3">
          {regions.map(region => (
            <div key={region.city} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-black text-white">{region.city}</p>
                  <p className="mt-1 text-sm text-slate-400">{region.state}</p>
                </div>
                <MapPin className="text-sky-200" size={18} />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-black/25 p-3">
                  <p className="text-lg font-black">{region.clients}</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">clientes</p>
                </div>
                <div className="rounded-xl bg-black/25 p-3">
                  <p className="text-lg font-black">{region.orders}</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">pedidos</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
