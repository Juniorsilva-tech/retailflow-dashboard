import { Inbox } from 'lucide-react'
export default function EmptyState({ title = 'Nada encontrado', text = 'Tente ajustar a busca ou criar um novo registro.' }) {
  return (
    <div className="rounded-[1.5rem] border border-dashed border-white/15 bg-white/[0.025] p-10 text-center">
      <Inbox className="mx-auto mb-4 text-slate-500" size={32} />
      <h3 className="text-lg font-black">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">{text}</p>
    </div>
  )
}
