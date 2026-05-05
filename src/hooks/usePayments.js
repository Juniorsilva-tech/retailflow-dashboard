import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export function usePayments() {
  const context = useContext(DataContext)
  if (!context) throw new Error('usePayments deve ser usado dentro de DataProvider')
  return {
    payments: context.payments,
    customers: context.customers,
    orders: context.orders,
    addPayment: context.addPayment,
    updatePayment: context.updatePayment,
    deletePayment: context.deletePayment,
    markPaymentAsPaid: context.markPaymentAsPaid,
  }
}
