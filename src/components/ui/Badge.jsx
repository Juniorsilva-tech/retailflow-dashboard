const colors = {
  ativo: 'bg-emerald-400/12 text-emerald-200 border-emerald-300/20',
  vip: 'bg-sky-400/12 text-sky-200 border-sky-300/20',
  inativo: 'bg-slate-400/12 text-slate-200 border-slate-300/20',
  inadimplente: 'bg-rose-400/12 text-rose-200 border-rose-300/20',
  novo: 'bg-sky-400/12 text-sky-200 border-sky-300/20',
  'em andamento': 'bg-amber-400/12 text-amber-200 border-amber-300/20',
  concluído: 'bg-emerald-400/12 text-emerald-200 border-emerald-300/20',
  cancelado: 'bg-rose-400/12 text-rose-200 border-rose-300/20',
  pendente: 'bg-amber-400/12 text-amber-200 border-amber-300/20',
  parcial: 'bg-violet-400/12 text-violet-200 border-violet-300/20',
  pago: 'bg-emerald-400/12 text-emerald-200 border-emerald-300/20',
  atrasado: 'bg-rose-400/12 text-rose-200 border-rose-300/20',
}
export default function Badge({ children }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold capitalize ${colors[children] || colors.ativo}`}>{children}</span>
}
