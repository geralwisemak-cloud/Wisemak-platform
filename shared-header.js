document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("site-header");
  if (!mount) return;

  mount.className = "site-header";
  mount.innerHTML = `
    <div class="container nav">
      <a class="logo" href="configurador_instalacao_primeiro_wisemak.html#top" aria-label="Wisemak home"><img src="Wisemak Logo.png" alt="Wisemak"></a>
      <nav class="nav-links">
        <div class="nav-item">
          <a href="#" class="nav-trigger">Soluções</a>
          <div class="solutions-menu">
            <div class="solutions-col">
              <strong>AQS</strong>
              <p>Soluções para água quente sanitária e alternativas complementares.</p>
              <div class="solutions-links">
                <a href="solucao_bomba_calor_aqs_wisemak.html"><span>Bomba de Calor AQS</span><span>→</span></a>
                <a href="solucao_solar_termico_wisemak.html"><span>Solar Térmico</span><span>→</span></a>
                <a href="solucao_termoacumulador_wisemak.html"><span>Termoacumulador</span><span>→</span></a>
                <a href="solucao_esquentador_gn_wisemak.html"><span>Esquentador GN</span><span>→</span></a>
                <a href="solucao_esquentador_botija_wisemak.html"><span>Esquentador de botija</span><span>→</span></a>
              </div>
            </div>
            <div class="solutions-col">
              <strong>Climatização</strong>
              <p>Principais soluções residenciais de climatização e emissão.</p>
              <div class="solutions-links">
                <a href="solucao_bomba_calor_climatizacao_wisemak.html"><span>Bomba de Calor</span><span>→</span></a>
                <a href="solucao_ar_condicionado_wisemak.html#split"><span>AC Split Mural</span><span>→</span></a>
                <a href="solucao_ar_condicionado_wisemak.html#multi"><span>AC Multi Split</span><span>→</span></a>
                <a href="solucao_ar_condicionado_wisemak.html#conduta"><span>AC de Conduta</span><span>→</span></a>
                <a href="solucao_ar_condicionado_wisemak.html#cassete"><span>AC Cassete</span><span>→</span></a>
                <a href="solucao_piso_radiante_wisemak.html"><span>Piso Radiante</span><span>→</span></a>
                <a href="solucao_ventiloconvectores_wisemak.html"><span>Ventiloconvectores</span><span>→</span></a>
                <a href="solucao_radiadores_wisemak.html"><span>Radiadores</span><span>→</span></a>
                <a href="solucao_caldeira_wisemak.html"><span>Caldeira</span><span>→</span></a>
              </div>
            </div>
            <div class="solutions-col">
              <strong>Ventilação</strong>
              <p>Qualidade do ar interior, VMC e soluções complementares.</p>
              <div class="solutions-links">
                <a href="solucao_vmc_wisemak.html"><span>VMC Duplo Fluxo</span><span>→</span></a>
                <a href="solucao_vmc_simples_fluxo_wisemak.html"><span>VMC simples fluxo</span><span>→</span></a>
                <a href="solucao_vmc_bateria_agua_wisemak.html"><span>VMC com bateria de água</span><span>→</span></a>
              </div>
            </div>
          </div>
        </div>
        <a href="configurador_instalacao_primeiro_wisemak.html#configurador">Configurador</a>
        <a href="configurador_instalacao_primeiro_wisemak.html#instalacao">Instalação</a>
        <a href="configurador_instalacao_primeiro_wisemak.html#conteudo">Conteúdo</a>
        <a href="configurador_instalacao_primeiro_wisemak.html#configurador" class="btn btn-light">Começar configurador</a>
      </nav>
    </div>
  `;
});
