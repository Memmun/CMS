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
      <SparklesBackground />
      {!user ? <LoginScreen /> : <AppShell />}
      <ModuleModal />
      <ContentPreviewModal />
      <Toast />    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MemunApp />
    </AppProvider>
  );
}
