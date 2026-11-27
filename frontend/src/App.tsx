import { useState } from 'react';
import Login from './pages/Login.tsx';
import Painel from './pages/Painel.tsx';

export default function App() {
  const [autenticado, setAutenticado] = useState(false);

  // Sprint 1: navegação local. Na Sprint 2 passa a validar o token da API (NestJS).
  return autenticado ? (
    <Painel aoSair={() => setAutenticado(false)} />
  ) : (
    <Login aoEntrar={() => setAutenticado(true)} />
  );
}
