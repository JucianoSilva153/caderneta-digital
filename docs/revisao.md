# Revisão de código — regras e registo

**Atividade 11** · Baseado em Bacchelli e Bird (2013) · Atualizado em 27/11/2026

---

## 1. Regra do laboratório

> «Antes de ser juntado à `main`, cada pedido deve ser revisto por outro membro
> (Comment, Approve ou Request changes).»

Traduzido em regras operacionais:

1. **Ninguém integra o seu próprio PR.** O autor abre, outro membro revê, o autor integra.
2. **Um `Approve` vazio não conta como revisão.** Cada revisão tem de ter pelo menos **um
   comentário concreto** (uma linha de código ou uma pergunta) — é esse texto que a
   atividade 11 classifica.
3. **Um PR por issue.** Ramos pequenos: se o PR tem mais de ~400 linhas alteradas, devia ter
   sido dividido.
4. **Revisão no mesmo dia.** As sprints duram 4 dias; um PR parado 1 dia é 25% da sprint.
5. **Quem aprova sabe explicar.** Na defesa individual qualquer membro pode ter de explicar
   código que aprovou. Aprovar sem ler é o risco mais direto à nota de defesa (30%).
6. **`Request changes` bloqueia.** O autor corrige, pede nova revisão, e só integra depois do
   `Approve`.

## 2. Fluxo no GitHub

```bash
# 1. criar ramo a partir da main atualizada
git checkout main && git pull
git checkout -b feat/12-login-jwt

# 2. trabalhar com commits pequenos e mensagens claras
git commit -m "feat(auth): validar credenciais contra a base de dados"

# 3. enviar
git push -u origin feat/12-login-jwt

# 4. abrir o PR na interface do GitHub (o template aparece automaticamente)
#    - escrever "Closes #12" no corpo
#    - pedir revisão ao colega da rotação
```

O revisor faz: **Files changed → + na linha → comentário → Review changes → Approve /
Request changes**. Depois do `Approve`, o autor faz **Squash and merge** e apaga o ramo.

**Rotações de nomes de ramo:** `feat/…`, `fix/…`, `docs/…`, `test/…`, `chore/…`.

## 3. Quem revê quem

Nunca o autor. A rotação garante que **cada membro revê um colega em cada sprint** e que
ninguém revê sempre a mesma pessoa.

| Sprint | Juciano revê | Yuri revê | Pimba revê | Mayele revê |
|---|---|---|---|---|
| **1** | Yuri | Pimba | Juciano | *(ausente)* |
| **2** | Mayele | Juciano | Yuri | Pimba |
| **3** | Pimba | Mayele | Juciano | Yuri |
| **4** | Yuri | Pimba | Mayele | Juciano |
| **5** | Mayele | Juciano | Yuri | Pimba |

Na Sprint 1, os PRs são: Juciano → revisto por Yuri; Yuri → revisto por Pimba; Pimba →
revisto por Juciano.

## 4. O que é uma boa revisão (e o que não é)

| Evitar | Preferir |
|---|---|
| «Está bom 👍» | «A palavra-passe é comparada em texto simples na linha 42 — usar `bcrypt.compare`.» |
| «Não percebi» | «O que faz o `useEffect` sem dependências aqui? Se for só na montagem, basta `[]`.» |
| Reescrever o PR do colega | Apontar o problema e deixar o autor corrigir. |
| 40 comentários de estilo | 3 comentários que evitam um erro e 1 que partilha conhecimento. |

**Bom comentário tem:** o local exato, o problema, o porquê e, quando possível, a sugestão.

## 5. Classificação dos comentários (atividade 11)

Cada comentário de revisão é classificado nesta tabela e a contagem vai para o relatório:

| Categoria | Definição | Exemplo |
|---|---|---|
| **Defeito** | O código não faz o que devia ou falha num caso. | «Se a lista vier vazia, `.map` rebenta.» |
| **Legibilidade** | Nomes, estrutura, clareza. | «`d` devia chamar-se `dataOcorrencia`.» |
| **Solução alternativa** | Outra abordagem, simplificação, refactor. | «Isto pode ser um `filter` em vez de `for`.» |
| **Partilha de conhecimento** | Explicação, link, convenção. | «No NestJS usamos `Guards` para isto, não `if` no controller.» |
| **Testes** | Falta de teste ou teste frágil. | «Falta o caso de e-mail duplicado.» |
| **Documentação** | README, comentários, processo. | «O README não diz que é preciso correr as migrações.» |
| **Estilo / convenção** | Formatação, lint, nomes de ficheiros. | «Ficheiros de componentes em PascalCase.» |

**Registo por sprint** (preencher no `sprint-N.md` ou no relatório):

| Sprint | Defeito | Legibilidade | Alternativa | Conhecimento | Testes | Docs | Estilo | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | |
| 2 | | | | | | | | |
| 3 | | | | | | | | |
| 4 | | | | | | | | |
| 5 | | | | | | | | |

## 6. Comparação com Bacchelli e Bird (2013)

O artigo analisou comentários de revisão em projetos reais e mostrou que a revisão moderna
não serve só para encontrar defeitos: uma parte substancial dos comentários é sobre
**melhorar o código** (refactor, legibilidade) e sobre **partilha de conhecimento** entre a
equipa, e não apenas sobre erros.

A comparação com os nossos números faz-se na **Sprint 4**, quando houver comentários
suficientes. O que interessa responder:

- A nossa distribuição é parecida com a do estudo ou concentra-se em defeitos?
- Os defeitos que encontrámos seriam apanhados pelos testes automáticos?
- A partilha de conhecimento aconteceu, ou as revisões foram só «aprovar»?

> Não citar números do artigo de memória: reler as secções de resultados e discussão e
> citar o que lá está.

## 7. Evidência a guardar para o relatório

- Lista de PRs por membro, com link (`github.com/…/pull/N`).
- Captura de um PR com comentários e `Approve`.
- Tabela de classificação preenchida (§5).
- Nº de PRs e de comentários por membro e por sprint.

## 8. Proteção da `main` (recomendado)

**Settings → Branches → Add branch protection rule** → padrão `main`:
- [x] Require a pull request before merging
- [x] Require approvals: **1**
- [x] Dismiss stale pull request approvals when new commits are pushed

Assim o próprio GitHub impede o _merge_ sem revisão — e a prova fica do lado do servidor.
