import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from 'react';
import { Icon } from './Icon';

interface ToastMsg {
  id: number;
  text: string;
  kind: 'info' | 'ok' | 'warn';
}

interface ToastApi {
  show: (text: string, kind?: ToastMsg['kind']) => void;
  comingSoon: (featureName: string) => void;
}

const ToastContext = createContext<ToastApi | null>(null);

let nextId = 1;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMsg[]>([]);

  const show = useCallback((text: string, kind: ToastMsg['kind'] = 'info') => {
    const id = nextId++;
    setToasts(prev => [...prev, { id, text, kind }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  }, []);

  const comingSoon = useCallback(
    (featureName: string) => show(`${featureName} — coming soon 🚧`, 'info'),
    [show],
  );

  return (
    <ToastContext.Provider value={{ show, comingSoon }}>
      {children}
      <div className="pointer-events-none fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2">
        {toasts.map(t => (
          <div
            key={t.id}
            className="pointer-events-auto flex items-center gap-2 rounded-card border border-line bg-surface-elevated px-4 py-2 text-sm text-fg shadow-card-hover animate-fade-in"
          >
            <span className={
              t.kind === 'ok' ? 'text-ok' :
              t.kind === 'warn' ? 'text-warn' : 'text-brand'
            }>
              <Icon name={t.kind === 'ok' ? 'check' : 'bell'} size={16} />
            </span>
            {t.text}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastApi {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    // Safe no-op fallback if provider missing
    return {
      show: (text: string) => console.log('[toast]', text),
      comingSoon: (name: string) => console.log('[toast] coming soon:', name),
    };
  }
  return ctx;
}
