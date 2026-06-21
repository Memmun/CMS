import { SparklesCore } from '@/components/ui/sparkles';

export function SparklesBackground() {
  return (
    <div className="sparkles-bg" aria-hidden="true">
      <div className="sparkles-bg-inner">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="sparkles-core"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
