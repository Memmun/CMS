import { useMotionValue, motion, useMotionTemplate } from 'motion/react';
import { useState, type MouseEvent as ReactMouseEvent } from 'react';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import { cn } from '@/lib/utils';

type SpotlightOptions = {
  radius?: number;
  color?: string;
  revealColors?: number[][];
};

export function useCardSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const handlers = {
    onMouseMove: (event: ReactMouseEvent<HTMLElement>) => {
      const { left, top } = event.currentTarget.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false),
  };

  return { mouseX, mouseY, isHovering, handlers };
}

export function CardSpotlightOverlay({
  mouseX,
  mouseY,
  isHovering,
  radius = 350,
  color = '#262626',
  revealColors = [
    [59, 130, 246],
    [139, 92, 246],
  ] as number[][],
  className,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  isHovering: boolean;
  className?: string;
} & SpotlightOptions) {
  const maskImage = useMotionTemplate`
    radial-gradient(
      ${radius}px circle at ${mouseX}px ${mouseY}px,
      white,
      transparent 80%
    )
  `;

  return (
    <motion.div
      className={cn(
        'module-spotlight-layer pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300',
        isHovering && 'opacity-100',
        className,
      )}
      style={{
        backgroundColor: color,
        maskImage,
        WebkitMaskImage: maskImage,
      }}
    >
      {isHovering && (
        <CanvasRevealEffect
          animationSpeed={5}
          containerClassName="bg-transparent absolute inset-0 pointer-events-none h-full w-full"
          colors={revealColors}
          dotSize={3}
          showGradient={false}
        />
      )}
    </motion.div>
  );
}

export const CardSpotlight = ({
  children,
  radius = 350,
  color = '#262626',
  revealColors = [
    [59, 130, 246],
    [139, 92, 246],
  ] as number[][],
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  revealColors?: number[][];
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const { mouseX, mouseY, isHovering, handlers } = useCardSpotlight();

  return (
    <div
      className={cn(
        'group/spotlight relative rounded-md border border-neutral-800 bg-black p-10 dark:border-neutral-800',
        className,
      )}
      {...handlers}
      {...props}
    >
      <CardSpotlightOverlay
        mouseX={mouseX}
        mouseY={mouseY}
        isHovering={isHovering}
        radius={radius}
        color={color}
        revealColors={revealColors}
        className="-inset-px z-0 rounded-md"
      />
      {children}
    </div>
  );
};
