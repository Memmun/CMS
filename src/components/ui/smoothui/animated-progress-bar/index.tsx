import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

export interface AnimatedProgressBarProps {
  barClassName?: string;
  className?: string;
  color?: string;
  label?: string;
  labelClassName?: string;
  trackClassName?: string;
  value: number;
}

const MIN_PROGRESS_VALUE = 0;
const MAX_PROGRESS_VALUE = 100;

const SPRING = {
  type: 'spring' as const,
  damping: 14,
  mass: 0.8,
  stiffness: 120,
};

export default function AnimatedProgressBar({
  value,
  label,
  color = '#00d4e8',
  className,
  barClassName,
  labelClassName,
  trackClassName,
}: AnimatedProgressBarProps) {
  const shouldReduceMotion = useReducedMotion();
  const clamped = Math.max(MIN_PROGRESS_VALUE, Math.min(MAX_PROGRESS_VALUE, value));

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <div className={cn('mb-1 text-sm font-medium', labelClassName)}>{label}</div>
      )}
      <div
        className={cn(
          'relative h-[6px] w-full overflow-hidden rounded-full bg-[var(--surface-2)]',
          trackClassName,
        )}
      >
        <motion.div
          animate={{ width: `${clamped}%` }}
          className={cn('h-full rounded-full', barClassName)}
          initial={{ width: '0%' }}
          style={{ backgroundColor: color }}
          transition={shouldReduceMotion ? { duration: 0 } : SPRING}
        />
      </div>
    </div>
  );
}
