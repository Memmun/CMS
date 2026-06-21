import { useState, type FormEvent, type KeyboardEvent } from 'react';
import { useApp } from '@/context/AppContext';
import { asset } from '@/lib/utils';

export function LoginScreen() {
  const { login } = useApp();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = () => {
    const err = login(username, password);
    setError(err ?? '');
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') submit();
  };

  return (
    <div id="login-screen">
      <form className="login-card" onSubmit={onSubmit}>
        <div className="brand-row">
          <div className="logo-mark sidebar-logo">
            <img src={asset('assets/logo-figma.png')} alt="MEMUN" />
          </div>
          <div className="brand-wordmark">
            <img className="brand-wordmark-img" src={asset('assets/wordmark-memun.png')} alt="MEMUN" />
            <div className="brand-text-sub">Editor de memorias</div>
          </div>
        </div>
        <div className="field">
          <label htmlFor="username">Usuario</label>
          <input
            id="username"
            type="text"
            placeholder="EMIREC_17"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={onKeyDown}
          />
        </div>
        <button className="btn" type="submit">
          Ingresar
        </button>
        <div className="login-error">{error}</div>
        <div className="login-hint">
          PROTOTIPO — cualquier usuario y contraseña son válidos
          <br />
          para acceder al panel de demostración.
        </div>
      </form>
    </div>
  );
}
