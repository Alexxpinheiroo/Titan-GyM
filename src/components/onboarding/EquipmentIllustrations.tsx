/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export interface EquipmentMeta {
  shortDesc: string;
  category: string;
  muscles: string[];
  howToIdentify: string;
  iconType: string;
}

export const EQUIPMENT_META: Record<string, EquipmentMeta> = {
  // Pesos Livres
  "Halteres": {
    shortDesc: "Pesos individuais manuais para um ou dois braços",
    category: "Pesos Livres",
    muscles: ["Bíceps", "Ombros", "Peitoral", "Tríceps"],
    howToIdentify: "Pares de pesos de mão com pegada central, dispostos na estante por ordem de peso (de 1kg até 40kg+).",
    iconType: "halteres",
  },
  "Kettlebell": {
    shortDesc: "Peso esférico com alça para balanços e força funcional",
    category: "Pesos Livres",
    muscles: ["Glúteos", "Posteriores", "Core", "Ombros"],
    howToIdentify: "Bola de ferro fundido com uma alça em arco no topo, parece uma chaleira de ferro.",
    iconType: "kettlebell",
  },

  // Barras e Pesos
  "Anilha": {
    shortDesc: "Discos de peso para colocar nas barras ou carregar",
    category: "Barras e Pesos",
    muscles: ["Corpo Inteiro"],
    howToIdentify: "Discos redondos de ferro ou borracha furados no centro, organizados em suportes com pesos como 5kg, 10kg, 20kg.",
    iconType: "anilha",
  },
  "Barra Hexagonal": {
    shortDesc: "Barra em formato de trapézio/hexágono para levantamento terra",
    category: "Barras e Pesos",
    muscles: ["Pernas", "Glúteos", "Trapézio", "Lombar"],
    howToIdentify: "Barra de ferro em forma de hexágono oco onde você entra dentro e segura nas duas alças laterais.",
    iconType: "barra_hexagonal",
  },
  "Barra W": {
    shortDesc: "Barra com curvas em zigue-zague para conforto dos punhos",
    category: "Barras e Pesos",
    muscles: ["Bíceps", "Tríceps", "Antebraço"],
    howToIdentify: "Barra metálica curta com curvas anatômicas que lembram a letra 'W', excelente para rosca bíceps.",
    iconType: "barra_w",
  },
  "Barra fixa": {
    shortDesc: "Barra suspensa horizontal para puxadas com peso do corpo",
    category: "Barras e Pesos",
    muscles: ["Dorsais", "Bíceps", "Abdômen"],
    howToIdentify: "Barra alta fixada no alto de uma parede, teto ou estrutura de ferro para se pendurar.",
    iconType: "barra_fixa",
  },
  "Barra olímpica": {
    shortDesc: "Barra longa de 2,20m (20kg) com rolamentos giratórios",
    category: "Barras e Pesos",
    muscles: ["Peitoral", "Pernas", "Costas"],
    howToIdentify: "A barra mais comprida da academia (2,2m), tem pontas grossas de 50mm para anilhas olímpicas.",
    iconType: "barra_olimpica",
  },
  "Barra reta": {
    shortDesc: "Barra padrão reta para supinos, agachamentos e roscas",
    category: "Barras e Pesos",
    muscles: ["Braços", "Peitoral", "Ombros"],
    howToIdentify: "Barra reta simples de comprimento médio, comum em áreas de pesos livres ou acoplada a cabos.",
    iconType: "barra_reta",
  },

  // Bancos e Hackers
  "Banco Declinado": {
    shortDesc: "Banco inclinado para baixo com suporte de pernas para prender os pés",
    category: "Bancos e Hackers",
    muscles: ["Peitoral Inferior", "Tríceps", "Abdômen"],
    howToIdentify: "Banco cuja cabeça fica mais baixa que o quadril, com rolos de espuma no topo para prender os tornozelos e evitar escorregar.",
    iconType: "banco_declinado",
  },
  "Banco Reto": {
    shortDesc: "Banco totalmente horizontal e plano sem inclinação",
    category: "Bancos e Hackers",
    muscles: ["Peitoral", "Tríceps", "Ombros"],
    howToIdentify: "Banco plano e reto estofado na horizontal, a base de supinos, remadas e exercícios deitados ou sentados.",
    iconType: "banco_reto",
  },
  "Banco Romano": {
    shortDesc: "Banco a 45° para extensão de tronco, lombar e glúteos",
    category: "Bancos e Hackers",
    muscles: ["Lombar", "Glúteos", "Posteriores da Coxa"],
    howToIdentify: "Aparelho inclinado a 45° com duas almofadas para apoiar as coxas e rolos atrás para travar os calcanhares.",
    iconType: "banco_romano",
  },
  "Banco Scott": {
    shortDesc: "Banco com prancha inclinada para apoiar os braços na rosca",
    category: "Bancos e Hackers",
    muscles: ["Bíceps"],
    howToIdentify: "Banco com uma almofada inclinada na frente onde você descansa os braços e axilas para isolar o bíceps.",
    iconType: "banco_scott",
  },
  "Gaiola de Agachamento": {
    shortDesc: "Estrutura vertical com 4 postes e travas de segurança",
    category: "Bancos e Hackers",
    muscles: ["Quadríceps", "Glúteos", "Costas"],
    howToIdentify: "Grande estrutura tipo jaula de metal quadrada com furos para encaixar suportes de barra em várias alturas.",
    iconType: "gaiola",
  },
  "Máquina de Agachamento em V com Carga Livre": {
    shortDesc: "Aparelho articulado com almofadas nos ombros e plataforma inclinada",
    category: "Bancos e Hackers",
    muscles: ["Quadríceps", "Glúteos"],
    howToIdentify: "Máquina onde você entra debaixo de ombreiras acolchoadas e empurra uma plataforma angulada em V.",
    iconType: "v_squat",
  },
  "Máquina de Crucifixo Inclinado": {
    shortDesc: "Aparelho para abertura de peitoral em ângulo inclinado",
    category: "Bancos e Hackers",
    muscles: ["Peitoral Superior"],
    howToIdentify: "Banco reclinado para trás com dois braços mecânicos laterais que convergem no centro do peito.",
    iconType: "crucifixo_inclinado",
  },
  "Máquina de Trap Bar Deadlift": {
    shortDesc: "Alavancas articuladas para puxar peso do chão com pegada neutra",
    category: "Bancos e Hackers",
    muscles: ["Pernas", "Costas", "Glúteos"],
    howToIdentify: "Máquina articulada com pegadores laterais fixos na altura dos joelhos para simular levantamento terra.",
    iconType: "trap_bar_machine",
  },
  "Supino Articulado Reto": {
    shortDesc: "Aparelho com alavancas convergentes carregado com anilhas",
    category: "Bancos e Hackers",
    muscles: ["Peitoral", "Tríceps", "Deltóide Anterior"],
    howToIdentify: "Banco horizontal com dois braços articulados independentes onde você empurra as alças e coloca anilhas nas pontas.",
    iconType: "supino_articulado",
  },
  "Supino Vertical": {
    shortDesc: "Máquina com assento reto onde você empurra o peso sentado para frente",
    category: "Bancos e Hackers",
    muscles: ["Peitoral", "Tríceps"],
    howToIdentify: "Máquina com encosto vertical onde você senta ereto e empurra duas manoplas para frente na linha do peito.",
    iconType: "supino_vertical",
  },

  // Máquinas de Cabo
  "Cabo de resistência": {
    shortDesc: "Elásticos tubulares com alças para tração contínua",
    category: "Máquinas de Cabo",
    muscles: ["Corpo Inteiro"],
    howToIdentify: "Tubos de borracha maleáveis com manoplas nas pontas que esticam para criar tensão.",
    iconType: "cabo_resistencia",
  },
  "Leg Press Horizontal": {
    shortDesc: "Leg press sentado onde o banco desliza na horizontal",
    category: "Máquinas de Cabo",
    muscles: ["Quadríceps", "Glúteos"],
    howToIdentify: "Máquina onde você senta no nível do chão e empurra uma chapa vertical para frente, o banco corre reto para trás.",
    iconType: "leg_horizontal",
  },
  "Máquina de Remada Alta": {
    shortDesc: "Aparelho de puxada de cima para baixo com pegada convergente",
    category: "Máquinas de Cabo",
    muscles: ["Costas", "Dorsais", "Trapézio"],
    howToIdentify: "Máquina com banco alto e alças acima da cabeça que você puxa para baixo em direção ao peitoral superior.",
    iconType: "remada_alta",
  },
  "Polia": {
    shortDesc: "Torre de cabos com regulagem de altura da roldana",
    category: "Máquinas de Cabo",
    muscles: ["Tríceps", "Bíceps", "Ombros", "Peitoral"],
    howToIdentify: "Coluna alta com cabo de aço, roldana móvel que sobe e desce num trilho e pinos para selecionar o peso.",
    iconType: "polia",
  },
  "Remada Baixa": {
    shortDesc: "Cabo baixo com apoio de pés para puxar sentado em direção ao abdômen",
    category: "Máquinas de Cabo",
    muscles: ["Costas", "Dorsais", "Bíceps"],
    howToIdentify: "Banco comprido com duas chapas de ferro para apoiar os pés e um cabo que sai perto do chão com triângulo de pegada.",
    iconType: "remada_baixa",
  },
  "Voador Vertical": {
    shortDesc: "Cabos ou alavancas verticais para fechar os braços como um abraço",
    category: "Máquinas de Cabo",
    muscles: ["Peitoral"],
    howToIdentify: "Aparelho onde você senta de costas para a torre e une os dois braços à frente do corpo mantendo os cotovelos flexionados.",
    iconType: "voador_vertical",
  },

  // Máquinas de Peso
  "Cadeira Abdutora": {
    shortDesc: "Aparelho onde você empurra os joelhos PARA FORA",
    category: "Máquinas de Peso",
    muscles: ["Glúteo Médio", "Quadril Lateral"],
    howToIdentify: "Cadeira com duas almofadas do LADO DE FORA dos joelhos, o movimento é abrir as pernas empurrando para fora.",
    iconType: "abdutora",
  },
  "Cadeira Adutora": {
    shortDesc: "Aparelho onde você espreme os joelhos PARA DENTRO",
    category: "Máquinas de Peso",
    muscles: ["Parte Interna da Coxa (Adutores)"],
    howToIdentify: "Cadeira com almofadas do LADO DE DENTRO dos joelhos, o movimento é fechar as pernas espremendo para dentro.",
    iconType: "adutora",
  },
  "Cadeira Extensora": {
    shortDesc: "Sentado, empurrar a almofada para cima esticando as pernas",
    category: "Máquinas de Peso",
    muscles: ["Quadríceps (Frente da Coxa)"],
    howToIdentify: "Cadeira onde você apoia as costas, coloca as canelas sob um rolo estofado e chuta para cima estendendo os joelhos.",
    iconType: "extensora",
  },
  "Elevação Pélvica De Solo": {
    shortDesc: "Aparelho com cinto ou barra estofada sobre o quadril para empurrar para cima",
    category: "Máquinas de Peso",
    muscles: ["Glúteos", "Posteriores"],
    howToIdentify: "Banco baixo com uma cinta larga ou almofada articulada que passa pela cintura para empurrar o quadril para cima.",
    iconType: "elevacao_pelvica",
  },
  "Gráviton": {
    shortDesc: "Máquina com plataforma móvel para ajudar na barra fixa e paralelas",
    category: "Máquinas de Peso",
    muscles: ["Costas", "Peito", "Tríceps"],
    howToIdentify: "Torre alta com barra e pegadas paralelas onde você sobe e ajoelha sobre uma plataforma que empurra seu peso para cima.",
    iconType: "graviton",
  },
  "Hack Machine": {
    shortDesc: "Carrinho inclinado com apoio de ombros para agachar sobre trilhos",
    category: "Máquinas de Peso",
    muscles: ["Quadríceps", "Glúteos"],
    howToIdentify: "Estrutura inclinada com trilho, encosto onde você deita as costas com almofadas nos ombros e pés na plataforma.",
    iconType: "hack_machine",
  },
  "Leg Press 45": {
    shortDesc: "Carrinho a 45 graus onde você deita e empurra a plataforma inclinada",
    category: "Máquinas de Peso",
    muscles: ["Quadríceps", "Glúteos", "Posteriores"],
    howToIdentify: "O clássico leg press gigante inclinado a 45 graus onde você senta bem recostado e empurra uma grande plataforma de ferro com os pés.",
    iconType: "leg_45",
  },
  "Máquina Clássica de Extensão de Tríceps": {
    shortDesc: "Aparelho sentado para empurrar alavanca esticando os cotovelos",
    category: "Máquinas de Peso",
    muscles: ["Tríceps"],
    howToIdentify: "Banco com apoio de cotovelos onde você segura duas alavancas e empurra para baixo estendendo os braços.",
    iconType: "triceps_machine",
  },
  "Máquina Flexora": {
    shortDesc: "Aparelho para dobrar os joelhos puxando o rolo em direção aos glúteos",
    category: "Máquinas de Peso",
    muscles: ["Posterior de Coxa (Isquiotibiais)"],
    howToIdentify: "Pode ser deitada ou sentada: você prende a parte de trás do calcanhar num rolo e dobra o joelho puxando para trás.",
    iconType: "flexora",
  },
  "Rosca Scott": {
    shortDesc: "Aparelho com alavanca acoplada para isolamento dos bíceps",
    category: "Máquinas de Peso",
    muscles: ["Bíceps"],
    howToIdentify: "Máquina com assento e almofada inclinada para os braços com pegadores que giram para cima puxando o peso.",
    iconType: "rosca_scott_machine",
  },
  "Máquina de Desenvolvimento": {
    shortDesc: "Máquina com pegadores para empurrar o peso acima da cabeça",
    category: "Máquinas de Peso",
    muscles: ["Ombros (Deltóides)", "Tríceps"],
    howToIdentify: "Banco com encosto reto e pegadas na altura das orelhas que você empurra direto para cima até esticar os braços.",
    iconType: "desenvolvimento",
  },
  "Máquina de Elevação Lateral": {
    shortDesc: "Aparelho com almofadas nos cotovelos para levantar os braços de lado",
    category: "Máquinas de Peso",
    muscles: ["Deltóide Lateral (Ombros)"],
    howToIdentify: "Sentado ereto, você encaixa os cotovelos contra duas almofadas almofadadas e levanta os braços para os lados como asas.",
    iconType: "elevacao_lateral",
  },
  "Máquina de Extensão Lombar": {
    shortDesc: "Sentado, empurrar o rolo almofadado para trás com as costas",
    category: "Máquinas de Peso",
    muscles: ["Lombar", "Eretores da Espinha"],
    howToIdentify: "Cadeira com cinto de segurança e um rolo acolchoado atrás das escápulas que você empurra arqueando as costas para trás.",
    iconType: "extensao_lombar",
  },
  "Máquina de Extensão de Tríceps": {
    shortDesc: "Empurrar manoplas para baixo estendendo totalmente os cotovelos",
    category: "Máquinas de Peso",
    muscles: ["Tríceps"],
    howToIdentify: "Aparelho dedicado com almofadas ou manoplas suspensas que focam o movimento de extensão de antebraço.",
    iconType: "triceps_ext",
  },
  "Máquina de Mergulho": {
    shortDesc: "Simulador de paralelas sentado onde você empurra barras para baixo",
    category: "Máquinas de Peso",
    muscles: ["Tríceps", "Peitoral Inferior"],
    howToIdentify: "Cadeira com duas alças nas laterais do quadril que você empurra para baixo afundando os braços no assento.",
    iconType: "mergulho",
  },
  "Máquina de Puxada Cruzada para Costas": {
    shortDesc: "Cabos duplos no alto para puxar em X abrindo as costas",
    category: "Máquinas de Peso",
    muscles: ["Dorsais", "Trapézio"],
    howToIdentify: "Torre dupla onde você cruza os cabos e puxa na diagonal para ativar a musculatura profunda das costas.",
    iconType: "puxada_cruzada",
  },
  "Máquina de Puxada Frontal com Alavanca": {
    shortDesc: "Puxador com alavancas articuladas independentes no alto",
    category: "Máquinas de Peso",
    muscles: ["Grande Dorsal (Costas)"],
    howToIdentify: "Assento com rolos para prender as coxas e duas alavancas curvas que você puxa para baixo até o queixo.",
    iconType: "puxada_frontal",
  },
  "Máquina de Remada Sentada": {
    shortDesc: "Aparelho com almofada no peito e manoplas para puxar para trás",
    category: "Máquinas de Peso",
    muscles: ["Meio das Costas", "Rombóides", "Bíceps"],
    howToIdentify: "Cadeira com uma almofada vertical na frente para encostar o peito e puxadores para trazer os cotovelos para trás.",
    iconType: "remada_sentada",
  },
  "Máquina de Supino": {
    shortDesc: "Aparelho de empurrar guiado com peso em placas",
    category: "Máquinas de Peso",
    muscles: ["Peitoral", "Tríceps"],
    howToIdentify: "Banco com pegadas ergonômicas à frente do peitoral com pino seletor de carga e movimento guiado seguro.",
    iconType: "maquina_supino",
  },
  "Máquina de panturrilha": {
    shortDesc: "Aparelho para empurrar a ponta dos pés (sentado ou em pé)",
    category: "Máquinas de Peso",
    muscles: ["Panturrilha (Gêmeos e Sóleo)"],
    howToIdentify: "Aparelho com almofadas sobre os joelhos ou ombros e um degrau estreito para apoiar só as pontas dos pés.",
    iconType: "panturrilha",
  },
  "Peck deck (Voador)": {
    shortDesc: "Sentado, unir os braços à frente abrindo e fechando as asas",
    category: "Máquinas de Peso",
    muscles: ["Peitoral", "Deltóide Posterior"],
    howToIdentify: "Cadeira com encosto estreito e dois braços verticais articulados com almofadas que você fecha na frente do peito.",
    iconType: "peck_deck",
  },
  "Remada T na Máquina": {
    shortDesc: "Apoio de peito inclinado com pegador em formato de T",
    category: "Máquinas de Peso",
    muscles: ["Costas", "Trapézio", "Dorsais"],
    howToIdentify: "Prancha inclinada a 45 graus onde você deita de bruços e puxa uma barra em forma de T por baixo.",
    iconType: "remada_t",
  },
  "Tríceps Scott": {
    shortDesc: "Apoio inclinado para extensão isolada de tríceps",
    category: "Máquinas de Peso",
    muscles: ["Tríceps"],
    howToIdentify: "Estrutura estofada tipo Scott onde os cotovelos ficam fixados na almofada e você empurra a alavanca para frente.",
    iconType: "triceps_scott",
  },

  // Outros
  "Barra Fixa e Paralelas": {
    shortDesc: "Torre alta com barra no topo e apoio de paralelas no meio",
    category: "Outros",
    muscles: ["Costas", "Peito", "Tríceps", "Abdômen"],
    howToIdentify: "Torre vertical autônoma com barra de puxada no topo, apoios de antebraço com encosto para abdominal e barras de paralelas.",
    iconType: "torre_paralelas",
  },
  "Bicicleta Ergométrica": {
    shortDesc: "Bicicleta estacionária para aquecimento e cardio",
    category: "Outros",
    muscles: ["Pernas", "Cardio"],
    howToIdentify: "Bicicleta fixa com guidão, selim regulável e painel digital para medir calorias e resistência.",
    iconType: "bicicleta",
  },
  "Bola Pilates": {
    shortDesc: "Bola inflável grande para equilíbrio, core e alongamentos",
    category: "Outros",
    muscles: ["Core", "Abdômen", "Estabilidade"],
    howToIdentify: "Bola inflável de vinil macio com cerca de 55cm a 75cm de diâmetro, muito comum em áreas de alongamento.",
    iconType: "bola_pilates",
  },
  "Bosu": {
    shortDesc: "Meia bola de borracha com plataforma plana embaixo",
    category: "Outros",
    muscles: ["Equilíbrio", "Tornozelo", "Core"],
    howToIdentify: "Domo inflável azul ou cinza montado sobre uma base circular rígida de plástico.",
    iconType: "bosu",
  },
  "Caixa": {
    shortDesc: "Caixa de madeira ou espuma para saltos e subir degrau",
    category: "Outros",
    muscles: ["Pernas", "Potência"],
    howToIdentify: "Caixa robusta retangular (geralmente de madeira compensada com medidas 50x60x75cm) ou espuma densa.",
    iconType: "caixa",
  },
  "Crossover": {
    shortDesc: "Duas torres de polia conectadas por uma barra superior",
    category: "Outros",
    muscles: ["Peitoral", "Costas", "Braços"],
    howToIdentify: "Enorme estrutura com duas torres de peso distantes cerca de 3 a 4 metros uma da outra conectadas por uma trave no teto.",
    iconType: "crossover",
  },
  "Faixa elástica": {
    shortDesc: "Tiras e laços de borracha para ativação muscular e aquecimento",
    category: "Outros",
    muscles: ["Glúteos", "Manguito Rotador", "Mobilidade"],
    howToIdentify: "Mini-bands elásticas coloridas e finas em formato de laço fechado para colocar nas pernas ou braços.",
    iconType: "faixa_elastica",
  },
  "Pulley": {
    shortDesc: "Cabo suspenso no alto para puxadas com barra larga",
    category: "Outros",
    muscles: ["Costas", "Dorsais", "Tríceps"],
    howToIdentify: "Aparelho com banco e almofadas cilíndricas para travar as pernas enquanto você puxa a barra longa que desce do teto.",
    iconType: "pulley",
  },
  "Rodinha Abdominal": {
    shortDesc: "Roda com duas manoplas laterais para rolar no chão",
    category: "Outros",
    muscles: ["Abdômen", "Lombar", "Ombros"],
    howToIdentify: "Pequena roda de cerca de 15 a 20cm com um eixo de metal e manoplas de borracha em cada lado.",
    iconType: "rodinha",
  },
  "Tapete de Yoga": {
    shortDesc: "Colchonete fino antiderrapante para exercícios no chão",
    category: "Outros",
    muscles: ["Mobilidade", "Alongamento", "Solo"],
    howToIdentify: "Tapete retangular enrolável de espuma ou borracha colocado no chão para deitar ou ajoelhar.",
    iconType: "tapete",
  },
};

