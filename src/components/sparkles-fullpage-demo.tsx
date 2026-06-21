import { SparklesCore } from '@/components/ui/sparkles';

export function SparklesPreview() {
  return (
    <div className="sparkles-preview">
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
      <h1 className="sparkles-preview-title">Build great products</h1>
    </div>
  );
}

export default SparklesPreview;
