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
      "IMG/produtos/protetorplan/prote.jpeg",
      "IMG/produtos/protetorplan/prote2.jpeg",
      "IMG/produtos/protetorplan/prote3.jpeg",
      "IMG/produtos/protetorplan/prote4.jpeg",
      "IMG/produtos/protetorplan/prote5.jpeg",
      "IMG/produtos/protetorplan/prote6.jpeg",
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
      "IMG/produtos/protetorvespa/vespa.jpeg",
      "IMG/produtos/protetorvespa/vespa2.jpeg",
      "IMG/produtos/protetorvespa/vespa3.jpeg",
      "IMG/produtos/protetorvespa/vespa4.jpeg",
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
      "IMG/produtos/geek/gokumulti/gokumult2.jpeg",
      "IMG/produtos/geek/gokumulti/gokumult3.jpeg",
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
      "IMG/produtos/bailarinagira/bailagira3.jpeg",
      "IMG/produtos/bailarinagira/bailagira.gif",
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
      "IMG/produtos/chaveiros/chaveicorin/corintians.jpeg",
      "IMG/produtos/chaveiros/chaveicorin/corintians2.jpeg",
      "IMG/produtos/chaveiros/chaveicorin/corintians3.jpeg",
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
      "IMG/produtos/suportes/supvinho/sup2.jpeg",
      "IMG/produtos/suportes/supvinho/sup3.jpeg",
      "IMG/produtos/suportes/supvinho/sup4.jpeg",
      "IMG/produtos/suportes/supvinho/sup5.jpeg",
      "IMG/produtos/suportes/supvinho/sup6.jpeg",
    ],
    description: ""
  },
  {
    id: 26,
    name: "Suporte para Vinho VinoGrace - Estilo Voronoi",
    price: 45.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supvinograce/vinograce.jpeg",
      "IMG/produtos/suportes/supvinograce/vinograce2.jpeg",
      "IMG/produtos/suportes/supvinograce/vinograce3.jpeg",
      "IMG/produtos/suportes/supvinograce/vinograce4.jpeg",
    ],
    description: ""
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
    name: "Suporte para Garrafa de Vinho com Balanço Cinétcio Inovador V2",
    price: 29.00,
    category: "Decoração",
    icon: "",
    material: "",
    images: [
      "IMG/produtos/suportes/supbalanco/supbalan.jpeg",
      "IMG/produtos/suportes/supbalanco/supbalan2.jpeg",
      "IMG/produtos/suportes/supbalanco/supbalan3.jpeg",
      "IMG/produtos/suportes/supbalanco/supbalan4.jpeg",
      "IMG/produtos/suportes/supbalanco/supbalan5.jpeg",
    ],
    description: ""
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
];

window.FORJ3D_CATEGORIES = ["Todos", "Decoração", "Colecionáveis", "Utilidades", "Organizadores"];
