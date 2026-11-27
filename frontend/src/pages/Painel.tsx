type Props = { aoSair: () => void };

const modulos = [
  { nome: 'Turmas e alunos', sprint: 'Sprint 3', estado: 'Previsto' },
  { nome: 'Ocorrências', sprint: 'Sprint 3', estado: 'Previsto' },
  { nome: 'Medidas aplicadas', sprint: 'Sprint 4', estado: 'Previsto' },
  { nome: 'Histórico do aluno', sprint: 'Sprint 4', estado: 'Previsto' },
];

export default function Painel({ aoSair }: Props) {
  return (
    <div className="aplicacao">
      <header className="barra">
        <p className="marca">Caderneta Digital</p>
        <button type="button" className="secundario" onClick={aoSair}>
          Terminar sessão
        </button>
      </header>

      <main className="conteudo">
        <h1>Painel</h1>
        <p className="subtitulo">
          Bem-vindo. A autenticação real e os cinco módulos entram nas sprints 2 a 4.
        </p>

        <ul className="lista-modulos">
          {modulos.map((m) => (
            <li key={m.nome}>
              <div>
                <strong>{m.nome}</strong>
                <span>{m.sprint}</span>
              </div>
              <span className="etiqueta">{m.estado}</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
