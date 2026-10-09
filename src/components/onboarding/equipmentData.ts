/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EquipmentCategory {
  id: string;
  name: string;
  items: string[];
}

export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  {
    id: "pesos_livres",
    name: "Pesos Livres",
    items: [
      "Halteres",
      "Kettlebell"
    ]
  },
  {
    id: "barras_e_pesos",
    name: "Barras e Pesos",
    items: [
      "Anilha",
      "Barra Hexagonal",
      "Barra W",
      "Barra fixa",
      "Barra olímpica",
      "Barra reta"
    ]
  },
  {
    id: "bancos_e_hackers",
    name: "Bancos e Hackers",
    items: [
      "Banco Declinado",
      "Banco Reto",
      "Banco Romano",
      "Banco Scott",
      "Gaiola de Agachamento",
      "Máquina de Agachamento em V com Carga Livre",
      "Máquina de Crucifixo Inclinado",
      "Máquina de Trap Bar Deadlift",
      "Supino Articulado Reto",
      "Supino Vertical"
    ]
  },
  {
    id: "maquinas_de_cabo",
    name: "Máquinas de Cabo",
    items: [
      "Cabo de resistência",
      "Leg Press Horizontal",
      "Máquina de Remada Alta",
      "Polia",
      "Remada Baixa",
      "Voador Vertical"
    ]
  },
  {
    id: "maquinas_de_peso",
    name: "Máquinas de Peso",
    items: [
      "Cadeira Abdutora",
      "Cadeira Adutora",
      "Cadeira Extensora",
      "Elevação Pélvica De Solo",
      "Gráviton",
      "Hack Machine",
      "Leg Press 45",
      "Máquina Clássica de Extensão de Tríceps",
      "Máquina Flexora",
      "Rosca Scott",
      "Máquina de Desenvolvimento",
      "Máquina de Elevação Lateral",
      "Máquina de Extensão Lombar",
      "Máquina de Extensão de Tríceps",
      "Máquina de Mergulho",
      "Máquina de Puxada Cruzada para Costas",
      "Máquina de Puxada Frontal com Alavanca",
      "Máquina de Remada Sentada",
      "Máquina de Supino",
      "Máquina de panturrilha",
      "Peck deck (Voador)",
      "Remada T na Máquina",
      "Tríceps Scott"
    ]
  },
  {
    id: "outros",
    name: "Outros",
    items: [
      "Barra Fixa e Paralelas",
      "Bicicleta Ergométrica",
      "Bola Pilates",
      "Bosu",
      "Caixa",
      "Crossover",
      "Faixa elástica",
      "Pulley",
      "Rodinha Abdominal",
      "Tapete de Yoga"
    ]
  }
];

export const ALL_EQUIPMENT_ITEMS = EQUIPMENT_CATEGORIES.flatMap(c => c.items);
