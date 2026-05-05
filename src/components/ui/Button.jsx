export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-sky-400 text-slate-950 hover:bg-white shadow-[0_0_45px_rgba(56,189,248,.22)]',
    secondary: 'border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]',
    danger: 'bg-rose-500/15 text-rose-200 border border-rose-400/20 hover:bg-rose-500/25',
    ghost: 'text-slate-300 hover:bg-white/[0.06]',
  }
  return <button className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`} {...props}>{children}</button>
}
