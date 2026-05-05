import { useContext, useMemo } from 'react'
import { DataContext } from '../context/DataContext'

export function useDashboardMetrics() {
  const { customers, orders, payments } = useContext(DataContext)

  return useMemo(() => {
    const totalRevenue = payments.reduce((sum, payment) => sum + Number(payment.paidAmount || 0), 0)
    const pendingAmount = payments.reduce((sum, payment) => sum + Number(payment.remainingAmount || 0), 0)
    const pendingPayments = payments.filter(payment => ['pendente', 'parcial'].includes(payment.status)).length
    const latePayments = payments.filter(payment => payment.status === 'atrasado').length
    const completedOrders = orders.filter(order => order.orderStatus === 'concluído').length
    const averageTicket = orders.length ? orders.reduce((sum, order) => sum + Number(order.totalAmount || 0), 0) / orders.length : 0

    const salesByMonth = [
      { month: 'Jan', vendas: 1200 },
      { month: 'Fev', vendas: 2100 },
      { month: 'Mar', vendas: 1800 },
      { month: 'Abr', vendas: 3200 },
      { month: 'Mai', vendas: totalRevenue || 2450 },
    ]

    const paymentStatus = [
      { name: 'Pago', value: payments.filter(payment => payment.status === 'pago').length },
      { name: 'Pendente', value: payments.filter(payment => payment.status === 'pendente').length },
      { name: 'Parcial', value: payments.filter(payment => payment.status === 'parcial').length },
      { name: 'Atrasado', value: payments.filter(payment => payment.status === 'atrasado').length },
    ]

    return {
      totalCustomers: customers.length,
      totalRevenue,
      pendingAmount,
      pendingPayments,
      latePayments,
      completedOrders,
      averageTicket,
      salesByMonth,
      paymentStatus,
      recentOrders: orders.slice(0, 5),
      attentionPayments: payments.filter(payment => payment.status !== 'pago').slice(0, 5),
    }
  }, [customers, orders, payments])
}
