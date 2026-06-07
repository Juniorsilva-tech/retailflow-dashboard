import { motion } from 'framer-motion'

export default function Card({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.35)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </motion.div>
  )
}