/**
 * Custom vector drawing renderer for gym equipment
 */
export function EquipmentVectorDrawing({
  iconType,
  name,
  className = "w-full h-full",
  active = false,
}: {
  iconType?: string;
  name?: string;
  className?: string;
  active?: boolean;
}) {
  const strokeColor = active ? "#CDFC39" : "#94a3b8";
  const accentColor = active ? "#e4ff7a" : "#cbd5e1";
  const fillColor = active ? "#CDFC39" : "#64748b";

  // Match iconType or fallback from name
  const type = iconType || (name ? EQUIPMENT_META[name]?.iconType : "halteres") || "halteres";

  switch (type) {
    // 1. BANCO DECLINADO (Decline bench - angled down, foot rollers at the top, clear downwards slope)
    case "banco_declinado":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Base ground line */}
          <line x1="8" y1="56" x2="56" y2="56" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Main post rear (high) */}
          <path d="M18 56L18 34" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
          {/* Small support front (low) */}
          <path d="M46 56L46 48" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
          {/* Diagonal frame beam connecting posts */}
          <path d="M18 36L48 50" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Declined cushioned backrest (angled downwards from top-left to bottom-right) */}
          <line x1="16" y1="32" x2="48" y2="48" stroke={accentColor} strokeWidth="6.5" strokeLinecap="round" />
          {/* Head rest indicator */}
          <circle cx="47" cy="47.5" r="2.5" fill={fillColor} />
          {/* Ankle lock post (vertical upright at the high end) */}
          <path d="M14 34L14 20" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Top foam ankle rollers */}
          <rect x="8" y="18" width="12" height="5" rx="2.5" fill={fillColor} />
          {/* Lower foam leg rollers */}
          <rect x="9" y="27" width="10" height="4.5" rx="2.2" fill={fillColor} />
        </svg>
      );

    // 2. BANCO RETO (Flat bench - perfectly horizontal pad with 2 vertical legs)
    case "banco_reto":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Ground */}
          <line x1="10" y1="56" x2="54" y2="56" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Left leg */}
          <path d="M18 56L18 36" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
          <line x1="13" y1="56" x2="23" y2="56" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" />
          {/* Right leg */}
          <path d="M46 56L46 36" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
          <line x1="41" y1="56" x2="51" y2="56" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" />
          {/* Horizontal steel spine */}
          <line x1="17" y1="38" x2="47" y2="38" stroke={strokeColor} strokeWidth="2" />
          {/* Flat cushioned bench pad (horizontal) */}
          <rect x="11" y="28" width="42" height="7" rx="3.5" fill={accentColor} stroke={strokeColor} strokeWidth="1" />
          {/* Texture stitching */}
          <line x1="16" y1="31.5" x2="48" y2="31.5" stroke={active ? "#84a80e" : "#475569"} strokeWidth="1" strokeDasharray="3 2" />
        </svg>
      );

    // 3. BANCO ROMANO (Hyperextension 45° - angled bench with thigh pads and foot plate)
    case "banco_romano":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Ground base */}
          <line x1="8" y1="56" x2="56" y2="56" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* 45 degree angled main column */}
          <path d="M48 54L22 28" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" />
          {/* Front support leg */}
          <path d="M24 56L34 44" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Large Thigh support pad at the top (split or angled) */}
          <rect x="15" y="21" width="16" height="8" rx="3" transform="rotate(-40 15 21)" fill={accentColor} stroke={strokeColor} strokeWidth="1" />
          {/* Ankle lock rollers at the bottom rear */}
          <rect x="44" y="47" width="10" height="5" rx="2.5" fill={fillColor} />
          {/* Foot plate */}
          <line x1="43" y1="55" x2="55" y2="47" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
          {/* Grip handles for mounting */}
          <path d="M21 24L15 20" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    // 4. BANCO SCOTT (Preacher curl bench with slanted arm pad)
    case "banco_scott":
    case "rosca_scott_machine":
    case "triceps_scott":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Ground */}
          <line x1="8" y1="56" x2="56" y2="56" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          {/* Seat post & seat */}
          <path d="M18 56L18 42" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          <rect x="12" y="38" width="14" height="4.5" rx="2" fill={fillColor} />
          {/* Central frame connecting to arm pad */}
          <path d="M18 54L38 54L42 30" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Slanted preacher arm pad (slanted 45 deg) */}
          <line x1="32" y1="22" x2="48" y2="34" stroke={accentColor} strokeWidth="7" strokeLinecap="round" />
          {/* Barbell cradle hooks */}
          <path d="M47 38L47 32L51 32" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    // 5. GAIOLA DE AGACHAMENTO (Power rack cage - 4 uprights, crossbars, pullup bar)
    case "gaiola":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Base */}
          <line x1="12" y1="56" x2="52" y2="56" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* 4 Upright posts */}
          <line x1="16" y1="56" x2="16" y2="14" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="22" y1="54" x2="22" y2="17" stroke={strokeColor} strokeWidth="1.5" opacity="0.6" />
          <line x1="42" y1="54" x2="42" y2="17" stroke={strokeColor} strokeWidth="1.5" opacity="0.6" />
          <line x1="48" y1="56" x2="48" y2="14" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Top cross beams */}
          <line x1="14" y1="14" x2="50" y2="14" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Pullup bar curve */}
          <path d="M20 14Q32 10 44 14" stroke={accentColor} strokeWidth="2" fill="none" />
          {/* Safety pins (horizontal bars inside) */}
          <line x1="16" y1="40" x2="48" y2="40" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* J-Hooks with loaded bar */}
          <line x1="10" y1="30" x2="54" y2="30" stroke={accentColor} strokeWidth="2" />
          <rect x="11" y="27" width="3" height="6" rx="1" fill={fillColor} />
          <rect x="50" y="27" width="3" height="6" rx="1" fill={fillColor} />
        </svg>
      );

    // 6. HALTERES (Dumbbells)
    case "halteres":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Grip bar */}
          <line x1="20" y1="32" x2="44" y2="32" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
          {/* Knurling bands */}
          <line x1="28" y1="30" x2="36" y2="30" stroke={active ? "#84a80e" : "#475569"} strokeWidth="1" />
          {/* Left weights */}
          <rect x="12" y="20" width="5" height="24" rx="2" fill={fillColor} stroke={strokeColor} strokeWidth="1" />
          <rect x="17" y="23" width="3" height="18" rx="1.5" fill={accentColor} />
          {/* Right weights */}
          <rect x="47" y="20" width="5" height="24" rx="2" fill={fillColor} stroke={strokeColor} strokeWidth="1" />
          <rect x="44" y="23" width="3" height="18" rx="1.5" fill={accentColor} />
        </svg>
      );

    // 7. KETTLEBELL
    case "kettlebell":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Handle arch */}
          <path d="M22 28C22 17 42 17 42 28" stroke={accentColor} strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* Bell sphere body */}
          <circle cx="32" cy="38" r="14" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
          {/* Flat bottom */}
          <line x1="26" y1="51" x2="38" y2="51" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Weight badge text */}
          <circle cx="32" cy="38" r="5" fill={active ? "#84a80e" : "#334155"} />
        </svg>
      );

    // 8. ANILHA (Olympic plate)
    case "anilha":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Outer circle plate */}
          <circle cx="32" cy="32" r="22" fill={fillColor} stroke={strokeColor} strokeWidth="2.5" />
          {/* Rim ridge */}
          <circle cx="32" cy="32" r="17" stroke={accentColor} strokeWidth="1.5" strokeDasharray="5 3" />
          {/* Center hole for barbell */}
          <circle cx="32" cy="32" r="6" fill="#0e1414" stroke={accentColor} strokeWidth="2" />
          {/* 3 ergonomic grip slots */}
          <path d="M28 17H36" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M19 40L25 44" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M45 40L39 44" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    // 9. BARRA HEXAGONAL (Trap bar)
    case "barra_hexagonal":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Left & right sleeves for plates */}
          <line x1="4" y1="32" x2="16" y2="32" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
          <line x1="48" y1="32" x2="60" y2="32" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
          {/* Hexagon frame */}
          <polygon
            points="16,32 24,18 40,18 48,32 40,46 24,46"
            stroke={strokeColor}
            strokeWidth="2.5"
            fill="none"
          />
          {/* Inner space and dual neutral handles */}
          <line x1="20" y1="26" x2="20" y2="38" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
          <line x1="44" y1="26" x2="44" y2="38" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    // 10. BARRA W (EZ Curl bar)
    case "barra_w":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Left sleeve */}
          <line x1="6" y1="32" x2="16" y2="32" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" />
          <rect x="14" y="27" width="2" height="10" fill={accentColor} />
          {/* Zig zag W-center */}
          <path
            d="M16 32L24 26L32 35L40 26L48 32"
            stroke={accentColor}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right sleeve */}
          <line x1="48" y1="32" x2="58" y2="32" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" />
          <rect x="48" y="27" width="2" height="10" fill={accentColor} />
        </svg>
      );

    // 11. BARRA FIXA
    case "barra_fixa":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Wall or ceiling mounts */}
          <line x1="12" y1="12" x2="12" y2="24" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
          <line x1="52" y1="12" x2="52" y2="24" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
          {/* Triangle brackets */}
          <path d="M12 24L20 28" stroke={strokeColor} strokeWidth="2.5" />
          <path d="M52 24L44 28" stroke={strokeColor} strokeWidth="2.5" />
          {/* Horizontal pull-up bar with angled ergonomic wide grips */}
          <path
            d="M8 32L16 28L48 28L56 32"
            stroke={accentColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Neutral grip handles */}
          <line x1="26" y1="28" x2="26" y2="36" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="38" y1="28" x2="38" y2="36" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    // 12. BARRA OLÍMPICA
    case "barra_olimpica":
    case "barra_reta":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Central shaft */}
          <line x1="16" y1="32" x2="48" y2="32" stroke={accentColor} strokeWidth="2.5" />
          {/* Knurlings */}
          <line x1="22" y1="32" x2="28" y2="32" stroke={active ? "#84a80e" : "#64748b"} strokeWidth="3.5" />
          <line x1="36" y1="32" x2="42" y2="32" stroke={active ? "#84a80e" : "#64748b"} strokeWidth="3.5" />
          {/* Inner collar rings */}
          <rect x="14" y="27" width="2" height="10" rx="0.8" fill={strokeColor} />
          <rect x="48" y="27" width="2" height="10" rx="0.8" fill={strokeColor} />
          {/* Thick rotating sleeves */}
          <rect x="5" y="29.5" width="10" height="5" rx="1.5" fill={fillColor} />
          <rect x="49" y="29.5" width="10" height="5" rx="1.5" fill={fillColor} />
        </svg>
      );

    // 13. LEG PRESS 45 (45 degree sled)
    case "leg_45":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Ground */}
          <line x1="8" y1="56" x2="56" y2="56" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          {/* 45 degree inclined rails */}
          <line x1="16" y1="52" x2="50" y2="18" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
          {/* Upright support */}
          <path d="M50 18L50 56" stroke={strokeColor} strokeWidth="2" />
          {/* Sled sliding on the 45 rail */}
          <rect x="26" y="26" width="12" height="12" rx="2" transform="rotate(45 26 26)" fill={fillColor} />
          {/* Footplate perpendicular to rail */}
          <line x1="38" y1="16" x2="50" y2="28" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
          {/* Plate horns with weight */}
          <circle cx="34" cy="30" r="4" fill={accentColor} />
          {/* Reclined seat at the bottom */}
          <line x1="12" y1="46" x2="22" y2="40" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
          <line x1="12" y1="46" x2="16" y2="54" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    // 14. HACK MACHINE
    case "hack_machine":
    case "v_squat":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Base */}
          <line x1="10" y1="56" x2="54" y2="56" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          {/* Inclined spine */}
          <line x1="20" y1="52" x2="44" y2="18" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
          <line x1="44" y1="18" x2="44" y2="56" stroke={strokeColor} strokeWidth="2" />
          {/* Angled foot platform at the bottom */}
          <line x1="12" y1="46" x2="24" y2="54" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
          {/* Sliding back carriage */}
          <rect x="28" y="24" width="8" height="16" rx="2" transform="rotate(35 28 24)" fill={fillColor} />
          {/* Shoulder pads on top */}
          <rect x="36" y="16" width="9" height="5" rx="2" fill={accentColor} />
        </svg>
      );

    // 15. CADEIRA EXTENSORA (Leg extension)
    case "extensora":
    case "flexora":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Ground */}
          <line x1="10" y1="56" x2="54" y2="56" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          {/* Weight stack tower in background */}
          <rect x="42" y="18" width="10" height="38" rx="2" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          <line x1="44" y1="26" x2="50" y2="26" stroke={strokeColor} strokeWidth="1" />
          <line x1="44" y1="32" x2="50" y2="32" stroke={strokeColor} strokeWidth="1" />
          <line x1="44" y1="38" x2="50" y2="38" stroke={strokeColor} strokeWidth="1" />
          {/* Seat backrest & bottom pad */}
          <path d="M22 26L22 42L36 42" stroke={accentColor} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Seat frame */}
          <path d="M22 42L22 56" stroke={strokeColor} strokeWidth="2.5" />
          <path d="M34 42L34 56" stroke={strokeColor} strokeWidth="2.5" />
          {/* Pivot cam and lever arm */}
          <circle cx="36" cy="42" r="3" fill={accentColor} />
          <line x1="36" y1="42" x2="38" y2="54" stroke={strokeColor} strokeWidth="2" />
          {/* Shin roller pad */}
          <rect x="34" y="51" width="8" height="4.5" rx="2" fill={fillColor} />
        </svg>
      );

    // 16. POLIA / PULLEY / CROSSOVER
    case "polia":
    case "pulley":
    case "crossover":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Base */}
          <line x1="14" y1="56" x2="50" y2="56" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Main vertical column */}
          <rect x="26" y="12" width="12" height="44" rx="2" fill="none" stroke={strokeColor} strokeWidth="2" />
          {/* Weights inside */}
          <line x1="28" y1="42" x2="36" y2="42" stroke={strokeColor} strokeWidth="2" />
          <line x1="28" y1="47" x2="36" y2="47" stroke={strokeColor} strokeWidth="2" />
          <line x1="28" y1="52" x2="36" y2="52" stroke={strokeColor} strokeWidth="2" />
          {/* Top pulley wheel */}
          <circle cx="32" cy="16" r="3" stroke={accentColor} strokeWidth="1.5" fill="none" />
          {/* Adjustable sliding pulley carriage */}
          <rect x="23" y="24" width="18" height="7" rx="2" fill={fillColor} />
          {/* Cable coming out with D-handle */}
          <path d="M24 28L14 34" stroke={accentColor} strokeWidth="2" />
          <circle cx="12" cy="36" r="3" stroke={accentColor} strokeWidth="2" fill="none" />
        </svg>
      );

    // 17. REMADA BAIXA / SENTADA
    case "remada_baixa":
    case "remada_sentada":
    case "remada_alta":
    case "remada_t":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Base ground */}
          <line x1="8" y1="56" x2="56" y2="56" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          {/* Weight tower on the right */}
          <rect x="46" y="20" width="10" height="36" rx="2" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          {/* Long horizontal bench */}
          <rect x="12" y="44" width="24" height="4.5" rx="2" fill={accentColor} />
          <path d="M16 48L16 56" stroke={strokeColor} strokeWidth="2" />
          <path d="M32 48L32 56" stroke={strokeColor} strokeWidth="2" />
          {/* Foot plate vertical bracket */}
          <line x1="40" y1="42" x2="40" y2="54" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
          {/* Low cable coming to V-bar handle */}
          <line x1="46" y1="50" x2="34" y2="42" stroke={accentColor} strokeWidth="2" strokeDasharray="3 2" />
          <path d="M32 40L35 43L32 45" stroke={accentColor} strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );

    // 18. SUPINO ARTICULADO / MÁQUINA DE SUPINO / VERTICAL
    case "supino_articulado":
    case "supino_vertical":
    case "maquina_supino":
    case "crucifixo_inclinado":
    case "desenvolvimento":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Ground */}
          <line x1="8" y1="56" x2="56" y2="56" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          {/* Frame upright */}
          <path d="M46 56L46 22" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Seated bench angled */}
          <path d="M26 28L26 44L36 44" stroke={accentColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26 44L26 56" stroke={strokeColor} strokeWidth="2" />
          {/* Articulated lever press arm */}
          <path d="M46 24L30 24L22 34" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Press handles */}
          <circle cx="22" cy="34" r="3" fill={accentColor} />
          {/* Weight horn with plate */}
          <circle cx="46" cy="30" r="5" fill={fillColor} stroke={strokeColor} strokeWidth="1" />
        </svg>
      );

    // 19. CADEIRA ABDUTORA / ADUTORA
    case "abdutora":
    case "adutora":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Frame */}
          <rect x="22" y="16" width="20" height="40" rx="3" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          {/* Seat */}
          <rect x="25" y="32" width="14" height="12" rx="2" fill={fillColor} />
          {/* Split knee pads (showing movement arrows) */}
          <rect x="14" y="36" width="6" height="8" rx="2" fill={accentColor} />
          <rect x="44" y="36" width="6" height="8" rx="2" fill={accentColor} />
          {/* Spread / squeeze arrow indicators */}
          <path d="M13 32L10 32" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M51 32L54 32" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    // 20. PECK DECK (Voador)
    case "peck_deck":
    case "voador_vertical":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Central stack */}
          <rect x="26" y="14" width="12" height="42" rx="2" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          {/* Seat */}
          <rect x="27" y="38" width="10" height="5" rx="1.5" fill={fillColor} />
          {/* Left butterfly arm */}
          <path d="M26 22L16 22L16 38" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="13" y="26" width="6" height="10" rx="2" fill={accentColor} />
          {/* Right butterfly arm */}
          <path d="M38 22L48 22L48 38" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="45" y="26" width="6" height="10" rx="2" fill={accentColor} />
        </svg>
      );

    // 21. ELEVAÇÃO PÉLVICA (Hip thrust bench)
    case "elevacao_pelvica":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Ground */}
          <line x1="8" y1="56" x2="56" y2="56" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          {/* Low backrest bench */}
          <rect x="12" y="40" width="12" height="16" rx="2" fill={accentColor} stroke={strokeColor} strokeWidth="1" />
          {/* Foot plate platform */}
          <rect x="40" y="52" width="14" height="4" rx="1" fill={fillColor} />
          {/* Articulated belt / padded bar arch over hips */}
          <path d="M24 44Q34 34 42 46" stroke={accentColor} strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* Weight plate on the pivot */}
          <circle cx="28" cy="46" r="4" fill={strokeColor} />
        </svg>
      );

    // 22. BICICLETA ERGOMÉTRICA
    case "bicicleta":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Base */}
          <line x1="12" y1="56" x2="52" y2="56" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Flywheel front housing */}
          <circle cx="40" cy="44" r="10" fill="none" stroke={accentColor} strokeWidth="2" />
          {/* Triangle frame */}
          <path d="M22 56L26 34L40 44L44 26" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Saddle */}
          <path d="M22 34L30 34" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
          {/* Handlebars */}
          <path d="M40 24L48 24L50 28" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Pedals */}
          <circle cx="34" cy="46" r="2.5" fill={fillColor} />
        </svg>
      );

    // 23. BOLA PILATES
    case "bola_pilates":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="32" cy="34" r="20" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
          {/* Ribbed lines */}
          <path d="M14 30Q32 24 50 30" stroke={accentColor} strokeWidth="1.5" fill="none" />
          <path d="M12 36Q32 42 52 36" stroke={accentColor} strokeWidth="1.5" fill="none" />
          <path d="M18 44Q32 48 46 44" stroke={accentColor} strokeWidth="1" fill="none" opacity="0.7" />
        </svg>
      );

    // 24. BOSU / BALANCE DOME
    case "bosu":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Flat platform base */}
          <rect x="10" y="46" width="44" height="6" rx="2" fill={strokeColor} />
          {/* Half dome */}
          <path d="M12 46C12 28 52 28 52 46Z" fill={accentColor} stroke={strokeColor} strokeWidth="1.5" />
          {/* Concentric grip rings */}
          <path d="M20 44C22 35 42 35 44 44" stroke={active ? "#84a80e" : "#475569"} strokeWidth="1.5" fill="none" />
        </svg>
      );

    // 25. CAIXA PLIOMÉTRICA (Jump box)
    case "caixa":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* 3D wooden plyo box */}
          <polygon points="12,24 32,16 52,24 32,32" fill={accentColor} stroke={strokeColor} strokeWidth="1.5" />
          <polygon points="12,24 32,32 32,54 12,46" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
          <polygon points="32,32 52,24 52,46 32,54" fill={strokeColor} opacity="0.8" />
          {/* Cutout handle */}
          <ellipse cx="22" cy="38" rx="4" ry="2" fill="#0e1414" />
        </svg>
      );

    // 26. RODINHA ABDOMINAL (Ab wheel)
    case "rodinha":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Handles */}
          <line x1="8" y1="32" x2="56" y2="32" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
          {/* Central wheel */}
          <circle cx="32" cy="32" r="16" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
          <circle cx="32" cy="32" r="11" stroke={accentColor} strokeWidth="1.5" strokeDasharray="4 2" />
          <circle cx="32" cy="32" r="5" fill="#0e1414" stroke={strokeColor} strokeWidth="1.5" />
        </svg>
      );

    // 27. TAPETE DE YOGA
    case "tapete":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Unrolled mat perspective */}
          <polygon points="16,22 48,22 56,50 8,50" fill={accentColor} stroke={strokeColor} strokeWidth="1.5" />
          {/* Rolled top cylinder */}
          <ellipse cx="32" cy="22" rx="16" ry="4" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
        </svg>
      );

    // 28. FAIXA ELÁSTICA / CABO DE RESISTÊNCIA
    case "faixa_elastica":
    case "cabo_resistencia":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Loop band oval */}
          <ellipse cx="32" cy="32" rx="20" ry="10" stroke={accentColor} strokeWidth="4" fill="none" />
          <ellipse cx="32" cy="35" rx="19" ry="8" stroke={fillColor} strokeWidth="2" fill="none" opacity="0.5" />
        </svg>
      );

    // 29. TORRE DE PARALELAS E BARRA FIXA
    case "torre_paralelas":
    case "graviton":
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Base */}
          <line x1="12" y1="56" x2="52" y2="56" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* 2 tall uprights */}
          <line x1="20" y1="56" x2="20" y2="12" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="44" y1="56" x2="44" y2="12" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Top wide pull-up bar */}
          <path d="M12 16L20 12L44 12L52 16" stroke={accentColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {/* Mid-height dip arm rests & pads */}
          <rect x="16" y="32" width="10" height="4" rx="1" fill={accentColor} />
          <rect x="38" y="32" width="10" height="4" rx="1" fill={accentColor} />
          {/* Back pad */}
          <rect x="28" y="26" width="8" height="14" rx="1.5" fill={fillColor} />
        </svg>
      );

    // DEFAULT FALLBACK (Machine silhouette)
    default:
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <line x1="10" y1="56" x2="54" y2="56" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          <rect x="36" y="18" width="14" height="38" rx="2" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          <path d="M18 28L18 44L32 44" stroke={accentColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="28" cy="24" r="3" fill={fillColor} />
        </svg>
      );
  }
}
