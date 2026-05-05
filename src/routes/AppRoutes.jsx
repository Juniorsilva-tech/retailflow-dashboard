import { Route, Routes } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Orders from '../pages/Orders'
import Payments from '../pages/Payments'
import Reports from '../pages/Reports'
import Settings from '../pages/Settings'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clientes" element={<Customers />} />
        <Route path="/pedidos" element={<Orders />} />
        <Route path="/pagamentos" element={<Payments />} />
        <Route path="/relatorios" element={<Reports />} />
        <Route path="/configuracoes" element={<Settings />} />
      </Route>
    </Routes>
  )
}
