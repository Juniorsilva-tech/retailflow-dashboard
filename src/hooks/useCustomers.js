import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export function useCustomers() {
  const context = useContext(DataContext)
  if (!context) throw new Error('useCustomers deve ser usado dentro de DataProvider')
  return {
    customers: context.customers,
    addCustomer: context.addCustomer,
    updateCustomer: context.updateCustomer,
    deleteCustomer: context.deleteCustomer,
  }
}
