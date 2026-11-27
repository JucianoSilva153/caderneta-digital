# Caderneta Digital do Coordenador de Turno

Projeto integrador da disciplina de **Engenharia de Software I** — ISPTEC, 2026/2027.
Turma **M3** · Grupo **GXX**.

Aplicação web responsiva que centraliza a informação de que um coordenador de turno de
uma instituição de ensino médio técnico-profissional precisa: alunos, turmas,
encarregados de educação, ocorrências disciplinares, medidas aplicadas e o histórico
individual de cada aluno.

## Equipa

| Membro | Responsabilidade Scrum | Foco no projeto |
|---|---|---|
| Juciano Silva | Product Owner | Backlog, priorização, Objectivo do Produto, relação com o coordenador de turno |
| Yuri Rodrigues | Scrum Master | Eventos, quadro Kanban, limites de WIP, remoção de impedimentos |
| Pimba Cristovão | Developer | Backend (NestJS), modelo de dados, autenticação e perfis |
| Mayele Da Cruz | Developer | Frontend (React), testes e revisões de código |

> Nota: em Scrum 2020 não existem "papéis" nem hierarquia dentro da equipa. "Developer"
> não é um cargo júnior — todos os membros da Scrum Team são Developers no sentido do
> Guia. Ver a secção «Equipa» de [processo.md](processo.md).

## Links

- **Repositório:** (preencher após criar no GitHub)
- **Quadro Kanban (GitHub Projects):** (preencher após criar)
- **Aplicação publicada:** ainda não publicada

## Stack

| Camada | Tecnologia |
|---|---|
| Frontend | React 18 + Vite + TypeScript |
| Backend | NestJS + TypeScript |
| Base de dados | SQLite via Prisma (preparada para PostgreSQL) |
| Processo | Git, GitHub, GitHub Projects (Kanban), Scrum |
| Autenticação | JWT com controlo de acesso por perfil |

## Como executar localmente

Requisitos: Node.js 20 ou superior.

### Backend

```bash
cd backend
npm install
cp .env.example .env        # Windows PowerShell: Copy-Item .env.example .env
npx prisma generate
npx prisma migrate dev --name init
npm run start:dev
# API em http://localhost:3000/api/health
```

> Nota: esta pasta ("Lab #2") contém o carácter `#`, que o Vite não suporta bem. Por isso os
> imports do frontend incluem a extensão (`./App.tsx`) e o `index.html` usa caminho relativo.
> Se puderem, renomeiem a pasta para `Lab02` — o projeto funciona igual, sem o aviso do Vite.

### Frontend

```bash
cd frontend
npm install
npm run dev
# Aplicação em http://localhost:5173
```

## Documentação

- [processo.md](processo.md) — acordo de trabalho da equipa (Parte I do laboratório).
- [sprints/](sprints/) — planeamento, reuniões diárias, revisões e retrospectivas.
- [docs/](docs/) — textos das atividades, regras do quadro e _backlog_ inicial.
- **Manual do utilizador:** a preencher na Sprint 5.
- **Relatório de testes:** a preencher na Sprint 5.

## Dados pessoais

Todos os dados usados em testes e demonstrações são fictícios, em cumprimento da
Lei n.º 22/11, de 17 de Junho (Lei da Proteção de Dados Pessoais).

## Uso de inteligência artificial

A inteligência artificial foi usada como ferramenta de apoio, nos termos declarados em
[processo.md](processo.md#regras-de-uso-da-inteligência-artificial).
