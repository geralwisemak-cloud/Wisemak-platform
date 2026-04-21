const WISEMAK_DISTRICT_MUNICIPALITIES = {
  'Aveiro': ['Agueda', 'Albergaria-a-Velha', 'Anadia', 'Arouca', 'Aveiro', 'Castelo de Paiva', 'Espinho', 'Estarreja', 'Ilhavo', 'Mealhada', 'Murtosa', 'Oliveira de Azemeis', 'Oliveira do Bairro', 'Ovar', 'Santa Maria da Feira', 'Sao Joao da Madeira', 'Sever do Vouga', 'Vagos', 'Vale de Cambra'],
  'Beja': ['Aljustrel', 'Almodovar', 'Alvito', 'Barrancos', 'Beja', 'Castro Verde', 'Cuba', 'Ferreira do Alentejo', 'Mertola', 'Moura', 'Odemira', 'Ourique', 'Serpa', 'Vidigueira'],
  'Braga': ['Amares', 'Barcelos', 'Braga', 'Cabeceiras de Basto', 'Celorico de Basto', 'Esposende', 'Fafe', 'Guimaraes', 'Povoa de Lanhoso', 'Terras de Bouro', 'Vieira do Minho', 'Vila Nova de Famalicao', 'Vila Verde', 'Vizela'],
  'Braganca': ['Alfandega da Fe', 'Braganca', 'Carrazeda de Ansiaes', 'Freixo de Espada a Cinta', 'Macedo de Cavaleiros', 'Miranda do Douro', 'Mirandela', 'Mogadouro', 'Torre de Moncorvo', 'Vila Flor', 'Vimioso', 'Vinhais'],
  'Castelo Branco': ['Belmonte', 'Castelo Branco', 'Covilha', 'Fundao', 'Idanha-a-Nova', 'Oleiros', 'Penamacor', 'Proenca-a-Nova', 'Serta', 'Vila de Rei', 'Vila Velha de Rodao'],
  'Coimbra': ['Arganil', 'Cantanhede', 'Coimbra', 'Condeixa-a-Nova', 'Figueira da Foz', 'Gois', 'Lousa', 'Mira', 'Miranda do Corvo', 'Montemor-o-Velho', 'Oliveira do Hospital', 'Pampilhosa da Serra', 'Penacova', 'Penela', 'Soure', 'Tabua', 'Vila Nova de Poiares'],
  'Evora': ['Alandroal', 'Arraiolos', 'Borba', 'Estremoz', 'Evora', 'Montemor-o-Novo', 'Mora', 'Mourao', 'Portel', 'Redondo', 'Reguengos de Monsaraz', 'Vendas Novas', 'Viana do Alentejo', 'Vila Vicosa'],
  'Faro': ['Albufeira', 'Alcoutim', 'Aljezur', 'Castro Marim', 'Faro', 'Lagoa', 'Lagos', 'Loule', 'Monchique', 'Olhao', 'Portimao', 'Sao Bras de Alportel', 'Silves', 'Tavira', 'Vila do Bispo', 'Vila Real de Santo Antonio'],
  'Guarda': ['Aguiar da Beira', 'Almeida', 'Celorico da Beira', 'Figueira de Castelo Rodrigo', 'Fornos de Algodres', 'Gouveia', 'Guarda', 'Manteigas', 'Meda', 'Pinhel', 'Sabugal', 'Seia', 'Trancoso', 'Vila Nova de Foz Coa'],
  'Leiria': ['Alvaiazere', 'Ansiao', 'Batalha', 'Caldas da Rainha', 'Castanheira de Pera', 'Figueiro dos Vinhos', 'Leiria', 'Marinha Grande', 'Nazare', 'Obidos', 'Pedrogao Grande', 'Peniche', 'Pombal', 'Porto de Mos'],
  'Lisboa': ['Alenquer', 'Amadora', 'Arruda dos Vinhos', 'Azambuja', 'Cadaval', 'Cascais', 'Lisboa', 'Loures', 'Lourinha', 'Mafra', 'Odivelas', 'Oeiras', 'Sintra', 'Sobral de Monte Agraco', 'Torres Vedras', 'Vila Franca de Xira'],
  'Portalegre': ['Alter do Chao', 'Arronches', 'Avis', 'Campo Maior', 'Castelo de Vide', 'Crato', 'Elvas', 'Fronteira', 'Gaviao', 'Marvao', 'Monforte', 'Nisa', 'Ponte de Sor', 'Portalegre', 'Sousel'],
  'Porto': ['Amarante', 'Baiao', 'Felgueiras', 'Gondomar', 'Lousada', 'Maia', 'Marco de Canaveses', 'Matosinhos', 'Pacos de Ferreira', 'Paredes', 'Penafiel', 'Porto', 'Povoa de Varzim', 'Santo Tirso', 'Trofa', 'Valongo', 'Vila do Conde', 'Vila Nova de Gaia'],
  'Santarem': ['Abrantes', 'Alcanena', 'Almeirim', 'Alpiarca', 'Benavente', 'Cartaxo', 'Chamusca', 'Constancia', 'Coruche', 'Entroncamento', 'Ferreira do Zezere', 'Golega', 'Macao', 'Ourem', 'Rio Maior', 'Salvaterra de Magos', 'Santarem', 'Sardoal', 'Tomar', 'Torres Novas', 'Vila Nova da Barquinha'],
  'Setubal': ['Alcacer do Sal', 'Alcochete', 'Almada', 'Barreiro', 'Grandola', 'Moita', 'Montijo', 'Palmela', 'Santiago do Cacem', 'Seixal', 'Sesimbra', 'Setubal', 'Sines'],
  'Viana do Castelo': ['Arcos de Valdevez', 'Caminha', 'Melgaco', 'Moncao', 'Paredes de Coura', 'Ponte da Barca', 'Ponte de Lima', 'Valenca', 'Viana do Castelo', 'Vila Nova de Cerveira'],
  'Vila Real': ['Alijo', 'Boticas', 'Chaves', 'Mesao Frio', 'Mondim de Basto', 'Montalegre', 'Murca', 'Peso da Regua', 'Ribeira de Pena', 'Sabrosa', 'Santa Marta de Penaguiao', 'Valpacos', 'Vila Pouca de Aguiar', 'Vila Real'],
  'Viseu': ['Armamar', 'Carregal do Sal', 'Castro Daire', 'Cinfaes', 'Lamego', 'Mangualde', 'Moimenta da Beira', 'Mortagua', 'Nelas', 'Oliveira de Frades', 'Penalva do Castelo', 'Penedono', 'Resende', 'Santa Comba Dao', 'Sao Joao da Pesqueira', 'Sao Pedro do Sul', 'Satao', 'Sernancelhe', 'Tabuaco', 'Tarouca', 'Tondela', 'Vila Nova de Paiva', 'Viseu', 'Vouzela'],
  'Regiao Autonoma da Madeira': ['Calheta', 'Camara de Lobos', 'Funchal', 'Machico', 'Ponta do Sol', 'Porto Moniz', 'Porto Santo', 'Ribeira Brava', 'Santa Cruz', 'Santana', 'Sao Vicente'],
  'Regiao Autonoma dos Acores': ['Angra do Heroismo', 'Calheta', 'Corvo', 'Horta', 'Lagoa', 'Lajes das Flores', 'Lajes do Pico', 'Madalena', 'Nordeste', 'Ponta Delgada', 'Povoacao', 'Praia da Vitoria', 'Ribeira Grande', 'Santa Cruz da Graciosa', 'Santa Cruz das Flores', 'Sao Roque do Pico', 'Velas', 'Vila do Porto', 'Vila Franca do Campo']
};

