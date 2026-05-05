import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function Modal({ open, title, children, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b1020] p-6 shadow-2xl" initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 24 }}>
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-black tracking-[-0.04em]">{title}</h2>
              <button onClick={onClose} className="rounded-2xl border border-white/10 p-2 text-slate-300 transition hover:bg-white/10"><X size={18} /></button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
