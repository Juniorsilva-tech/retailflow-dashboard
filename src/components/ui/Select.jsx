export default function Select({ label, children, className = '', ...props }) {
  return (
    <label className="block">
      {label && <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{label}</span>}
      <select className={`w-full rounded-2xl border border-white/10 bg-[#0b1020] px-4 py-3 text-sm text-white outline-none transition focus:border-sky-300/50 ${className}`} {...props}>{children}</select>
    </label>
  )
}