window.WisemakLocations = {
  municipalities: WISEMAK_DISTRICT_MUNICIPALITIES,
  get(key = 'lead'){
    const district = document.querySelector(`[data-location-district][data-location-key="${key}"]`)?.value || '';
    const municipality = document.querySelector(`[data-location-municipality][data-location-key="${key}"]`)?.value || '';
    return {
      district,
      municipality,
      label: district && municipality ? `${district} · ${municipality}` : ''
    };
  },
  init(root = document){
    root.querySelectorAll('[data-location-district]').forEach(districtSelect => {
      const key = districtSelect.dataset.locationKey || 'lead';
      const municipalitySelect = root.querySelector(`[data-location-municipality][data-location-key="${key}"]`);
      const hiddenInput = document.getElementById(`${key}-location`);

      groupLocationSelects(districtSelect, municipalitySelect);
      [districtSelect, municipalitySelect].forEach(styleLocationSelect);

      districtSelect.innerHTML = '<option value="">Selecione o distrito</option>';
      Object.keys(WISEMAK_DISTRICT_MUNICIPALITIES).forEach(district => {
        const option = document.createElement('option');
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
      });

      function syncLocation(){
        const district = districtSelect.value || '';
        const municipality = municipalitySelect?.value || '';
        if(hiddenInput){
          hiddenInput.value = district && municipality ? `${district} · ${municipality}` : '';
          hiddenInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }

      function populateMunicipalities(){
        if(!municipalitySelect){
          return;
        }
        const municipalities = WISEMAK_DISTRICT_MUNICIPALITIES[districtSelect.value] || [];
        municipalitySelect.innerHTML = '<option value="">Selecione o concelho</option>';
        municipalities.forEach(municipality => {
          const option = document.createElement('option');
          option.value = municipality;
          option.textContent = municipality;
          municipalitySelect.appendChild(option);
        });
        municipalitySelect.disabled = municipalities.length === 0;
        styleLocationSelect(municipalitySelect);
        syncLocation();
      }

      districtSelect.addEventListener('change', populateMunicipalities);
      municipalitySelect?.addEventListener('change', syncLocation);
      populateMunicipalities();
    });
  }
};

function groupLocationSelects(districtSelect, municipalitySelect){
  if(!districtSelect || !municipalitySelect){
    return;
  }

  const parent = districtSelect.parentElement;
  if(!parent || parent !== municipalitySelect.parentElement || !parent.classList.contains('form-grid')){
    return;
  }
  if(parent.querySelector(`[data-location-pair="${districtSelect.dataset.locationKey || 'lead'}"]`)){
    return;
  }

  const pair = document.createElement('div');
  pair.dataset.locationPair = districtSelect.dataset.locationKey || 'lead';
  pair.className = 'wisemak-location-pair';
  Object.assign(pair.style, {
    gridColumn: '1 / -1',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '14px'
  });

  parent.insertBefore(pair, districtSelect);
  pair.appendChild(districtSelect);
  pair.appendChild(municipalitySelect);

  const media = window.matchMedia('(max-width: 760px)');
  function syncLayout(){
    pair.style.gridTemplateColumns = media.matches ? '1fr' : 'repeat(2, minmax(0, 1fr))';
  }
  media.addEventListener?.('change', syncLayout);
  syncLayout();
}

function styleLocationSelect(select){
  if(!select){
    return;
  }

  Object.assign(select.style, {
    appearance: 'none',
    WebkitAppearance: 'none',
    width: '100%',
    minHeight: '58px',
    padding: '15px 44px 15px 16px',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,.12)',
    backgroundColor: '#111',
    backgroundImage: 'linear-gradient(45deg, transparent 50%, rgba(255,255,255,.72) 50%), linear-gradient(135deg, rgba(255,255,255,.72) 50%, transparent 50%)',
    backgroundPosition: 'calc(100% - 22px) 50%, calc(100% - 16px) 50%',
    backgroundSize: '7px 7px, 7px 7px',
    backgroundRepeat: 'no-repeat',
    color: select.disabled ? 'rgba(255,255,255,.46)' : '#fff',
    colorScheme: 'dark',
    font: 'inherit',
    lineHeight: '1.2',
    outline: 'none',
    opacity: '1',
    cursor: select.disabled ? 'not-allowed' : 'pointer'
  });
}

document.addEventListener('DOMContentLoaded', () => window.WisemakLocations.init());
