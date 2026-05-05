import { motion } from 'framer-motion'
export default function Card({ children, className = '' }) {
  return <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }} className={`rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-5 shadow-glow backdrop-blur-xl ${className}`}>{children}</motion.div>
}
