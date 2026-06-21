import { SparklesCore } from '@/components/ui/sparkles';

type SparklesBackgroundProps = {
  id?: string;
  mode?: 'fixed' | 'embedded';
};

export function SparklesBackground({
  id = 'tsparticlesfullpage',
  mode = 'fixed',
}: SparklesBackgroundProps) {
  const isEmbedded = mode === 'embedded';

  return (
    <div className={isEmbedded ? 'app-sparkles' : 'sparkles-bg'} aria-hidden="true">
      <div className={isEmbedded ? 'app-sparkles-inner' : 'sparkles-bg-inner'}>
        <SparklesCore
          id={id}
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
