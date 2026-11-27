# Backlog inicial

**Sprint 1** · Responsável: Juciano Silva (PO) · Data: 27/11/2026

A análise completa de atores, requisitos e histórias de utilizador é a **atividade 10**
(Sprint 2). Nesta sprint criam-se apenas os **épicos** necessários para ligar o quadro às
sprints — a atividade 9 exige issues com sprint atribuída e a vista «Lista do produto».

---

## Épicos (criar como issues)

> Etiqueta: `produto-minimo` · Tipo: Epic/Task · Coluna inicial: Backlog

### Épico 1 — Autenticação e perfis · Sprint 2
**Como** membro da equipa, **quero** que a aplicação exija palavra-passe e mostre apenas o
que cada perfil pode ver, **para** que os dados dos alunos não fiquem acessíveis a quem não
deve.

Critérios de aceitação (rascunho — detalhar na atividade 10):
- [ ] Login com e-mail e palavra-passe; palavra-passe nunca guardada em texto simples.
- [ ] Sessão com token; terminar sessão.
- [ ] Pelo menos dois perfis (ex.: coordenador e funcionário), com menus e ações diferentes.
- [ ] Acesso a rota proibida devolve mensagem clara, não um erro técnico.

### Épico 2 — Turmas e alunos · Sprint 3
**Como** coordenador, **quero** registar turnos, cursos, classes, turmas e alunos, **para**
ter a população escolar num só sítio.

- [ ] CRUD de turno → curso → classe → turma.
- [ ] CRUD de aluno associado a uma turma.
- [ ] Pesquisa por nome e número de processo.
- [ ] Validação de campos com mensagens que explicam como corrigir.

### Épico 3 — Ocorrências · Sprint 3
**Como** coordenador, **quero** registar uma ocorrência com vários alunos, testemunhas e
intervenientes, **para** reconstituir o que aconteceu.

- [ ] Ocorrência com data, local, descrição detalhada e gravidade.
- [ ] Associação de **vários alunos** à mesma ocorrência.
- [ ] Registo de testemunhas e intervenientes.
- [ ] Listagem filtrável por turma e por data.

### Épico 4 — Medidas aplicadas · Sprint 4
**Como** coordenador, **quero** registar a medida decidida e acompanhar o seu cumprimento,
**para** saber o que ficou resolvido.

- [ ] Medida associada a uma ocorrência e a um aluno.
- [ ] Estado do cumprimento (por cumprir / em curso / cumprida).
- [ ] Registo de contactos com o encarregado de educação.
- [ ] Histórico de alterações de estado.

### Épico 5 — Histórico do aluno · Sprint 4
**Como** coordenador, **quero** abrir o percurso de um aluno e ver ocorrências, medidas e
contactos por ordem cronológica, **para** preparar uma reunião em minutos.

- [ ] Página do aluno com linha temporal.
- [ ] Filtro por período.
- [ ] Resumo com contagem de ocorrências por estado da medida.
- [ ] Exportação simples (imprimir/PDF) para a reunião.

---

## Modelo de história de utilizador (a usar na Sprint 2)

```markdown
**Como** <tipo de utilizador>,
**quero** <ação>,
**para** <benefício>.

### Critérios de aceitação
- [ ] Dado <contexto>, quando <ação>, então <resultado esperado>.
- [ ] ...

### Notas
- Perfil: <coordenador | funcionário | ...>
- Épico: #<n>
```

## Ordem do backlog (justificação)

1. **Autenticação e perfis** — sem isto nenhum outro módulo pode ser usado em segurança.
2. **Turmas e alunos** — é o dado de base; sem alunos não há ocorrências.
3. **Ocorrências** — o núcleo do problema do coordenador.
4. **Medidas** — dependem das ocorrências.
5. **Histórico** — só tem conteúdo depois de existirem ocorrências e medidas.

Pedidos fora do produto mínimo (encarregados de educação, notificações, relatórios e
indicadores, agendamento de reuniões) ficam no _backlog_ **depois** destes cinco e só são
desenvolvidos se houver tempo nas sprints 4 e 5. A justificação detalhada e eventuais
pedidos rejeitados são apresentados na atividade 10.
