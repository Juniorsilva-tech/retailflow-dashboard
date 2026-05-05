export function calculatePaymentStatus(payment) {
  const total = Number(payment.totalAmount || 0)
  const paid = Number(payment.paidAmount || 0)
  const dueDate = payment.dueDate ? new Date(payment.dueDate) : null
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  if (paid >= total && total > 0) return 'pago'
  if (dueDate && dueDate < today) return 'atrasado'
  if (paid > 0 && paid < total) return 'parcial'
  return 'pendente'
}
export function remainingAmount(payment) {
  return Math.max(0, Number(payment.totalAmount || 0) - Number(payment.paidAmount || 0))
}
