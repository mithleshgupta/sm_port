import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export function GlassCard({ children, className = '', hover = true, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -6, boxShadow: '0 24px 60px rgba(244,63,94,0.15)' } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'rounded-2xl glass p-8 relative overflow-hidden',
        'border border-white/[0.12] transition-colors duration-300 hover:border-rose/30',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export function GradientCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'rounded-2xl p-[1.5px] relative overflow-hidden group',
        'bg-gradient-to-br from-rose via-pink to-violet',
        className
      )}
    >
      <div className="rounded-2xl bg-dark2 p-7 h-full relative z-10 group-hover:bg-dark3 transition-colors duration-300">
        {children}
      </div>
    </motion.div>
  )
}
