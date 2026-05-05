export default function Input({ label, className = '', ...props }) {
  return (
    <label className="block">
      {label && <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{label}</span>}
      <input className={`w-full rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/50 focus:bg-white/[0.07] ${className}`} {...props} />
    </label>
  )
}
