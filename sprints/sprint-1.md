# Sprint 1

**Datas:** 24/11/2026 – 27/11/2026 · **Semanas simuladas:** 1 e 2 · **Duração real:** 4 dias
**Estado:** fechada · **Etiqueta Git:** `sprint-1`

---

## ⚠️ Nota de contexto

A equipa só conseguiu arrancar a 27/11/2026, pelo que a Semana 1 (24–25/11) não tem
evidência no GitHub e esta sprint foi comprimida num único dia útil. O impedimento e as suas
consequências estão registados em [`processo.md`](../processo.md#registo-de-impedimentos-e-recuperação).
Este registo é intencional: não foram inventadas datas nem commits.

---

## Objectivo da Sprint 1

> Estabelecer a base de trabalho do projeto — acordo de processo, repositório, quadro
> Kanban e _backlog_ inicial — de modo que a equipa possa começar a desenvolver o Módulo 1
> na Sprint 2.

## Planeamento (27/11/2026)

| Item | Responsável | Atividade |
|---|---|---|
| Atividades 1 e 4 — valores, artefactos e compromissos | Juciano | 1, 4 |
| Atividade 9 — repositório, quadro, vistas, Iteration, acessos | Juciano | 9 |
| Atividades 2 e 3 — responsabilidades e eventos | Yuri | 2, 3 |
| Atividade 8 — verificação da IA | Yuri | 8 |
| Atividades 5, 6 e 7 — Kanban, artigo e combinação Scrum+Kanban | Pimba | 5, 6, 7 |
| Consolidação do `processo.md` | Juciano | — |
| Épicos no quadro | Juciano | 9 |

**Nota de transparência:** o planeamento ocorreu no **quarto dia** da sprint, e não no
primeiro, por causa do impedimento acima. É a única sprint em que isto acontece.

## Reuniões diárias

| Data | Registo |
|---|---|
| 24/11 | **Sem registo** — equipa ainda não constituída (ver impedimento). |
| 25/11 | **Sem registo** — idem. |
| 26/11 | **Sem registo** — idem. |
| 27/11 | Ver abaixo. |

### 27/11/2026 (escrita, até às 20h00)

**Juciano (PO)**
- *Fiz:* escrevi as atividades 1 e 4; criei o repositório, o quadro, as vistas e o campo Iteration.
- *Vou fazer:* consolidar o `processo.md` e abrir o PR final da sprint.
- *Impedimentos:* nenhum.

**Yuri (SM)**
- *Fiz:* atividades 2 e 3 e a verificação da IA (atividade 8).
- *Vou fazer:* rever o PR do Juciano e confirmar os limites de WIP no quadro.
- *Impedimentos:* a atividade 8 depende da resposta real da ferramenta de IA — resolvido.

**Pimba (Developer)**
- *Fiz:* atividades 5, 6 e 7.
- *Vou fazer:* rever o PR do Yuri e preparar o ambiente (Node, Prisma).
- *Impedimentos:* nenhum.

**Mayele (Developer)**
- *Impedimento:* **ausente** em 27/11. Não há contribuição nem revisão registadas em seu
  nome nesta sprint. Retoma na Sprint 2.

## Revisão da Sprint (27/11/2026)

**O que foi demonstrado.** O repositório, o `processo.md` (Parte I), o quadro Kanban com as
duas vistas e o campo Iteration, e o _backlog_ com os cinco épicos. **Não houve incremento
de produto**: o esqueleto da aplicação (login estático em React e endpoint `/health` no
NestJS) não implementa ainda nenhum dos cinco módulos.

**Demonstração ao coordenador de turno.** Não foi enviada, porque não havia produto para
demonstrar. O **Product Owner representou o coordenador de turno**, como o enunciado
permite, e validou o âmbito do produto mínimo e a ordem do _backlog_.

**Retorno recebido.** O PO confirmou: (a) os cinco módulos obrigatórios são os corretos;
(b) a ordem proposta é aceitável; (c) o protótipo da interface deve ser mostrado na revisão
da Sprint 2, já com o login funcional.

**Backlog reordenado?** Sim — os épicos foram ordenados de 1 a 5 conforme `docs/issues.md`.

## Retrospectiva (27/11/2026)

| O que correu bem | O que correu mal | O que vamos mudar |
|---|---|---|
| A documentação da Parte I ficou completa num dia, com revisão cruzada de todos os PRs. | Arranque tardio: a Semana 1 ficou sem evidência e a sprint foi comprimida. | Nenhum dia sem commit a partir de 28/11. |
| O quadro e as vistas ficaram configurados e públicos no primeiro dia de trabalho. | A Sprint 2 acumula requisitos + casos de uso + Módulo 1 — é a sprint de maior risco. | Na S2, a atividade 10 é feita no **dia 1** e o código só começa depois de o _backlog_ estar fechado. |
| A divisão por ficheiros separados evitou conflitos de Git. | O Mayele esteve ausente e não tem contribuição registada. | O Mayele recebe o Módulo 5 completo na S4 e revisões adicionais na S2. |

**Ação de melhoria (compromisso para a Sprint 2):** fechar a atividade 10 até ao fim do
**dia 1** (28/11), para que os três dias seguintes sejam de código.

**Desafio a vigiar (atualização).** Mantém-se *«ignorar o limite de WIP quando o prazo
aperta»*. A Sprint 1 **já deu um sinal de risco**: a equipa comprimiu quatro dias num só.
Na Sprint 2, o Scrum Master verifica o limite de 2 em cada reunião diária e regista o
número de violações.

## Contribuições e revisões

| Membro | Contribuição | Revisão feita |
|---|---|---|
| Juciano | _(link do PR)_ — atividades 1, 4, 9 e consolidação do `processo.md` | _(link do PR revisto)_ |
| Yuri | _(link do PR)_ — atividades 2, 3, 8 | _(link do PR revisto)_ |
| Pimba | _(link do PR)_ — atividades 5, 6, 7 | _(link do PR revisto)_ |
| Mayele | **Ausente** — sem contribuição nesta sprint | — |

> Preencher os links depois de abrir os PRs. A revisão cruzada é obrigatória: cada PR tem de
> ter um `Approve` de outro membro antes do _merge_.

## Medidas de fluxo (Sprint 1)

| Medida | Valor | Nota |
|---|---|---|
| **WIP máximo atingido** | 2 | O limite nunca foi excedido, mas o valor não é representativo: os itens foram criados e movidos no mesmo dia. |
| **Débito** | 5 épicos + documentação | Contagem de itens concluídos; ver nota. |
| **Idade do item mais antigo em curso** | 0 dias | Distorcido pela compressão da sprint. |
| **Tempo de ciclo (3 itens)** | ≈ 0 dias | Distorcido; passa a ser medido a sério a partir da Sprint 2. |

**Interpretação honesta.** Nenhum destes números descreve a forma real de trabalhar da
equipa: descrevem um dia. Servem apenas como linha de base e como aviso de que a medição só
tem valor quando o trabalho decorre ao longo do tempo. A partir da Sprint 2 as quatro
medidas passam a ser calculadas com datas reais e comparadas entre sprints.

## Fecho

```bash
git tag -a sprint-1 -m "Sprint 1 - base do projeto"
git push --tags
```
