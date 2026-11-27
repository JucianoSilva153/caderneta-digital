# Atividade 5 — Práticas do Kanban no nosso quadro

**Objetivo:** 3 · **Responsável:** Pimba Cristovão · **Revisor:** Yuri Rodrigues · **Data:** 27/11/2026
**Fontes:** The Kanban Guide (2020) — kanbanguides.org; GitHub Docs «Customizing the board layout»

## As três práticas

| Prática | Como aparece no quadro do GitHub Projects |
|---|---|
| **1. Definir e visualizar o fluxo** | Seis colunas com regras de passagem explícitas; cada issue é um item de trabalho visível com etiqueta, responsável e sprint. |
| **2. Gerir ativamente os itens no fluxo** | Limite de WIP na coluna «Em curso»; verificação diária pelo Scrum Master; itens bloqueados saem do fluxo para «Bloqueado». |
| **3. Melhorar o fluxo** | Medição de WIP máximo, débito, idade do item mais antigo e tempo de ciclo no fim de cada sprint; os números alimentam a retrospectiva. |

## Colunas

| Coluna | Significado | Regra de passagem |
|---|---|---|
| Backlog | Requisito ainda não comprometido. | Ordenado pelo PO. |
| A fazer (Sprint) | Escolhido no planeamento. | Sprint atribuída no campo Iteration e critérios de aceitação escritos. |
| **Em curso** | Alguém está a trabalhar agora. **WIP = 2.** | Ramo criado e responsável definido. |
| Em revisão | PR à espera de revisão. **WIP = 2.** | PR aberto com `Closes #n`. |
| Bloqueado | Impedimento identificado. | Impedimento registado; o SM trata. |
| Done | Cumpre a Definição de Pronto. | PR aprovado e _merge_ feito. |

## Justificação do limite «Em curso»

**WIP = 2.** Na Sprint 1 há apenas **dois developers ativos**: Pimba Cristovão e, a partir da
Sprint 2, Mayele Da Cruz. O Product Owner e o Scrum Master também trabalham, mas as suas
tarefas de processo não passam por «Em curso». Um limite igual ao número de developers
obriga a **terminar antes de começar**: se o limite está cheio, ninguém puxa um item novo.
Isto elimina a multitarefa, que é a principal causa de tempo de ciclo alto. Na Sprint 2 o
limite sobe para **3**, quando o Mayele regressar — decisão tomada na retrospectiva e não a
meio da sprint.
