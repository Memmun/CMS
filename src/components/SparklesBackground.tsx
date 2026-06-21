import { useEffect, useState } from 'react';
import { SparklesCore } from '@/components/ui/sparkles';

export function SparklesBackground() {
  const [enabled, setEnabled] = useState(false);
  const [density, setDensity] = useState(100);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 880px)').matches;
    setEnabled(!reduced);
    setDensity(mobile ? 55 : 100);
  }, []);

  if (!enabled) return null;

  return (
    <div className="sparkles-bg ready" aria-hidden="true">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={density}
        className="h-full w-full"
        particleColor="#FFFFFF"
        speed={4}
      />
    </div>
  );
}
