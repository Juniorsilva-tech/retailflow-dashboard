import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export function useOrders() {
  const context = useContext(DataContext)
  if (!context) throw new Error('useOrders deve ser usado dentro de DataProvider')
  return {
    orders: context.orders,
    customers: context.customers,
    addOrder: context.addOrder,
    updateOrder: context.updateOrder,
    deleteOrder: context.deleteOrder,
  }
}
