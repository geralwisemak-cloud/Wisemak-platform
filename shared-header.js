document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("site-header");
  if (!mount) return;

  mount.className = "site-header";
  mount.innerHTML = `
    <div class="container nav">
      <a class="logo" href="index.html#top" aria-label="Wisemak home"><picture><source media="(max-width: 900px)" srcset="data:image/png;base64,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"><img src="Wisemak Logo.png" alt="Wisemak"></picture><span class="logo-word">Wisemak</span></a>
      <button class="mobile-menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span></button>
      <nav class="nav-links" id="site-nav">
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
                <a href="solucao_esquentador_gn_wisemak.html"><span>Esquentador</span><span>→</span></a>
              </div>
            </div>
            <div class="solutions-col">
              <strong>Climatização</strong>
              <p>Principais soluções residenciais de climatização e emissão.</p>
              <div class="solutions-links">
                <a href="solucao_bomba_calor_climatizacao_wisemak.html"><span>Bomba de Calor</span><span>→</span></a>
                <a href="solucao_ar_condicionado_wisemak.html"><span>AC</span><span>→</span></a>
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
        <a href="index.html#configurador">Configurador</a>
        <a href="index.html#instalacao">Instalação</a>
        <a href="index.html#conteudo">Conteúdo</a>
        <a href="index.html#configurador" class="btn btn-light">Começar configurador</a>
      </nav>
    </div>
  `;

  const toggle = mount.querySelector(".mobile-menu-toggle");
  const nav = mount.querySelector("#site-nav");
  if (!toggle || !nav) return;

  const setOpen = isOpen => {
    document.body.classList.toggle("mobile-nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  };

  toggle.addEventListener("click", event => {
    event.stopPropagation();
    setOpen(!document.body.classList.contains("mobile-nav-open"));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", event => {
      if (link.classList.contains("nav-trigger")) {
        event.preventDefault();
        return;
      }
      setOpen(false);
    });
  });

  document.addEventListener("click", event => {
    if (
      document.body.classList.contains("mobile-nav-open") &&
      !nav.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      setOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      setOpen(false);
    }
  });

  const updateGuideCompletionState = () => {
    const pendingPattern = /^(por escolher|por calcular|guide iniciado|à espera|a espera|ativo|em curso|-)?$/i;

    document.querySelectorAll(".side-card .summary-list").forEach(list => {
      const heading = list.closest(".side-card")?.querySelector("h3");
      if (heading && heading.textContent.trim() === "Resumo do guia") {
        heading.textContent = "Resumo do configurador";
      }
    });

    document.querySelectorAll(".summary-item").forEach(item => {
      const value = item.querySelector("strong")?.textContent.trim() || "";
      item.classList.toggle("is-complete", Boolean(value) && !pendingPattern.test(value));
    });

    document.querySelectorAll(".summary-list").forEach(list => {
      const items = Array.from(list.querySelectorAll(".summary-item"));
      const target = items.find(item => !item.classList.contains("is-complete")) || items.at(-1);
      if (!target) return;
      const targetTop = target.offsetTop - list.offsetTop;
      const centeredTop = targetTop - Math.max(0, (list.clientHeight - target.offsetHeight) / 2);
      list.scrollTo({
        top: Math.max(0, centeredTop),
        behavior: "smooth"
      });
    });

    document.querySelectorAll(".status-pill").forEach(pill => {
      const value = pill.textContent.trim().toLowerCase();
      pill.classList.toggle("is-complete", value.includes("lead pronta") || value.includes("guide enviado"));
    });
  };

  updateGuideCompletionState();
  const guideObserver = new MutationObserver(updateGuideCompletionState);
  document.querySelectorAll(".summary-list, .status-pill").forEach(target => {
    guideObserver.observe(target, {
      childList: true,
      characterData: true,
      subtree: true
    });
  });
});
