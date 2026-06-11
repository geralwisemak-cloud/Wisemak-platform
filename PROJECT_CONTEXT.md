# Wisemak Platform - Contexto do Projeto

Documento de referencia para evitar pesquisas repetidas e reduzir o contexto
necessario em cada tarefa.

## Visao Geral

- Website estatico em HTML, CSS e JavaScript.
- Nao existe framework, processo de build ou gestor de dependencias.
- Idioma e tom: portugues de Portugal.
- Design predominante: fundo escuro, cartoes arredondados e tipografia Inter.
- Pagina inicial e configurador desktop: `index.html`.
- Configurador dedicado a mobile: `configurador_mobile_wisemak.html`.

## Ficheiros Principais

| Ficheiro | Funcao |
| --- | --- |
| `index.html` | Homepage, Wiseflix e configurador desktop |
| `configurador_mobile_wisemak.html` | Configurador sequencial para mobile |
| `wisemak-pricing.js` | Fonte unica de precos, consumos e regras comerciais |
| `shared-header.css` | Estilos do cabecalho das paginas de solucao |
| `shared-header.js` | Navegacao e cabecalho partilhados |
| `shared-locations.js` | Distritos e concelhos dos formularios |
| `guide-page.css` | Estilos partilhados das paginas de solucao |
| `solucao_*_wisemak.html` | Paginas individuais das solucoes |
| `Wisemak Logo.png` | Logotipo ativo |
| `hero_wisemak_bg_balanced_tall.jpeg` | Imagem hero ativa |

## Configuradores

### Desktop

- Vive dentro de `index.html`.
- Apresenta AQS, climatizacao e ventilacao.
- A combinacao `Piso Radiante + VMC com bateria de agua` seleciona
  automaticamente `VMC Duplo Fluxo` e bloqueia as restantes ventilacoes.

### Mobile

- Vive em `configurador_mobile_wisemak.html`.
- Tem seis passos: base, AQS, climatizacao, detalhe, ventilacao e resumo.
- Recolhe area, pessoas, divisoes e tipo de imovel.
- Guarda a selecao em `sessionStorage`.
- Pedidos de orcamento ou proposta devem abrir o `Pedido Rapido`.
- A combinacao `Piso Radiante + VMC com bateria de agua` deve:
  - selecionar obrigatoriamente `VMC Duplo Fluxo`;
  - desativar `Sem ventilacao` e `VMC Simples Fluxo`;
  - remover o bloqueio e a selecao automatica ao mudar de distribuicao.

## Precos e Consumos

- Consultar e alterar primeiro `wisemak-pricing.js`.
- Desktop e mobile devem usar exatamente a mesma fonte de valores.
- Nao criar tabelas de precos dentro dos HTML.
- Os investimentos incluem um aumento comercial de 10% sobre os valores que
  eram apresentados anteriormente.
- A Bomba de Calor AQS e a excecao e mantem o investimento anterior.
- Alteracoes de investimento nao alteram consumos, manutencao ou estimativas
  energeticas, salvo pedido explicito.
- `wisemak-pricing.js` inclui:
  - tabelas AQS por numero de pessoas;
  - climatizacao independente por divisao;
  - escaloes de VMC por area;
  - escaloes de Bomba de Calor de climatizacao;
  - custos de caldeira, radiadores, ventiloconvectores e piso radiante;
  - consumos mensais estimados;
  - regra `adjustInvestment`.

## Formularios

- O envio usa Web3Forms.
- A chave atual encontra-se nos configuradores.
- Os formularios incluem as escolhas e estimativas do configurador.
- No mobile, contactos comerciais devem ser encaminhados para o Pedido Rapido.

## Publicacao

- Repositorio: `geralwisemak-cloud/Wisemak-platform`.
- Branch ativo e publicado: `wisemak_v3`.
- GitHub Pages publica a raiz do branch.
- URL: `https://geralwisemak-cloud.github.io/Wisemak-platform/`.
- Quando o utilizador disser `poe online` ou `publica`:
  1. executar `git diff --check`;
  2. criar commit curto em portugues;
  3. enviar para `origin/wisemak_v3`;
  4. confirmar que GitHub Pages apresenta o estado `built`.

## Estado de Trabalho

- Pode existir trabalho local ainda sem commit; verificar sempre `git status`.
- Nao reverter alteracoes locais que nao pertencam ao pedido.
- `AGENTS.md` e este documento sao contexto interno do projeto.
- O utilizador prefere testar manualmente; nao executar testes extensos sem
  pedido explicito.

## Fluxo para Poupar Contexto

1. Ler `AGENTS.md` e este ficheiro.
2. Usar `rg` para encontrar texto, ID, classe ou funcao.
3. Abrir apenas os intervalos relevantes dos HTML grandes.
4. Para precos, abrir apenas `wisemak-pricing.js` e os pontos de consumo.
5. Para mobile, trabalhar primeiro em `configurador_mobile_wisemak.html`.
6. Para desktop, trabalhar primeiro em `index.html`.
7. Nao repetir auditorias globais se este documento responder a questao.
8. Responder de forma curta e indicar se a alteracao esta local, no GitHub ou
   publicada.
