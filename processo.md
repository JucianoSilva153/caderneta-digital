# Processo de trabalho — Caderneta Digital do Coordenador de Turno

Acordo de trabalho da equipa, construído na Parte I do laboratório e seguido em todas as
sprints. Última atualização: 27/11/2026 (Sprint 1).

**Turma:** M3 · **Grupo:** GXX · **Repositório:** (preencher) · **Quadro:** (preencher)

---

## Registo de impedimentos e recuperação

**Impedimento.** A equipa só conseguiu constituir-se e arrancar o trabalho a 27/11/2026.
Por esse motivo, a Semana 1 simulada (24–25/11) não tem qualquer evidência no GitHub e a
Sprint 1 foi comprimida para um único dia útil (27/11), em vez dos quatro previstos.

**Consequências assumidas.** A Sprint 1 não teve planeamento no primeiro dia nem reuniões
diárias nos dias 24, 25 e 26; o incremento apresentado na revisão foi apenas a base do
projeto (documentação do processo, repositório, quadro Kanban e _backlog_ inicial) e não
uma versão funcional; as medidas de fluxo da Sprint 1 não são representativas, porque
todos os itens foram criados e movidos no mesmo dia (idade máxima e tempo de ciclo
próximos de zero e WIP máximo artificial).

**Ausência de membro.** Mayele Da Cruz esteve ausente em 27/11 e não participou na Sprint
1. Não tem contribuição nem revisão de código registadas nesta sprint. A ausência fica
registada como impedimento em `sprints/sprint-1.md` e a recuperação é feita na Sprint 2,
com atribuição de um módulo completo e revisões adicionais.

**Ação de recuperação.** A partir de 28/11 o calendário oficial é retomado sem alterações,
com o âmbito reduzido ao produto mínimo obrigatório. As semanas 2 a 10 terão evidência
diária no GitHub: commits, pedidos de integração revistos por outro membro e movimento
das issues no quadro.

---

## Valores do grupo

