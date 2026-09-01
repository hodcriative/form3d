/* =========================================================
   FORJ3D — Dados compartilhados dos produtos
   ========================================================= */

window.FORJ3D_CONFIG = {
  whatsappNumber: "5527997941766"
};

window.FORJ3D_ICONS = {
  controle: '<svg viewBox="0 0 100 100" fill="none"><rect x="20" y="30" width="60" height="45" rx="4" stroke="currentColor" stroke-width="2"/><path d="M30 30v-8h40v8" stroke="currentColor" stroke-width="2"/></svg>',
  vaso: '<svg viewBox="0 0 100 100" fill="none"><path d="M50 20c14 0 22 10 22 24 0 12-10 16-10 28H38c0-12-10-16-10-28 0-14 8-24 22-24Z" stroke="currentColor" stroke-width="2"/></svg>',
  luminaria: '<svg viewBox="0 0 100 100" fill="none"><path d="M50 18v14M35 55l15-23 15 23z" stroke="currentColor" stroke-width="2"/><rect x="30" y="55" width="40" height="10" rx="2" stroke="currentColor" stroke-width="2"/><path d="M42 65v12h16V65" stroke="currentColor" stroke-width="2"/></svg>',
  celular: '<svg viewBox="0 0 100 100" fill="none"><rect x="26" y="24" width="48" height="52" rx="8" stroke="currentColor" stroke-width="2"/><path d="M38 65h24" stroke="currentColor" stroke-width="2"/></svg>',
  miniatura: '<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="42" r="16" stroke="currentColor" stroke-width="2"/><path d="M30 78c2-14 10-20 20-20s18 6 20 20" stroke="currentColor" stroke-width="2"/></svg>',
  organizador: '<svg viewBox="0 0 100 100" fill="none"><rect x="22" y="30" width="56" height="40" rx="4" stroke="currentColor" stroke-width="2"/><path d="M22 46h56M40 30v40M60 30v40" stroke="currentColor" stroke-width="1.4"/></svg>',
  porta_chaves: '<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="30" r="10" stroke="currentColor" stroke-width="2"/><path d="M50 40v34M38 60h24M40 74h20" stroke="currentColor" stroke-width="2"/></svg>',
  quadro: '<svg viewBox="0 0 100 100" fill="none"><rect x="24" y="22" width="52" height="56" rx="3" stroke="currentColor" stroke-width="2"/><path d="M24 62 42 46l12 12 22-20" stroke="currentColor" stroke-width="2"/></svg>',
  porta_copo: '<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="26" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="50" r="10" stroke="currentColor" stroke-width="1.4"/></svg>'
};

