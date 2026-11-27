import { FormEvent, useState } from 'react';

type Props = { aoEntrar: () => void };

type Erros = { email?: string; palavraPasse?: string };

export default function Login({ aoEntrar }: Props) {
  const [email, setEmail] = useState('');
  const [palavraPasse, setPalavraPasse] = useState('');
  const [erros, setErros] = useState<Erros>({});

  function validar(): Erros {
    const novos: Erros = {};
    if (!email.trim()) {
      novos.email = 'Escreva o seu e-mail institucional (ex.: nome@isptec.co.ao).';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      novos.email = 'O e-mail não parece válido. Confirme se tem «@» e o domínio.';
    }
    if (!palavraPasse) {
      novos.palavraPasse = 'Escreva a sua palavra-passe. Se a esqueceu, contacte o administrador.';
    } else if (palavraPasse.length < 8) {
      novos.palavraPasse = 'A palavra-passe deve ter pelo menos 8 caracteres.';
    }
    return novos;
  }

  function submeter(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const novos = validar();
    setErros(novos);
    // Sprint 2: POST /api/auth/login e guardar o token.
    if (Object.keys(novos).length === 0) {
      aoEntrar();
    }
  }

  return (
    <main className="pagina-login">
      <section className="cartao" aria-labelledby="titulo-login">
        <header>
          <p className="marca">ISPTEC · Engenharia de Software I</p>
          <h1 id="titulo-login">Caderneta Digital do Coordenador de Turno</h1>
          <p className="subtitulo">
            Entre com a sua conta institucional para consultar alunos, turmas e ocorrências.
          </p>
        </header>

        <form onSubmit={submeter} noValidate>
          <div className="campo">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(erros.email)}
              aria-describedby={erros.email ? 'erro-email' : undefined}
            />
            {erros.email && (
              <p className="erro" id="erro-email" role="alert">
                {erros.email}
              </p>
            )}
          </div>

          <div className="campo">
            <label htmlFor="palavra-passe">Palavra-passe</label>
            <input
              id="palavra-passe"
              name="palavra-passe"
              type="password"
              autoComplete="current-password"
              value={palavraPasse}
              onChange={(e) => setPalavraPasse(e.target.value)}
              aria-invalid={Boolean(erros.palavraPasse)}
              aria-describedby={erros.palavraPasse ? 'erro-palavra-passe' : undefined}
            />
            {erros.palavraPasse && (
              <p className="erro" id="erro-palavra-passe" role="alert">
                {erros.palavraPasse}
              </p>
            )}
          </div>

          <button type="submit">Entrar</button>
        </form>

        <p className="nota">
          <strong>Sprint 1:</strong> a autenticação está demonstrada apenas no ecrã. A validação
          na API (JWT e perfis) entra na Sprint 2. Use dados fictícios.
        </p>
      </section>
    </main>
  );
}