Baseado no [Manifesto Ágil](https://agilemanifesto.org) (2001). Para cada valor, a decisão
concreta que a equipa toma neste projeto e o que continua a ter valor no lado direito.

| Valor (esquerda) | Decisão concreta na Caderneta Digital | O que mantém valor no lado direito |
|---|---|---|
| **Indivíduos e interações mais que processos e ferramentas** | Reunião diária escrita de três linhas por membro e revisão de código entre pares; o desbloqueio faz-se por conversa direta, não por formulário. | Continuamos a usar GitHub Projects, issues e PRs — são necessários para deixar evidência. Só não substituem a conversa. |
| **Software a funcionar mais que documentação abrangente** | No fim de cada sprint existe uma versão que corre localmente, seguindo o README, e é essa versão que se demonstra na revisão. | Continuamos a escrever este `processo.md` e o README, e os requisitos da Sprint 2, porque sem eles a equipa não se coordena. |
| **Colaboração com o cliente mais que negociação de contratos** | Antes de escrever especificações extensas, mostramos um protótipo do ecrã de registo de ocorrência ao coordenador de turno; quando não há retorno, o Product Owner assume a decisão e regista-a. | O âmbito do produto mínimo é fixo e não é renegociado a meio; os pedidos novos entram no _backlog_ e são ordenados, não aceites de imediato. |
| **Responder a mudanças mais que seguir um plano** | O _backlog_ é reordenado na revisão de cada sprint; o âmbito dos módulos opcionais ajusta-se, o dos cinco módulos obrigatórios não. | O plano de 5 sprints e as datas de entrega mantêm-se; mudar não é abandonar o plano, é ajustá-lo com o que se aprendeu. |

**Porque «mais do que» não significa «em vez de».** O Manifesto não diz que a documentação
não tem valor: diz que, quando há de escolher, o software a funcionar vale mais. Na prática,
a equipa escreve este documento e o README (lado direito), mas não deixa que a escrita de
documentação atrase a entrega de uma versão que corre. Um exemplo concreto: na Sprint 1
produzimos a documentação do processo porque não havia produto para mostrar, mas a partir
da Sprint 2 a regra inverte-se — primeiro o incremento a funcionar, depois a sua descrição.
Se a equipa tivesse interpretado o valor como «em vez de», teria deixado de escrever o
`processo.md` e perdido o acordo de trabalho que agora usa.

---

## Equipa

O Scrum Guide 2020 fala de **responsabilidades** (_accountabilities_) e não de papéis
(_roles_). A diferença não é cosmética: «papel» sugere um cargo ou um posto numa hierarquia
(analista, programador júnior, chefe de equipa), enquanto «responsabilidade» designa aquilo
por que cada pessoa responde dentro de uma única Scrum Team. No Guia, a Scrum Team é uma
unidade autónoma e multifuncional com três responsabilidades — Product Owner, Scrum Master
e Developers — e **não há subequipas nem cargos intermédios**. Por isso, nesta equipa,
Pimba e Mayele não são «developers júniores» nem existe um «developer principal»: ambos
são Developers, com áreas de maior familiaridade (backend e frontend), que é diferente de
hierarquia. Esta escolha obriga a que as decisões técnicas sejam tomadas em conjunto e não
por um chefe técnico.

| Membro | Responsabilidade | Tarefas concretas no projeto |
|---|---|---|
| **Juciano Silva** | Product Owner | Escreve e ordena o _backlog_; define o Objectivo do Produto e o Objectivo de cada Sprint; escreve os critérios de aceitação com a equipa; representa o coordenador de turno nas revisões quando não há retorno dele; decide o que entra e o que sai do âmbito. |
| **Yuri Rodrigues** | Scrum Master | Agenda e facilita os cinco eventos; mantém o quadro e os limites de WIP; verifica que cada evento é registado no próprio dia; identifica e remove impedimentos; conduz a retrospectiva e atualiza o «Desafio a vigiar». |
| **Pimba Cristovão** | Developer (foco em backend e arquitetura) | Modelo de dados, API NestJS, autenticação JWT e controlo de acesso por perfil; revisão de código dos colegas; testes da API. |
| **Mayele Da Cruz** | Developer (foco em frontend) | Ecrãs React, responsividade e acessibilidade (WCAG 2.2), testes de interface; revisão de código dos colegas. Ausente na Sprint 1. |

---

## Eventos

As sprints duram **4 dias reais** (2 semanas simuladas). O Guia define durações máximas
para uma sprint de um mês; a equipa reduz proporcionalmente e, por se tratar de uma
simulação pedagógica, adota eventos leves — adaptação permitida e justificada abaixo.

| Evento | Propósito | Quem participa | Duração máxima no Guia (sprint de 1 mês) | Duração escolhida (sprint de 4 dias) | O que sai do evento |
|---|---|---|---|---|---|
| **Sprint** | Contentor dos outros quatro eventos; ciclo fixo em que se produz um incremento. | Toda a Scrum Team | 1 mês ou menos | 4 dias reais | Um incremento marcado com a etiqueta `sprint-N` |
| **Planeamento da Sprint** | Definir porque é valiosa a sprint, o que se vai fazer e como. | Toda a Scrum Team | 8 horas | 30 minutos | Objectivo da Sprint, itens escolhidos atribuídos no campo Iteration, plano escrito em `sprints/sprint-N.md` |
| **Reunião diária** | Inspecionar o progresso em direção ao Objectivo da Sprint e ajustar o plano do dia. | Developers (o Scrum Master garante que acontece) | 15 minutos | Escrita, até às 20h00 (≈10 min de leitura) | Três linhas por membro no ficheiro da sprint: o que fiz, o que vou fazer, impedimentos |
| **Revisão da Sprint** | Inspecionar o resultado da sprint com as partes interessadas e adaptar o _backlog_. | Scrum Team + coordenador de turno (ou o PO em sua representação) | 4 horas | 30 minutos | Demonstração registada, retorno do coordenador e _backlog_ reordenado |
| **Retrospectiva** | Planear formas de aumentar qualidade e eficácia. | Toda a Scrum Team | 3 horas | 20 minutos | Ações de melhoria e atualização da secção «Desafio a vigiar» |

**Justificação.** Uma sprint de 4 dias é cerca de 1/7 de uma sprint de um mês, mas não se
reduzem os eventos na mesma proporção: há custos fixos (reunir, demonstrar, decidir). Por
isso o planeamento fica em 30 minutos (≈7 % das 8 horas, ligeiramente acima da proporção,
porque é a primeira vez que a equipa planeia) e a revisão e a retrospectiva são feitas na
**mesma sessão de 50 minutos**, cada uma com o seu propósito e o seu registo separado no
ficheiro da sprint. A reunião diária passa a ser **escrita** porque a equipa não partilha
horário de presença todos os dias; o registo escrito deixa prova com data no GitHub, o que
uma reunião oral não deixaria. Estas adaptações são decididas pelo grupo e registadas aqui,
como o enunciado exige.

---

## Objectivo do Produto e Definição de Pronto

### Objectivo do Produto

> Disponibilizar aos coordenadores de turno uma caderneta digital centralizada que reúne
> alunos, turmas, ocorrências escolares e medidas aplicadas, de modo que qualquer
> coordenador consiga reconstituir o percurso disciplinar de um aluno em menos de dois
> minutos, com dados protegidos e acesso diferenciado por perfil.

O Objectivo do Produto é o compromisso do **Product Backlog**: é ele que dá direção à
ordenação dos itens e que permite decidir o que fica para depois. Um item que não aproxima
a equipa deste objectivo não entra na sprint.

### Objectivo da Sprint 1

> Estabelecer a base de trabalho do projeto — acordo de processo, repositório, quadro
> Kanban e _backlog_ inicial — de modo que a equipa possa começar a desenvolver o Módulo 1
> na Sprint 2.

### Definição de Pronto (DoD)

Um item só está **Pronto** quando:

1. o código está num ramo próprio e foi **revisto e aprovado por outro membro** num
   pedido de integração que fecha a issue (`Closes #n`);
2. a aplicação **arranca localmente** seguindo as instruções do README, sem passos em falta;
3. o ecrã funciona a **360 px** (telemóvel) e a **1280 px** (computador);
4. é possível usar a funcionalidade **só com o teclado**, com foco visível;
5. todos os campos têm **etiqueta**, as imagens informativas têm **texto alternativo** e o
   contraste texto/fundo cumpre a WCAG 2.2 AA;
6. as mensagens de erro explicam **como corrigir** o problema;
7. os **testes** definidos para o item passam;
8. a documentação afetada está atualizada;
9. a issue está na coluna **Done** do quadro;
10. os dados usados são **fictícios**.

### Porque cada artefacto tem um compromisso

No Scrum, cada artefacto existe para maximizar a transparência de algo essencial, e cada
um tem um compromisso que lhe dá foco: o **Product Backlog** compromete-se com o
**Objectivo do Produto** (para que a lista não seja um conjunto de pedidos sem direção); o
**Sprint Backlog** compromete-se com o **Objectivo da Sprint** (para que o plano do dia a
dia sirva o objetivo e não se disperse); o **Incremento** compromete-se com a **Definição
de Pronto** (para que «feito» signifique a mesma coisa para todos). Sem estes compromissos,
os artefactos perdem valor: um _backlog_ sem objetivo é uma lista infinita, e um incremento
sem DoD é código que cada um considera acabado à sua maneira.

**O que acontece a um item que não cumpre a DoD no fim da sprint.** Não é apresentado como
parte do incremento. Volta ao Product Backlog, é reestimado e reordenado pelo Product Owner,
e pode entrar na sprint seguinte. A transparência exige que seja dito na revisão — não se
"faz de conta" que está pronto nem se baixa a DoD para o item caber.

---

## Regras do quadro

As três práticas do Kanban (Kanban Guide, 2020) e a forma como aparecem no nosso quadro do
GitHub Projects:

| Prática | Como aparece no quadro |
|---|---|
| **1. Definir e visualizar o fluxo de trabalho** | Colunas com regras de passagem explícitas (abaixo); cada issue é um item de trabalho visível com etiqueta, responsável e sprint. |
| **2. Gerir ativamente os itens no fluxo** | Limite de WIP na coluna «Em curso»; o Scrum Master verifica diariamente; itens bloqueados vão para «Bloqueado» e não contam para o WIP. |
| **3. Melhorar o fluxo** | No fim de cada sprint medimos WIP máximo, débito, idade do item mais antigo e tempo de ciclo de três itens (atividade 13) e usamos esses números na retrospectiva. |

### Colunas e significado

| Coluna | O que significa um item aqui | Regra de passagem |
|---|---|---|
| **Backlog** | Ideia ou requisito ainda não comprometido com uma sprint. | Entra no _backlog_ do produto e é ordenado pelo PO. |
| **A fazer (Sprint)** | Item escolhido no planeamento, ainda não começado. | Tem sprint atribuída no campo Iteration e critérios de aceitação escritos. |
| **Em curso** | Alguém está a trabalhar nele agora. **Limite: 2.** | Exige ramo criado e responsável definido. |
| **Em revisão** | PR aberto à espera de revisão de outro membro. **Limite: 2.** | Exige PR com `Closes #n`. |
| **Bloqueado** | Impedimento identificado (dependência, dúvida, ausência). | Regista-se o impedimento; o Scrum Master trata. |
| **Done** | Cumpre integralmente a Definição de Pronto. | Só entra com PR aprovado e _merge_ feito. |

### Limite de trabalho em curso

**WIP = 2 na coluna «Em curso».** Justificação: na Sprint 1 existem apenas **dois
developers ativos** (Pimba Cristovão e, a partir da Sprint 2, Mayele Da Cruz); o Product
Owner e o Scrum Master trabalham, mas as suas tarefas de processo não passam por «Em
curso». Com dois developers e um limite de 2, a equipa é obrigada a **terminar antes de
começar** outra coisa: se o limite estiver cheio, ninguém puxa um item novo. Um limite
igual ao número de pessoas elimina a multitarefa, que é a principal causa de tempo de ciclo
alto. Na Sprint 2 o limite sobe para **3** quando o Mayele regressar — e essa alteração é
decidida na retrospectiva, não a meio da sprint.

Vista «Lista do produto»: todas as issues ordenadas. Vista «Sprint atual»: apenas as issues
da sprint em curso. Campo **Iteration** com Sprint 1 a Sprint 5 e as datas do calendário.

---

## Como combinamos o Scrum e o Kanban

| Dimensão | Scrum | Kanban | O que fazemos |
|---|---|---|---|
| **Ritmo das entregas** | Ciclos fixos (sprints) com incremento no fim de cada um. | Fluxo contínuo, entrega quando o item fica pronto. | Sprints fixas de 4 dias (Scrum); dentro da sprint, os itens fluem sem esperar pelo fim. |
| **Responsabilidades** | Product Owner, Scrum Master e Developers. | Não prescreve responsabilidades; parte das existentes. | Mantemos as três responsabilidades do Scrum. |
| **Mudanças a meio do ciclo** | Evitam-se; o Objectivo da Sprint protege a equipa. | Permitidas a qualquer momento, sujeitas ao WIP. | Mudanças de âmbito só com decisão do PO e registo; bugs críticos entram sempre. |
| **Medidas usadas** | Progresso face ao Objectivo da Sprint. | WIP, débito, tempo de ciclo, idade do item. | Usamos as duas: o objetivo dá direção, as medidas de fluxo dizem como estamos a chegar lá. |

**Como as medidas de fluxo apoiam os eventos do Scrum.** Na **reunião diária**, a idade do
item mais antigo em curso é o primeiro número a ler: se um item envelhece sem se mover, é
sinal de bloqueio, não de trabalho. Na **revisão**, o débito mostra o que realmente ficou
pronto (e não o que foi começado). Na **retrospectiva**, o WIP máximo e o tempo de ciclo
explicam *porque* o débito foi o que foi, e é daí que saem as ações de melhoria. Sem estes
números, a retrospectiva discutiria impressões.

### Ferramentas

| Ferramenta | Para quê | Porque foi escolhida |
|---|---|---|
| **Git + GitHub** | Versões, ramos, PRs, revisão. | Obrigatório no laboratório; deixa a data dos eventos registada no servidor. |
| **GitHub Projects** | Quadro Kanban, vistas e campo Iteration. | Obrigatório; integra-se com as issues e o histórico fica público. |
| **WhatsApp** | Contacto com o coordenador de turno e dúvidas. | É o canal indicado no enunciado para enviar demonstrações e dúvidas. |
| **VS Code** | Edição e revisão. | Ferramenta comum a todos, já instalada. |
| **Prisma Studio** | Inspeção da base de dados. | Verificar os dados fictícios sem escrever SQL. |

Cada ferramenta adicional só entra se for usada por todos e tiver evidência de uso no
relatório.

---

## Regras de uso da inteligência artificial

A IA é usada como ferramenta de apoio, nunca como substituta da compreensão. Regras:

1. **Verificação obrigatória.** Nenhum texto ou código produzido por IA entra no repositório
   sem ser comparado com a fonte oficial (Scrum Guide 2020, Kanban Guide, GitHub Docs) ou
   testado a correr.
2. **Registo.** No relatório indicamos ferramenta, data, finalidade e a parte do trabalho em
   que foi usada (ver atividade 8).
3. **Domínio individual.** Cada membro consegue explicar sozinho qualquer parte do código e
   do relatório que assinou. Se não conseguir, o trabalho não está pronto.
4. **Autoria do processo.** As issues, os ramos, as revisões e os registos das sprints são
   feitos pelos membros com as suas contas. Nenhum commit é atribuído a quem não o fez.
5. **Dados.** Nunca se introduzem dados reais de alunos ou encarregados em ferramentas de IA.

**Resultado da verificação (atividade 8).** Ver [docs/parte1/atividade-8.md](docs/parte1/atividade-8.md):
a resposta de uma ferramenta de IA à pergunta «Quais são os papéis do Scrum e os seus
eventos?» foi comparada com o Scrum Guide 2020 e continha pelo menos três divergências —
o uso de «papéis» em vez de «responsabilidades», a ideia de que a reunião diária é liderada
pelo Scrum Master e a classificação do refinamento do _backlog_ como evento oficial. Por
isso, a regra 1 é obrigatória e não opcional.

---

## Desafio a vigiar

Com base em **Ahmad, Markkula e Oivo (2013)**, revisão sistemática da literatura sobre Kanban
em desenvolvimento de software:

**Benefícios relatados no estudo.**
1. **Melhor visibilidade e comunicação.** O quadro torna o trabalho e os bloqueios visíveis,
   o que melhora a coordenação da equipa e a comunicação com quem está fora dela.
2. **Melhor gestão do fluxo e das prioridades.** Limitar o trabalho em curso e medir o tempo
   de ciclo permite terminar mais itens e reagir melhor a mudanças de prioridade.

**Desafios relatados no estudo.**
1. **Os limites de WIP são difíceis de sustentar na prática.** O Kanban é fácil de começar e
   difícil de manter: sob pressão de prazo, a equipa tende a abrir trabalho novo e a ignorar
   o limite, o que anula o benefício.
2. **Falta de evidência e de orientação sobre medidas.** O estudo assinala que a base
   empírica é limitada e que as equipas têm dificuldade em escolher e interpretar as medidas
   de fluxo.

**Desafio que esperamos enfrentar.** O primeiro — **ignorar o limite de WIP quando o prazo
aperta**. É o nosso maior risco porque o projeto tem 16 dias reais e a tentação de começar
tudo ao mesmo tempo vai ser grande, sobretudo na Sprint 2, que acumula requisitos,
casos de uso e o Módulo 1.

**O que vamos fazer para o reduzir.**
- O limite de **2** está escrito na coluna do quadro e o Scrum Master verifica-o em cada
  reunião diária; abrir um item com o limite cheio é impedimento registado, não exceção.
- Na reunião diária lê-se a **idade do item mais antigo** antes de qualquer outra coisa.
- Na retrospectiva conta-se **quantas vezes o limite foi violado** e o resultado entra na
  ação de melhoria da sprint seguinte.
- O âmbito está cortado ao produto mínimo: o que não é obrigatório não entra, para que o
  limite não seja «resolvido» à força.

*Este desafio é revisto em todas as retrospectivas.*

---

## Ligações

- [Atividades 1 a 8](docs/parte1/) · [Regras do quadro](docs/quadro.md) · [_Backlog_ inicial](docs/issues.md)
- [Sprint 1](sprints/sprint-1.md)