window.FORJ3D_PRODUCTS = [
  {
    id: 1,
    name: "Boneco Homem-Aranha",
    price: 39.90,
    category: "Acessórios",
    icon: "controle",
    material: "PLA · fosco",
    images: [
      "IMG/produtos/geek/aranha/arafrente.jpeg",
      "IMG/produtos/geek/aranha/araesquerda.jpeg",
      "IMG/produtos/geek/aranha/aradireita.jpeg",
      "IMG/produtos/geek/aranha/aracosta.jpeg"
    ],
    description: "Boneco decorativo do Homem-Aranha impresso em 3D, em pose de ação sobre teia."
  },
  {
    id: 2,
    name: "Mestre Roshi - Dragon Ball",
    price: 190.00,
    category: "Colecionáveis",
    icon: "vaso",
    material: "PETG · translúcido",
    images: [
      "IMG/produtos/geek/kame/kamefrente.jpeg",
      "IMG/produtos/geek/kame/kameesq.jpeg",
      "IMG/produtos/geek/kame/kamelado.jpeg",
      "IMG/produtos/geek/kame/kamecosta.jpeg",
    ],
    description: "Estátua do Mestre Roshi (Dragon Ball) em pose de combate."
  },
  {
    id: 3,
    name: "Spider-Man - Brand New Day ",
    price: 120.00,
    category: "Colecionáveis",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/aranha2/ara2fren.jpeg",
      "IMG/produtos/geek/aranha2/ara2esquerda.jpeg",
      "IMG/produtos/geek/aranha2/ara2costa.jpeg",
    ],
    description: "Estátua do Homem-Aranha no icônico traje de Brand New Day, em pose dinâmica de combate."
  },
  {
    id: 4,
    name: "Batmóvel",
    price: 350.00,
    category: "Colecionáveis",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/batmov/batfechado.jpeg",
      "IMG/produtos/geek/batmov/bataberto.jpeg",
      "IMG/produtos/geek/batmov/batesq.jpeg",
      "IMG/produtos/geek/batmov/batcima.jpeg",
    ],
    description: "Miniatura colecionável detalhada do Batmóvel (Tumbler)."
  },
  {
    id: 5,
    name: "Estátua Mecha Blastoise - Multicolorida Separada",
    price: 230.00,
    category: "Colecionáveis",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/blastoise/blasfrente.jpeg",
      "IMG/produtos/geek/blastoise/blaslado2.jpeg",
      "IMG/produtos/geek/blastoise/blaslado.jpeg",
      "IMG/produtos/geek/blastoise/blascosta.jpeg",
    ],
    description: "Estátua do Blastoise em versão mecha, com canhões articulados nos ombros."
  },
  {
    id: 6,
    name: "Nossa Senhora Aparecida",
    price: 25.00,
    category: "Decoração",
    icon: "",
    material: "Imagem de Nossa Senhora Aparecida impressa em 3D, ideal presentes e decorações.",
    images: [
      "IMG/produtos/aparecida/apare.jpeg",
    ],
    description: ""
  },
  {
    id: 7,
    name: "PipeBug Trap",
    price: 35.00,
    category: "Utilidades",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/pipebug/pipe.jpeg",
      "IMG/produtos/geek/pipebug/pipe5.gif",
      "IMG/produtos/geek/pipebug/pipe2.jpeg",
      "IMG/produtos/geek/pipebug/pipe3.jpeg",
      "IMG/produtos/geek/pipebug/pipe4.jpeg",
    ],
    description: "Armadilha para insetos em formato do clássico cano verde do Mario, disfarçada de item decorativo."
  },
  {
    id: 8,
    name: "Protetor de Solo para Plantas",
    price: 12.00,
    category: "Utilidades",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/protetores/protetorplan/prote.jpeg",
      "IMG/produtos/protetores/protetorplan/prote7.gif",
      "IMG/produtos/protetores/protetorplan/prote2.jpeg",
      "IMG/produtos/protetores/protetorplan/prote3.jpeg",
      "IMG/produtos/protetores/protetorplan/prote4.jpeg",
      "IMG/produtos/protetores/protetorplan/prote5.jpeg",
      "IMG/produtos/protetores/protetorplan/prote6.jpeg",
    ],
    description: "Disco protetor para vasos de plantas: evita que gatos cavem a terra e afasta insetos, mantendo o solo protegido sem prejudicar o crescimento das raízes."
  },
  {
    id: 9,
    name: "Bug - Off Snap Can Lid",
    price: 10.00,
    category: "Utilidades",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/protetores/protetorvespa/vespa.jpeg",
      "IMG/produtos/protetores/protetorvespa/vespa2.jpeg",
      "IMG/produtos/protetores/protetorvespa/vespa3.jpeg",
      "IMG/produtos/protetores/protetorvespa/vespa4.jpeg",
    ],
    description: "Tampa de encaixe rápido para latas de bebida, feita para impedir que vespas e outros insetos entrem no recipiente em ambientes externos."
  },
  {
    id: 10,
    name: "Porta Canetas Mario",
    price: 78.99,
    category: "Organizadores",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/lixeiraorga/lixe.jpeg",
      "IMG/produtos/geek/lixeiraorga/lixe2.jpeg",
      "IMG/produtos/geek/lixeiraorga/lixe3.jpeg",
      "IMG/produtos/geek/lixeiraorga/lixe4.jpeg",
    ],
    description: "Organizador temático inspirado no Mario, com tampa articulada no formato do boné e das luvas do personagem. Pode ser usado como lixeira de mesa, porta-canetas ou organizador de miudezas."
  },
  {
    id: 11,
    name: "Pegador de Insetos Supremo",
    price: 35.00,
    category: "Utilidades",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/insetosupremo/inseto.jpeg",
      "IMG/produtos/insetosupremo/inseto5.gif",
      "IMG/produtos/insetosupremo/inseto2.jpeg",
      "IMG/produtos/insetosupremo/inseto3.jpeg",
      "IMG/produtos/insetosupremo/inseto4.jpeg",
    ],
    description: "Pegador de insetos com cabo ergonômico e pá curva, projetado para capturar e remover insetos com segurança e sem contato direto."
  },
  {
    id: 12,
    name: "Luminária Dragon Ball",
    price: 68.99,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/iluminariadrag/iluminaria.jpeg",
      "IMG/produtos/geek/iluminariadrag/iluminaria2.jpeg",
      "IMG/produtos/geek/iluminariadrag/iluminaria3.jpeg",
      "IMG/produtos/geek/iluminariadrag/iluminaria4.jpeg",
    ],
    description: "Luminária decorativa do Son Goku carregando uma Kamehameha, com fio de LED formando o feixe de energia entre as mãos e o cristal na base.",
  },
  {
    id: 13,
    name: "Mani Dock Max",
    price: 26.00,
    category: "Organizadores",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/manidock/mani1.jpeg",
      "IMG/produtos/manidock/mani2.jpeg",
      "IMG/produtos/manidock/mani3.jpeg",
    ],
    description: "Suporte ergonômico para apoio dos dedos durante esmaltação ou procedimentos de manicure, com canaletas em U que acomodam até 4 dedos confortavelmente."
  },
  {
    id: 14,
    name: "Fúria da Luz",
    price: 60.00,
    category: "Colecionáveis",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/furialuz/furia.jpeg",
      "IMG/produtos/geek/furialuz/furia2.jpeg",
    ],
    description: "Estátua da Fúria da Luz (Light Fury), de Como Treinar o Seu Dragão, com acabamento branco perolado e pose sentada."
  },
  {
    id: 15,
    name: "Goku SSJ3 Urbano",
    price: 115.00,
    category: "Colecionáveis",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/gokuurbano/urbano.jpeg",
      "IMG/produtos/geek/gokuurbano/urbano2.jpeg",
      "IMG/produtos/geek/gokuurbano/urbano3.jpeg",
      "IMG/produtos/geek/gokuurbano/urbano4.jpeg",
    ],
    description: ""
  },
  {
    id: 16,
    name: "Decoração para Aniversários",
    price: 115.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/aniversarios/aniversarios.jpeg",
      "IMG/produtos/aniversarios/aniversarios2.jpeg",
      "IMG/produtos/aniversarios/aniversarios15.jpeg",
      "IMG/produtos/aniversarios/aniversarios18.jpeg",
      "IMG/produtos/aniversarios/aniversarios26.jpeg",
      "IMG/produtos/aniversarios/aniversarios30.jpeg",
      "IMG/produtos/aniversarios/aniversarios40.jpeg",
      "IMG/produtos/aniversarios/aniversarios50.jpeg",
      "IMG/produtos/aniversarios/aniversarios60.jpeg",
      "IMG/produtos/aniversarios/aniversarios60s.jpeg",
      "IMG/produtos/aniversarios/aniversarios70.jpeg",
      "IMG/produtos/aniversarios/aniversarios85.jpeg",
      "IMG/produtos/aniversarios/aniversarios90.jpeg",
    ],
    description: ""
  },
  {
    id: 17,
    name: "Marcos Fotográficos Bebê 1 Mês - 1 Ano",
    price: 45.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/bebe1ano/bebe1.jpeg",
      "IMG/produtos/bebe1ano/bebe2.jpeg",
      "IMG/produtos/bebe1ano/bebe3.jpeg",
      "IMG/produtos/bebe1ano/bebe4.jpeg",
      "IMG/produtos/bebe1ano/bebe5.jpeg",
    ],
    description: ""
  },
  {
    id: 18,
    name: "Goku Multi - Part",
    price: 110.00,
    category: "Colecionáveis",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/gokumulti/gokumult.jpeg",
      "IMG/produtos/geek/gokumulti/gokumult3.jpeg",
      "IMG/produtos/geek/gokumulti/gokumult2.jpeg",
      "IMG/produtos/geek/gokumulti/gokumult4.jpeg",
    ],
    description: ""
  },
  {
    id: 19,
    name: "Suporte de Guarda - Sol para Telefone",
    price: 45.00,
    category: "Utilidades",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supguardasol/supguarda.jpeg",
      "IMG/produtos/suportes/supguardasol/supguarda2.jpeg",
      "IMG/produtos/suportes/supguardasol/supguarda3.jpeg",
    ],
    description: ""
  },
  {
    id: 20,
    name: "Bailarina Giratória - Torre de Rabanetes Antiestresse",
    price: 30.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/bailarinagira/bailagira2.jpeg",
      "IMG/produtos/bailarinagira/bailagira.gif",
      "IMG/produtos/bailarinagira/bailagira3.jpeg",
    ],
    description: ""
  },
  {
    id: 21,
    name: "Chaveiro Giratório Corinthians",
    price: 13.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/chaveiros/chaveicorin/corintians2.jpeg",
      "IMG/produtos/chaveiros/chaveicorin/corintians3.jpeg",
      "IMG/produtos/chaveiros/chaveicorin/corintians.jpeg",
      "IMG/produtos/chaveiros/chaveicorin/corintians4.jpeg",
    ],
    description: ""
  },
  {
    id: 22,
    name: "Lanterna Chapéu Seletor",
    price: 70.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/lantechape/lantechapeu.jpeg",
      "IMG/produtos/geek/lantechape/lantechapeu2.jpeg",
      "IMG/produtos/geek/lantechape/lantechapeu3.jpeg",
      "IMG/produtos/geek/lantechape/lantechapeu4.jpeg",
      "IMG/produtos/geek/lantechape/lantechapeu5.jpeg",
      "IMG/produtos/geek/lantechape/lantechapeu6.jpeg",
    ],
    description: ""
  },
  {
    id: 23,
    name: "Fonte de Ambiente Mágica - Perpétuo Móvel",
    price: 120.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/fontemagic/fonte.jpeg",
      "IMG/produtos/fontemagic/fonte2.jpeg",
      "IMG/produtos/fontemagic/fonte3.jpeg",
      "IMG/produtos/fontemagic/fonte4.jpeg",
      "IMG/produtos/fontemagic/fonte5.jpeg",
      "IMG/produtos/fontemagic/fonte6.jpeg",
      "IMG/produtos/fontemagic/fonte7.jpeg",
    ],
    description: ""
  },
  {
    id: 24,
    name: "Chaveiro BMW M2",
    price: 64.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/chaveiros/chaveibmw/chavebmw.jpeg",
      "IMG/produtos/chaveiros/chaveibmw/chavebmw2.jpeg",
      "IMG/produtos/chaveiros/chaveibmw/chavebmw3.jpeg",
      "IMG/produtos/chaveiros/chaveibmw/chavebmw4.jpeg",
      "IMG/produtos/chaveiros/chaveibmw/chavebmw5.jpeg",
      "IMG/produtos/chaveiros/chaveibmw/chavebmw6.jpeg",
    ],
    description: ""
  },
  {
    id: 25,
    name: "Suporte para Vinho",
    price: 40.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinho/sup1.jpeg",
      "IMG/produtos/suportes/supvinho/sup3.jpeg",
      "IMG/produtos/suportes/supvinho/sup2.jpeg",
      "IMG/produtos/suportes/supvinho/sup4.jpeg",
      "IMG/produtos/suportes/supvinho/sup5.jpeg",
      "IMG/produtos/suportes/supvinho/sup6.jpeg",
    ],
    description: ""
  },
  {
    id: 26,
    name: "Suporte para Vinho VinoGrace",
    price: 45.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinograce/vinograce.jpeg",
      "IMG/produtos/suportes/supvinograce/vinograce3.jpeg",
      "IMG/produtos/suportes/supvinograce/vinograce2.jpeg",
      "IMG/produtos/suportes/supvinograce/vinograce4.jpeg",
    ],
    description: "Estilo Voronoi"
  },
  {
    id: 27,
    name: "Suporte para Garrafa de Vinho em Formato de Cachorro",
    price: 59.98,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinhocach/vinhach.jpeg",
    ],
    description: ""
  },
  {
    id: 28,
    name: "Suporte para Garrafa de Vinho em Formato de Ganso",
    price: 50.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supganso/suporteganso.jpeg",
      "IMG/produtos/suportes/supganso/suporteganso2.jpeg",
      "IMG/produtos/suportes/supganso/suporteganso3.jpeg",
    ],
    description: ""
  },
  {
    id: 29,
    name: "Suporte para Garrafa de Vinho do Deus Grego",
    price: 46.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supgrego/suporgrego.jpeg",
      "IMG/produtos/suportes/supgrego/suporgrego2.jpeg",
      "IMG/produtos/suportes/supgrego/suporgrego3.jpeg",
    ],
    description: ""
  },
  {
    id: 30,
    name: "Suporte para Garrafa de Vinho",
    price: 29.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supbalanco/supbalan2.jpeg",
      "IMG/produtos/suportes/supbalanco/supbalan3.jpeg",
      "IMG/produtos/suportes/supbalanco/supbalan.jpeg",
      "IMG/produtos/suportes/supbalanco/supbalan4.jpeg",
      "IMG/produtos/suportes/supbalanco/supbalan5.jpeg",
    ],
    description: "Balanço Cinétcio Inovador V2"
  },
  {
    id: 31,
    name: "Suporte para Garrafa de Vinho e Taças",
    price: 110.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinhotaca/supvinta.jpeg",
      "IMG/produtos/suportes/supvinhotaca/supvinta2.jpeg",
      "IMG/produtos/suportes/supvinhotaca/supvinta3.jpeg",
      "IMG/produtos/suportes/supvinhotaca/supvinta4.jpeg",
    ],
    description: ""
  },
  {
    id: 32,
    name: "Suprte para Garrafas de Vinhos Moderno",
    price: 74.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinmoderno/supmoder.jpeg",
      "IMG/produtos/suportes/supvinmoderno/supmoder2.jpeg",
      "IMG/produtos/suportes/supvinmoderno/supmoder3.jpeg",
    ],
    description: "Versões para 4 e 5 Garrafas"
  },
  {
    id: 33,
    name: "Suprte De Barril de Vinhos Bag-in-Box",
    price: 82.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supbarril/supvinbarril.jpeg",
      "IMG/produtos/suportes/supbarril/supvinbarril2.jpeg",
      "IMG/produtos/suportes/supbarril/supvinbarril3.jpeg",
      "IMG/produtos/suportes/supbarril/supvinbarril4.jpeg",
    ],
    description: ""
  },
  {
    id: 34,
    name: "Suprte para Garrafas de Vinhos",
    price: 92.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinho2/supor.jpeg",
      "IMG/produtos/suportes/supvinho2/supor2.jpeg",
      "IMG/produtos/suportes/supvinho2/supor3.jpeg",
      "IMG/produtos/suportes/supvinho2/supor4.jpeg",
      "IMG/produtos/suportes/supvinho2/supor5.jpeg",
    ],
    description: ""
  },
  {
    id: 35,
    name: "Suprte para Garrafas de Vinho",
    price: 62.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinhocoelho/supcoelho.jpeg",
      "IMG/produtos/suportes/supvinhocoelho/supcoelho3.jpeg",
      "IMG/produtos/suportes/supvinhocoelho/supcoelho2.jpeg",
    ],
    description: "Coelho / Coelhinho / Páscoa"
  },
  {
    id: 36,
    name: "Suprte para Garrafas de Vinhos Arara",
    price: 200.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinhoarara/suparara.jpeg",
      "IMG/produtos/suportes/supvinhoarara/suparara4.jpeg",
      "IMG/produtos/suportes/supvinhoarara/suparara3.jpeg",
      "IMG/produtos/suportes/supvinhoarara/suparara2.jpeg",
      "IMG/produtos/suportes/supvinhoarara/suparara5.jpeg",
    ],
    description: ""
  },
  {
    id: 37,
    name: "Rack Orgânico para Vinho e Taças",
    price: 155.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/rackvinho/rackvin.jpeg",
      "IMG/produtos/rackvinho/rackvin3.jpeg",
      "IMG/produtos/rackvinho/rackvin2.jpeg",
      "IMG/produtos/rackvinho/rackvin4.jpeg",
      "IMG/produtos/rackvinho/rackvin5.jpeg",
    ],
    description: "Suporte para 4 Garrafas"
  },
  {
    id: 38,
    name: "Suporte para Vinho VinoGrace Elegance",
    price: 42.99,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinograceele/vinele.jpeg",
      "IMG/produtos/suportes/supvinograceele/vinele3.jpeg",
      "IMG/produtos/suportes/supvinograceele/vinele2.jpeg",
    ],
    description: ""
  },
  {
    id: 39,
    name: "O Expositor de Vinho",
    price: 58.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/expositorvin/expovin.jpeg",
      "IMG/produtos/suportes/expositorvin/expovin2.jpeg",
      "IMG/produtos/suportes/expositorvin/expovin3.jpeg",
      "IMG/produtos/suportes/expositorvin/expovin4.jpeg",
    ],
    description: "Anel & Base da Montanha da Perdição"
  },
  {
    id: 40,
    name: "Suporte para Garrafas de Vinho  - Polvo",
    price: 40.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supolvo/suppolvo1.jpeg",
      "IMG/produtos/suportes/supolvo/suppolvo2.jpeg",
      "IMG/produtos/suportes/supolvo/suppolvo3.jpeg",
      "IMG/produtos/suportes/supolvo/suppolvo4.jpeg",
      "IMG/produtos/suportes/supolvo/suppolvo5.jpeg",
      "IMG/produtos/suportes/supolvo/suppolvo6.jpeg",
    ],
    description: "Suporte em Formato de Polvo."
  },
  {
    id: 41,
    name: "Suporte para Garrafa de Vinho",
    price: 110.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supcranio/cranio.jpeg",
      "IMG/produtos/suportes/supcranio/cranio2.jpeg",
      "IMG/produtos/suportes/supcranio/cranio3.jpeg",
    ],
    description: "Lâmpada de Crânio"
  },
  {
    id: 42,
    name: "Suporte para Garrafas de Vinho",
    price: 57.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinho3/vinhosup.jpeg",
      "IMG/produtos/suportes/supvinho3/vinhosup2.jpeg",
      "IMG/produtos/suportes/supvinho3/vinhosup3.jpeg",
      "IMG/produtos/suportes/supvinho3/vinhosup4.jpeg",
      "IMG/produtos/suportes/supvinho3/vinhosup5.jpeg",
    ],
    description: ""
  },
  {
    id: 43,
    name: "Suporte para Garrafas de Vinho - Dachshund",
    price: 33.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supcachopasco/cachopas.jpeg",
      "IMG/produtos/suportes/supcachopasco/cachopas2.jpeg",
      "IMG/produtos/suportes/supcachopasco/cachopas3.jpeg",
      "IMG/produtos/suportes/supcachopasco/cachopas4.jpeg",
    ],
    description: "Cachorro de Páscoa"
  },
  {
    id: 44,
    name: "Suporte para Garrafas",
    price: 57.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supportavin/supporta.jpeg",
      "IMG/produtos/suportes/supportavin/supporta2.jpeg",
      "IMG/produtos/suportes/supportavin/supporta3.jpeg",
    ],
    description: "Porta Vinhos"
  },
  {
    id: 45,
    name: "Suporte para Garrafa de Vinho",
    price: 80.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinhofenix/supvinfenix.jpeg",
      "IMG/produtos/suportes/supvinhofenix/supvinfenix2.jpeg",
      "IMG/produtos/suportes/supvinhofenix/supvinfenix3.jpeg",
      "IMG/produtos/suportes/supvinhofenix/supvinfenix4.jpeg",
      "IMG/produtos/suportes/supvinhofenix/supvinfenix5.jpeg",
      "IMG/produtos/suportes/supvinhofenix/supvinfenix6.jpeg",
      "IMG/produtos/suportes/supvinhofenix/supvinfenix7.jpeg",
    ],
    description: "Formato de Fênix"
  },
  {
    id: 46,
    name: "Suporte para Garrafa de Vinho",
    price: 75.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supbasebol/basebol.jpeg",
      "IMG/produtos/suportes/supbasebol/basebol2.jpeg",
      "IMG/produtos/suportes/supbasebol/basebol3.jpeg",
    ],
    description: "Batedeiro de Beisebol"
  },
  {
    id: 47,
    name: "Suporte para 5 Garrafas de Vinho",
    price: 86.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supgarrafas/supvingarra.jpeg",
      "IMG/produtos/suportes/supgarrafas/supvingarra2.jpeg",
      "IMG/produtos/suportes/supgarrafas/supvingarra3.jpeg",
      "IMG/produtos/suportes/supgarrafas/supvingarra4.jpeg",
      "IMG/produtos/suportes/supgarrafas/supvingarra5.jpeg",
      "IMG/produtos/suportes/supgarrafas/supvingarra6.jpeg",
    ],
    description: ""
  },
  {
    id: 48,
    name: "Suporte para Garrafa de Vinho",
    price: 140.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinho4/vinsups.jpeg",
      "IMG/produtos/suportes/supvinho4/vinsups2.jpeg",
      "IMG/produtos/suportes/supvinho4/vinsups3.jpeg",
      "IMG/produtos/suportes/supvinho4/vinsups4.jpeg",
    ],
    description: ""
  },
  {
    id: 49,
    name: "Adega de Vinhos Infinita",
    price: 69.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/adegavinho/adegavin.jpeg",
      "IMG/produtos/suportes/adegavinho/adegavin2.jpeg",
    ],
    description: ""
  },
  {
    id: 50,
    name: "Suporte Minimalista para Garrafa de Vinho",
    price: 40.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supmini/supvinmini.jpeg",
      "IMG/produtos/suportes/supmini/supvinmini2.jpeg",
    ],
    description: ""
  },
  {
    id: 51,
    name: "Suporte para Garrafa de Vinho",
    price: 69.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supcabecroco/supcro.jpeg",
      "IMG/produtos/suportes/supcabecroco/supcro2.jpeg",
      "IMG/produtos/suportes/supcabecroco/supcro3.jpeg",
      "IMG/produtos/suportes/supcabecroco/supcro4.jpeg",
      "IMG/produtos/suportes/supcabecroco/supcro5.jpeg",
      "IMG/produtos/suportes/supcabecroco/supcro6.jpeg",
      "IMG/produtos/suportes/supcabecroco/supcro7.jpeg",
    ],
    description: "Formato Cabeça de Crocodilo."
  },
  {
    id: 52,
    name: "Suporte para Copos e Garrafas",
    price: 92.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supcopogarra/supcoga.jpeg",
      "IMG/produtos/suportes/supcopogarra/supcoga2.jpeg",
      "IMG/produtos/suportes/supcopogarra/supcoga3.jpeg",
      "IMG/produtos/suportes/supcopogarra/supcoga4.jpeg",
      "IMG/produtos/suportes/supcopogarra/supcoga5.jpeg",
      "IMG/produtos/suportes/supcopogarra/supcoga6.jpeg",
    ],
    description: ""
  },
  {
    id: 53,
    name: "Suporte para Garrafa de Vinho",
    price: 40.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supcanhao/supcan.jpeg",
      "IMG/produtos/suportes/supcanhao/supcan2.jpeg",
      "IMG/produtos/suportes/supcanhao/supcan3.jpeg",
      "IMG/produtos/suportes/supcanhao/supcan4.jpeg",
      "IMG/produtos/suportes/supcanhao/supcan5.jpeg",
      "IMG/produtos/suportes/supcanhao/supcan6.jpeg",
      "IMG/produtos/suportes/supcanhao/supcan7.jpeg",
    ],
    description: "Formato de Canhão."
  },
  {
    id: 54,
    name: "Suporte de Garrafas para Geladeiras e Armários",
    price: 65.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supgeladeiraarma/supgela.jpeg",
      "IMG/produtos/suportes/supgeladeiraarma/supgela2.jpeg",
      "IMG/produtos/suportes/supgeladeiraarma/supgela3.jpeg",
    ],
    description: "Coporta 4 ou 6 Garrafas."
  },
  {
    id: 55,
    name: "Suporte para Garrafa de Vinho",
    price: 65.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supobsicavalo/supobcava.jpeg",
      "IMG/produtos/suportes/supobsicavalo/supobcava2.gif",
      "IMG/produtos/suportes/supobsicavalo/supobcava3.jpeg",
    ],
    description: "Formato de Cavalo de Obsidiana."
  },
  {
    id: 56,
    name: "Suporte de Prateleira para Copos",
    price: 69.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supprateleira/supprate.jpeg",
      "IMG/produtos/suportes/supprateleira/supprate2.jpeg",
      "IMG/produtos/suportes/supprateleira/supprate3.jpeg",
    ],
    description: "Stanley, Yeti, Hydro Flask."
  },
  {
    id: 57,
    name: "Adega de Vinho para Geladeira",
    price: 38.98,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/adegageladeira/adegavins.jpeg",
      "IMG/produtos/suportes/adegageladeira/adegavins2.jpeg",
      "IMG/produtos/suportes/adegageladeira/adegavins3.jpeg",
      "IMG/produtos/suportes/adegageladeira/adegavins4.jpeg",
    ],
    description: "Empilhável."
  },
  {
    id: 58,
    name: "Suporte para Garrafa de Vinho",
    price: 80.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supdragaonordico/supnordico.jpeg",
      "IMG/produtos/suportes/supdragaonordico/supnordico2.jpeg",
      "IMG/produtos/suportes/supdragaonordico/supnordico3.jpeg",
      "IMG/produtos/suportes/supdragaonordico/supnordico4.jpeg",
      "IMG/produtos/suportes/supdragaonordico/supnordico4.jpeg",
      "IMG/produtos/suportes/supdragaonordico/supnordico6.jpeg",
    ],
    description: "Dragão Nórdigo."
  },
  {
    id: 59,
    name: "Suporte para Garrafa de Vinho Anubis",
    price: 90.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supanubis/supanu.jpeg",
      "IMG/produtos/suportes/supanubis/supanu2.jpeg",
      "IMG/produtos/suportes/supanubis/supanu3.jpeg",
    ],
    description: "Elegância Egípicia."
  },
  {
    id: 60,
    name: "Suporte para Garrafa de Vinho",
    price: 82.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvingolfe/supvingol.jpeg",
      "IMG/produtos/suportes/supvingolfe/supvingol2.jpeg",
      "IMG/produtos/suportes/supvingolfe/supvingol3.jpeg",
      "IMG/produtos/suportes/supvingolfe/supvingol4.jpeg",
      "IMG/produtos/suportes/supvingolfe/supvingol5.jpeg",
      "IMG/produtos/suportes/supvingolfe/supvingol6.jpeg",
      "IMG/produtos/suportes/supvingolfe/supvingol7.jpeg",
      "IMG/produtos/suportes/supvingolfe/supvingol8.jpeg",
    ],
    description: "Bolsa de Golfe."
  },
  {
    id: 61,
    name: "Suporte para Garrafa de Vinho",
    price: 67.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supboneconeve/supbuneve.jpeg",
      "IMG/produtos/suportes/supboneconeve/supbuneve2.jpeg",
      "IMG/produtos/suportes/supboneconeve/supbuneve3.jpeg",
      "IMG/produtos/suportes/supboneconeve/supbuneve4.jpeg",
    ],
    description: "Formato de Boneco de Neve."
  },
  {
    id: 62,
    name: "Suporte para Garrafa de Vinho",
    price: 48.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supchama/supcha.jpeg",
      "IMG/produtos/suportes/supchama/supcha2.jpeg",
      "IMG/produtos/suportes/supchama/supcha3.jpeg",
    ],
    description: "Formato de Chama."
  },
  {
    id: 63,
    name: "Suporte para Garrafa de Vinho - Bear With Me",
    price: 48.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supbearwhi/supbearwhitch.jpeg",
      "IMG/produtos/suportes/supbearwhi/supbearwhitch2.jpeg",
      "IMG/produtos/suportes/supbearwhi/supbearwhitch3.jpeg",
      "IMG/produtos/suportes/supbearwhi/supbearwhitch4.jpeg",
    ],
    description: "Presente Divertido."
  },
  {
    id: 64,
    name: "Suporte para Garrafa de Vinho",
    price: 45.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinnamorados/supnamo2.jpeg",
      "IMG/produtos/suportes/supvinnamorados/supnamo.gif",
      "IMG/produtos/suportes/supvinnamorados/supnamo3.jpeg",
      "IMG/produtos/suportes/supvinnamorados/supnamo4.jpeg",
    ],
    description: "Dia dos Namorados."
  },
  {
    id: 65,
    name: "Suporte Definitivo para Cama e Sofá",
    price: 78.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supcamasofa/supcama.jpeg",
      "IMG/produtos/suportes/supcamasofa/supcama2.jpeg",
      "IMG/produtos/suportes/supcamasofa/supcama3.jpeg",
    ],
    description: "Vinhos, Lanches."
  },
  {
    id: 66,
    name: "Suporte para Garrafa de Vinho",
    price: 89.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supolvo2/suppolvin.jpeg",
      "IMG/produtos/suportes/supolvo2/suppolvin2.jpeg",
      "IMG/produtos/suportes/supolvo2/suppolvin3.jpeg",
      "IMG/produtos/suportes/supolvo2/suppolvin4.jpeg",
    ],
    description: "Formato de Polvo."
  },
  {
    id: 67,
    name: "Suporte para Garrafa de Vinho",
    price: 87.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supflamingobebado/supflamingo.jpeg",
      "IMG/produtos/suportes/supflamingobebado/supflamingo2.jpeg",
    ],
    description: "Formato de Flamingo Bêbado."
  },
  {
    id: 68,
    name: "Suporte para Garrafa de Vinho",
    price: 40.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supesqueleto/supesque.jpg",
    ],
    description: "Formato de Esqueleto."
  },
  {
    id: 69,
    name: "Suporte para Garrafa de Vinho",
    price: 60.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvincobra/supcobra.jpeg",
      "IMG/produtos/suportes/supvincobra/supcobra2.gif",
      "IMG/produtos/suportes/supvincobra/supcobra3.jpeg",
    ],
    description: "Formato de Cobra."
  },
  {
    id: 70,
    name: "Suporte para Garrafa de Vinho",
    price: 60.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvincoracao/supcoracao.jpeg",
      "IMG/produtos/suportes/supvincoracao/supcoracao2.jpeg",
      "IMG/produtos/suportes/supvincoracao/supcoracao3.jpeg",
    ],
    description: "Formato de Coração."
  },
  {
    id: 71,
    name: "Suporte para Garrafa de Vinho",
    price: 80.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvincabecadrag/supcabecadrag3.jpeg",
      "IMG/produtos/suportes/supvincabecadrag/supcabecadrag2.jpeg",
      "IMG/produtos/suportes/supvincabecadrag/supcabecadrag.jpeg",
    ],
    description: "Formato de Cabeça de Dragão."
  },
  {
    id: 72,
    name: "Suporte para Garrafa de Vinho",
    price: 82.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvindrag/supdrag.jpeg",
      "IMG/produtos/suportes/supvindrag/supdrag2.jpeg",
      "IMG/produtos/suportes/supvindrag/supdrag3.jpeg",
      "IMG/produtos/suportes/supvindrag/supdrag4.jpeg",
    ],
    description: "Formato de Dragão."
  },
  {
    id: 73,
    name: "Suporte Gigante para Garrafa de Vinho",
    price: 57.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinpistao/suppistao.jpeg",
      "IMG/produtos/suportes/supvinpistao/suppistao2.gif",
      "IMG/produtos/suportes/supvinpistao/suppistao3.jpeg",
      "IMG/produtos/suportes/supvinpistao/suppistao4.jpeg",
    ],
    description: "Formato de Pistão."
  },
  {
    id: 74,
    name: "Suporte para Garrafa de Vinho",
    price: 45.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinnoel/supnoel.jpeg",
      "IMG/produtos/suportes/supvinnoel/supnoel2.jpeg",
      "IMG/produtos/suportes/supvinnoel/supnoel3.jpeg",
    ],
    description: "Decoração de Natal Branco de Papai Noel."
  },
  {
    id: 75,
    name: "Caixa Expositora de Whisky",
    price: 170.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/caixawisk/caixwis.jpeg",
      "IMG/produtos/suportes/caixawisk/caixwis2.gif",
      "IMG/produtos/suportes/caixawisk/caixwis3.jpeg",
      "IMG/produtos/suportes/caixawisk/caixwis4.jpeg",
    ],
    description: "."
  },
  {
    id: 76,
    name: "Pokemon Charizard",
    price: 38.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/charizardams/charizads.jpeg",
      "IMG/produtos/geek/charizardams/charizads2.gif",
      "IMG/produtos/geek/charizardams/charizads3.jpeg",

    ],
    description: "Sem AMS – Fogo Lendário"
  },
  {
    id: 77,
    name: "Pokemon Blaziken",
    price: 37.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/blazikenams/blazikenam.jpeg",
      "IMG/produtos/geek/blazikenams/blazikenam2.gif",
    ],
    description: "Sem AMS –  Fúria Ardente para Montar"
  },
  {
    id: 78,
    name: "Suporte Universal para Controle",
    price: 90.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/supcontrolwolwe/supwol.jpeg",
      "IMG/produtos/geek/supcontrolwolwe/supwol2.jpeg",
      "IMG/produtos/geek/supcontrolwolwe/supwol3.jpeg",
    ],
    description: "Design Wolwerine"
  },
  {
    id: 79,
    name: "Suporte Universal para Controle GTA VI",
    price: 160.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/supcontrolgta/supgta.jpeg",
      "IMG/produtos/geek/supcontrolgta/supgta2.jpeg",
      "IMG/produtos/geek/supcontrolgta/supgta3.jpeg",
      "IMG/produtos/geek/supcontrolgta/supgta4.jpeg",
      "IMG/produtos/geek/supcontrolgta/supgta5.jpeg",
    ],
    description: "Para Plasytation 5 e Xbox"
  },
  {
    id: 80,
    name: "Suporte para Controle Playstation 5 GTA VI",
    price: 35.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/supcontrolgta2/supgtaps.jpeg",
    ],
    description: "Para Plasytation 5 e Xbox"
  },
  {
    id: 81,
    name: "Suporte para Controle e Headset",
    price: 49.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/supcontrolhead/supconhea.jpeg",
      "IMG/produtos/geek/supcontrolhead/supconhea2.jpeg",
      "IMG/produtos/geek/supcontrolhead/supconhea3.jpeg",
      "IMG/produtos/geek/supcontrolhead/supconhea4.jpeg",
    ],
    description: ""
  },
  {
    id: 82,
    name: "Suporte para Controle",
    price: 69.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/supcontrolyoshi/supyohi.jpeg",
      "IMG/produtos/geek/supcontrolyoshi/supyohi2.jpeg",
      "IMG/produtos/geek/supcontrolyoshi/supyohi3.jpeg",
      "IMG/produtos/geek/supcontrolyoshi/supyohi4.jpeg",
      "IMG/produtos/geek/supcontrolyoshi/supyohi5.jpeg",
    ],
    description: ""
  },
  {
    id: 83,
    name: "Suporte Duplo para Controle de Playstation 5",
    price: 33.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/supduploplays/supduplo.jpeg",
      "IMG/produtos/geek/supduploplays/supduplo2.jpeg",
      "IMG/produtos/geek/supduploplays/supduplo3.jpeg",
      "IMG/produtos/geek/supduploplays/supduplo4.jpeg",
    ],
    description: ""
  },
  {
    id: 84,
    name: "Suporte Universal para Controle Senhor dos Aníes",
    price: 90.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/supsenhoraneis/supsaurons.png",
    ],
    description: "Formato da Mão de Sauron"
  },
  {
    id: 85,
    name: "Suporte Universal para Controle Pokémon",
    price: 40.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/supcraneocubone/supcubone.jpeg",
      "IMG/produtos/geek/supcraneocubone/supcubone2.jpeg",
    ],
    description: "Formato da Crânio de Cubone"
  },
  {
    id: 86,
    name: "Suporte Universal para Controle God of War",
    price: 67.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/supcontrolkratos/supkratos.jpeg",
      "IMG/produtos/geek/supcontrolkratos/supkratos2.jpeg",
    ],
    description: "Formato do Torso de Kratos"
  },
  {
    id: 87,
    name: "Cruz com Híperdetalhes",
    price: 33.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/supcontrolkratos/cruzhiperdeta.jpeg",
      "IMG/produtos/geek/supcontrolkratos/cruzhiperdeta2.jpeg",
    ],
    description: ""
  },
  {
    id: 88,
    name: "Protetor de Cabo USB-C",
    price: 12.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/protetores/protetorcabousb/protetorusb.jpeg",
      "IMG/produtos/protetores/protetorcabousb/protetorusb2.jpeg",
      "IMG/produtos/protetores/protetorcabousb/protetorusb3.jpeg",
      "IMG/produtos/protetores/protetorcabousb/protetorusb4.jpeg",
    ],
    description: "Atualizado"
  },
  {
    id: 89,
    name: "Castor Mabel Hoppers",
    price: 125.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/castormabel/castmabel.jpeg",
      "IMG/produtos/geek/castormabel/castmabel2.jpeg",
      "IMG/produtos/geek/castormabel/castmabel3.jpeg",
      "IMG/produtos/geek/castormabel/castmabel4.jpeg",
    ],
    description: ""
  },
  {
    id: 90,
    name: "Par de Renas Minimalistas",
    price: 40.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/renasminimalistas/renasmini.jpeg",
      "IMG/produtos/renasminimalistas/renasmini2.jpeg",
      "IMG/produtos/renasminimalistas/renasmini3.jpeg",
      "IMG/produtos/renasminimalistas/renasmini4.jpeg",
    ],
    description: "Decoração Moderna para Lareira"
  },
  {
    id: 91,
    name: "Mewtwo TCG",
    price: 33.51,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/mewtwotcg/mewtwocard.jpeg",
      "IMG/produtos/geek/mewtwotcg/mewtwocard2.jpeg",
    ],
    description: "Cartão em Relevo"
  },
  {
    id: 92,
    name: "Suporte GTA VI",
    price: 39.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/supcontrolgta3/supgtavis.jpeg",
      "IMG/produtos/geek/supcontrolgta3/supgtavis2.jpeg",
      "IMG/produtos/geek/supcontrolgta3/supgtavis3.jpeg",
      "IMG/produtos/geek/supcontrolgta3/supgtavis4.jpeg",
    ],
    description: "Suporte para DualSense e Xbox"
  },
  {
    id: 93,
    name: "Máscara Bobo da Corte",
    price: 69.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/mascarabobocorte/mascbobo.jpeg",
      "IMG/produtos/geek/mascarabobocorte/mascbobo2.jpeg",
    ],
    description: "Coleção de Máscaras Usáveis"
  },
  {
    id: 94,
    name: "Observador Alienígena",
    price: 325.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/observadoralien/observaalien.jpeg",
      "IMG/produtos/geek/observadoralien/observaalien2.jpeg",
      "IMG/produtos/geek/observadoralien/observaalien3.jpeg",
      "IMG/produtos/geek/observadoralien/observaalien4.jpeg",
    ],
    description: "3 Pés THEM 1947"
  },
  {
    id: 95,
    name: "Decoração de Terror de Halloween",
    price: 78.52,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/haloweencaveira/decohalowen.jpeg",
      "IMG/produtos/geek/haloweencaveira/decohalowen2.jpeg",
      "IMG/produtos/geek/haloweencaveira/decohalowen3.jpeg",
      "IMG/produtos/geek/haloweencaveira/decohalowen4.jpeg",
      "IMG/produtos/geek/haloweencaveira/decohalowen5.jpeg",
    ],
    description: "Caveira & Túmulo"
  },
  {
    id: 96,
    name: "Bandeja de Cubos de Gelo Pokemon",
    price: 36.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/bandejagelopoke/bandegepoke.jpeg",
      "IMG/produtos/geek/bandejagelopoke/bandegepoke2.jpeg",
      "IMG/produtos/geek/bandejagelopoke/bandegepoke3.jpeg",
      "IMG/produtos/geek/bandejagelopoke/bandegepoke4.jpeg",
    ],
    description: "Forma de Gelo"
  },
  {
    id: 97,
    name: "Dragão No Monitor",
    price: 34.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/dragaomonitor/dragmoni.jpeg",
      "IMG/produtos/geek/dragaomonitor/dragmoni2.jpeg",
      "IMG/produtos/geek/dragaomonitor/dragmoni3.jpeg",
    ],
    description: ""
  },
  {
    id: 98,
    name: "Suporte universal para Controle GTA VI",
    price: 68.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/supunivgta/supunivgta.jpeg",
      "IMG/produtos/geek/supunivgta/supunivgta2.jpeg",
      "IMG/produtos/geek/supunivgta/supunivgta3.jpeg",
      "IMG/produtos/geek/supunivgta/supunivgta4.jpeg",
    ],
    description: ""
  },
  {
    id: 99,
    name: "Brinquedo/Chaveiro Fluffy Tails",
    price: 31.65,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/geek/fluffysamo/fluffychavei.jpeg",
      "IMG/produtos/geek/fluffysamo/fluffychavei2.jpeg",
      "IMG/produtos/geek/fluffysamo/fluffychavei3.jpeg",
      "IMG/produtos/geek/fluffysamo/fluffychavei4.jpeg",
      "IMG/produtos/geek/fluffysamo/fluffychavei5.jpeg",
    ],
    description: "Cachorro Samoyeda Flexível"
  },
];

window.FORJ3D_CATEGORIES = ["Todos", "Decoração", "Colecionáveis", "Utilidades", "Organizadores"];