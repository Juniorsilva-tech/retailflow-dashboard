import Card from '../components/ui/Card'

export default function Settings() {
  return (
    <div className="space-y-6">
      <div><p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">Configurações</p><h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">Próximos recursos</h2><p className="mt-2 text-slate-400">Esta área fica reservada para autenticação, Supabase e preferências do negócio.</p></div>
      <Card>
        <h3 className="text-2xl font-black">Roadmap</h3>
        <ul className="mt-5 space-y-3 text-slate-300">
          <li>• Conectar Supabase Database</li>
          <li>• Adicionar Supabase Auth</li>
          <li>• Criar perfil do negócio</li>
          <li>• Exportar relatórios</li>
          <li>• Criar notificações de cobrança</li>
        </ul>
      </Card>
    </div>
  )
}
