import { AppProvider, useApp } from '@/context/AppContext';
import { SparklesBackground } from '@/components/SparklesBackground';
import { LoginScreen } from '@/components/LoginScreen';
import { AppShell } from '@/components/AppShell';
import { ModuleModal } from '@/components/ModuleModal';
import { ContentPreviewModal } from '@/components/ContentPreviewModal';
import { Toast } from '@/components/Toast';
function MemunApp() {
  const { user } = useApp();
  return (
    <>
      {!user && (
        <div className="login-backdrop" aria-hidden="true">
          <div className="login-backdrop-image" />
          <div className="login-backdrop-overlay" />
        </div>
      )}
      <SparklesBackground />
      {!user ? <LoginScreen /> : <AppShell />}
      <ModuleModal />
      <ContentPreviewModal />
      <Toast />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MemunApp />
    </AppProvider>
  );
}
