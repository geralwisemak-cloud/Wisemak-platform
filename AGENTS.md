# Wisemak Platform - Contexto Codex

Este ficheiro e o contexto persistente e resumido do projeto. Consultar primeiro e
abrir apenas os ficheiros diretamente relacionados com o pedido.
Para contexto tecnico detalhado, consultar `PROJECT_CONTEXT.md`.

## Projeto

- Site estatico em HTML, CSS e JavaScript, sem build ou gestor de dependencias.
- Pagina inicial e configurador desktop: `index.html`.
- Configurador mobile: `configurador_mobile_wisemak.html`.
- Precos e consumos partilhados: `wisemak-pricing.js`.
- Cabecalho partilhado: `shared-header.css` e `shared-header.js`.
- Distritos e concelhos: `shared-locations.js`.
- Paginas individuais: `solucao_*_wisemak.html`.
- Imagem hero ativa: `hero_wisemak_bg_balanced_tall.jpeg`.
- Logotipo ativo: `Wisemak Logo.png`.

## Regras de Negocio

- Desktop e mobile devem apresentar os mesmos precos.
- Todos os valores de precos e consumos devem ficar em `wisemak-pricing.js`.
- Nao duplicar tabelas de precos dentro dos ficheiros HTML.
- Investimentos incluem a atualizacao comercial de 10% sobre os valores
  anteriormente apresentados.
- Bomba de Calor AQS e a excecao: mantem o valor anterior.
- Alteracoes de investimento nao podem alterar consumos, manutencao ou calculos
  energeticos, salvo pedido explicito.
- As escolhas dos configuradores ficam guardadas em `sessionStorage`.
- No mobile, pedidos de orcamento ou proposta devem abrir o "Pedido Rapido".

## Publicacao

- Repositorio: `geralwisemak-cloud/Wisemak-platform`.
- Branch de trabalho e publicacao: `wisemak_v3`.
- GitHub Pages publica a raiz desse branch.
- URL publica: `https://geralwisemak-cloud.github.io/Wisemak-platform/`.
- Quando o utilizador disser "poe online" ou "publica":
  1. Validar o diff.
  2. Fazer commit com mensagem curta em portugues.
  3. Enviar para `origin/wisemak_v3`.
  4. Confirmar que GitHub Pages esta com estado `built`.

## Fluxo Economico

- Usar `rg` para localizar elementos antes de abrir ficheiros grandes.
- Ler apenas intervalos relevantes de `index.html` e do configurador mobile.
- Nao repetir auditorias globais quando este contexto responder a questao.
- Para precos, consultar primeiro apenas `wisemak-pricing.js`.
- Para textos ou estilos, procurar pelo texto, `id` ou classe indicada.
- Depois de alteracoes frontend, validar somente as paginas afetadas.
- Antes de publicar, executar pelo menos `git diff --check`.
- Nao alterar nem reverter trabalho pendente que nao pertenca ao pedido.
- Nao quero que testes o codigo, depois testo manualmente

## Comunicacao

- Responder em portugues de Portugal.
- Ser direto e curto.
- Executar pedidos de alteracao sem pedir confirmacao quando o objetivo for claro.
- Distinguir sempre entre alteracao local, enviada para GitHub e publicada online.
