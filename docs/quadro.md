# Quadro Kanban — configuração e evidências

**Atividade 9** · Responsável: Juciano Silva · Apoio: Yuri Rodrigues · Data: 27/11/2026

Este ficheiro é o guião de configuração do quadro. As **imagens** das duas vistas e do campo
de iteração devem ser tiradas depois de configurar e guardadas em `docs/evidencias/`.

---

## 1. Criar o repositório público

```bash
git init
git add .
git commit -m "chore: arranque do projeto (README, processo e esqueleto da app)"
git branch -M main
git remote add origin https://github.com/<utilizador>/caderneta-digital.git
git push -u origin main
```

Depois, no GitHub: **Settings → Collaborators → Add people** e convidar os outros três
membros (e aceitar o convite em cada conta).

## 2. Criar o projeto (quadro)

1. No repositório: separador **Projects** → **New project** → modelo **Board**.
2. Nome: `Caderneta Digital — Kanban`.
3. **Settings → Visibility → Public**.
4. **Settings → Manage access → Invite collaborators** → `judsonp` com permissão **Write**.

## 3. Colunas

Renomear as colunas por omissão para, pela ordem:

| Ordem | Coluna | Limite de WIP |
|---|---|---|
| 1 | Backlog | — |
| 2 | A fazer (Sprint) | — |
| 3 | **Em curso** | **2** |
| 4 | Em revisão | 2 |
| 5 | Bloqueado | — |
| 6 | Done | — |

> O limite de WIP do GitHub Projects é informativo/visual (mostra o contador e assinala em
> vermelho quando excede). A verificação é feita pelo Scrum Master na reunião diária e
> registada no ficheiro da sprint.

## 4. Campo de iteração (Sprint)

1. **Project → ⋯ (menu) → Settings → Custom fields → New field → Iteration**.
2. Nome: `Sprint`. Duração: **4 dias** (não usar semanas — as sprints são de 4 dias reais).
3. Criar as iterações com estas datas:

| Iteração | Início | Fim | Semanas simuladas |
|---|---|---|---|
| Sprint 1 | 24/11/2026 | 27/11/2026 | 1–2 |
| Sprint 2 | 28/11/2026 | 01/12/2026 | 3–4 |
| Sprint 3 | 02/12/2026 | 05/12/2026 | 5–6 |
| Sprint 4 | 06/12/2026 | 09/12/2026 | 7–8 |
| Sprint 5 | 10/12/2026 | 13/12/2026 | 9–10 |

## 5. Vistas

Criar duas vistas ( **+ New view** ):

| Vista | Tipo | Filtro / configuração |
|---|---|---|
| **Lista do produto** | Table | Todas as issues, ordenadas pelo campo **Priority** (ou pela ordem manual do _backlog_) |
| **Sprint atual** | Board | `iteration:@current` — só as issues da sprint em curso |

Guardar ambas com os nomes exatos acima.

## 6. Issues da Sprint 1 (os cinco épicos)

Criar as 5 issues de `docs/issues.md` (secção «Épicos»), com etiqueta `produto-minimo` e
sprint atribuída: épico 1 → Sprint 2, épico 2 → Sprint 3, épico 3 → Sprint 3, épico 4 →
Sprint 4, épico 5 → Sprint 4. Colocá-las na coluna **Backlog**.

> Na Sprint 2, a atividade 10 substitui estes épicos por histórias de utilizador detalhadas,
> mantendo o épico como pai.

## 7. Verificação final

- [ ] O repositório abre numa janela anónima (é público).
- [ ] O quadro abre numa janela anónima (é público).
- [ ] `judsonp` aparece em Manage access com **Write**.
- [ ] As 5 iterações existem com as datas da tabela.
- [ ] As vistas «Lista do produto» e «Sprint atual» existem.
- [ ] As 5 issues têm sprint atribuída.
- [ ] Capturas de ecrã tiradas: quadro geral, vista «Lista do produto», vista «Sprint atual»,
      campo de iteração (Settings → Custom fields).

## 8. Evidências a guardar

`docs/evidencias/quadro-sprint-1.png`, `lista-produto.png`, `sprint-atual.png`,
`iteracao.png` — e repetir a captura do quadro no fim de cada sprint.
