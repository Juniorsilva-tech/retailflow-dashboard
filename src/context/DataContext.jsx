import { createContext, useEffect, useMemo, useState } from 'react'
import { initialCustomers, initialOrders, initialPayments } from '../data/mockData'
import { calculatePaymentStatus, remainingAmount } from '../utils/calculatePaymentStatus'

export const DataContext = createContext(null)

const STORAGE_KEYS = {
  customers: 'retailflow_customers_v1',
  orders: 'retailflow_orders_v1',
  payments: 'retailflow_payments_v1',
}

function uid(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`
}

function loadFromStorage(key, fallback) {
  if (typeof window === 'undefined') return fallback

  try {
    const stored = window.localStorage.getItem(key)
    return stored ? JSON.parse(stored) : fallback
  } catch (error) {
    return fallback
  }
}

function saveToStorage(key, value) {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.warn(`RetailFlow: não foi possível salvar ${key} no localStorage.`)
  }
}

export function DataProvider({ children }) {
  const [customers, setCustomers] = useState(() => loadFromStorage(STORAGE_KEYS.customers, initialCustomers))
  const [orders, setOrders] = useState(() => loadFromStorage(STORAGE_KEYS.orders, initialOrders))
  const [payments, setPayments] = useState(() => loadFromStorage(STORAGE_KEYS.payments, initialPayments))

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.customers, customers)
  }, [customers])

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.orders, orders)
  }, [orders])

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.payments, payments)
  }, [payments])

  const addCustomer = data => {
    const customer = { id: uid('c'), createdAt: new Date().toISOString().slice(0, 10), ...data }
    setCustomers(prev => [customer, ...prev])
    return customer
  }

  const updateCustomer = (id, data) => setCustomers(prev => prev.map(item => (item.id === id ? { ...item, ...data } : item)))

  const deleteCustomer = id => {
    setCustomers(prev => prev.filter(item => item.id !== id))
    setOrders(prev => prev.filter(item => item.customerId !== id))
    setPayments(prev => prev.filter(item => item.customerId !== id))
  }

  const addOrder = data => {
    const order = { id: uid('o'), ...data, totalAmount: Number(data.totalAmount || 0) }
    setOrders(prev => [order, ...prev])
    return order
  }

  const updateOrder = (id, data) => setOrders(prev => prev.map(item => (item.id === id ? { ...item, ...data, totalAmount: Number(data.totalAmount || 0) } : item)))

  const deleteOrder = id => {
    setOrders(prev => prev.filter(item => item.id !== id))
    setPayments(prev => prev.filter(item => item.orderId !== id))
  }

  const addPayment = data => {
    const payment = { id: uid('p'), ...data, totalAmount: Number(data.totalAmount || 0), paidAmount: Number(data.paidAmount || 0) }
    payment.status = calculatePaymentStatus(payment)
    setPayments(prev => [payment, ...prev])
    return payment
  }

  const updatePayment = (id, data) => {
    setPayments(prev => prev.map(item => {
      if (item.id !== id) return item
      const updated = { ...item, ...data, totalAmount: Number(data.totalAmount ?? item.totalAmount), paidAmount: Number(data.paidAmount ?? item.paidAmount) }
      return { ...updated, status: calculatePaymentStatus(updated) }
    }))
  }

  const deletePayment = id => setPayments(prev => prev.filter(item => item.id !== id))

  const markPaymentAsPaid = id => {
    setPayments(prev => prev.map(item => item.id === id ? { ...item, paidAmount: Number(item.totalAmount || 0), paidAt: new Date().toISOString().slice(0, 10), status: 'pago' } : item))
  }

  const resetDemoData = () => {
    setCustomers(initialCustomers)
    setOrders(initialOrders)
    setPayments(initialPayments)
  }

  const enrichedOrders = useMemo(() => orders.map(order => ({ ...order, customer: customers.find(customer => customer.id === order.customerId) })), [orders, customers])

  const enrichedPayments = useMemo(() => payments.map(payment => ({
    ...payment,
    remainingAmount: remainingAmount(payment),
    customer: customers.find(customer => customer.id === payment.customerId),
    order: orders.find(order => order.id === payment.orderId),
  })), [payments, customers, orders])

  return (
    <DataContext.Provider value={{
      customers,
      orders: enrichedOrders,
      rawOrders: orders,
      payments: enrichedPayments,
      rawPayments: payments,
      addCustomer,
      updateCustomer,
      deleteCustomer,
      addOrder,
      updateOrder,
      deleteOrder,
      addPayment,
      updatePayment,
      deletePayment,
      markPaymentAsPaid,
      resetDemoData,
    }}>
      {children}
    </DataContext.Provider>
  )
}
