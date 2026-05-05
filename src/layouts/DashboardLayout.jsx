import { NavLink, Outlet } from 'react-router-dom'
import { BarChart3, CreditCard, LayoutDashboard, Menu, Settings, ShoppingBag, Users, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/clientes', label: 'Clientes', icon: Users },
  { to: '/pedidos', label: 'Pedidos', icon: ShoppingBag },
  { to: '/pagamentos', label: 'Pagamentos', icon: CreditCard },
  { to: '/relatorios', label: 'Relatórios', icon: BarChart3 },
  { to: '/configuracoes', label: 'Configurações', icon: Settings },
]

export default function DashboardLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,.12),transparent_30%)]" />
      <aside className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-white/10 bg-[#070b18]/95 p-4 backdrop-blur-2xl transition md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="mb-8 flex items-center justify-between">
          <div><p className="text-2xl font-black tracking-[-0.06em]">RetailFlow</p><p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Business OS</p></div>
          <button className="rounded-xl p-2 md:hidden" onClick={() => setOpen(false)}><X size={20} /></button>
        </div>
        <nav className="space-y-2">
          {links.map(link => {
            const Icon = link.icon
            return (
              <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition ${isActive ? 'bg-sky-400 text-slate-950 shadow-[0_0_45px_rgba(56,189,248,.25)]' : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'}`}>
                <Icon size={18} />{link.label}
              </NavLink>
            )
          })}
        </nav>
      </aside>
      <div className="relative z-10 md:pl-72">
        <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050816]/75 px-5 py-4 backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <button className="rounded-2xl border border-white/10 bg-white/[0.04] p-2 md:hidden" onClick={() => setOpen(true)}><Menu size={20} /></button>
            <div><p className="text-sm font-bold text-slate-400">Dashboard SaaS para pequenos negócios</p><h1 className="text-xl font-black tracking-[-0.04em]">Clientes, pedidos e pagamentos em um só lugar</h1></div>
            <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-300 sm:block">Demo local</div>
          </div>
        </header>
        <motion.main initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="p-5 md:p-8">
          <Outlet />
        </motion.main>
      </div>
    </div>
  )
}
