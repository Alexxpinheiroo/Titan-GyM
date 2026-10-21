/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Base de dados enriquecida com 248 exercÃ­cios em PortuguÃªs
 * Com instruÃ§Ãµes passo a passo, dicas de postura, vÃ­deos e mapeamento muscular.
 */

export interface ExerciseGuide {
  id: string;
  name: string;
  videoUrl?: string;
  imageUrl?: string;
  instructions: string[];
  importantTips: string[];
  category: string;
  equipment: string;
  level: string;
  primaryMuscles: string[];
  secondaryMuscles: string[];
}

export const EXERCISE_DATABASE: ExerciseGuide[] = [
    {
        "id":  "a2zmrkvvtbp03t61arv2haou",
        "name":  "Flexão de Braço",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/06621201_Push_up_m_Chest_dc269ade12.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/06621201_Push_up_m_Chest_adb061dc64.png",
        "instructions":  [
                             "Apoie suas mãos no chão e posicione-as na linha dos ombros",
                             "Mantenha seu corpo totalmente estendido",
                             "Realize o movimento flexionando os cotovelos até que seu peitoral se aproxime do chão"
                         ],
        "importantTips":  [
                              "Evite desalinhar seu quadril em relação ao seu tronco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "a3e5n81ota2knnfwnojswh6v",
        "name":  "Remada Baixa Triângulo",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02131201_Cable_Seated_High_Row_V_bar_Back_abdf90ba7c.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02131201_Cable_Seated_High_Row_V_bar_Back_9743ec0683.png",
        "instructions":  [
                             "Sente-se no banco com os pés posicionados no apoio",
                             "Segure o triângulo com os braços estendidos para frente",
                             "Mantenha seu tronco ereto e abdômen contraido",
                             "Realize o movimento puxando o triângulo até que ele se aproxime do seu abdômen",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite balançar seu corpo para frente e para trás",
                              "Mantenha seu quadril fixo no banco",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Remada Baixa",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "a85kpcpm9ix7gim1rzt7fihx",
        "name":  "Abdominal Bicicleta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00031201_Air_Bike_male_Waist_FIX_23df67f467.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00031201_Air_Bike_male_Waist_FIX_0dd8cf9068.png",
        "instructions":  [
                             "Deite-se no chão com os joelhos flexionados e os pés fora do solo",
                             "Posicione suas mãos atrás da sua cabeça",
                             "Flexione e rode seu tronco de forma cruzada",
                             "Tente aproximar seu ombro do seu joelho e realize o movimento de maneira alternada"
                         ],
        "importantTips":  [
                              "Faça o movimento de retorno de forma completa, tocando o tronco no solo",
                              "Mantenha seus glúteos colados no chão durante toda a execução",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "a8ym3bvam5iy3oe8pkzxlw9o",
        "name":  "Tríceps Invertido na Polia com Barra",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/f529fa28aa3101e2641b7646dc79bd73.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/c6854d4b9c85c3a99bdc288f23a5bab1.png",
        "instructions":  [
                             "Inicialmente, segure a barra e coloque seus braços juntos ao seu tronco",
                             "Estabilize seu tronco e ombros",
                             "Utilize a pegada supinada (palma das mãos para cima)",
                             "Realize o movimento de forma controlada"
                         ],
        "importantTips":  [
                              "Evite deslocar seus ombros e tronco para frente",
                              "Evite usar impulso ou movimentos bruscos",
                              "Permaneça com o alinhamento dos cotovelos em relação ao tronco"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "ah8oo0z3ea8p81sd3yjlc2ob",
        "name":  "Prancha Frontal Alta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/967b05757cabcc56180726eedd444961.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/42ae727f78a28ada1e6c96db81d1f952.png",
        "instructions":  [
                             "Posicione-se no chão com os joelhos estendidos e cotovelos no chão alinhados com os ombros",
                             "Coloque seus pés afastados e na direção dos quadris",
                             "Mantenha seus joelhos, quadris e tronco totalmente alinhados",
                             "Contraia seu abdomên, glúteos e musculaturas das escápulas"
                         ],
        "importantTips":  [
                              "Evite movimento de subir e descer o tronco",
                              "Evite que seu quadril desça",
                              "Não coloque os cotovelos à frente ou atrás da linha dos ombros"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "alvoak7t0al0jjuzd7pulk7v",
        "name":  "Pullover com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03751201_Dumbbell_Pullover_Chest_a25904c822.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03751201_Dumbbell_Pullover_Chest_da63961495.png",
        "instructions":  [
                             "Deite-se no chão e posicione seus pés fixos no solo",
                             "Segure o halter com as duas mãos e os cotovelos estendidos para cima na direção do peitoral",
                             "Faça um movimento jogando seus braços para trás de forma controlada",
                             "Mantenha seus cotovelos estendidos e retorne para a posição inicial"
                         ],
        "importantTips":  [
                              "Evite realizar movimentar sua coluna lombar",
                              "Suba e desça de forma controlada mantendo seu abdômen contraído",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Peito"
                             ]
    },
    {
        "id":  "amvj9cg82kcvav7yjyy60ufw",
        "name":  "Afundo com Kettlebell",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/40591201_Kettlebell_Split_Squat_Thighs_37053e54c4.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/40591201_Kettlebell_Split_Squat_Thighs_04d99a8253.png",
        "instructions":  [
                             "Segure os Kettlebells com os braços estendidos ao longo do corpo e ao lado do quadril",
                             "Seu tronco permanecerá ereto e você posionará um pé na frente do outro, onde o pé da frente ficará totalmente no chão e o de trás somente a parte do frente ficará no chão",
                             "De forma controlada, flexione seus quadris e seus joelhos e desça até onde for possível, mantendo seu pé da frente posicionado no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Evite jogar seu joelho da frente para dentro, mantenha o alinhamento com seu quadril",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Kettlebell",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "ao0l9fj9nqm0mtmbaa9wm1v6",
        "name":  "Alongamento de Quadríceps deitado",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/66733dedc9d8177e5080428e1467ace0.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/d865d739b23d060095ea146fae77e2e0.png",
        "instructions":  [
                             "Deite-se no chão de barriga para baixo, com os joelhos estendidos e os braços esticados ao lado do corpo",
                             "Mantenha suas pernas em parelelo na linha dos quadris",
                             "Dobre um dos joelhos e com a mão desse mesmo lado, tente alcançar o seu pé",
                             "Caso seja possível, tente flexionar mais o seu joelho puxando a sua perna com a mão e mantenha"
                         ],
        "importantTips":  [
                              "Evite movimentos bruscos e excessivos com quadril",
                              "Mantenha abdômen e glúteos contraídos",
                              "Não coloque os cotovelos à frente ou atrás da linha dos ombros"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "aq1wbjacyvg23y88chpwtzh9",
        "name":  "Agachamento Búlgaro Smith",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/07681201_Smith_Single_Leg_Split_Squat_Thighs_24c3dfd409.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/07681201_Smith_Single_Leg_Split_Squat_Thighs_40730fb268.png",
        "instructions":  [
                             "Você posicionará um pé à frente e outro atrás, sendo o de trás em cima de um banco",
                             "Seu tronco permanecerá ereto e o pé da frente ficará totalmente no chão e o de trás somente a parte do frente ou o dorso ficará no banco",
                             "Coloque a barra guiada em seu trapézio",
                             "De forma controlada, flexione seus quadris e seus joelhos e desça até onde for possível, mantendo seu pé da frente posicionado no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar, podendo apenas inclinar levemente à frente",
                              "Evite jogar seu joelho da frente para dentro, mantenha o alinhamento com seu quadril",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina Smith",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "ar4fa9lh3k7af9a9nshedni3",
        "name":  "Supino Declinado Smith",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/069b071e8a5459359559659febd0dde8.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/e3c63e2d8565ddbea046328ffc006115.png",
        "instructions":  [
                             "Deite-se no banco com os pés no chão",
                             "Segure a barra guiada e posicione suas mãos na linha dos ombros",
                             "Inicie com os cotovelos estendidos",
                             "Realize o movimento descendo a barra até que ela se aproxime do seu peitoral",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu quadril do apoio do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina Smith",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "aui3nvkap7gcqnn9f4gkn0ca",
        "name":  "Abdominal Máquina",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/18571201_Lever_Total_Abdominal_Crunch_Waist_910fb5c4b8.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/18571201_Lever_Total_Abdominal_Crunch_Waist_8e9720ed03.png",
        "instructions":  [
                             "Sente-se no banco e posicione seu quadril e tronco encostados no apoio",
                             "Segure no suporte acima da sua cabeça",
                             "Mantenha suas pernas paradas durante todo o movimento",
                             "Realize o movimento contraindo o seu abdômen e flexionando seu tronco"
                         ],
        "importantTips":  [
                              "Evite descolar o quadril e tronco do encosto do banco",
                              "Evite realizar movimentos jogando seus joelho e pernas para cima",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina de Abdominal",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "aw7vywk69huxydu28rls1zdh",
        "name":  "Abdominal Infra Paralelas com Joelhos Flexionados",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/21261201_Captains_chair_leg_raise_Hips_d41ce315f7.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/21261201_Captains_chair_leg_raise_Hips_7fa618f922.png",
        "instructions":  [
                             "Posicione seu antebraço e cotovelos no apoio corretamente",
                             "Coloque seu tronco e quadril apoiados no encosto do equipamento",
                             "Retire os pés do apoio e eleve as pernas com os joelhos flexionados até que seus joelhos ultrapassem levemente a linha do quadril",
                             "Realize o movimento de retorno de maneira controlada"
                         ],
        "importantTips":  [
                              "Mantenha seu tronco e quadril fixos no encosto do equipamento",
                              "Evite realizar movimentos excessivos com a sua coluna lombar",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Barra Fixa e Paralelas",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "ax1wipf1ypa2oqoin2v0zdnm",
        "name":  "Levantamento Terra Unilateral com Pé Apoiado",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/87001201_Barbell_Staggered_Stance_Deadlift_male_Hips_697c507fdd.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/87001201_Barbell_Staggered_Stance_Deadlift_male_Hips_ca1ea6cc10.png",
        "instructions":  [
                             "Fique em pé, segurando uma barra reta, com os braços estendidos à frente das coxas e afaste os pés na largura do quadril",
                             "Leve um pé para trás, com o antepé tocando o chão e o calcanhar elevado",
                             "Inicie o movimento empurrando o quadril para trás, o tronco desce em linha reta, enquanto a barra desce próxima à perna da frente",
                             "Desça até onde sua amplitude do posterior de coxa permitir e inicie a subida empurrando o chão com a perna da frente e trazendo o quadril de volta para frente e repita"
                         ],
        "importantTips":  [
                              "Evite arredondar a lombar, mantenha as costas neutras durante todo o movimento",
                              "Não jogue o tronco para frente; o movimento parte dos quadris indo para trás",
                              "A perna de trás não deve empurrar o chão com força, ela serve só para equilíbrio"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra reta",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Posteriores"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "azi7l7pf2zzza88m4bz8vi7t",
        "name":  "Crucifixo Inverso Sentado com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/a6793c7b5fce8e119f6656e5395be7ce.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/1a6da1ecc18b45ea9e544ad9c910c3b6.png",
        "instructions":  [
                             "Na posição inicial, sentado, mantenha o tronco curvado paralelo ao solo",
                             "Posicione seus braços alinhados com seus ombros segurando os halteres",
                             "Levante os braços para o lado até que seus cotovelos se alinhem com seu tronco",
                             "Desça seus braços de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos com seus braços e tronco",
                              "Não curve seu tronco",
                              "Não deixe que seu tronco suba ao realizar o movimento"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Trapézio",
                                 "Costas"
                             ]
    },
    {
        "id":  "b425h85gxvwgj1iioko2y156",
        "name":  "Abdominal Canivete",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/36221201_V_up_male_Waist_802b5df86e.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/36221201_V_up_male_Waist_53059b3bb3.png",
        "instructions":  [
                             "Deite-se no chão com os joelhos estendidos e os braços acima da cabeça com os cotovelos estendidos",
                             "Retire os pés e pernas do chão mantendo os joelhos estendidos",
                             "Flexione seu tronco e eleve suas pernas até que suas mãos se aproximem dos seus joelhos",
                             "Realize o movimento de retorno de maneira controlada"
                         ],
        "importantTips":  [
                              "Faça o movimento de retorno de forma completa, tocando o tronco no solo",
                              "Mantenha seus glúteos colados no chão durante toda a execução",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "b4rjmbosmhimo69kkrdcm023",
        "name":  "Alongamento de Posterior de Coxa Deitado",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/15111201_Hamstring_Stretch_Thighs_8adff617b8.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/15111201_Hamstring_Stretch_Thighs_6f6a1dd6d1.png",
        "instructions":  [
                             "Deite-se no chão e segure uma das suas pernas na altura do meio da sua coxa",
                             "Mantenha essa mesma perna na linha do seu quadril",
                             "Faça o movimento de extensão do joelho até onde for possível e repita"
                         ],
        "importantTips":  [
                              "Faça a extensão do joelho até onde a sua amplitude permitir",
                              "Não deixe sua coxa ir para frente, mantenha ela próxima do seu quadril",
                              "A perna do lado contrário deverá ficar esticada"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Posteriores"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "b65932h62j0nq4q35iej7lyi",
        "name":  "Abdominal Canivete Alternado",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/55381201_Alternate_Leg_Pull_male_Waist_073d4c36a1.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/55381201_Alternate_Leg_Pull_male_Waist_643f06f8c8.png",
        "instructions":  [
                             "Deite-se no chão com os joelhos estendidos e os braços acima da cabeça com os cotovelos estendidos",
                             "Retire os pés e pernas do chão mantendo os joelhos estendidos",
                             "Flexione seu tronco e eleve uma das suas pernas com o joelho flexionado até que suas mãos se aproximem do seu joelho",
                             "Realize o movimento de forma alternada"
                         ],
        "importantTips":  [
                              "Faça o movimento de retorno de forma completa, tocando o tronco no solo",
                              "Mantenha seus glúteos colados no chão durante toda a execução",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "b6gra2b63n10020h81dgqdxj",
        "name":  "Agachamento Sumô com Salto",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/15521201_Dumbbell_Jumping_Squat_Plyometric_a7cf999ce8.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/15521201_Dumbbell_Jumping_Squat_Plyometric_3ae147195e.png",
        "instructions":  [
                             "Posicione seus pés um pouco além da linha dos seus quadris e braços esticados ao lado do seu corpo ou entre as pernas",
                             "Com os pés totalmente no chão, flexione de forma controlada seu quadril e joelhos mantenho seu olhar direcionado para frente",
                             "Quando atingir a amplitude um pouco além dos 90 graus de flexão dos joelhos ou o máximo possível, volte à posição inicial estendendo quadril e joelhos rapidamente",
                             "Impulsione seu corpo para cima até que você saia do solo",
                             "Ao cair no solo, flexione novamente quadris e joelhos para absorção do impacto e em seguida repita"
                         ],
        "importantTips":  [
                              "Evite jogar seus joelhos para dentro ao agachar e ao aterrissar",
                              "Mantenha os pés totalmente no chão durante todo a execução",
                              "Evite aterrissar com seu corpo totalmente reto"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "b95zrvr4wgm7zabvy7fd5ugz",
        "name":  "Recuo com Joelho Alto",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/cafae21d4f5d8244e13eb558ab9bffe0.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/f4b652ff2299a3aacd8c6dffb8bb2182.png",
        "instructions":  [
                             "Posicione-se de pé com um dos pés fixo ao solo",
                             "Retroceda uma das pernas para trás e flexione seus quadris e seus joelhos e desça até onde for possível, mantendo seu pé da frente posicionado no chão",
                             "Em seguida, avance estendendo seu quadril e joelho",
                             "Ao completar a extensão do quadril e joelho, eleve seu joelho da perna de trás e repita de forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Evite jogar seu joelho da frente para dentro, mantenha o alinhamento com seu quadril",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "beuu5p1vqnpgvxj9aasziqp1",
        "name":  "Flexão de punho com Barra Reta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/848f5e9f5654f696c6caa2240a4b1322.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/b3d149db4bcc82627dd3e3cab3f0cc9e.png",
        "instructions":  [
                             "Inicie sentado em um banco com o tronco inclinado à frente",
                             "Posicine seu punho na borda do banco e segure a barra com a palma das mãos virada para cima",
                             "Realize o movimento de flexão do punho de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Não descole seu antebraço do banco",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Antebraços"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "bicl4qs685j19b3yxdl833ec",
        "name":  "Cadeira Flexora",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05991201_Lever_Seated_Leg_Curl_Thighs_FIX_1a97bd421a.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05991201_Lever_Seated_Leg_Curl_Thighs_FIX_6b1e68dc57.png",
        "instructions":  [
                             "Sente-se na cadeira flexora com os quadris e tronco totalmente no apoio",
                             "Coloque suas mãos no apoio ao lado do seu quadril",
                             "Mantenha o apoio do pé na região do seu calcanhar",
                             "Realize a flexão de joelho próximo ao ângulo de 90 graus"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Flexione e estenda de forma controlada utilizando posteriores de coxa",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina Flexora",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Posteriores"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "bn914p0qfrfee9iubb5ljfbk",
        "name":  "Supino Inclinado Máquina",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05761201_Lever_Chest_Press_plate_loaded_Chest_FIX_612556595b.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05761201_Lever_Chest_Press_plate_loaded_Chest_FIX_63218836b2.png",
        "instructions":  [
                             "Sente-se no banco com os pés no chão",
                             "Apoie as mãos na plataforma com os cotovelos flexionados",
                             "Realize o movimento empurrando a plataforma até que seus cotovelos se estendam completamente",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite movimentar excessivamente seus ombros para frente",
                              "Mantenha seu abdômen contraído",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina de Supino",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "bplmsqyfyz1osw1er0k11ina",
        "name":  "Rosca bíceps inversa com Barra Reta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00801201_Barbell_Reverse_Curl_Forearm_dd9fd42a4c.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00801201_Barbell_Reverse_Curl_Forearm_8b525845af.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Cotovelo alinhado com o tronco durante o movimento",
                             "Flexione o cotovelo completamente",
                             "Desça o antebraço de forma controlada"
                         ],
        "importantTips":  [
                              "Não balance seu cotovelo para frente durante o movimento",
                              "Evite que seu cotovelo fique a frente do tronco",
                              "Não deixe que seu punho flexione",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "bqsx481fxkpjnugwzmfrgu7u",
        "name":  "Avanço",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/49501201_Bodyweight_Forward_Lunge_Smaller_Stance_Upright_Torso_Thighs_ec23c90de5.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/49501201_Bodyweight_Forward_Lunge_Smaller_Stance_Upright_Torso_Thighs_dde7163f72.png",
        "instructions":  [
                             "Posicione-se de pé com as mãos no quadril",
                             "Seu tronco permanecerá ereto e você posionará um pé ao lado do outro",
                             "Avance uma das pernas à frente e em seguida flexione seus quadris e seus joelhos e desça até onde for possível, mantendo seu pé da frente posicionado no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos e alinhando seus pés lado a lado"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Evite jogar seu joelho da frente para dentro, mantenha o alinhamento com seu quadril",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "brt0r0jj7piz9f5qvjnvzgb9",
        "name":  "Desenvolvimento máquina",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/08691201_Lever_Shoulder_Press_plate_loaded_VERSION_2_Shoulders_d702f8e6cf.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/08691201_Lever_Shoulder_Press_plate_loaded_VERSION_2_Shoulders_a4a59b8573.png",
        "instructions":  [
                             "Fique sentado segurando no apoio das mãos com a palma virada para frente e cotovelos levemente abaixo da linha dos ombros",
                             "Eleve os braços para cima até realizar a extensão completa dos cotovelos",
                             "Contraia seu abdomên e glúteos para estabilizar seu tronco",
                             "Realize o movimento de subida e descida de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Não perca contato do tronco com o apoio da máquina",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina de desenvolvimento",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Trapézio"
                             ]
    },
    {
        "id":  "brw3xnczxo2jd41175l86j1d",
        "name":  "Elevação Lateral sentado com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03951201_Dumbbell_Seated_Lateral_Raise_Shoulders_f32fec1438.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03951201_Dumbbell_Seated_Lateral_Raise_Shoulders_22eb76735b.png",
        "instructions":  [
                             "Fique sentado segurando os halteres ao lado dos quadris",
                             "Contraia seu abdomên para estabilizar seu tronco",
                             "Eleve os halteres para cima até que eles fiquem alinhados com os ombros",
                             "Permaneça com uma leve flexão dos cotovelos",
                             "Realize o movimento de subida e descida de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Evite ultrapassar demasiadamente os halteres da linha dos ombros",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Trapézio"
                             ]
    },
    {
        "id":  "c7mmr9uejcldr9ggqdy4dj1p",
        "name":  "Abdominal Tesoura na Horizontal",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/62141201_Lying_Scissors_Cross_male_Hips_7c9442d94f.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/62141201_Lying_Scissors_Cross_male_Hips_f175977fc1.png",
        "instructions":  [
                             "Deite-se no chão com os joelhos estendidos e os pés inicialmente um ao lado do outro",
                             "Posicione seus braços estendidos ao lado do seu corpo e suas mãos levemente embaixo do seus glúteos",
                             "Retire os pés e pernas no chão mantendo os joelhos estendidos",
                             "Realize o movimento passando uma perna por cima da outra de maneira alternada"
                         ],
        "importantTips":  [
                              "Mantenha seu tronco e quadris estabilizados",
                              "Evite tocar o solo com as pernas e pés durante o movimento",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "cerc4llt3sv28awkmvdc7try",
        "name":  "Supino Declinado com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03011201_Dumbbell_Decline_Bench_Press_Chest_FIX_8bb7821762.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03011201_Dumbbell_Decline_Bench_Press_Chest_FIX_b8b3fea23e.png",
        "instructions":  [
                             "Deite-se no banco com os pés e joelhos no apoio",
                             "Segure os halteres e posicione suas mãos na linha dos ombros",
                             "Inicie com os cotovelos estendidos",
                             "Realize o movimento descendo os halteres até que eles se aproximem do seu peitoral",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu quadril do apoio do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "cfhq2k39i6nk1f9qhsucemb4",
        "name":  "Elevação Lateral na Polia",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01781201_Cable_Lateral_Raise_shoulder_9a210b1cab.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01781201_Cable_Lateral_Raise_shoulder_b4491d8514.png",
        "instructions":  [
                             "Fique de pé e pegue o cabo da polia de maneira cruzada e inicie com o suas mãos levemente à frente dos quadris",
                             "Contraia seu abdomên e glúteos para estabilizar seu tronco",
                             "Eleve o cabo para cima até que eles fiquem alinhados com os ombros",
                             "Permaneça com uma leve flexão dos cotovelos",
                             "Realize o movimento de subida e descida de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Evite ultrapassar demasiadamente as suas mãos da linha dos ombros",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Trapézio"
                             ]
    },
    {
        "id":  "chq33nx351hi6g9govxtulid",
        "name":  "Prancha Lateral",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/c666522b65e2ce00ce37b4d3d0132be2.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/7059270fa52afef08cd298d841f9d0a5.png",
        "instructions":  [
                             "Posicione-se de forma lateral no chão e apoie seu cotovelo alinhado com seu ombro",
                             "A mão contrária você irá colocar em seu quadril",
                             "Mantenha os joelhos esticados e um pé em cima do outro",
                             "Suba seu corpo alinhando seu tronco, quadril e joelhos e se matenha em isometria"
                         ],
        "importantTips":  [
                              "Evite deixar seu quadril mais baixo que seu tronco e/ou joelhos",
                              "Não desalinhe seu cotovelo em relação ao seu ombro",
                              "Evite impulsos e movimentos bruscos, apenas se mantenha parado"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Oblíquos"
                           ],
        "secondaryMuscles":  [
                                 "Abdômen "
                             ]
    },
    {
        "id":  "ck9e9a2h6dtdnl90r17yt5ni",
        "name":  "Barra Fixa no Graviton (Pegada Pronada)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/9d0e0e78e6ee3a1dc35b4f4f2973e9e2.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/f06e9c2e7d0870d470f05faecf19d37b.png",
        "instructions":  [
                             "Segure a barra com as mãos na direção dos seus ombros",
                             "Oriente a palma da sua mão para trás",
                             "Coloque seus joelhos no encosto do apoio",
                             "Realize o movimento puxando seu corpo para cima até que seu queixo ultrapasse a barra",
                             "Desça de maneira controlada"
                         ],
        "importantTips":  [
                              "Faça sempre a extensão completa dos seus cotovelos durante o movimento de retorno",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Gráviton",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps"
                             ]
    },
    {
        "id":  "cmsnutew7xz906luxer2tpxl",
        "name":  "Encolhimento com Barra Reta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00951201_Barbell_Shrug_Back_87f35b64c0.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00951201_Barbell_Shrug_Back_10a40bfee4.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Segure a barra com as mãos posicionadas na linha dos ombros",
                             "Contraia seu abdômen",
                             "Realiza o movimento de forma controlada"
                         ],
        "importantTips":  [
                              "Não movimente seus ombros para frente",
                              "Não flexione seu cotovelo durante os movimentos",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Trapézio"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "cq2ixioo9x0ctul0wi6r4ii7",
        "name":  "Remada Alta com Barra W",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/a855c0fd6dc5f5ad666b022ddcfbc5c1.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/4fddd0979537e64480f05a69d5bbd7b7.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Inicie segurando a barra com as mãos posicionadas na linha dos ombros",
                             "Mantenha a barra próxima ao seu corpo",
                             "Levante os cotovelos até eles se alinharem com seus ombros e desça de forma controlada"
                         ],
        "importantTips":  [
                              "A barra deverá permanecer mais baixa do que a altura dos ombros",
                              "Evite usar impulso ou movimentos bruscos",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra W",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Trapézio"
                             ]
    },
    {
        "id":  "cyurm71f1zk55ispfiyi32yt",
        "name":  "Puxada Aberta (Pegada Pronada)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/2cf2b56bcd749240d54fa35d9b49ad19.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/14c2821b6fbd74c1410f527f47d9f78f.png",
        "instructions":  [
                             "Sente-se no banco com os pés e os joelhos posicionados no apoio",
                             "Segure a barra com os braços abertos e estendidos para cima",
                             "Mantenha seu tronco ereto e abdômen contraido",
                             "Realize o movimento puxando a barra até que ela se aproxime do seu peitoral",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu quadril do apoio do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Pulley",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps"
                             ]
    },
    {
        "id":  "d9wff3b1r4qx5rlicps9tflk",
        "name":  "Salto na Caixa",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/49651201_Jump_Box_male_Plyometrics_FIX_2da983bf3d.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/49651201_Jump_Box_male_Plyometrics_FIX_2aae77ad0a.png",
        "instructions":  [
                             "Fique em pé, de frente para a caixa, a uma distância de mais ou menos um pé, pés na largura dos ombros e braços posicionados ao longo do seu corpo",
                             "Tronco ereto, mas com leve flexão de joelhos e quadril",
                             "Flexione quadril e joelhos, levando os braços para trás e mantendo seu abdômen ativado",
                             "Exploda para cima e para frente, estendendo rapidamente os quadris, joelhos e tornozelos e em cima da caixa, caia com os dois pés ao mesmo tempo, com leve flexão de joelhos e quadris",
                             "Fique em posição estável, com o tronco ereto e o olhar para frente, desça de forma controlada da caixa e repita"
                         ],
        "importantTips":  [
                              "Use uma caixa estável e segura e para iniciantes, uma caixa mais baixa",
                              "Mantenha seu abdômen contraído",
                              "Foque em qualidade do salto, não apenas em altura"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Caixa",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos",
                                 "Panturrilhas"
                             ]
    },
    {
        "id":  "dejldpxp31k9q01xmtts0mu6",
        "name":  "Panturrilha na parede",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/52271201_Calf_Raise_with_Wall_Support_Calves_1704099515.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/52271201_Calf_Raise_with_Wall_Support_Calves_e5145242a6.png",
        "instructions":  [
                             "Posicione-se de pé de frente para a parede",
                             "Mantenha seus joelhos estendidos e as mãos apoiadas na parede",
                             "Realize o movimento ficando na ponta dos pés"
                         ],
        "importantTips":  [
                              "Evite deslocar seu corpo para frente",
                              "Suba e desça de forma controlada, sem movimentos excessivamente rápidos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Panturrilhas"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "dhhfu7gomk3uzxn455v1zaa9",
        "name":  "Rosca bíceps na Polia Baixa (Barra W)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/16071201_Cable_Biceps_Curl_SZ_bar_Upper_arms_8c5d818f92.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/16071201_Cable_Biceps_Curl_SZ_bar_Upper_arms_4dbd034d18.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Cotovelo alinhado com o tronco durante o movimento",
                             "Flexione o cotovelo completamente",
                             "Desça o antebraço de forma controlada"
                         ],
        "importantTips":  [
                              "Não balance seu cotovelo para frente durante o movimento",
                              "Evite que seu cotovelo fique a frente do tronco",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "dhuw5vb3kzmn3awsy9ragjj0",
        "name":  "Pulldown Barra Reta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02381201_Cable_Straight_Arm_Pulldown_Back_FIX_41c9a796f9.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02381201_Cable_Straight_Arm_Pulldown_Back_FIX_9bf7291591.png",
        "instructions":  [
                             "Posicione-se de pé de frente para a polia",
                             "Segure a barra com os braços estendidos para a frente e o tronco levemente inclinado",
                             "Mantenha o cotovelo estendido e realize puxando a barra para baixo em direção ao seu quadril",
                             "Retorne de maneira controlada até a altura dos ombros"
                         ],
        "importantTips":  [
                              "Evite balançar seu corpo para cima e para baixo",
                              "Evite projetar seus ombros para baixo",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "dip5e6z2xj9uq3gbamc9bn05",
        "name":  "Elevação Pélvica com Barra Reta no Solo",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/29641201_Barbell_Glute_Bridge_hands_on_bar_Hips_ef21129907.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/29641201_Barbell_Glute_Bridge_hands_on_bar_Hips_7a9fd6a776.png",
        "instructions":  [
                             "Deite-se no chão com a barra posicionada no seu quadril",
                             "Flexione os joelhos e coloque os pés um pouco à frente dos glúteos",
                             "Posicione suas mãos segurando na barra",
                             "Mantenha seus glúteos e abdômen contraidos",
                             "Realize o movimento elevando seu quadril até que ele se alinhe com seu tronco"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Suba e desça de forma controlada utilizando seus glúteos e posteriores de coxa",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Glúteos"
                           ],
        "secondaryMuscles":  [
                                 "Posteriores"
                             ]
    },
    {
        "id":  "dixgpj8hlkupyzwmq4ouhvia",
        "name":  "Levantamento Terra Unilateral com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/97521201_Dumbbell_Single_Leg_Romanian_Deadlift_male_Hips_859dbf139a.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/97521201_Dumbbell_Single_Leg_Romanian_Deadlift_male_Hips_cead36f5f5.png",
        "instructions":  [
                             "Coloque-se de pé com os pés posicionados na linha dos quadris",
                             "Segure o halter do mesmo lado em que sua perna ficará no chão",
                             "Mantenha seus glúteos e abdômen contraidos e o tronco reto",
                             "Realize o movimento descendo seu tronco para baixo e estendendo a sua perna para atrás",
                             "Faça o retorno de forma controlada"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Faça o movimento até onde a sua mobilidade e flexibilidade permitir",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Posteriores"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "dmnz09tk2rt524yb3t7za0u1",
        "name":  "Remada Curvada (Pegada Supinada)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01181201_Barbell_Underhand_Bent_Over_Row_Back_FIX_44a0c1142c.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01181201_Barbell_Underhand_Bent_Over_Row_Back_FIX_2f47f55a46.png",
        "instructions":  [
                             "Coloque-se de pé com os pés posicionados na linha dos quadris",
                             "Segure a barra posicionando as mãos na linha dos ombros e palma das mãos viradas para frente",
                             "Incline seu tronco à frente mantendo a barra na mesma direção",
                             "Realize o movimento puxando a barra para cima até que ela se aproxime do seu abdômen",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite balançar seu corpo para frente e para trás",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Trapézio"
                             ]
    },
    {
        "id":  "dohsacefon64j33rajma7vt8",
        "name":  "Mesa Flexora",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05861201_Lever_Lying_Leg_Curl_Thighs_FIX_f47cc8b835.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05861201_Lever_Lying_Leg_Curl_Thighs_FIX_55f6f04785.png",
        "instructions":  [
                             "Deite-se na máquina e apoio o seu quadril na região ponto mais alto do encosto",
                             "Posicione suas mãos no apoio",
                             "Mantenha seus glúteos e abdômen contraidos",
                             "Realize o movimento flexionando seus joelhos até que seus pés ultrapassem a linha do quadril",
                             "Retorne de maneira controlada"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Mantenha seu quadril e tronco fixo no encosto do banco",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina Flexora",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Posteriores"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "dqibdn9bg5kkjf35huotdplr",
        "name":  "Bodyweight Squat",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/11981201_Jumping_Pull_up_Back_FIX_65c2526cf2.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/11981201_Jumping_Pull_up_Back_FIX_b85ddd321d.png",
        "instructions":  [
                             "Keep your arms extended forward at shoulder height and look straight ahead",
                             "Initially, keep your torso upright and your feet in a comfortable position, aligned with your hips or slightly wider",
                             "In a controlled manner, bend your hips and knees and lower yourself as far as possible while keeping your feet planted on the ground",
                             "Then, return to the starting position by extending your hips and knees"
                         ],
        "importantTips":  [
                              "Keep your torso straight and avoid bending forward",
                              "Keep your feet fully on the ground throughout the movement",
                              "Avoid using momentum or making abrupt movements"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "dr9qudy8q8ah94xk2j9p9hrr",
        "name":  "Rosca bíceps Spider com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03741201_Dumbbell_Prone_Incline_Curl_Upper_Arms_FIX_2_ff3b9ab705.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03741201_Dumbbell_Prone_Incline_Curl_Upper_Arms_FIX_2_6e3a93764f.png",
        "instructions":  [
                             "Mantenha o tronco ereto e totalmente em contato com o banco",
                             "Cotovelo alinhado com o ombro durante o movimento",
                             "Flexione o cotovelo completamente",
                             "Desça o antebraço de forma controlada"
                         ],
        "importantTips":  [
                              "Não balance seu cotovelo para frente nem para trás durante o movimento",
                              "Evite que seu ombro se mova excessivamente",
                              "Evite usar impulso ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "dw43mfjkepz6i9h2jct8aqe2",
        "name":  "Elevação Pélvica com Halteres no Banco",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/47421201_Dumbbell_Hip_Thrust_Hips_33daa75e42.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/47421201_Dumbbell_Hip_Thrust_Hips_b1bcdcb671.png",
        "instructions":  [
                             "Sente-se no chão com os halteres posicionados no seu quadril e as suas costas encostadas no banco",
                             "Flexione os joelhos e coloque os pés um pouco à frente dos glúteos",
                             "Posicione suas mãos segurando os halteres",
                             "Mantenha seus glúteos e abdômen contraidos",
                             "Realize o movimento elevando seu quadril até que ele se alinhe com seu tronco"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Suba e desça de forma controlada utilizando seus glúteos e posteriores de coxa",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Glúteos"
                           ],
        "secondaryMuscles":  [
                                 "Posteriores"
                             ]
    },
    {
        "id":  "dwj81r2kp20psfq47bdatbvn",
        "name":  "Tríceps Máquina",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/88491201_Lever_Seated_Triceps_Extension_plate_loaded_mal_fb94299e17.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/88491201_Lever_Seated_Triceps_Extension_plate_loaded_mal_358028eb25.png",
        "instructions":  [
                             "Sentado no banco, posicione seus braços inteiramente no apoio",
                             "Estabilize seus ombros e mantenha seu tronco ereto",
                             "Coloque seus braços alinhados com seus ombros",
                             "Faça a extensão completa dos cotovelos controladamente"
                         ],
        "importantTips":  [
                              "Não perca contato do braço com o apoio do banco",
                              "Não movimente seus ombros para frente",
                              "Permaneça com o alinhamento dos cotovelos em relação ao ombro"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Tríceps Scott",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "e18vxjpu3zc8ll1usjzkf6vw",
        "name":  "Barra Fixa no Graviton (Pegada Neutra)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00151201_Assisted_Parallel_Close_Grip_Pull_up_Back_FIX_91af9e050f.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00151201_Assisted_Parallel_Close_Grip_Pull_up_Back_FIX_93db4e43d0.png",
        "instructions":  [
                             "Segure a barra com as mãos na direção dos seus ombros",
                             "Oriente a palma da sua mão para dentro",
                             "Coloque seus joelhos no encosto do apoio",
                             "Realize o movimento puxando seu corpo para cima até que seu queixo ultrapasse a barra",
                             "Desça de maneira controlada"
                         ],
        "importantTips":  [
                              "Faça sempre a extensão completa dos seus cotovelos durante o movimento de retorno",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Gráviton",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps"
                             ]
    },
    {
        "id":  "e1sbxp16kdz3x4blldz21m66",
        "name":  "Abdominal Oblíquo",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/43541201_Alternate_Oblique_Crunch_Waist_7323fdff21.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/43541201_Alternate_Oblique_Crunch_Waist_f6946ee295.png",
        "instructions":  [
                             "Deite-se no chão com os joelhos flexionados e os pés um pouco à frente dos glúteos",
                             "Posicione um braço esticado ao lado do seu corpo e o outro você colocará a mão atrás da sua cabeça",
                             "Realize o movimento de flexão e rotação do seu tronco de forma cruzada"
                         ],
        "importantTips":  [
                              "Evite descer o tronco de forma incompleta",
                              "Mantenha seu pés fixos no solo",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Oblíquos"
                           ],
        "secondaryMuscles":  [
                                 "Abdômen "
                             ]
    },
    {
        "id":  "e2g1gnq0bnjb45sylnpqorwr",
        "name":  "Extensão de Quadril na Polia Baixa",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/40b11efff11bf8ffc48ca5ec79c2f491.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/66b407f3055123086c2f0f45c38695b0.png",
        "instructions":  [
                             "Posicione-se de pé com o suporte ao redor dos tornozelos ou no seu pé",
                             "Incline o seu tronco e apoie suas mãos no suporte a frente",
                             "Mantenha seus glúteos e abdômen contraidos e o tronco reto",
                             "Realize o movimento elevando sua perna para trás até que ela se alinhe com o seu quadril"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Suba e desça de forma controlada utilizando seus glúteos e posteriores de coxa",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Glúteos"
                           ],
        "secondaryMuscles":  [
                                 "Posteriores"
                             ]
    },
    {
        "id":  "e7zcgvavnjnuj7qdjo7q307h",
        "name":  "Cadeira Abdutora",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05971201_Lever_Seated_Hip_Abduction_Hips_FIX_0b94714f55.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05971201_Lever_Seated_Hip_Abduction_Hips_FIX_f0e1c8a8f3.png",
        "instructions":  [
                             "Sente-se no banco e posicione seu quadril encostado no apoio",
                             "Segure no suporte ao lado e e incline levemente seu tronco à frente",
                             "Posicione seus joelhos um ao lado do outro",
                             "Realize o movimento de abrir e fechar de forma controlada"
                         ],
        "importantTips":  [
                              "Evite descolar o quadril do encosto do banco",
                              "Tente manter seu tronco estabilizado",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Cadeira Abdutora",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdutores"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "e9ple2kw12ff3t2djmpxy6ne",
        "name":  "Barra Fixa (Pegada Pronada)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/6991f56912c62e8aad88aa579466c4f7.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/2db742535b23df1aba46376453ada53f.png",
        "instructions":  [
                             "Segure a barra com as mãos na direção dos seus ombros",
                             "Oriente a palma da sua mão para frente",
                             "Cotovelos e pernas totalmente estendidas",
                             "Realize o movimento puxando seu corpo para cima até que seu queixo ultrapasse a barra",
                             "Desça de maneira controlada"
                         ],
        "importantTips":  [
                              "Evite balançar seu corpo para frente e para trás",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Barra fixa",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "edi1zv19olt0itgxgf12paod",
        "name":  "Cable machine high to low",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/0347e1e901b320826fdeeb5a92b80698.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/e7b8580cc40cc69fd4ad453b0b3cb8ed.png",
        "instructions":  [
                             "Position the pulley at the high setting",
                             "Grab one handle with each hand and position yourself in the center of the equipment",
                             "Keep your torso upright and place one foot in front of the other",
                             "Start with your arms extended and open outward, and perform the movement by bringing one arm closer to the other",
                             "When your arms meet at chest height, return in a controlled manner"
                         ],
        "importantTips":  [
                              "Avoid excessively swinging your body forward and backward",
                              "Keep your torso slightly inclined forward with your abdomen and glutes contracted",
                              "Avoid using momentum or sudden movements"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "ee1qdkpbjvdztiu1y74pwfwb",
        "name":  "Subida no Banco",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/45791201_Bodyweight_Step_up_on_Stepbox_Thighs_f50413a8a5.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/45791201_Bodyweight_Step_up_on_Stepbox_Thighs_7734f82bb9.png",
        "instructions":  [
                             "Seu tronco permanecerá ereto e você posionará um pé ao lado do outro",
                             "Avance com uma das pernas e apoie em cima do banco e em seguida suba, colocando os dois pés no banco",
                             "Em seguida, retorne a posição inicial e repita"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Evite jogar seu joelho da frente para dentro, mantenha o alinhamento com seu quadril",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "elyh9ffeh0lze8f44lyb12v8",
        "name":  "Elevação pélvica com os pés apoiados no step",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/b6c668f8b9ec8ca1ed2b94a223391b96.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/8fd4b2d55e7da0b18447f7bb78e3c653.png",
        "instructions":  [
                             "Deite-se no chão com seus pés posicionados em cima da caixa/step",
                             "Flexione os joelhos e coloque os pés um pouco à frente dos glúteos",
                             "Posicione suas mãos no chão com os braços esticados ao lado do seu corpo",
                             "Mantenha seus glúteos e abdômen contraidos",
                             "Realize o movimento elevando seu quadril até que ele se alinhe com seu tronco"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Suba e desça de forma controlada utilizando seus glúteos e posteriores de coxa",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Glúteos"
                           ],
        "secondaryMuscles":  [
                                 "Posteriores"
                             ]
    },
    {
        "id":  "emvqg9vogfka5qtznws8nd18",
        "name":  "Remada Alta Hammer",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/cc768484eb5462b005239d4ab949f4d1.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/1486179e7e51c280ac97a1c617c1f6d2.png",
        "instructions":  [
                             "Sente-se no banco com o tronco e joelhos apoiados no banco",
                             "Coloque suas mãos no apoio com a palma virada para baixo",
                             "Mantenha seu tronco ereto e abdômen contraido",
                             "Realize o movimento puxando a barra até que ela se aproxime do seu peitoral",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu tronco e quadril do apoio do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina de Remada Alta",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "ensdhf5zdltvq5jmd9av97dh",
        "name":  "Desenvolvimento Arnold com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/21371201_Dumbbell_Arnold_Press_Shoulders_c170a979a5.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/21371201_Dumbbell_Arnold_Press_Shoulders_52da808518.png",
        "instructions":  [
                             "Inicialmente, fique sentado segurando os halteres com a palma das mãos viradas para o seu tronco",
                             "Mantenha seu tronco colado no apoio do banco",
                             "Contraia seu abdomên e glúteos para estabilizar seu tronco",
                             "Realize o movimento elevando seus braços para cima até completar a extensão dos ombros",
                             "Faça de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Evite encolher seus ombros",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Trapézio"
                             ]
    },
    {
        "id":  "es4kvozcuhe91xym95h0d3q7",
        "name":  "Rosca martelo alternada com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03121201_Dumbbell_Hammer_Curl_version_2_Upper_Arms_FIX_82ac38ea7c.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03121201_Dumbbell_Hammer_Curl_version_2_Upper_Arms_FIX_2e5c878bc1.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Contraia o abdomên e glúteos",
                             "Cotovelo alinhado com o tronco durante o movimento",
                             "Flexione o cotovelo completamente",
                             "Desça o antebraço de forma controlada"
                         ],
        "importantTips":  [
                              "Não balance seu cotovelo para frente durante o movimento",
                              "Não flexione o tronco lateralmente",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "esl372ccl0711y02839rca4h",
        "name":  "Agachamento com Salto",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05141201_Jump_Squat_Thighs_FIX_925227e3d3.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05141201_Jump_Squat_Thighs_FIX_a6dae43e7f.png",
        "instructions":  [
                             "Posicione seus pés um pouco além da linha dos seus quadris e braços esticados ao lado do seu corpo",
                             "Com os pés totalmente no chão, flexione de forma controlada seu quadril e joelhos mantenho seu olhar direcionado para frente",
                             "Quando atingir a amplitude um pouco além dos 90 graus de flexão dos joelhos ou o máximo possível, volte à posição inicial estendendo quadril e joelhos rapidamente",
                             "Impulsione seu corpo para cima até que você saia do solo",
                             "Ao cair no solo, flexione novamente quadris e joelhos para absorção do impacto e em seguida repita"
                         ],
        "importantTips":  [
                              "Evite jogar seus joelhos para dentro ao agachar e ao aterrissar",
                              "Mantenha os pés totalmente no chão durante todo a execução",
                              "Evite aterrissar com seu corpo totalmente reto"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos",
                                 "Panturrilhas",
                                 "Posteriores"
                             ]
    },
    {
        "id":  "euh4bk12jmo8hu6avg3tt4a7",
        "name":  "Elevação pélvica no Solo com Abdução de Quadril",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/e0351f855c41134902e2273506a7c4f8.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/d125fe65db9a49e91bdbcecd468206d1.png",
        "instructions":  [
                             "Deite-se no chão com a faixa elástica ao redor dos joelhos",
                             "Flexione os joelhos e coloque os pés um pouco à frente dos glúteos",
                             "Posicione suas mãos no chão",
                             "Mantenha seus glúteos e abdômen contraidos",
                             "Realize o movimento elevando seu quadril até que ele se alinhe com seu tronco e posterior faça o movimento afastando seus joelhos e mantendo os pés fixos no chão"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Suba e desça de forma controlada utilizando seus glúteos e posteriores de coxa",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Faixa elástica",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Glúteos"
                           ],
        "secondaryMuscles":  [
                                 "Posteriores",
                                 "Abdutores"
                             ]
    },
    {
        "id":  "ezv8lzvnbon2bfkkrqaqm47q",
        "name":  "Prancha Lateral com Rotação de Tronco",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/53ba33d7430d4316e8c5b8520c4703dc.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/eb6505000e80fa7598de56817db833f1.png",
        "instructions":  [
                             "Posicione-se de forma lateral no chão e apoie seu cotovelo alinhado com seu ombro",
                             "Mantenha os joelhos esticados e um pé em cima do outro",
                             "Suba seu corpo alinhando seu tronco, quadril e joelhos e se matenha em isometria",
                             "Com o seu braço de cima você irá realizar um movimento de rotação"
                         ],
        "importantTips":  [
                              "Evite deixar seu quadril mais baixo que seu tronco e/ou joelhos",
                              "Não desalinhe seu cotovelo em relação ao seu ombro",
                              "Evite impulsos e movimentos bruscos, apenas se mantenha parado"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Oblíquos"
                           ],
        "secondaryMuscles":  [
                                 "Abdômen "
                             ]
    },
    {
        "id":  "f7jy81gg8azh1gkf1zhqu1t3",
        "name":  "Rosca bíceps com Barra Reta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/47211201_Bar_Biceps_Curl_Upper_Arms_8548387ab0.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/47211201_Bar_Biceps_Curl_Upper_Arms_b6a93d239f.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Contraia o abdomên e glúteos",
                             "Cotovelo alinhado com o tronco durante o movimento",
                             "Flexione o cotovelo completamente",
                             "Desça o antebraço de forma controlada"
                         ],
        "importantTips":  [
                              "Não balance seu cotovelo para frente durante o movimento",
                              "Não flexione o tronco lateralmente",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "f8bkm2xcv0m24vrynedkflmi",
        "name":  "Remada no Banco Inclinado",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/33201201_Dumbbell_Hammer_Grip_Incline_Bench_Two_Arm_Row_Back_fb1dba078b.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/33201201_Dumbbell_Hammer_Grip_Incline_Bench_Two_Arm_Row_Back_3b299288e1.png",
        "instructions":  [
                             "Fique deitado no banco inclinado",
                             "Segure os halteres posicionando as mãos na linha dos ombros",
                             "Mantenha seu corpo totalmente estendido",
                             "Realize o movimento puxando os halteres para cima até que ela se aproxime do banco",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu corpo do apoio do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "f8onudj4zk7sy38grezvra8n",
        "name":  "Skipping Joelho Alto",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/30911201_High_Knee_Skips_male_Cardio_FIX_09a255a398.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/30911201_High_Knee_Skips_male_Cardio_FIX_db4026b2c4.png",
        "instructions":  [
                             "Fique em pé com os pés afastados na linha dos quadris e mantenha seus cotovelos dobrados",
                             "Eleve um dos joelhos de forma rápida e alternada com o lado contrário",
                             "Eleve os joelhos até a linha do quadril e alternado com o braço oposto"
                         ],
        "importantTips":  [
                              "Evite elevar excessivamente os joelhos e também não faça movimentos reduzidos",
                              "Mantenha seu tronco ereto e olhando para frente",
                              "Evite fazer saltos, somente trocas rápidas"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Panturrilhas"
                           ],
        "secondaryMuscles":  [
                                 "Quadríceps",
                                 "Glúteos",
                                 "Posteriores"
                             ]
    },
    {
        "id":  "f9a2091dncn1amfzztw3usw2",
        "name":  "Ativação Escapular",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/30211201_Scapula_Push_Up_Chest_cee98694d3.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/30211201_Scapula_Push_Up_Chest_8a6ffeaf10.png",
        "instructions":  [
                             "Apoie as mãos no chão, alinhadas com os ombros e estique as pernas para trás colocando o corpo na posição de prancha alta",
                             "Cotovelos estendidos, abdômen e glúteos contraídos, quadris alinhados com o tronco",
                             "Sem dobrar os cotovelos, empurre o chão com as mãos, afastando as escápulas (como se “arredondasse” a parte alta das costas)",
                             "Agora, permita que as escápulas se aproximem lentamente (como se “afundasse” o peito entre os ombros) e repita"
                         ],
        "importantTips":  [
                              "Mantenha o tronco e quadril alinhados",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Não deixe seu cotovelo dobrar, faça apenas a movimentação com as suas escápulas"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Trapézio"
                             ]
    },
    {
        "id":  "f9paui9htiflqqlkm2tqtqp1",
        "name":  "Abdominal Supra Banco Declinado",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02821201_Decline_Sit_up_Hips_15199f4fcc.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02821201_Decline_Sit_up_Hips_2e6e9972f4.png",
        "instructions":  [
                             "Sente-se no banco, coloque os pés e os joelhos no apoio corretamente",
                             "Mantenha seus glúteos totalmente apoiados no banco",
                             "Coloque as mãos atrás da cabeça",
                             "Realize o movimento de extensão e flexão do tronco de forma controlada"
                         ],
        "importantTips":  [
                              "Evite descolar o quadril do encosto do banco",
                              "Evite aumentar a curvatura da lombar durante a extensão do tronco",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Banco Declinado",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "ffj86qedj5t0cwtuho64fe2l",
        "name":  "Prancha Lateral Dinâmica",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/07151201_Side_Plank_male_Waist_FIX_3e30cd55ac.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/07151201_Side_Plank_male_Waist_FIX_1de0ed0e88.png",
        "instructions":  [
                             "Posicione-se de forma lateral no chão e apoie seu cotovelo alinhado com seu ombro",
                             "A mão contrária você irá colocar em seu quadril",
                             "Mantenha os joelhos esticados e um pé em cima do outro",
                             "Suba seu corpo alinhando seu tronco, quadril e joelhos e se matenha em isometria",
                             "Desça seu quadril e sem tocar no solo, suba novamente e repita de forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha seu abdômen e seus glúteos contraídos",
                              "Não desalinhe seu cotovelo em relação ao seu ombro",
                              "Evite impulsos e movimentos bruscos, apenas se mantenha parado"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Oblíquos"
                           ],
        "secondaryMuscles":  [
                                 "Abdômen "
                             ]
    },
    {
        "id":  "fv3v78yw3n2kkaudq7mgg22q",
        "name":  "Crucifixo Inverso na Polia",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02251201_Cable_Standing_Cross_over_High_Reverse_Fly_Shoulders_51983e4a5b.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02251201_Cable_Standing_Cross_over_High_Reverse_Fly_Shoulders_fa75fb6e1e.png",
        "instructions":  [
                             "Coloque a polia em uma altura onde ela fica alinhada com a altura do seu peitoral",
                             "Pegue a alça do cabo de forma cruzada",
                             "Inicie o movimento com os braços esticados para frente e o cotovelo levemente flexionado",
                             "Realize o movimento até que eles se alinhem com seu tronco e retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite movimentos bruscos com os braços e ombros",
                              "Não flexione demasiadamente seus cotovelos durante os movimentos",
                              "Não curve nem desloque seu tronco para trás"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Costas",
                                 "Trapézio"
                             ]
    },
    {
        "id":  "fw99w04ucgiq9769k5h2klit",
        "name":  "Abdominal Supra no Solo com Pés Altos",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/ba05b443fa52c69d7c21cae32d874713.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/619ee08de95ca6cc704bf4ae438339a9.png",
        "instructions":  [
                             "Deite-se no chão com as pernas totalmente estendidas para cima",
                             "Posicione seus braços esticados para cima ",
                             "Flexione seu tronco contraindo seu abdomên e com suas mãos em direção aos pés",
                             "Retorne o tronco para o solo de maneira controlada"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento somente com seu pescoço, utilize a flexão do tronco",
                              "Mantenha seus pés fixos no solo e as pernas estendidas para cima",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "g1djq7zik38baiarttdokrul",
        "name":  "Puxada Fechada (Pegada Supinada)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02451201_Cable_Underhand_Pulldown_Back_3ff8119e62.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02451201_Cable_Underhand_Pulldown_Back_862203f360.png",
        "instructions":  [
                             "Sente-se no banco com os pés e os joelhos posicionados no apoio",
                             "Segure a barra com os braços estendidos para cima, na linha dos seus ombros e a palma das mãos viradas para trás",
                             "Mantenha seu tronco ereto e abdômen contraido",
                             "Realize o movimento puxando a barra até que ela se aproxime do seu peitoral",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu quadril do apoio do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Pulley",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "g4kbi2mrjzxgyv5tgs57pvm9",
        "name":  "Tríceps Testa unilateral com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03441201_Dumbbell_Lying_One_Arm_Pronated_Triceps_Extension_Upper_Arms_4e55e8021e.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03441201_Dumbbell_Lying_One_Arm_Pronated_Triceps_Extension_Upper_Arms_a45425c357.png",
        "instructions":  [
                             "Deite no banco e posicione os pés no chão",
                             "Segure um halter com seu braço esticado para cima",
                             "A mão contrária você irá colocar no cotovelo que realizará o movimento",
                             "Realize o movimento de flexão do cotovelo forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha seus ombros e braços estabilizados durante o movimento",
                              "Evite usar impulso ou movimentos bruscos",
                              "Permaneça com o alinhamento dos cotovelos em relação ao ombro"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "g8o6zkesmkj5umvs8ds28wnh",
        "name":  "Remada Serrote",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/b4ae1dc92a3e705322970590bd94ea60.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/d9b7838593dd5b0b51205cec4ce84478.png",
        "instructions":  [
                             "Apoie um joelho e a mão do mesmo lado com o cotovelo estendido no banco",
                             "Coloque o outro pé apoiado no chão estendido para o lado",
                             "Segure o halter com o braço estendido para baixo e na linha dos ombros",
                             "Realize o movimento puxando o halter para cima até que ele se aproxime da lateral do seu tronco",
                             "Faça o retorno do movimento de forma controlada"
                         ],
        "importantTips":  [
                              "Evite balançar seu corpo para baixo e para cima",
                              "Mantenha seu quadril estabilizado",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Banco Reto",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "gaumpbca7kr30yxktlpjl8zr",
        "name":  "Burpee",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/11601201_Burpee_Cardio_FIX_12aeef38a6.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/11601201_Burpee_Cardio_FIX_a44ca31ce4.png",
        "instructions":  [
                             "Posicione seus pés um pouco além da linha dos seus quadris e braços esticados ao lado do seu corpo",
                             "Com os pés totalmente no chão, desça em um agachamento até conseguir colocar a palma das mãos no chão um pouco à frente dos seus pés",
                             "Apoie suas mãos no chão e salte jogando suas pernas para trás estendendo seus quadris e joelhos e desça flexionando seu cotovelo até tocar seu corpo no solo",
                             "Estenda seus cotovelos elevando seu corpo em um movimento de flexão de ombros e salte com suas pernas para baixo de você",
                             "Acelere todo seu corpo até a posição ereta e faça um movimento de salto até sair do lado",
                             "Ao retornar, absorva o impacto e repita"
                         ],
        "importantTips":  [
                              "Evite jogar seus joelhos para dentro ao agachar e ao aterrissar",
                              "Não deixe seu corpo cair no solo, desça de maneira controlada",
                              "Evite aterrissar com seu corpo totalmente reto"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Peito",
                                 "Panturrilhas",
                                 "Tríceps"
                             ]
    },
    {
        "id":  "ge1yu0izksf5dvjcohsnpt2o",
        "name":  "Alongamento Cobra",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/14821201_Cobra_Yoga_Pose_Waist_f07b306f74.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/14821201_Cobra_Yoga_Pose_Waist_0b00b12ac8.png",
        "instructions":  [
                             "Deite-se no chão de barriga para baixo e posicione a palma da suas mãos no chão, ao lado do seu rosto",
                             "Empurre o chão com as duas mãos retirando apenas seu tronco do chão",
                             "Mantenha seu quadril e pernas no solo",
                             "Expire lentamente enquanto faz o movimento, retorne e repita"
                         ],
        "importantTips":  [
                              "Faça o movimento de maneira controlada",
                              "Mantenha a amplitude que for possível utilizando a técnica adequada",
                              "Inspire pelo nariz e expire pela boca"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [
                                 "Lombar"
                             ]
    },
    {
        "id":  "geooru3f7j6v86ynz0ljs8hb",
        "name":  "Agachamento Frontal",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00421201_Barbell_Front_Squat_Hips_FIX_9375aebf40.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00421201_Barbell_Front_Squat_Hips_FIX_05294f8200.png",
        "instructions":  [
                             "Posicione a barra na região frontal dos seus deltóides e segure a mesma de forma cruzada",
                             "Mantenha seus cotovelos altos para manter a barra na mesma posição",
                             "Seu tronco permanecerá ereto e seus pés ficarão numa posição confortável, alinhados com seus quadris ou um pouco mais afastados",
                             "De forma controlada, flexione seu quadril e seus joelhos e desça até onde for possível, mantendo seus pés posicionados no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Mantenha os pés totalmente no chão durante todo a execução",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "gf87ql344pikw7heuuoezqmj",
        "name":  "Recuo Alternado",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/15811201_Bodyweight_Rear_Lunge_Thighs_9ddbd75675.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/15811201_Bodyweight_Rear_Lunge_Thighs_3c5452ae61.png",
        "instructions":  [
                             "Posicione-se de pé com as mãos no quadril",
                             "Retroceda uma das pernas para trás e em seguida flexione seus quadris e seus joelhos e desça até onde for possível, mantendo seu pé da frente posicionado no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos e alinhando seus pés lado a lado"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Evite jogar seu joelho da frente para dentro, mantenha o alinhamento com seu quadril",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "ghssjbojjw1bdn5a2vzle8h3",
        "name":  "Extensão de Ombros Curvada",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/93991201_Dumbbell_Bent_Over_Wide_Row_male_Shoulders_5cab7b637c.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/93991201_Dumbbell_Bent_Over_Wide_Row_male_Shoulders_2d905de6fe.png",
        "instructions":  [
                             "Fique de pé, com os pés afastados na largura dos quadris, flexione levemente os joelhos e incline o tronco à frente mantendo as costas retas e o abdômen contraído",
                             "Deixe os braços estendidos para baixo, com os halteres próximos um do outro, palmas voltadas uma para a outra",
                             "Mantendo o tronco firme, leve seus braços para trás, com uma leve flexão nos cotovelos até que eles se alinhem com seu tronco",
                             "Abaixe lentamente os halteres até a posição inicial, mantendo o controle do movimento o tempo todo e repita"
                         ],
        "importantTips":  [
                              "Mantenha o tronco ereto em todo o momento",
                              "Mantenha seu abdômen contraído",
                              "Inspire pelo nariz e expire pela boca enquanto mantém seu corpo parado"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Trapézio"
                             ]
    },
    {
        "id":  "gl7kysc4zhoya0jtt1nfpqth",
        "name":  "Levantamento Terra Sumô",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01171201_Barbell_Sumo_Deadlift_Hips_FIX_c7dec01187.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01171201_Barbell_Sumo_Deadlift_Hips_FIX_400498692f.png",
        "instructions":  [
                             "Coloque-se de pé com os pés posicionados na linha dos quadris",
                             "Segure a barra posicionando as mãos na linha dos ombros",
                             "Mantenha seus glúteos e abdômen contraidos e o tronco reto",
                             "Realize o movimento descendo seu quadril, flexionando o seu joelho ecom o tronco inclinado para frente"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Faça o movimento até onde a sua mobilidade e flexibilidade permitir",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Posteriores"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos",
                                 "Adutores"
                             ]
    },
    {
        "id":  "glp4j1sifavt6eni7bsg0bsf",
        "name":  "Afundo com Barra",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/0145f158d7fd10db5d2f6764e0255f1c.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/7c7a93b1a1d85386c8b70a29bad55e99.png",
        "instructions":  [
                             "Posicione a barra na região dos seus trapézio e segure a mesma com as suas mãos",
                             "Mantenha seus cotovelos próximos ao seu tronco e direionados para baixo",
                             "Seu tronco permanecerá ereto e você posionará um pé na frente do outro, onde o pé da frente ficará totalmente no chão e o de trás somente a parte do frente ficará no chão",
                             "De forma controlada, flexione seus quadris e seus joelhos e desça até onde for possível, mantendo seu pé da frente posicionado no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Evite jogar seu joelho da frente para dentro, mantenha o alinhamento com seu quadril",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "go4qu4qco5konso9ccfxp0i0",
        "name":  "Prancha Alta alternando Halter",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/54971201_Dumbbell_Plank_Pass_Through_Waist_f1ba96c4fe.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/54971201_Dumbbell_Plank_Pass_Through_Waist_17bce975d3.png",
        "instructions":  [
                             "Posicione-se no chão com os joelhos estendidos, palma das mãos no chão e cotovelos esticados e alinhados com os ombros",
                             "Coloque seus pés afastados e na direção dos quadris",
                             "Mantenha seus joelhos, quadris e tronco totalmente alinhados e coloque o halter do lado de fora de um dos seus braços",
                             "Contraia seu abdomên, glúteos e musculaturas das escápulas e pegue o halter com a mão contrária e coloque-o do outro lado",
                             "Repita esse movimento com o lado contrário de maneira controlada"
                         ],
        "importantTips":  [
                              "Evite movimento de subir e descer o tronco",
                              "Evite que seu quadril desça",
                              "Não coloque suas mãos à frente ou atrás da linha dos ombros"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [
                                 "Oblíquos"
                             ]
    },
    {
        "id":  "gr75pb1z23tepmkeltn2ei5f",
        "name":  "Remada Alta com Barra Reta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01201201_Barbell_Upright_Row_360_degrees_shoulder_eef1f506c9.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01201201_Barbell_Upright_Row_360_degrees_shoulder_9fd7436d5a.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Inicie segurando a barra com as mãos posicionadas na linha dos ombros",
                             "Mantenha a barra próxima ao seu corpo",
                             "Levante os cotovelos até eles se alinharem com seus ombros e desça de forma controlada"
                         ],
        "importantTips":  [
                              "A barra deverá permanecer mais baixa do que a altura dos ombros",
                              "Evite usar impulso ou movimentos bruscos",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Trapézio",
                                 "Bíceps"
                             ]
    },
    {
        "id":  "grnv8byzx2lgqs4j5ickjotg",
        "name":  "Cadeira Chinesa",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/15461201_Bodyweight_Wall_Squat_Thighs_325611e052.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/15461201_Bodyweight_Wall_Squat_Thighs_d82eeace73.png",
        "instructions":  [
                             "Inicialmente, encoste seu corpo inteiro em uma parede lisa",
                             "Posicione seus pés em uma distância que eles fiquem alinhados com seus quadris",
                             "Desça até seus joelhos ficarem em um ângulo de 90 graus de flexão",
                             "Mantenha-se parado nesta posição pelo tempo determinado"
                         ],
        "importantTips":  [
                              "Mantenha o tronco ereto em todo o momento",
                              "Mantenha seu abdômen contraído",
                              "Inspire pelo nariz e expire pela boca enquanto mantém seu corpo parado"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "gs866bivc41nxexbbeahx9w2",
        "name":  "Prancha Alta com Avanço Alternado",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/58411201_Mountain_Climber_Lunge_male_Hips_f14bef51e7.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/58411201_Mountain_Climber_Lunge_male_Hips_8b04bb02b9.png",
        "instructions":  [
                             "Posicione-se na posição de prancha frontal alta",
                             "Mantenha o apoio de suas mãos alinhado com seus ombros e quadril na altura do seu tronco",
                             "Avance com uma das suas pernas para frente até que seu pé fique próximo da sua mão",
                             "Repita esse movimento de maneira alternada"
                         ],
        "importantTips":  [
                              "Faça o movimento até amplitude que seu corpo permite",
                              "Evite movimentos bruscos e impulsos",
                              "Inspire pelo nariz e expire pela boca enquanto você realiza a rotação"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [
                                 "Tríceps"
                             ]
    },
    {
        "id":  "gy1fpysu5cookjwa55ribocr",
        "name":  "Rosca Scott com Barra W",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/16271201_EZ_Barbell_Close_Grip_Preacher_Curl_Upper_Arms_79d481cda4.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/16271201_EZ_Barbell_Close_Grip_Preacher_Curl_Upper_Arms_4a77d03f59.png",
        "instructions":  [
                             "Mantenha os cotovelos fixos e o corpo estável durante o exercício",
                             "Mantenha seu tronco ereto",
                             "Realize o movimento completo de extensão do cotovelo"
                         ],
        "importantTips":  [
                              "Evite usar impulso ou movimentos bruscos",
                              "Evite projetar seu ombro para frente",
                              "Não deixe que seu braço perca contato com o apoio"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Banco Scott",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "gz2s7pp115t1ra2v2wkhdp8t",
        "name":  "Flexão lateral de tronco no Banco Romano",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00021201_45_degree_Side_Bend_Waist_FIX_9bdb5a8c0c.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00021201_45_degree_Side_Bend_Waist_FIX_b33a02ee68.png",
        "instructions":  [
                             "Sente-se no banco de forma lateral e posicione seu quadril encostado no apoio, ficando somente seu tronco para fora",
                             "Coloque as mãos atrás da cabeça e um pé na frente do outro",
                             "Contraia o abdomên",
                             "Realize o movimento de flexão lateral do tronco de forma controlada"
                         ],
        "importantTips":  [
                              "Evite descolar o quadril do encosto do banco",
                              "Evite rotacionar o tronco, faça somente a flexão lateral",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Banco Romano",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Oblíquos"
                           ],
        "secondaryMuscles":  [
                                 "Abdômen "
                             ]
    },
    {
        "id":  "gz3mme8cyxynv60j4io7yggk",
        "name":  "Crucifixo Inverso no Banco Inclinado",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/4884226ef5359fb62faee15bbfc98868.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/67c7fd636177e6334cc0dfd26c25fee0.png",
        "instructions":  [
                             "Deite com o peitoral encostado totalmente no apoio do banco",
                             "Segure os halteres com os braços esticados para baixo alinhados com os ombros",
                             "Realize o movimento até que seus braços se alinhem com seu tronco e retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite virar seu pescoço para os lados",
                              "Evite usar impulso ou movimentos bruscos",
                              "Não afaste seu peitoral do encosto do banco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Trapézio",
                                 "Costas"
                             ]
    },
    {
        "id":  "h4jw01r633r13nnjxptol73p",
        "name":  "Crucifixo Inverso unilateral na Polia Média",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02041201_Cable_Rear_Drive_Upper_Arms_e1519b7c4e.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02041201_Cable_Rear_Drive_Upper_Arms_65a657ab3b.png",
        "instructions":  [
                             "Fique de pé ao lado da polia e pegue o cabo com a mão mais distante",
                             "Contraia seu abdomên e glúteos para estabilizar seu tronco",
                             "Inicie com o braço elevado e estendido para frente",
                             "Com a palma da mão virada para dentro, faça o movimento para trás até que seu braço fique alinhado com o tronco",
                             "Realize o movimento forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Evite ultrapassar demasiadamente as mãos da linha dos ombros",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Trapézio"
                             ]
    },
    {
        "id":  "he6vhdx0aujckxw7nh7luwmi",
        "name":  "Tríceps Francês unilateral com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/04231201_Dumbbell_Standing_One_Arm_Extension_Upper_Arms_5e1e61633a.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/04231201_Dumbbell_Standing_One_Arm_Extension_Upper_Arms_fb15099ee0.png",
        "instructions":  [
                             "Inicialmente, em pé, coloque seu braço acima da cabeça alinhados com a orelha",
                             "Segure o halter e olhe para frente",
                             "Inicie o movimento com os cotovelos dobrados, cotovelo levemente rodado para fora e halter atrás da cabeça",
                             "Realize o movimento de extensão dos cotovelos forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha seus ombros e tronco estabilizados durante o movimento",
                              "Evite usar impulso ou movimentos bruscos",
                              "Permaneça com o alinhamento dos cotovelos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "hi4c77q188m0zcoemdejj81y",
        "name":  "Supino Reto Máquina",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05771201_Lever_Chest_Press_Chest_FIX_8add399a1a.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05771201_Lever_Chest_Press_Chest_FIX_5fb7719fed.png",
        "instructions":  [
                             "Sente-se no banco com os pés e mãos posicionados no apoio",
                             "Inicie com os cotovelos flexionados",
                             "Realize o movimento empurrando o suporte para frente até que você complete a extensão de cotovelos",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite movimentar seus ombros para cima e/ou para frente",
                              "Mantenha seu abdômen contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina de Supino",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "i1lnieasaxg1d146q0mimix1",
        "name":  "Elevação Lateral com Halteres Inclinado",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/82211201_Dumbbell_Lateral_Raise_Plank_male_Waist_17d32f22bd.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/82211201_Dumbbell_Lateral_Raise_Plank_male_Waist_cbccdc25a6.png",
        "instructions":  [
                             "Posicione de pé, com uma das mãos segure um halter e a outra segure no suporte",
                             "Faça uma inclinação lateral com seu corpo todo para o lado da mão que está segurando o halter",
                             "Mantenha seu corpo totalmente alinhado e o halter para baixo com seu braço estendido",
                             "Realize o movimento elevando seu braço até que o halter se alinhe com seu ombro",
                             "Retorne de maneira controlada"
                         ],
        "importantTips":  [
                              "Evite elevar seus ombros excessivamente e desalinhar seu tronco",
                              "Mantenha seu cotovelo levemente flexionado",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Trapézio"
                             ]
    },
    {
        "id":  "i1zesg1no266gym29f3n5cdn",
        "name":  "Superman com Ativação Escapular",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/36436ccd6660467b10092a972934c6ee.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/ce54e4ad68a0ba3d19cd74b439d75c31.png",
        "instructions":  [
                             "Deite-se no chão com a barriga para baixo com os braços esticados a cima da cabeça",
                             "Contraia os músculos da região das costas e seus glúteos",
                             "Inicie o movimento levantando seu tronco juntamente com os braços e pernas esticadas",
                             "Faça o movimento com os braços até que seu cotovelo e ombros fiquem em 90 graus",
                             "Retorne seu tronco, seus braços e sua perna ao solo de forma controlada e repita o movimento"
                         ],
        "importantTips":  [
                              "Faça o movimento de retorno de forma completa, tocando o tronco no solo",
                              "Mantenha seus glúteos e a região das costas contraídos durante o movimento de subida e descida",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "i5w1cihn0ydzgrjwxff5tc96",
        "name":  "Rosca bíceps no Banco Inclinado",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03221201_Dumbbell_Incline_Inner_Biceps_Curl_Upper_Arms_FIX_07a960402b.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03221201_Dumbbell_Incline_Inner_Biceps_Curl_Upper_Arms_FIX_6ce5e71f95.png",
        "instructions":  [
                             "Mantenha os cotovelos fixos e levemente atrás da linha do tronco",
                             "Mantenha seu tronco ereto e totalmente apoiado no banco",
                             "Realize o movimento completo e controlado de extensão do cotovelo"
                         ],
        "importantTips":  [
                              "Não balance seu cotovelo para frente durante o movimento",
                              "Não perca o apoio do tronco com o banco",
                              "Não deixe o banco muito reto nem tão inclinado"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "i6q5bu0ylko7b3s42a3b7ir9",
        "name":  "Crucifixo Peitoral Inclinado com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03191201_Dumbbell_Incline_Fly_Chest_FIX_2_e33943dcb1.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03191201_Dumbbell_Incline_Fly_Chest_FIX_2_3c7b066e93.png",
        "instructions":  [
                             "Deite-se no banco com os pés no chão",
                             "Segure os halteres e posicione suas mãos na linha dos ombros",
                             "Inicie com os cotovelos estendidos para cima",
                             "Realize o movimento descendo os halteres para o lado até a linha do tronco",
                             "Realize o movimento de descida e subida de forma controlada"
                         ],
        "importantTips":  [
                              "Realize o movimento na amplitude que a sua flexibilidade permitir",
                              "Mantenha seu abdômen contraído",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "i751uo7ioc7efev0zqzvry2t",
        "name":  "Barra Fixa (Pegada Supinada)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/06741201_Reverse_grip_Pull_up_Back_FIX_0fa65a981b.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/06741201_Reverse_grip_Pull_up_Back_FIX_032058cdc7.png",
        "instructions":  [
                             "Segure a barra com as mãos na direção dos seus ombros",
                             "Oriente a palma da sua mão para frente",
                             "Cotovelos e pernas totalmente estendidas",
                             "Realize o movimento puxando seu corpo para cima até que seu queixo ultrapasse a barra",
                             "Desça de maneira controlada"
                         ],
        "importantTips":  [
                              "Evite balançar seu corpo para frente e para trás",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Barra fixa",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "i79fdgrpvi2z5chgyrkmh8yi",
        "name":  "Supino Inclinado Smith",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/07571201_Smith_Incline_Bench_Press_Chest_FIX_e9f172f5e4.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/07571201_Smith_Incline_Bench_Press_Chest_FIX_13c00c75a1.png",
        "instructions":  [
                             "Deite-se no banco com os pés no chão",
                             "Segure a barra guiada e posicione suas mãos na linha dos ombros",
                             "Inicie com os cotovelos estendidos",
                             "Realize o movimento descendo a barra até que ela se aproxime do seu peitoral",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu quadril do apoio do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina Smith",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "i7ggwv7j7jue2j9qn8igwepu",
        "name":  "Posição de três apoios com rotação de tronco",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/e4d63f3efcd162bcdca2ac898137c995.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/2695625d6802ec1f48b8ad114ec19b53.png",
        "instructions":  [
                             "Posicione-se na posição de prancha frontal alta",
                             "Mantenha o apoio de suas mãos alinhado com seus ombros e quadril na altura do seu tronco",
                             "Avance com uma das suas pernas para frente até que seu pé fique próximo da sua mão",
                             "Faça uma rotação de tronco controlada e mantenha o olhar direcionado para a sua mão",
                             "Repita esse movimento de maneira alternada"
                         ],
        "importantTips":  [
                              "Faça o movimento até amplitude que seu corpo permite",
                              "Evite movimentos bruscos e impulsos",
                              "Inspire pelo nariz e expire pela boca enquanto você realiza a rotação"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos",
                                 "Lombar"
                             ]
    },
    {
        "id":  "ieeb5l0p5j9zu5muj5wcyyxe",
        "name":  "Remada Deitada",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02481201_Cambered_Bar_Lying_Row_Back_099f07a8c7.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02481201_Cambered_Bar_Lying_Row_Back_db7c08128f.png",
        "instructions":  [
                             "Fique deitado no banco reto",
                             "Segure a barra posicionando as mãos na linha dos ombros",
                             "Mantenha seu corpo totalmente estendido",
                             "Realize o movimento puxando a barra para cima até que ela se aproxime do banco",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu corpo do apoio do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Ombros",
                                 "Bíceps"
                             ]
    },
    {
        "id":  "ijawqrmjqg8equ1zkwazav29",
        "name":  "Supino Inclinado com Barra",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00471201_Barbell_Incline_Bench_Press_Chest_FIX_2_12f2cc581d.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00471201_Barbell_Incline_Bench_Press_Chest_FIX_2_7087b459a7.png",
        "instructions":  [
                             "Deite-se no banco com os pés no chão",
                             "Segure a barra e posicione suas mãos na linha dos ombros",
                             "Inicie com os cotovelos estendidos",
                             "Realize o movimento descendo a barra até que ela se aproxime do seu peitoral",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu quadril do apoio do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "ilmslsaw5u7s1ia2axvx9iir",
        "name":  "Panturrilha em Pé no Smith",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/11641201_Smith_Calf_Raise_version_2_Calves_FIX_f4611f19df.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/11641201_Smith_Calf_Raise_version_2_Calves_FIX_117538720e.png",
        "instructions":  [
                             "Posicione-se de pé com a barra guiada posicionada no seu trapézio",
                             "Mantenha seus joelhos estendidos",
                             "Realize o movimento ficando na ponta dos pés"
                         ],
        "importantTips":  [
                              "Evite deslocar seu corpo para frente",
                              "Suba e desça de forma controlada, sem movimentos excessivamente rápidos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina Smith",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Panturrilhas"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "iqob0s696t57ipsl715xn8ja",
        "name":  "Desenvolvimento ajoelhado unilateral",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/29271201_Kettlebell_Kneeling_One_Arm_Bottoms_Up_Press_Shoul_871f23201f.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/29271201_Kettlebell_Kneeling_One_Arm_Bottoms_Up_Press_Shoul_3c4c99b346.png",
        "instructions":  [
                             "Inicie com os dois joelho no chão",
                             "Posicione o Kettlebell em uma das mãos e próximo ao seu ombro",
                             "Eleve seu braço até que ele fique totalmente estendido para cima",
                             "Realize o movimento de subida e descida de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Evite flexionar lateralmente o seu tronco",
                              "Não movimente seus ombros para cima"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Kettlebell",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Trapézio"
                             ]
    },
    {
        "id":  "is68rvcanxb6dzk1kuqs8g4y",
        "name":  "Agachamento Lateral",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/29721201_Side_Lunge_Thighs_635a644571.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/29721201_Side_Lunge_Thighs_b3b89a92ab.png",
        "instructions":  [
                             "Inicialmente, seu tronco permanecerá ereto e seus pés ficarão numa posição confortável, alinhados com seus quadris ou um pouco mais afastados",
                             "Dê um passo para o lado e inicie uma flexão de joelho enquanto seu quadril se desloca para trás e sua perna oposta permanece reta",
                             "Faça uma pausa, estabilize todo seu corpo",
                             "Contraia seus glúteos, adutores e quadríceps e empurre o chão até que você retorne para a posição inicial"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Desça seu quadril até uma amplitude que suas articulações permitam",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos",
                                 "Posteriores",
                                 "Adutores"
                             ]
    },
    {
        "id":  "itqg91ajg0xwssjqinmp5wbq",
        "name":  "Tríceps na Polia com Barra W",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/5bc6fec478c76661fbdad7de5ef17a87.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/e9b00bdb4d25d619195821e5d96098cd.png",
        "instructions":  [
                             "Inicialmente, segure a barra e coloque seus braços juntos ao seu tronco",
                             "Estabilize seu tronco e ombros",
                             "Utilize a pegada supinada (palma das mãos para cima)",
                             "Realize o movimento de forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha seus ombros e braços estabilizados durante o movimento",
                              "Evite usar impulso ou movimentos bruscos",
                              "Permaneça com o alinhamento dos cotovelos em relação as orelhas"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "ivprsl2njwnp600n43ti1b4v",
        "name":  "Abdominal Supra com Anilha",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/15219d67344396030e7ffd22e9c39afc.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/5b2cdc16f0776f8b008b4a8c04ff02a0.png",
        "instructions":  [
                             "Deite-se no chão com joelhos estendidos",
                             "Coloque seus braços estendidos acima da cabeça segurando a anilha com as duas mãos",
                             "Faça o movimento de flexão de tronco completo aproximando seu peitoral do seu joelho",
                             "Mantenha seu tronco ereto e a anilha acima da cabeça"
                         ],
        "importantTips":  [
                              "Mantenha quadril fixo no solo",
                              "Evite realizar movimentos excessivos com a sua coluna lombar",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Anilha",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "ixnts8tbrxvyjrck0ljw99ul",
        "name":  "Supino Declinado Máquina",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/e0a6517dc8790a41bf2c29a5ae600523.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/1b37d4f8649ea3e85e25ac93871144a4.png",
        "instructions":  [
                             "Sente-se no banco com os pés no chão",
                             "Apoie as mãos na plataforma com os cotovelos flexionados",
                             "Realize o movimento empurrando a plataforma até que seus cotovelos se estendam completamente",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite projetar seus ombros para frente",
                              "Mantenha seu abdômen contraído",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina de Supino",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "jbtrtjzock9irw1f3b46c6kc",
        "name":  "Elevação Lateral com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03341201_Dumbbell_Lateral_Raise_shoulder_FIX_c018d7ed4e.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03341201_Dumbbell_Lateral_Raise_shoulder_FIX_bc04dc9b86.png",
        "instructions":  [
                             "Fique de pé segurando os halteres ao lado dos quadris",
                             "Contraia seu abdomên e glúteos para estabilizar seu tronco",
                             "Eleve os halteres para cima até que eles fiquem alinhados com os ombros",
                             "Permaneça com uma leve flexão dos cotovelos",
                             "Realize o movimento de subida e descida de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Evite ultrapassar demasiadamente os halteres da linha dos ombros",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Trapézio"
                             ]
    },
    {
        "id":  "jkewbxy6ny3w3f3dyleyllo5",
        "name":  "Encolhimento com Barra Hexagonal",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/41031201_Trap_Bar_Standing_Shrug_male_Back_913c14767b.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/41031201_Trap_Bar_Standing_Shrug_male_Back_c961fb3739.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Segure a barra com as mãos posicionadas na linha dos ombros",
                             "Contraia seu abdômen",
                             "Realiza o movimento de forma controlada"
                         ],
        "importantTips":  [
                              "Não movimente seus ombros para frente",
                              "Não flexione seu cotovelo durante os movimentos",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra Hexagonal",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Trapézio"
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "jojljewmegmjbb0xcawcnjnd",
        "name":  "Flexão de Braço Inclinada na Caixa",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/37851201_Incline_Push_Up_on_box_57b32ed8b1.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/37851201_Incline_Push_Up_on_box_512f745d44.png",
        "instructions":  [
                             "Apoie suas mãos no banco e posicione-as na linha dos ombros",
                             "Mantenha seu corpo totalmente estendido",
                             "Realize o movimento flexionando os cotovelos até que seu peitoral se aproxime da caixa"
                         ],
        "importantTips":  [
                              "Evite desalinhar seu quadril em relação ao seu tronco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Caixa",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "jsvnn6wjsxyjstga6omzpuwk",
        "name":  "Alongamento de Posterior de Ombro",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/19801201_Across_Chest_Shoulder_Stretch_Back_FIX_879689ffa0.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/19801201_Across_Chest_Shoulder_Stretch_Back_FIX_8f77480f27.png",
        "instructions":  [
                             "Fique em pé sentado, com a coluna ereta e ombros relaxados",
                             "Estenda um dos braços à frente do corpo, na altura do ombro, mantendo-o reto (sem dobrar o cotovelo)",
                             "Use a outra mão para puxar o braço estendido na direção oposta, cruzando-o na frente do peito",
                             "Você deve sentir um alongamento suave na parte de trás do ombro e parte superior das costas e matenha dessa forma pelo tempo proposto"
                         ],
        "importantTips":  [
                              "Não force o braço além do ponto confortável, o alongamento deve ser firme, mas sem dor.",
                              "Evite inclinar ou torcer o tronco para compensar o movimento",
                              "Mantenha o pescoço relaxado e os ombros longe das orelhas"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "k1leod8n5korm56vocj9rfyg",
        "name":  "Remada no Smith",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/04991201_Inverted_Row_Back_FIX_374a4d4643.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/04991201_Inverted_Row_Back_FIX_c964287b4b.png",
        "instructions":  [
                             "Coloque-se debaixo da barra do smith",
                             "Segure a barra guiada com a posição das mãos alinhadas com os ombros",
                             "Mantenha seu corpo totalmente estendido",
                             "Realize o movimento puxando seu corpo para cima até que seu peitoral se aproxime da barra",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Não desalinhe seu quadril do tronco e dos seus pés",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina Smith",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "k3gy55nd5qcume8svi1x9xsi",
        "name":  "Elevação Frontal na Polia com Barra Reta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01621201_Cable_Front_Raise_Shoulders_FIX_7dd8dcb358.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01621201_Cable_Front_Raise_Shoulders_FIX_b65f4da939.png",
        "instructions":  [
                             "Fique de pé e de costas para a polia",
                             "Segure a barra próximo ao seu quadril",
                             "Contraia seu abdomên e glúteos para estabilizar seu tronco",
                             "Realize o movimento elevando seus braços até a altura do ombro e retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Evite encolhe seus ombros",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Peito",
                                 "Trapézio"
                             ]
    },
    {
        "id":  "k7nh7tq6son1qk8x6mjdv5d6",
        "name":  "Tríceps no Supino Reto (Pegada Fechada)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00301201_Barbell_Close_Grip_Bench_Press_Upper_Arms_FIX_6dca02315d.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00301201_Barbell_Close_Grip_Bench_Press_Upper_Arms_FIX_2a643ad55f.png",
        "instructions":  [
                             "Deite-se em um banco com as costas apoiadas, os joelhos dobrados e os pés no chão.",
                             "Segure uma barra sobre o peito com as mãos próximas, as palmas voltadas para a frente e os braços dobrados ao lado do corpo.",
                             "Levante a barra enquanto estende os braços.",
                             "Quando seus braços ficarem retos, retorne lentamente à posição inicial e repita."
                         ],
        "importantTips":  [
                              "Mantenha os pulsos retos.",
                              "Mantenha os cotovelos próximos ao tronco e mergulhados sob o banco durante a posição inicial.",
                              "Mantenha um padrão de respiração natural."
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "k7p0nvm34lc4r8lb3fazsdfk",
        "name":  "Abdução de Quadril com Mini Band",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/8ec851e9e5c8e61cd98fb31d9e499bc0.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/327172e463e4581a46f41f365fab1d4e.png",
        "instructions":  [
                             "Sente-se no banco com a faixa elástica ao redor dos joelhos e posicione seu quadril encostado no apoio",
                             "Apoie suas mãos no banco, ao lado dos quadris",
                             "Posicione seus joelhos um ao lado do outro",
                             "Realize o movimento de afastar os joelhos de forma controlada"
                         ],
        "importantTips":  [
                              "Evite descolar o quadril do encosto do banco",
                              "Tente manter seu tronco estabilizado",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Faixa elástica",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdutores"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "kd2dfo678r8zi7allpa69g1v",
        "name":  "Walkout",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/14711201_Inchworm_Waist_622a88e6b0.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/14711201_Inchworm_Waist_449b099db5.png",
        "instructions":  [
                             "Inicie na posição de prancha alta com as mãos apoiadas no chão na altura dos ombros e pernas esticadas",
                             "Comece a caminhar com as mãos para trás na direção dos seus pés, levantando o quadril para cima",
                             "Vá até onde for possível e sua amplitude permitir, termimando com o joelho esticado e mãos no chão"
                         ],
        "importantTips":  [
                              "Faça o movimento até a amplitude articular que for possível",
                              "Mantenha seu abdômen e glúteos contraídos",
                              "Evite movimentos bruscos e impulsos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Posteriores"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos",
                                 "Abdômen "
                             ]
    },
    {
        "id":  "kplxfeo3hmsmbx99mzk48rom",
        "name":  "Adução de Quadril em Pé",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/c5d71a61744fe9e1091ae94c55e8c171.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/97fdd489e2db7a7456af2a10fcac0155.png",
        "instructions":  [
                             "Coloque-se de pé ao lado do suporte com a faixa elástica na altura do seu tornozelo mais próximo do suporte",
                             "Fique à uma distância onde o faixa elástica fique esticada desde o início do movimento",
                             "Mantenha seus glúteos e abdômen contraidos e o tronco reto",
                             "Realize o movimento aproximando uma perna da outra e retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite que ele flexione lateralmente",
                              "Evite impulsos e movimentos bruscos",
                              "Mantenha um padrão de respiração suave"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Faixa elástica",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Adutores"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "ksd9yp8qt51b6edws2r2cm87",
        "name":  "Elevação Frontal unilateral na Polia",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/7c1aa54a506af8eddeae60e9c96d02dc.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/5c5f2805b862ec17331ae10eb6faec5d.png",
        "instructions":  [
                             "Fique de pé e de costas para a polia",
                             "Segure o cabo levemente à frente do seu quadril e na direção dos seus ombros",
                             "Contraia seu abdomên e glúteos para estabilizar seu tronco",
                             "Realize o movimento elevando seus braços até a altura do ombro e retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Evite encolher seus ombros",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Peito",
                                 "Trapézio"
                             ]
    },
    {
        "id":  "kufl69xp85sv0jgf67yzxukm",
        "name":  "Prancha Alternando Braços e Pernas",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/ecc33b04c684ceb7ec62b84dc5177b6b.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/6f9b1479ebf6a85a944eb424e2fe32ab.png",
        "instructions":  [
                             "Posicione-se no chão com os joelhos estendidos, palma das mãos no chão e cotovelos esticados e alinhados com os ombros",
                             "Coloque seus pés afastados e na direção dos quadris",
                             "Mantenha seus joelhos, quadris e tronco totalmente alinhados",
                             "Contraia seu abdomên, glúteos e musculaturas das escápulas e realize o movimento de elevação do braço e da perna de forma alternada"
                         ],
        "importantTips":  [
                              "Evite movimento de subir e descer o tronco",
                              "Evite que seu quadril desça",
                              "Não coloque suas mãos à frente ou atrás da linha dos ombros"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "kwx4r36c7b90a6a3m272ctj5",
        "name":  "Avanço com Barra",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00541201_Barbell_Lunge_Thighs_FIX_ab4d28b976.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00541201_Barbell_Lunge_Thighs_FIX_7a59a9f1f3.png",
        "instructions":  [
                             "Posicione a barra na região dos seus trapézio e segure a mesma com as suas mãos",
                             "Mantenha seus cotovelos próximos ao seu tronco e direionados para baixo",
                             "Seu tronco permanecerá ereto e você posionará um pé ao lado do outro",
                             "Avance uma das pernas à frente e em seguida flexione seus quadris e seus joelhos e desça até onde for possível, mantendo seu pé da frente posicionado no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos e alinhando seus pés lado a lado"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Evite jogar seu joelho da frente para dentro, mantenha o alinhamento com seu quadril",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "l0gjv4bcde4axacm0wfr7c11",
        "name":  "Flexão de punho neutra",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/fb9fe76be1bbf0acf066e06e68d4a7da.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/c54da72f4d42bc98e434317235f7cfd6.png",
        "instructions":  [
                             "Inicie sentado em um banco com o tronco inclinado à frente",
                             "Posicine um de seus braços em cima da sua perna e segure o halter com a palma das mãos virada para dentro, em posição neutra",
                             "Realize o movimento de flexão do punho de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Não descole seu antebraço da sua perna",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Antebraços"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "li8x2ha5w4ymymp03w21yb2b",
        "name":  "Panturrilha Sentado",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/f99a54abf7db5a7cf4bee6a36717e169.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/c631da402fbf8dda53f2c97caa6aa426.png",
        "instructions":  [
                             "Posicione-se sentado com os pés e joelhos no apoio corretamente",
                             "Coloque as mãos no apoio e permaneça com o tronco ereto",
                             "Realize o movimento ficando na ponta dos pés"
                         ],
        "importantTips":  [
                              "Realize o movimento pela panturrilha e não elevando os joelhos",
                              "Suba e desça de forma controlada, sem movimentos excessivamente rápidos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina de panturrilha",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Panturrilhas"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "lyfp7y2gpu8y21kwz3g10msk",
        "name":  "Rosca bíceps inversa na Polia Baixa",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/c4faba5ca11f44d8479fe2462e46f345.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/78e9e246503b82cfa50bcb5f837d25af.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Contraia o abdomên e glúteos",
                             "Cotovelo alinhado com o tronco durante o movimento",
                             "Flexione o cotovelo completamente",
                             "Desça o antebraço de forma controlada"
                         ],
        "importantTips":  [
                              "Não balance seu cotovelo para frente durante o movimento",
                              "Não flexione o tronco lateralmente",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "lyxokgp7azvlsvk2rfsbp0qb",
        "name":  "Agachamento Livre",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00261201_Barbell_Bench_Squat_Hips_686e707138.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00261201_Barbell_Bench_Squat_Hips_457839ae7f.png",
        "instructions":  [
                             "Posicione a barra na região do seu trapézio e segure a mesma com suas mãos",
                             "Mantenha seus cotovelos próximo ao seu tronco e direcionados para baixo",
                             "Inicialmente, seu tronco permanecerá ereto e seus pés ficarão numa posição confortável, alinhados com seus quadris ou um pouco mais afastados",
                             "De forma controlada, flexione seu quadril e seus joelhos e desça até onde for possível, mantendo seus pés posicionados no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Mantenha os pés totalmente no chão durante todo a execução",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos",
                                 "Posteriores"
                             ]
    },
    {
        "id":  "m5vq6m1xj0le1x0t5351gj40",
        "name":  "Panturrilha em Pé",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/13731201_Bodyweight_Standing_Calf_Raise_Calves_e49997683d.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/13731201_Bodyweight_Standing_Calf_Raise_Calves_1770cea3fe.png",
        "instructions":  [
                             "Posicione-se de pé",
                             "Mantenha seus joelhos estendidos",
                             "Realize o movimento ficando na ponta dos pés"
                         ],
        "importantTips":  [
                              "Evite deslocar seu corpo para frente",
                              "Suba e desça de forma controlada, sem movimentos excessivamente rápidos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Panturrilhas"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "m7p5ac7tc971lmfvcaj63bgq",
        "name":  "Supino Reto com Barra",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00251201_Barbell_Bench_Press_Chest_FIX_2_b38bbaa912.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00251201_Barbell_Bench_Press_Chest_FIX_2_857993d69d.png",
        "instructions":  [
                             "Deite-se no banco com os pés no chão",
                             "Segure a barra e posicione suas mãos na linha dos ombros",
                             "Inicie com os cotovelos estendidos",
                             "Realize o movimento descendo a barra até que ela se aproxime do seu peitoral",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu quadril do apoio do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "mg1x2pgv8giu50uq655bhjsf",
        "name":  "Rosca bíceps sentado alternado com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/70f7848cf2d2aa4bc57fe27f09bf3387.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/8c79d4697fc14361a87f4d1b5238ec06.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Cotovelo alinhado com o tronco durante o movimento",
                             "Flexione o cotovelo completamente",
                             "Desça o antebraço de forma controlada"
                         ],
        "importantTips":  [
                              "Evite que seu cotovelo fique a frente do tronco",
                              "Não flexione o tronco lateralmente",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "mkh6wogea7abszjjfpet204i",
        "name":  "Supino Reto com Halteres no Solo",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/36681201_Dumbbell_Lying_on_Floor_Chest_Press_Chest_2cc47f9fe9.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/36681201_Dumbbell_Lying_on_Floor_Chest_Press_Chest_7995134ede.png",
        "instructions":  [
                             "Deite-se no chão e segure os halteres com os braços estendidos para cima",
                             "Flexione os joelhos e coloque os pés um pouco à frente dos glúteos",
                             "Mantenha seu abdômen contraido",
                             "Realize o movimento descendo os halteres até que seu cotovelo se aproxime do chão"
                         ],
        "importantTips":  [
                              "Evite bater com seu braço no chão, faça de forma controlada",
                              "Mantenha seu abdômen contraído",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "mls43l6cwdlaez0fdqjarnrl",
        "name":  "Panturrilha Leg Press 45",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/13911201_Sled_Calf_Press_On_Leg_Press_Calves_FIX_5f9bfe52f8.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/13911201_Sled_Calf_Press_On_Leg_Press_Calves_FIX_43fd4ce137.png",
        "instructions":  [
                             "Posicione-se sentado com cabeça, tronco e quadril apoiados no encosto",
                             "Coloque suas mãos no suporte e mantenha seus joelhos estendidos",
                             "Realize o movimento ficando na ponta dos pés"
                         ],
        "importantTips":  [
                              "Evite descolar seu corpo do apoio",
                              "Suba e desça de forma controlada, sem movimentos excessivamente rápidos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Leg Press 45",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Panturrilhas"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "mrnte6rvg8cdk1wj91nbsq6n",
        "name":  "Supino Inclinado com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03141201_Dumbbell_Incline_Bench_Press_Chest_FIX_2_49c433b2e1.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03141201_Dumbbell_Incline_Bench_Press_Chest_FIX_2_8c6371f049.png",
        "instructions":  [
                             "Deite-se no banco com os pés no chão",
                             "Segure os halteres e posicione suas mãos na linha dos ombros",
                             "Inicie com os cotovelos estendidos",
                             "Realize o movimento descendo os halteres até que eles se aproximem do seu peitoral",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu quadril do apoio do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "mtmufqfzw88t58b2kpk04zgl",
        "name":  "Abdominal Infra Paralelas com Joelhos Estendidos",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/29631201_Captains_Chair_Straight_Leg_Raise_Waist_FIX_6f36b5d0c5.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/29631201_Captains_Chair_Straight_Leg_Raise_Waist_FIX_32b0f6a3e8.png",
        "instructions":  [
                             "Posicione seu antebraço e cotovelos no apoio corretamente",
                             "Coloque seu tronco e quadril apoiados no encosto do equipamento",
                             "Retire os pés do apoio e eleve as pernas com os joelhos flexionados até que seus joelhos ultrapassem levemente a linha do quadril",
                             "Realize o movimento de retorno de maneira controlada"
                         ],
        "importantTips":  [
                              "Mantenha seu tronco e quadril fixos no encosto do equipamento",
                              "Evite realizar movimentos excessivos com a sua coluna lombar",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Barra Fixa e Paralelas",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "mtt6ffac0fmfwv93muex8zqb",
        "name":  "Voador",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/10301201_Lever_Pec_Deck_Fly_Chest_59eff3fe0b.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/10301201_Lever_Pec_Deck_Fly_Chest_ba3b699b9f.png",
        "instructions":  [
                             "Sente-se no banco com os pés e braços posicionados no apoio",
                             "Inicie com os braços abertos e cotovelos alinhados com seus ombros",
                             "Realize o movimento empurrando o suporte para dentro até que você aproxime um braço do outro",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu quadril do apoio do banco e deslocar seus ombros para frente",
                              "Mantenha seu abdômen contraído",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Peck deck (Voador)",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "muj0hcdsa7llcmpwhik0g0ll",
        "name":  "Posição do Gato",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/45801201_Cat_Cow_Stretch_Stretching_e01653df4d.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/45801201_Cat_Cow_Stretch_Stretching_245ab7b90d.png",
        "instructions":  [
                             "Posicione-se no chão em 4 apoios, com a mãos alinhadas com os ombros e os joelhos na linha dos quadris",
                             "Faça uma inspiração pelo nariz e arredonde sua coluna até que você consiga olhar em direção ao seu umbigo",
                             "Em seguida faça uma expiração pela boca arqueando sua coluna até onde for possível e olhando para o teto",
                             "Repita o movimento de forma lenta e controlada"
                         ],
        "importantTips":  [
                              "Faça o movimento de retorno de forma completa, respeitando sua amplitude de movimento",
                              "Mantenha seus cotovelos estendidos durante toda o exercício",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Abdômen ",
                                 "Glúteos"
                             ]
    },
    {
        "id":  "mvmr2xixxwggb7pmedjvjufc",
        "name":  "Prancha alta Alternando Membros Inferiores",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/51041201_Alternate_Single_Leg_Raise_Plank_Hips_ed5a3ff7b8.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/51041201_Alternate_Single_Leg_Raise_Plank_Hips_83ee10687b.png",
        "instructions":  [
                             "Posicione-se no chão com os joelhos estendidos, palma das mãos no chão e cotovelos esticados e alinhados com os ombros",
                             "Coloque seus pés afastados e na direção dos quadris",
                             "Mantenha seus joelhos, quadris e tronco totalmente alinhados",
                             "Contraia seu abdomên, glúteos e musculaturas das escápulas e realize o movimento de elevação da perna de forma alternada"
                         ],
        "importantTips":  [
                              "Evite movimento de subir e descer o tronco",
                              "Evite que seu quadril desça",
                              "Não coloque suas mãos à frente ou atrás da linha dos ombros"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "mxgnyt7rb9apek3lg1565lpb",
        "name":  "90-90 de Quadril",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/70736600541894bc9be9ddfa46f6d795.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03e634996ab702895f1a067cc38a44f3.png",
        "instructions":  [
                             "Sente-se no chão e apoie suas mãos sobre ele",
                             "Posicione uma das suas pernas à frente com o joelho dobrado em um ângulo de 90 graus",
                             "Faça o mesmo com a perna de trás e mantenha os joelhos próximos ao chão",
                             "Seu tronco ficará levemente inclinado à frente e suas mãos no chão enquanto você mantém a posição e depois troque de lado"
                         ],
        "importantTips":  [
                              "Mantenha o tronco ereto em todo o momento",
                              "Mantenha seu abdômen contraído",
                              "Inspire pelo nariz e expire pela boca enquanto mantém seu corpo parado"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Glúteos"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "mxvvk3dxobs7675az5hr26fs",
        "name":  "Agachamento Búlgaro",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/35331201_Bulgarian_Split_Squat_Thighs_FIX_c353b022e2.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/35331201_Bulgarian_Split_Squat_Thighs_FIX_a0847ceb61.png",
        "instructions":  [
                             "Você posicionará um pé à frente e outro atrás, sendo o de trás em cima de um banco",
                             "Seu tronco permanecerá ereto e o pé da frente ficará totalmente no chão e o de trás somente a parte do frente ou o dorso ficará no banco",
                             "De forma controlada, flexione seus quadris e seus joelhos e desça até onde for possível, mantendo seu pé da frente posicionado no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar, podendo apenas inclinar levemente à frente",
                              "Evite jogar seu joelho da frente para dentro, mantenha o alinhamento com seu quadril",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "mxxjg9m3p1zuro2vofvj6ebm",
        "name":  "Abdominal Infra com os Joelhos Flexionados",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/5d68666ac917b77c2808b06fdc833543.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/a74ca13c6d1ccb84f52f8dbd9c0af8d1.png",
        "instructions":  [
                             "Deite-se no chão com os joelhos flexionados e os pés fora do chão",
                             "Posicione seus braços esticados ao lado do seu corpo",
                             "Faça o movimento de flexão do quadril até que seus glúteos não tenham contato com o chão",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha seu tronco apoiado no chão durante todo o movimento",
                              "Faça os movimentos de maneira controlada para não sobrecarregar a região lombar",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "mywgd1rr16yfbazppyl97gi2",
        "name":  "Levantamento Terra no Hack",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00741201_Barbell_Rack_Pull_Hips_9f3c2a2539.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00741201_Barbell_Rack_Pull_Hips_5ce5344c5f.png",
        "instructions":  [
                             "Coloque-se de pé com os pés posicionados na linha dos quadris",
                             "Segure a barra posicionando as mãos na linha dos ombros",
                             "Mantenha seus glúteos e abdômen contraidos e o tronco reto",
                             "Realize o movimento descendo seu tronco para baixo mantendo uma leve flexão dos joelhos",
                             "Toque a barra no suporte e retorne para a posição inicial"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Faça o movimento até onde a sua mobilidade e flexibilidade permitir",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Gaiola de Agachamento",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Posteriores"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "mzuiplwcy8k7oih6cybla2jw",
        "name":  "Tríceps Mergulho Máquina",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/a2b7d3ab02553521aede5bbb8f8baf26.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/d172af3aa7625056df9952326a3ad1a1.png",
        "instructions":  [
                             "Sente-se no banco e coloque as mãos no apoio do equipamento",
                             "Afaste os pés e os mantenha no chão com seu tronco ereto",
                             "Empurre o suporte da máquina estendendo seu cotovelos para baixo",
                             "Retorne de forma controlada até seus cotovelos formarem um ângulo de 90 graus"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar.",
                              "Mantenha as pernas retas e os calcanhares no chão.",
                              "Mantenha um padrão de respiração suave."
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina Tríceps Mergulho",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "n4nsk7fxio09ifk8wzy3vnh8",
        "name":  "Elevação Frontal de Ombros no Banco Inclinado",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/39131201_Dumbbell_One_Arm_Front_Raise_Shoulders_3908ef9220.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/39131201_Dumbbell_One_Arm_Front_Raise_Shoulders_efec7adc07.png",
        "instructions":  [
                             "Apoie seus joelhos no assento do banco",
                             "Coloque seu quadril e tronco completamente no encosto do banco",
                             "Segure os halteres para baixo na linha dos ombros e com a palma das mãos viradas para trás",
                             "Realize o movimento elevando os halteres até a altura dos seus ombros",
                             "Desça seus braços de maneira controlada"
                         ],
        "importantTips":  [
                              "Evite movimentar seu quadril e tronco retirando eles do encosto do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Trapézio"
                             ]
    },
    {
        "id":  "n4vl5ic4oy64l7scsni97j3m",
        "name":  "Puxada Aberta (Pegada Neutra)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/fd13bef8cbbdae799e4841ef2e0879a2.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/94b0dd3f58c07d2a34c49c7f61cbb6c5.png",
        "instructions":  [
                             "Sente-se no banco com os pés e os joelhos posicionados no apoio",
                             "Segure a barra com os braços abertos e estendidos para cima e a palma das mãos viradas para dentro",
                             "Mantenha seu tronco ereto e abdômen contraido",
                             "Realize o movimento puxando a barra até que ela se aproxime do seu peitoral",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu quadril do apoio do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Pulley",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps"
                             ]
    },
    {
        "id":  "n7xui2f9sxnhs0mz8tv2wt9h",
        "name":  "Agachamento Sumô com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/14fde29d25159286fc4df17860c7e327.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/b57a4083eb07c86a6fb710ec7e5e7a9a.png",
        "instructions":  [
                             "Segure o halter com as duas mãos com os braços estendidos para baixo",
                             "Seu tronco permanecerá ereto e você posionará os pés afastados e a ponta dos pés rodadas para fora",
                             "Flexione seus quadris e seus joelhos, incline seu tronco para frente e desça até onde for possível, mantendo seus pés posicionados no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Evite jogar seus joelhos para dentro",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos",
                                 "Adutores"
                             ]
    },
    {
        "id":  "nacn5t0okl11mth6sjp32ct5",
        "name":  "Abdominal Toque alternado no calcanhar",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00061201_Alternate_Heel_Touchers_side_POV_Waist_114497fab5.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00061201_Alternate_Heel_Touchers_side_POV_Waist_ceef8e4040.png",
        "instructions":  [
                             "Deite-se no chão com os joelhos flexionados e os pés um pouco à frente dos glúteos",
                             "Posicione seus braços esticados ao lado do seu corpo",
                             "Flexione levemente seu tronco",
                             "Realize o movimento de toque nos calcanhares de forma alternada"
                         ],
        "importantTips":  [
                              "Evite movimento de subir e descer o tronco",
                              "Evite rodar o tronco, somente realizar a flexão lateral",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Oblíquos"
                           ],
        "secondaryMuscles":  [
                                 "Abdômen "
                             ]
    },
    {
        "id":  "nh1ib1q6e9jqxo8e6sf7j7k7",
        "name":  "Tríceps Testa na Polia com Barra W",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/41151201_Cable_Overhead_Tricep_Extension_Straight_Bar_male_Upper_Arms_140d489199.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/41151201_Cable_Overhead_Tricep_Extension_Straight_Bar_male_Upper_Arms_9ce3468cb7.png",
        "instructions":  [
                             "Inicialmente, incline-se para frente e coloque seus braços acima da cabeça na direção alinhados com a orelha",
                             "Utilize a pegada pronada (palma das mãos para cima)",
                             "Inicie o movimento com os cotovelos dobrados",
                             "Realize o movimento de forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha seus ombros e braços estabilizados durante o movimento",
                              "Evite usar impulso ou movimentos bruscos",
                              "Permaneça com o alinhamento dos cotovelos em relação as orelhas"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "njugrs8di8hi4slfucbg032j",
        "name":  "Tríceps na Polia com Barra Reta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/12271201_Cable_Standing_One_Arm_Tricep_Pushdown_Overhand_G_167dc39213.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/12271201_Cable_Standing_One_Arm_Tricep_Pushdown_Overhand_G_78cfa502c1.png",
        "instructions":  [
                             "Inicialmente, segure a barra e coloque seus braços juntos ao seu tronco",
                             "Estabilize seu tronco e ombros",
                             "Utilize a pegada pronada (palma das mãos para baixo)",
                             "Realize o movimento de forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha seus ombros e braços estabilizados durante o movimento",
                              "Evite usar impulso ou movimentos bruscos",
                              "Permaneça com o alinhamento dos cotovelos em relação ao tronco"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "np0yzgk8fl1extgwfeedkm9r",
        "name":  "Agachamento Sumô com Kettlebell",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/40891201_Kettlebell_Sumo_Squat_male_Hips_4c77a6c997.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/40891201_Kettlebell_Sumo_Squat_male_Hips_682716b152.png",
        "instructions":  [
                             "Segure o Kettlebell com as duas mãos com os braços estendidos para baixo",
                             "Seu tronco permanecerá ereto e você posionará os pés afastados e a ponta dos pés rodadas para fora",
                             "Flexione seus quadris e seus joelhos, incline seu tronco para frente e desça até onde for possível, mantendo seus pés posicionados no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Evite jogar seus joelhos para dentro",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Kettlebell",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos",
                                 "Adutores"
                             ]
    },
    {
        "id":  "nph5bqf1rxbziquxbr7bo68q",
        "name":  "Dumbbell Bench Press",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02891201_Dumbbell_Bench_Press_Chest_FIX_6631926026.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02891201_Dumbbell_Bench_Press_Chest_FIX_b30bc5b3cb.png",
        "instructions":  [
                             "Lie on the bench with your feet flat on the floor",
                             "Hold the dumbbells and position your hands at shoulder width",
                             "Start with your elbows extended",
                             "Perform the movement by lowering the dumbbells until they approach your chest",
                             "Return in a controlled manner"
                         ],
        "importantTips":  [
                              "Avoid lifting your hips off the bench support",
                              "Keep your abdomen and glutes contracted",
                              "Avoid using momentum or sudden movements"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "npu5w4qva9vyth3ejgdrpnm3",
        "name":  "Elevação Pélvica no Banco",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/64641201_Bodyweight_Frog_Hip_Thrust_male_Hips_2d94ebc9d8.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/64641201_Bodyweight_Frog_Hip_Thrust_male_Hips_1d7dab1d7e.png",
        "instructions":  [
                             "Sente-se no chão com as suas costas encostadas no banco",
                             "Flexione os joelhos e coloque os pés um pouco à frente dos glúteos",
                             "Posicione suas mãos cruzadas na altura dos seus ombros",
                             "Mantenha seus glúteos e abdômen contraidos",
                             "Realize o movimento elevando seu quadril até que ele se alinhe com seu tronco"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Suba e desça de forma controlada utilizando seus glúteos e posteriores de coxa",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Banco Reto",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Glúteos"
                           ],
        "secondaryMuscles":  [
                                 "Posteriores"
                             ]
    },
    {
        "id":  "nyzzfflem6ld3mki2dfalt29",
        "name":  "Subida no Banco com Kettlebell",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/44401201_Kettlebell_Step_up_VERSION_2_Thighs_cbf7129c35.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/44401201_Kettlebell_Step_up_VERSION_2_Thighs_c5250ff2b6.png",
        "instructions":  [
                             "Segure os halteres e mantenha seus braços estendidos ao longo do corpo e próximo ao seu quadril",
                             "Seu tronco permanecerá ereto e você posionará um pé ao lado do outro",
                             "Avance com uma das pernas e apoie em cima do banco e em seguida suba, colocando os dois pés no banco",
                             "Em seguida, retorne a posição inicial e repita"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Evite jogar seu joelho da frente para dentro, mantenha o alinhamento com seu quadril",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Kettlebell",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "nz6jt5ys4cxk7at4763uhxlx",
        "name":  "Agachamento Hack Machine",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/07431201_Sled_Hack_Squat_Hips_39f1fcb230.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/07431201_Sled_Hack_Squat_Hips_84110347cf.png",
        "instructions":  [
                             "Posicione-se de pé no equipamento colocando seus ombros, quadril e tronco no apoio",
                             "Coloque seus pés no meio da plataforma e mantenha o alinhamento com o seu quadril",
                             "Flexione os quadris e joelhos até onde sua amplitude permitir",
                             "Retorne de forma controlada e repita"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar.",
                              "Mantenha seu quadril posicionado sem retirar o mesmo do encosto",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Hack Machine",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "o0kq0a704z9okmfo7cckiwnr",
        "name":  "Remada Curvada na Polia (Pegada Pronada)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/38591201_Cable_Bent_Over_Row_Back_87bed83236.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/38591201_Cable_Bent_Over_Row_Back_a61f5b2068.png",
        "instructions":  [
                             "Coloque-se de pé com os pés posicionados na linha dos quadris",
                             "Segure a barra mantendo seus cotovelos estendidos na direção do cabo e a palma das mãos para baixo",
                             "Incline seu tronco à frente",
                             "Realize o movimento puxando a barra para cima até que ela se aproxime do seu abdômen",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite balançar seu corpo para frente e para trás",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Trapézio"
                             ]
    },
    {
        "id":  "o998q3waebz6p0uo56qh84v0",
        "name":  "Tríceps mergulho no banco",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/0aea37dafa0bb925ab28755956b547fb.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/6620b450b952772b28393673718917fb.png",
        "instructions":  [
                             "Sente-se em um banco e coloque as mãos na borda próxima aos quadris",
                             "Afaste os pés, endireite as pernas e levante os quadris do banco enquanto segura o banco",
                             "Abaixe os quadris dobrando flexionando os cotovelos",
                             "Quando seus cotovelos formarem um ângulo de 90 graus, levante os quadris e repita"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar.",
                              "Mantenha as pernas retas e os calcanhares no chão.",
                              "Mantenha um padrão de respiração suave."
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "obub34y03f81b3phr9fvbfmq",
        "name":  "Abdução de Quadril em Pé",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/b30ad2b562fdd4dddce96d0cb9318df7.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/4393d55110e558c4fea5273d0c4961b7.png",
        "instructions":  [
                             "Posicione-se de pé com a faixa elástica ao redor dos joelhos",
                             "Apoie suas mãos no seu quadril",
                             "Posicione seus joelhos um ao lado do outro",
                             "Realize o movimento de afastar o joelho para o lado de forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha seu abdômen e glúteos contraidos",
                              "Tente manter seu tronco estabilizado",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Faixa elástica",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdutores"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "ojtfrtdjuox7dgobqqtanp66",
        "name":  "Cadeira Adutora",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05981201_Lever_Seated_Hip_Adduction_Thighs_1528b51657.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05981201_Lever_Seated_Hip_Adduction_Thighs_938b27b09c.png",
        "instructions":  [
                             "Sente-se no banco e posicione seu quadril e tronco encostados no apoio",
                             "Segure no suporte ao lado e estabilize seu tronco",
                             "Afaste os joelhos até onde for possível",
                             "Realize o movimento de abrir e fechar de forma controlada"
                         ],
        "importantTips":  [
                              "Evite descolar o quadril e tronco do encosto do banco",
                              "Evite fazer um afastamento dos joelhos maior do que você pode suportar",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Cadeira Adutora",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Adutores"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "oksn5jd3oy6upuza0jd1xe6k",
        "name":  "Machine lateral raise",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/65361201_Lever_Lateral_Raise_with_Chest_Support_male_Shoulders_92a1882ace.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/65361201_Lever_Lateral_Raise_with_Chest_Support_male_Shoulders_51df567247.png",
        "instructions":  [
                             "Sit on the bench with your feet and arms positioned on the support",
                             "Start with your elbows bent and close to your torso",
                             "Perform the movement by pushing the support upward until your elbows align with your shoulders",
                             "Return in a controlled manner"
                         ],
        "importantTips":  [
                              "Avoid excessively lifting your shoulders",
                              "Keep your torso upright with your abdomen contracted",
                              "Avoid using momentum or sudden movements"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina de Elevação Lateral de Ombros",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Trapézio"
                             ]
    },
    {
        "id":  "oofhq5mfi1rnnmgrbmq3pabv",
        "name":  "Voador Inclinado na Polia",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01711201_Cable_Incline_Fly_Chest_FIX_d7d9e2e2d6.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01711201_Cable_Incline_Fly_Chest_FIX_acd9089bb1.png",
        "instructions":  [
                             "Posicione o banco inclinado entre as polias",
                             "Deite-se com seus ombros um pouco acima da direção das polias e pegue um cabo de cada vez",
                             "Mantenha seus pés no chão, abdômen e glúteos contraídos",
                             "Inicie com os braços estendidos para o lado e na altura do seu tronco e realize o movimento",
                             "Quando seus braços se encontrarem na altura do seu peitoral, retorne de maneira controlada"
                         ],
        "importantTips":  [
                              "No movimento de retorno, evite passar seus braços demasiadamente da linha dos ombros",
                              "Mantenha seus cotovelos com uma leve flexão",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "opdblczkoi6mb266c1dsgsd2",
        "name":  "Remada Alta na Polia com Barra Reta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/3a14dcd98c4b0a6102a9e1231c80e618.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/1445ab323cdb6d8c50d478436f3aba22.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Inicie segurando a barra com as mãos posicionadas na linha dos ombros",
                             "Mantenha a barra próxima ao seu corpo e fique próximo da polia",
                             "Levante os cotovelos até eles se alinharem com seus ombros e desça de forma controlada"
                         ],
        "importantTips":  [
                              "A barra deverá permanecer mais baixa do que a altura dos ombros",
                              "Evite usar impulso ou movimentos bruscos",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Trapézio"
                             ]
    },
    {
        "id":  "oqqnv7xutdqsylu2ujbnakcl",
        "name":  "Levantamento Terra",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00321201_Barbell_Deadlift_360_degrees_Hips_7307ce0c71.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00321201_Barbell_Deadlift_360_degrees_Hips_acd9b57fa2.png",
        "instructions":  [
                             "Coloque-se de pé com os pés posicionados na linha dos quadris",
                             "Segure a barra posicionando as mãos na linha dos ombros",
                             "Mantenha seus glúteos e abdômen contraidos e o tronco reto",
                             "Realize o movimento descendo seu quadril, flexionando o seu joelho e com o tronco inclinado para frente"
                         ],
        "importantTips":  [
                              "Desça com a barra próxima a sua coxa, joelho e canela",
                              "Faça o movimento até onde a sua mobilidade e flexibilidade permitir",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Posteriores"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "ot3b4lzg9eft4b8ggg493z96",
        "name":  "Flexão de punho com Barra W",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/55791201_EZ_Bar_Seated_Wrist_Curl_Forearms_FIX_87cfb57c3a.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/55791201_EZ_Bar_Seated_Wrist_Curl_Forearms_FIX_05516af30a.png",
        "instructions":  [
                             "Inicie sentado em um banco com o tronco inclinado à frente",
                             "Posicine seus braços em cima das suas pernas e segure a barra com a palma das mãos virada para cima",
                             "Realize o movimento de flexão do punho de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Não descole seu antebraço do banco",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra W",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Antebraços"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "p00gkhkvrnwz89z6umr8on5w",
        "name":  "Agachamento Sumô com Kettlebell no Step",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/53051201_Kettlebell_Sumo_Squat_off_Stepbox_male_Hips_d02372ec6e.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/53051201_Kettlebell_Sumo_Squat_off_Stepbox_male_Hips_ddca9f4f46.png",
        "instructions":  [
                             "Segure o Kettlebell com as duas mãos com os braços esticados para baixo",
                             "Seu tronco permanecerá ereto e você posionará os pés afastados, cada pé em um step e a ponta dos pés rodadas para fora",
                             "Flexione seus quadris e seus joelhos e desça até onde for possível, mantendo seus pés posicionados no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Evite jogar seu joelho da frente para dentro, mantenha o alinhamento com seu quadril",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Kettlebell",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos",
                                 "Adutores"
                             ]
    },
    {
        "id":  "pj1pf543363w3tb06ignlsse",
        "name":  "Supino Reto na Polia",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01511201_Cable_Bench_Press_Chest_FIX_7b43c51e8d.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01511201_Cable_Bench_Press_Chest_FIX_563d22bed3.png",
        "instructions":  [
                             "Posicione um banco entre as polias",
                             "Deite-se com seus ombros um pouco abaixo da direção das polias e pegue um cabo de cada vez",
                             "Mantenha seus pés no chão, abdômen e glúteos contraídos",
                             "Inicie com os cotovelos flexionados realize o movimento",
                             "Quando seus cotovelos se encontrarem totalmente estendidos para cima, retorne de maneira controlada"
                         ],
        "importantTips":  [
                              "No movimento de retorno, evite passar seus braços demasiadamente da linha dos ombros",
                              "Mantenha seus cotovelos com uma leve flexão",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "pldsngmhofvjmcqfszk87pfu",
        "name":  "Abdominal Supra no Solo",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02741201_Crunch_Floor_male_waist_90f5d6eaac.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02741201_Crunch_Floor_male_waist_925246eba2.png",
        "instructions":  [
                             "Deite-se no chão com os joelhos flexionados e os pés um pouco à frente dos glúteos",
                             "Posicione suas mãos atrás da sua cabeça",
                             "Flexione seu tronco contraindo seu abdomên e retorne de maneira controlada"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento somente com seu pescoço, utilize a flexão do tronco",
                              "Mantenha seus pés fixos no solo",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "pmf9ps7r58z6kblfimlig4e2",
        "name":  "Abdominal Twist com halter",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/72451201_Dumbbell_Russian_Twist_Boat_Row_male_Waist_f3d53e28fd.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/72451201_Dumbbell_Russian_Twist_Boat_Row_male_Waist_a88d5a6238.png",
        "instructions":  [
                             "Deite-se no chão com os joelhos flexionados e os pés um pouco à frente dos glúteos",
                             "Segure o halter com as duas mãos posicionado em seu tórax",
                             "Flexione o seu tronco um pouco acima da linha dos seus joelhos",
                             "Realize o movimento de rotação do tronco de forma controlada"
                         ],
        "importantTips":  [
                              "Evite movimento de subir e descer o tronco",
                              "Mantenha seu abdomên contraido e os pés fixos no chão",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Oblíquos"
                           ],
        "secondaryMuscles":  [
                                 "Abdômen "
                             ]
    },
    {
        "id":  "puaxoi7490olzuehdwlc41f1",
        "name":  "Rosca Scott com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/04021201_Dumbbell_Seated_Preacher_Curl_Upper_Arms_FIX_835e5e70c6.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/04021201_Dumbbell_Seated_Preacher_Curl_Upper_Arms_FIX_9c0a33ca93.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Estabilize seus ombros",
                             "Flexione o cotovelo completamente",
                             "Desça o antebraço de forma controlada"
                         ],
        "importantTips":  [
                              "Evite usar impulso ou movimentos bruscos",
                              "Evite projetar seu ombro para frente",
                              "Não deixe que seu braço perca contato com o apoio"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Banco Scott",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "puw9yyw20ug5zpdi261q2uw1",
        "name":  "Desenvolvimento sentado com Barra Reta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/04041201_Dumbbell_Seated_Shoulder_Press_parallel_grip_Sho_8a6cc3208e.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/04041201_Dumbbell_Seated_Shoulder_Press_parallel_grip_Sho_375682cb03.png",
        "instructions":  [
                             "Fique sentado com a barra na altura do peitoral e o cotovelo levemente abaixo da linha dos ombros",
                             "Eleve a barra para cima até realizar a extensão completa dos cotovelos",
                             "Contraia seu abdomên e glúteos para estabilizar seu tronco",
                             "Realize o movimento de subida e descida de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Evite movimentar seus ombros para frente",
                              "Não descole seu quadril e tronco do apoio do banco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Trapézio"
                             ]
    },
    {
        "id":  "py1f9c2sdtnpea72lt1nxr8q",
        "name":  "Polichinelo",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/dffeb8426a43532af1beee51dede2f02.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/3d73d2f286c800d7496ed92f32c3fec9.png",
        "instructions":  [
                             "Fique em pé, com os pés juntos, mantenha os braços estendidos ao lado do corpo, coluna ereta e olhar para frente",
                             "Salte levemente abrindo as pernas lateralmente até a largura dos ombros (ou um pouco mais)",
                             "Simultaneamente, eleve os braços pelas laterais até que as mãos se encontrem acima da cabeça",
                             "Salte novamente, retornando os pés para a posição inicial (juntos) e ao mesmo tempo, desça os braços pelas laterais até a posição inicial, ao lado do corpo e repita"
                         ],
        "importantTips":  [
                              "Faça em um ritmo controlado no início e aumente a velocidade conforme o condicionamento",
                              "Mantenha o abdômen ativado para ajudar na estabilização",
                              "Toque levemente o solo com os pés ao saltar, evitando impactos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdutores"
                           ],
        "secondaryMuscles":  [
                                 "Panturrilhas",
                                 "Glúteos",
                                 "Ombros",
                                 "Quadríceps",
                                 "Adutores"
                             ]
    },
    {
        "id":  "q1ztydmbph5ui3x155lhwwkv",
        "name":  "Elevação pélvica no Solo com Mini Band",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/21541201_Resistance_Band_Glute_Bridge_Hips_15eb5ec7b9.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/21541201_Resistance_Band_Glute_Bridge_Hips_a45ded1a1f.png",
        "instructions":  [
                             "Deite-se no chão com a faixa elástica ao redor dos joelhos",
                             "Flexione os joelhos e coloque os pés um pouco à frente dos glúteos",
                             "Mantenha seus glúteos e abdômen contraidos",
                             "Realize o movimento elevando seu quadril até que ele se alinhe com seu tronco"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Suba e desça de forma controlada utilizando seus glúteos e posteriores de coxa",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Faixa elástica",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Glúteos"
                           ],
        "secondaryMuscles":  [
                                 "Posteriores",
                                 "Abdutores"
                             ]
    },
    {
        "id":  "qebasqpybu3a4z9z5uvu4y3i",
        "name":  "Agachamento Frontal com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/29661201_Dumbbell_Front_Squat_Thighs_FIX_18d96ec04e.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/29661201_Dumbbell_Front_Squat_Thighs_FIX_dd1e744a5d.png",
        "instructions":  [
                             "Posicione os halteres na região da frente dos seus deltóides",
                             "Mantenha seus cotovelos altos",
                             "Seu tronco permanecerá ereto e seus pés ficarão numa posição confortável, alinhados com seus quadris ou um pouco mais afastados",
                             "De forma controlada, flexione seu quadril e seus joelhos e desça até onde for possível, mantendo seus pés posicionados no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Mantenha os pés totalmente no chão durante todo a execução",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "qoqnlgalhpz2de28xolzc3gq",
        "name":  "Cadeira Extensora Unilateral",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/86f8aaa5e9b8ffe19816292c19bf20c6.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/2dc25f9690f7ce292c97568e5b4a6e74.png",
        "instructions":  [
                             "Sente-se em um banco e coloque seu tronco no encosto da cadeira",
                             "Posicione suas mãos no apoio ao lado dos seus quadris",
                             "Faça o movimento de extensão do seu joelho somente com uma das pernas",
                             "Quando seu joelho estiver completamente estendido, retorne de maneira controlada"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar.",
                              "Evite fazer chutes, controle o equipamento subindo e descendo a sua perna",
                              "Mantenha um padrão de respiração suave"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Cadeira Extensora",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "qppop2ra1ynhotgwzmuieak4",
        "name":  "Flexão de Joelho em Pé",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/fe903b54d5b0399acf3dde0dd16e2eca.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/a188bfe9324da2a2d344af8bdaede5eb.png",
        "instructions":  [
                             "Posicione seus cotovelos no apoio e mantenha seu tronco ereto",
                             "Coloque um joelho no apoio e o calcanhar contrário no suporte",
                             "Mantenha seus glúteos e abdômen contraidos",
                             "Realize o movimento flexionando seu joelho e retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Suba e desça de forma controlada utilizando seus posteriores de coxa",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina Flexora",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Posteriores"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "qx9co8agc9rdwv7anltnn762",
        "name":  "Tríceps Testa na Polia com corda",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01941201_Cable_Overhead_Triceps_Extension_rope_attachment_Upper_Arms_FIX_e625d8c207.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01941201_Cable_Overhead_Triceps_Extension_rope_attachment_Upper_Arms_FIX_4f993ec4f4.png",
        "instructions":  [
                             "Inicialmente, incline-se para frente e coloque seus braços acima da cabeça alinhados com a orelha",
                             "Utilize a pegada pronada (palma das mãos para cima)",
                             "Inicie o movimento com os cotovelos dobrados",
                             "Realize o movimento de forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha seus ombros e braços estabilizados durante o movimento",
                              "Evite usar impulso ou movimentos bruscos",
                              "Permaneça com o alinhamento dos cotovelos em relação as orelhas"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "qzgjt9kd2rp6g00asrkk9ha4",
        "name":  "Tríceps Francês com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/04301201_Dumbbell_Standing_Triceps_Extension_Upper_Arms_FIX_1f078672c9.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/04301201_Dumbbell_Standing_Triceps_Extension_Upper_Arms_FIX_b10562eb3d.png",
        "instructions":  [
                             "Inicialmente, em pé, coloque seus braços acima da cabeça alinhados com a orelha",
                             "Segure o halter com as duas mãos e olhe para frente",
                             "Inicie o movimento com os cotovelos dobrados e halter atrás da cabeça",
                             "Realize o movimento de extensão dos cotovelos forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha seus ombros e braços estabilizados durante o movimento",
                              "Evite usar impulso ou movimentos bruscos",
                              "Mantenha seu tronco estabilizado durante os movimentos",
                              "Permaneça com o alinhamento dos cotovelos em relação as orelhas"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "re4hbd097wvdllmea9751br5",
        "name":  "Flexão de Braço Declinada",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02791201_Decline_Push_Up_Chest_FIX_f1377e36c8.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02791201_Decline_Push_Up_Chest_FIX_510fa70a47.png",
        "instructions":  [
                             "Apoie suas mãos no banco e posicione-as na linha dos ombros",
                             "Coloque seus pés em cima de um banco",
                             "Mantenha seu corpo totalmente estendido",
                             "Realize o movimento flexionando os cotovelos até que seu peitoral se aproxime da caixa"
                         ],
        "importantTips":  [
                              "Evite desalinhar seu quadril em relação ao seu tronco",
                              "Evite flexionar seus joelhos",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "rih0md4svcr1limyig63zobl",
        "name":  "Reverse machine fly",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/06021201_Lever_Seated_Reverse_Fly_Shoulders_FIX_9d0a7705f3.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/06021201_Lever_Seated_Reverse_Fly_Shoulders_FIX_6a14f095ae.png",
        "instructions":  [
                             "In the starting position, adjust the bench to a height where your shoulders align with the hand position on the machine",
                             "Your chest should be fully pressed against the support",
                             "Arms extended forward with palms facing down",
                             "Perform the movement until your arms align with your torso, then return in a controlled manner"
                         ],
        "importantTips":  [
                              "Avoid turning your neck to the sides",
                              "Avoid using momentum or sudden movements",
                              "Do not lift your chest off the bench support"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Peck deck (Voador)",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Costas",
                                 "Trapézio"
                             ]
    },
    {
        "id":  "rlv47v775816scjg0rpujkxl",
        "name":  "Perdigueiro",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/c2ca84a24cb0becca2d7aeac07cdf1ff.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/81150cc727241fdc1c37600d2e6e1bab.png",
        "instructions":  [
                             "Posicione-se com os dois joelhos e a palma das mãos apoiadas no chão, ou seja, posição de 4 apoios",
                             "Mantenha cervical, tronco e quadril alinhados",
                             "Realize o movimento estendendo sua perna para trás e o braço contrário para frente",
                             "Ao final do movimento, permaneça com o alinhamento de ombros, tronco e quadris",
                             "Realize o movimento de de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Evite elevar demais os braços e pernas",
                              "Não movimente demasiadamente seu tronco e quadril"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "rnobpj7gah9hftnmp2ij7uvk",
        "name":  "Pike Push Up",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/29211201_Pike_Push_up_Chest_09e850ec20.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/29211201_Pike_Push_up_Chest_2bfa551d55.png",
        "instructions":  [
                             "Comece em uma posição de prancha alta, com as mãos no chão alinhadas aos ombros e os braços estendidos.",
                             "Os pés ficam afastados na largura dos ombros e as mãos também e calcanhares levemente fora do chão",
                             "A partir daí, eleve os quadris para o alto, formando um “V” invertido com o corpo",
                             "Flexione os cotovelos lentamente, levando o topo da cabeça em direção ao chão, entre as mãos e tente chegar próximo ao solo",
                             "Empurre o chão com força pelas mãos, estendendo os cotovelos e voltando à posição de “V” invertido"
                         ],
        "importantTips":  [
                              "Mantenha o quadril alto durante todo o movimento",
                              "Evite flexionar o pescoço excessivamente",
                              "Faça o movimento na amplitude que suas articulações permitam"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Peito"
                             ]
    },
    {
        "id":  "rq9lsehw3rso8bps6lgef9ar",
        "name":  "Crucifixo Peitoral com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03081201_Dumbbell_Fly_Chest_FIX_2_6530463990.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03081201_Dumbbell_Fly_Chest_FIX_2_89adc94bfb.png",
        "instructions":  [
                             "Deite-se no banco com os pés no chão",
                             "Segure os halteres e posicione suas mãos na linha dos ombros",
                             "Inicie com os cotovelos estendidos para cima",
                             "Realize o movimento descendo os halteres para o lado até a linha do tronco",
                             "Realize o movimento de descida e subida de forma controlada"
                         ],
        "importantTips":  [
                              "Realize o movimento na amplitude que a sua flexibilidade permitir",
                              "Mantenha seu abdômen contraído",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "rqq6wtb7l04imyiq09wr8ia8",
        "name":  "Tríceps Testa com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03511201_Dumbbell_Lying_Triceps_Extension_Upper_Arms_FIX_1ec6497e23.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03511201_Dumbbell_Lying_Triceps_Extension_Upper_Arms_FIX_b8f6c4fd7c.png",
        "instructions":  [
                             "Deite no banco e posicione os pés no chão",
                             "Segure os halteres com seus braços alinhados com o ombro",
                             "Realize o movimento de flexão do cotovelo forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha seus ombros e braços estabilizados durante o movimento",
                              "Evite usar impulso ou movimentos bruscos",
                              "Permaneça com o alinhamento dos cotovelos em relação aos ombros"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "rs7l1ii3qnuz3obces2wdqvk",
        "name":  "Flexão de punho com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/59191201_Dumbbell_Srtict_Curl_Upper_Arms_07b9131f22.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/59191201_Dumbbell_Srtict_Curl_Upper_Arms_5992e6cffd.png",
        "instructions":  [
                             "Inicie sentado em um banco com o tronco inclinado à frente",
                             "Posicine seu punho na borda do banco e segure os halteres com a palma das mãos virada para cima",
                             "Primeiramente extenda seu punho e depois realize o movimento de flexão de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Não descole seu antebraço do banco",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Antebraços"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "rvgz8vizcv5kgojjz3nz5vh8",
        "name":  "Flexão de punho Unilateral com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03641201_Dumbbell_One_arm_Wrist_Curl_Forearm_c40820bb12.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03641201_Dumbbell_One_arm_Wrist_Curl_Forearm_d9c93361dd.png",
        "instructions":  [
                             "Inicie sentado em um banco com o tronco inclinado à frente",
                             "Posicine um de seus braços em cima da sua perna e segure o halter com a palma das mãos virada para cima",
                             "Realize o movimento de flexão do punho de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Não descole seu antebraço da sua perna",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Antebraços"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "s4excq6ucxe50g4w1ns0pnse",
        "name":  "Crucifixo Inverso Curvado com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/37991201_Dumbbell_Bent_Over_Reverse_Row_Back_1e6e78963a.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/37991201_Dumbbell_Bent_Over_Reverse_Row_Back_1db75cae9a.png",
        "instructions":  [
                             "Na posição inicial, mantenha o tronco curvado paralelo ao solo",
                             "Posicione seus braços alinhados com seus ombros segurando os halteres",
                             "Levante os braços para o lado até que seus cotovelos se alinhem com seu tronco",
                             "Desça seus braços de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos com seus braços e tronco",
                              "Não curve seu tronco",
                              "Não deixe que seu tronco desça mais do que o necessário"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Trapézio"
                             ]
    },
    {
        "id":  "s7k2ya2co13b9foblcfgff7e",
        "name":  "Alongamento de Flexores de Quadril Ajoelhado",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/10531201_Kneeling_Hip_Flexor_Stretch_Hips_5f14d44702.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/10531201_Kneeling_Hip_Flexor_Stretch_Hips_14ff442d5d.png",
        "instructions":  [
                             "Coloque um joelho no chão e o pé do outro lado na frente, formando um ângulo de 90 graus com os dois lados",
                             "Apoie suas mãos na altura dos seus quadris",
                             "Avance com seu quadril à frente, fazendo com que seu joelho da frente também vá na mesma direção",
                             "Mantenha-se nessa posição alongando o quadril da perna de trás e depois repita"
                         ],
        "importantTips":  [
                              "Mantenha o tronco ereto em todo o momento",
                              "Não faça força com seu joelho da frente, movimente pelo seu quadril",
                              "Faça o movimento até a amplitude que for possível"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Panturrilhas"
                             ]
    },
    {
        "id":  "s887b5ouw24vpgzuzqdpvv47",
        "name":  "Rosca Concentrada",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02971201_Dumbbell_Concentration_Curl_Upper_Arms_FIX_acfd942ac1.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02971201_Dumbbell_Concentration_Curl_Upper_Arms_FIX_bc75f48631.png",
        "instructions":  [
                             "Posicione seu braço na sua coxa próximo a parte medial do seu joelho",
                             "Flexione seu cotovelo completamente",
                             "Mantenha seu tronco estabilizado",
                             "Desça o antebraço de forma controlada"
                         ],
        "importantTips":  [
                              "Não deixe seu braço perder contato com a sua coxa",
                              "Não projete seu tronco para trás",
                              "Evite usar impulso ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "sa5c77nynhke4dkk7vajsd55",
        "name":  "Extensão de Quadril em Pé",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/4db219c5dd41d1830265d0934c2fd193.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/19911d6102826433a7dd2af964d0d193.png",
        "instructions":  [
                             "Posicione-se de pé com a faixa elástica ao redor dos tornozelos",
                             "Mantenha seus glúteos e abdômen contraidos e o tronco reto",
                             "Realize o movimento elevando sua perna para trás"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Suba e desça de forma controlada utilizando seus glúteos e posteriores de coxa",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Faixa elástica",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Glúteos"
                           ],
        "secondaryMuscles":  [
                                 "Posteriores"
                             ]
    },
    {
        "id":  "sin0qtzoe6a3rd34x3r8vxba",
        "name":  "Crucifixo Peitoral Máquina",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05961201_Lever_Seated_Fly_Chest_FIX_c7be0b605b.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05961201_Lever_Seated_Fly_Chest_FIX_2367028778.png",
        "instructions":  [
                             "Sente-se no banco com os pés no chão",
                             "Segure os halteres e posicione suas mãos na linha dos ombros",
                             "Inicie com os cotovelos estendidos para cima",
                             "Realize o movimento descendo os halteres para o lado até a linha do tronco",
                             "Realize o movimento de descida e subida de forma controlada"
                         ],
        "importantTips":  [
                              "Evite projetar seus ombros excessivamente para frente",
                              "Mantenha seu abdômen contraído e seu tronco estabilizado",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Peck deck (Voador)",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "sl8bqqvb0uowoh2j7ms717le",
        "name":  "Avanço com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/7fa767446f81bfc0c1ba144b2fc876bd.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/3e098f8e802e902597cf28b12ed86889.png",
        "instructions":  [
                             "Segure os halteres na direção dos seus ombros e ao lado dos seu quadril",
                             "Seu tronco permanecerá ereto e você posionará um pé ao lado do outro",
                             "Avance uma das pernas à frente e em seguida flexione seus quadris e seus joelhos e desça até onde for possível, mantendo seu pé da frente posicionado no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos e alinhando seus pés lado a lado"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Evite jogar seu joelho da frente para dentro, mantenha o alinhamento com seu quadril",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "swqshxw8lmf7t829q91haz8m",
        "name":  "Abdominal com Rodinha",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/08571201_Wheel_Rollout_Waist_FIX_2_92c90b6bc3.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/08571201_Wheel_Rollout_Waist_FIX_2_bde3d7bf02.png",
        "instructions":  [
                             "Posicione seus joelhos no chão",
                             "Segure a rodinha dos dois lados e mantenha a mesma no chão",
                             "Realize o movimento completo mantendo o alinhamento de todo o seu corpo"
                         ],
        "importantTips":  [
                              "Mantenha seus ombros, tronco e quadril totalmente alinhados ao final do movimento",
                              "Evite realizar movimentos excessivos com a sua coluna lombar",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Rodinha Abdominal",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "sx75kqz4fjrk8wtha4wmjz7m",
        "name":  "Agachamento livre com Mini Band",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/680c0f18cd663a25b1c8e449d5c8b5be.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/1ddde1fa7b144b68f0c4f24c8509baf4.png",
        "instructions":  [
                             "Posicione a faixa elástica ao redor das suas pernas um pouco acima dos seus joelhos",
                             "Mantenha seus braços cruzados eu seu peito ou na cintura",
                             "Seu tronco permanecerá ereto e seus pés ficarão numa posição confortável, alinhados com seus quadris ou um pouco mais afastados",
                             "De forma controlada, flexione seu quadril e seus joelhos e desça até onde for possível, mantendo seus pés posicionados no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Mantenha os pés totalmente no chão durante todo a execução",
                              "Evite que seus joelhos se desloquem para dentro e mantenha a tensão da faixa elástica",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Faixa elástica",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "t4ui9ikigdiid5mfidhv9mjg",
        "name":  "Flexão de Braço Fechada",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02591201_Close_Grip_Push_up_Upper_Arms_FIX_c9758a684a.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02591201_Close_Grip_Push_up_Upper_Arms_FIX_c87f424f75.png",
        "instructions":  [
                             "Apoie suas mãos no chão e posicione-as um pouco além da linha dos ombros",
                             "Mantenha seu corpo totalmente estendido",
                             "Realize o movimento flexionando os cotovelos próximos ao seu tronco até que seu peitoral se aproxime do chão"
                         ],
        "importantTips":  [
                              "Evite desalinhar seu quadril em relação ao seu tronco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "t52flu8gd3cpckssnivr7uxc",
        "name":  "Subida no Banco com Barra Reta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01141201_Barbell_Step_up_Hips_FIX_4237c8065b.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01141201_Barbell_Step_up_Hips_FIX_2f1977ee00.png",
        "instructions":  [
                             "Coloque a barra sobre os seus trapézios e mantenha suas mãos segurando a barra",
                             "Seu tronco permanecerá ereto e você posionará um pé ao lado do outro",
                             "Mantenha um dos pés em cima do banco, suba e eleve o joelho do membro oposto",
                             "Em seguida, retorne a posição inicial de maneira controlada e repita"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Evite jogar seu joelho da frente para dentro, mantenha o alinhamento com seu quadril",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "td9uhxqzynn138bpp3u5ydh0",
        "name":  "Elevação Lateral unilateral na Polia",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01921201_Cable_One_Arm_Lateral_Raise_Shoulders_ca7e0dc118.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01921201_Cable_One_Arm_Lateral_Raise_Shoulders_0b20f231c4.png",
        "instructions":  [
                             "Fique de pé ao lado da polia e pegue o cabo com a mão mais distante e inicie com o cabo um pouco à frente do seu quadril",
                             "Contraia seu abdomên e glúteos para estabilizar seu tronco",
                             "Eleve o cabo para cima até que ele fique alinhados com o seu ombro",
                             "Permaneça com uma leve flexão dos cotovelos",
                             "Realize o movimento de subida e descida de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Evite ultrapassar demasiadamente as mãos da linha dos ombros",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Crossover",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Trapézio"
                             ]
    },
    {
        "id":  "tipvu5fqwgqfhvy87bqh54yy",
        "name":  "Crucifixo Deitado na Polia",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01851201_Cable_Lying_Fly_Chest_FIX_18b314d442.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01851201_Cable_Lying_Fly_Chest_FIX_23165e048b.png",
        "instructions":  [
                             "Posicione um banco entre as polias",
                             "Deite-se com seus ombros um pouco abaixo da direção das polias e pegue um cabo de cada vez",
                             "Mantenha seus pés no chão, abdômen e glúteos contraídos",
                             "Inicie com os braços estendidos para o lado e na altura do seu tronco e realize o movimento",
                             "Quando seus braços se encontrarem na altura do seu peitoral, retorne de maneira controlada"
                         ],
        "importantTips":  [
                              "No movimento de retorno, evite passar seus braços demasiadamente da linha dos ombros",
                              "Mantenha seus cotovelos com uma leve flexão",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "tph6rsf186l7ef3ccaov04g0",
        "name":  "Rosca bíceps alternada com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/11961201_Dumbbell_Alternate_Biceps_Curl_Upper_Arms_79f8e80ea3.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/11961201_Dumbbell_Alternate_Biceps_Curl_Upper_Arms_020559599e.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Contraia o abdomên e glúteos",
                             "Cotovelo alinhado com o tronco durante o movimento",
                             "Flexione o cotovelo completamente",
                             "Desça o antebraço de forma controlada"
                         ],
        "importantTips":  [
                              "Não balance seu cotovelo para frente durante o movimento",
                              "Não flexione o tronco lateralmente",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "tpyl3km2eslsmgtmu0e2y8vw",
        "name":  "Paralelas",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02511201_Chest_Dip_Chest_eb2502d855.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02511201_Chest_Dip_Chest_0a9d2739c6.png",
        "instructions":  [
                             "Posicione no equipamento com as mãos no apoio, cotovelos e todo seu corpo estendido",
                             "Retirando o apoio dos pés, inicie o movimento",
                             "Realize o movimento primeiramente flexionando seus cotovelos e inclinando levamente seu tronco à frente",
                             "Após chegar a 90 graus de flexão do cotovelo, faça a extensão de forma controlada"
                         ],
        "importantTips":  [
                              "Evite inclinar excessivamente seu tronco para frente",
                              "Mantenha seu abdômen contraídos e estabilize seu quadril",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Barra Fixa e Paralelas",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "tqdimjhy9bvar5oje3hmz1g0",
        "name":  "Rosca bíceps com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02941201_Dumbbell_Biceps_Curl_Upper_Arms_69aee1fec5.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02941201_Dumbbell_Biceps_Curl_Upper_Arms_b96c094510.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Cotovelo alinhado com o tronco durante o movimento",
                             "Flexione o cotovelo completamente",
                             "Desça o antebraço de forma controlada"
                         ],
        "importantTips":  [
                              "Não balance seu cotovelo para frente durante o movimento",
                              "Evite que seu cotovelo fique a frente do tronco",
                              "Não flexione o tronco lateralmente",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "trnejf46mdhfytf2whlimhgg",
        "name":  "Prancha Frontal",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/f3e04e1706a3aa57732deae007fc8d0f.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/6a08aebc6d78d58447fbb478105f6eb1.png",
        "instructions":  [
                             "Posicione-se no chão com os joelhos estendidos e cotovelos no chão alinhados com os ombros",
                             "Coloque seus pés afastados e na direção dos quadris",
                             "Mantenha seus joelhos, quadris e tronco totalmente alinhados",
                             "Contraia seu abdomên, glúteos e musculaturas das escápulas"
                         ],
        "importantTips":  [
                              "Evite movimento de subir e descer o tronco",
                              "Evite que seu quadril desça",
                              "Não coloque os cotovelos à frente ou atrás da linha dos ombros"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "u2jow383qjyzdi64rexuojnh",
        "name":  "Montanhista",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/06301201_Mountain_Climber_Cardio_FIX_8960689274.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/06301201_Mountain_Climber_Cardio_FIX_9f38232fe3.png",
        "instructions":  [
                             "Comece em uma posição de prancha, com as mãos apoiadas no chão, alinhadas com os ombros",
                             "Contraia o abdômen e mantenha os músculos abdominais e glúteos firmes durante todo o movimento",
                             "Comece a mover uma perna de cada vez trazendo o joelho em direção ao peito o mais rápido possível"
                         ],
        "importantTips":  [
                              "Permanceça com seu tronco e ombro parados e realize somente os momentos com os membros inferiores",
                              "Mantenha seu abdômen e glúteo contraídos e faça a manutenção da postura do tronco",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "u9qr00jq07ptjxy9op98wqbc",
        "name":  "Tríceps na Polia com Corda",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/5d6dbed84123dadb20261e662da42a1f.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/ac213d0a01226ccc8656f06926da0f1d.png",
        "instructions":  [
                             "Inicialmente, segure a barra e coloque seus braços juntos ao seu tronco",
                             "Estabilize seu tronco e ombros",
                             "Utilize a pegada supinada (palma das mãos para baixo)",
                             "Realize o movimento de extensão dos cotovelos de forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha seus ombros e braços estabilizados durante o movimento",
                              "Evite usar impulso ou movimentos bruscos",
                              "Permaneça com o alinhamento dos cotovelos em relação ao tronco"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "ub9mnd6xlu4bmi7m3ekqmgnh",
        "name":  "Flexão de Braço com Rotação de tronco",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/e336bfec73a9ee58ac7815a9c42a9afc.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/5161e4e933ea0d07c7e9a91aac1eaa3a.png",
        "instructions":  [
                             "Apoie suas mãos no chão e posicione-as na linha dos ombros",
                             "Mantenha seu corpo totalmente estendido",
                             "Realize o movimento flexionando os cotovelos até que seu peitoral se aproxime do chão",
                             "Empurre o chão e ao retornar a posição inicial, faça uma rotação de tronco"
                         ],
        "importantTips":  [
                              "Evite desalinhar seu quadril em relação ao seu tronco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros",
                                 "Abdômen "
                             ]
    },
    {
        "id":  "ufritwpl2jiazz4hvyyct20j",
        "name":  "Remada Curvada (Pegada Pronada)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00271201_Barbell_Bent_Over_Row_Back_faba5cec13.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00271201_Barbell_Bent_Over_Row_Back_bd8d8588bd.png",
        "instructions":  [
                             "Coloque-se de pé com os pés posicionados na linha dos quadris",
                             "Segure a barra posicionando as mãos na linha dos ombros e palma das mãos viradas para trás",
                             "Incline seu tronco à frente mantendo a barra na mesma direção",
                             "Realize o movimento puxando a barra para cima até que ela se aproxime do seu abdômen",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite balançar seu corpo para frente e para trás",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "uh56xt8u7wu0wq1muvc94m4y",
        "name":  "Pallof Press",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/e0018d9e15ebc058a1f406911d2423b6.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/57ac9634c386edf573087af91f622861.png",
        "instructions":  [
                             "Posicione a polia do crossover na altura do seu peito e fique de lado em relação a máquina,",
                             "Segure a alça com ambas as mãos, mantendo-a próxima ao centro do peito e pés afastados na largura dos ombros",
                             "Empurre lentamente a alça para frente, estendendo os braços à frente do corpo",
                             "Mantenha os braços estendidos por um tempo e traga as mãos de volta ao peito com controle, sem deixar o tronco girar"
                         ],
        "importantTips":  [
                              "Mantenha o quadril e ombros alinhados durante toda a execução",
                              "Expire ao empurrar, inspire ao retornar",
                              "Evite girar o tronco"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [
                                 "Oblíquos"
                             ]
    },
    {
        "id":  "ui1g60u4uui2eoajm1tmhelu",
        "name":  "Abdominal Infra Suspenso com Joelhos Flexionados",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/98191201_Hanging_Knee_Raise_male_Waist_ca82a972c5.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/98191201_Hanging_Knee_Raise_male_Waist_8bd12631ee.png",
        "instructions":  [
                             "Fique suspenso segurando na barra fixa com a palma das mãos para frente",
                             "Mantenha seu corpo totalmente estendido",
                             "Eleve as pernas com os joelhos flexionados até que seus joelhos ultrapassem levemente a linha do quadril",
                             "Realize o movimento de retorno de maneira controlada"
                         ],
        "importantTips":  [
                              "Mantenha seu corpo totalmente estendido durante o movimento de retorno",
                              "Evite realizar movimentos excessivos com a sua coluna lombar",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Barra fixa",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "ujc3n8499vg54oaeonzjf1lw",
        "name":  "Desenvolvimento ajoelhado unilateral com Base Alternada",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/29341201_Kettlebell_Half_Kneeling_Shoulder_Press_Shoulders_6684450d59.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/29341201_Kettlebell_Half_Kneeling_Shoulder_Press_Shoulders_0cf6a23989.png",
        "instructions":  [
                             "Inicie com um joelho no chão e o pé contrário à frente",
                             "Posicione o Kettlebell na mão do mesmo lado em que o joelho está apoiado no chão",
                             "Segure o Kettlebell próximo ao seu ombro",
                             "Eleve seu braço até que ele fique totalmente estendido para cima",
                             "Realize o movimento de subida e descida de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Evite flexionar lateralmente seu tronco",
                              "Não levante seus ombros"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Kettlebell",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Trapézio"
                             ]
    },
    {
        "id":  "ulg76dkp4pn89v2prlfykkyk",
        "name":  "Leg Press 45",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/52c5b060dbe2983b536bf99c0929bbc7.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/705789fdb5716e7258d09a1264094d73.png",
        "instructions":  [
                             "Sente-se no equipamento posicionando seu quadril e tronco no apoio",
                             "Coloque seus pés no meio da plataforma e mantenha o alinhamento com o seu quadril",
                             "Flexione os quadris e joelhos até onde sua amplitude permitir",
                             "Retorne de forma controlada e repita"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar.",
                              "Mantenha seu quadril posicionado sem retirar o mesmo do encosto",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Leg Press 45",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos",
                                 "Posteriores"
                             ]
    },
    {
        "id":  "uo136a958j1vwwzay41pxjvd",
        "name":  "Ostra",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/21501201_Resistance_Band_Clam_Hips_bb864c337f.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/21501201_Resistance_Band_Clam_Hips_953e562c40.png",
        "instructions":  [
                             "Deite-se lateralmente e posicione seu joelhos flexionados e um pouco à frente do seu corpo",
                             "Coloque a faixa elástica na linha dos seus joelhos ou um pouco acima",
                             "Mantenha seu quadril e lombar estabilizados",
                             "Realize o movimento de abrir e fechar de forma controlada"
                         ],
        "importantTips":  [
                              "Evite movimentar sua lombar",
                              "Evite fazer um afastamento dos joelhos além do que a sua articulação permite",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Faixa elástica",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdutores"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "usu6hflj7t0a49xip2fw7s56",
        "name":  "Elevação Pélvica unilateral no Banco",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/20711201_Single_Leg_Hip_Thrusts_Hips_5c04e7172e.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/20711201_Single_Leg_Hip_Thrusts_Hips_77df5a0165.png",
        "instructions":  [
                             "Sente-se no chão com as suas costas encostadas no banco",
                             "Flexione os joelhos e coloque os pés um pouco à frente dos glúteos",
                             "Retire um dos pés do chão e mantenha seus braços estendidos em cima do banco",
                             "Mantenha seus glúteos e abdômen contraidos",
                             "Realize o movimento elevando seu quadril até que ele se alinhe com seu tronco"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Suba e desça de forma controlada utilizando seus glúteos e posteriores de coxa",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Banco Reto",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Glúteos"
                           ],
        "secondaryMuscles":  [
                                 "Posteriores"
                             ]
    },
    {
        "id":  "ux44p8klipu29xpy9d6y0dyj",
        "name":  "Supino Reto com Halteres (Pegada Neutra)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/11771201_Dumbbell_Lying_Hammer_Press_version_2_4b4044b29c.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/11771201_Dumbbell_Lying_Hammer_Press_version_2_83732162b4.png",
        "instructions":  [
                             "Deite-se no banco com os pés posicionados no chão",
                             "Segure os halteres com os braços estendido para cima e na linha dos ombros",
                             "Coloque a palma das suas mãos viradas para dentro",
                             "Realize o movimento descendo os halteres até que seu cotovelo se alinhe com o seu tronco",
                             "Empurre os halteres para cima de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu quadril do apoio do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "v0w39uy8hhcn0j4ka473zsa9",
        "name":  "Tríceps Testa com Barra Reta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00571201_Barbell_Lying_extension_Upper_arms_1606a04feb.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00571201_Barbell_Lying_extension_Upper_arms_9e70b05fd3.png",
        "instructions":  [
                             "Deite no banco e posicione os pés no chão",
                             "Posicione suas mãos na barra na mesma direção dos ombros",
                             "Utilize a pegada pronada (palma das mãos para cima)",
                             "Realize o movimento de forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha seus ombros e braços estabilizados durante o movimento",
                              "Evite usar impulso ou movimentos bruscos",
                              "Permaneça com o alinhamento dos cotovelos em relação ao ombro"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "vdawxsutyrmipfv02ax9rpas",
        "name":  "Encolhimento com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/04061201_Dumbbell_Shrug_Back_FIX_2d99440ac0.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/04061201_Dumbbell_Shrug_Back_FIX_276170a5af.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Segure os halteres com as mãos posicionadas na linha dos ombros",
                             "Contraia seu abdômen",
                             "Realiza o movimento de forma controlada"
                         ],
        "importantTips":  [
                              "Não movimente seus ombros para frente",
                              "Não flexione seu cotovelo durante os movimentos",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Trapézio"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "vkcrppt50hlch0zfgyfmuab7",
        "name":  "Abdominal Deadbug",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02761201_Dead_Bug_Waist_914867f301.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02761201_Dead_Bug_Waist_c3501c7bed.png",
        "instructions":  [
                             "Deite-se no chão com os joelhos flexionados e os pés fora do chão",
                             "Posicione suas mãos estendidas para cima",
                             "Realize o movimento elevando seu braço acima da cabeça e estendendo sua perna completamente sem tocar no solo",
                             "Faça o movimento com braço e pernas opostas"
                         ],
        "importantTips":  [
                              "Mantenha seu tronco e quadril fixos no solo",
                              "Evite realizar movimentos excessivos com a sua coluna lombar",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "vnjr2t3jc03u052kk6aac6kf",
        "name":  "Tríceps Coice unilateral na Polia",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/50331201_Cable_Single_Arm_Triceps_Pushdown_rope_attachment_7c648703ce.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/50331201_Cable_Single_Arm_Triceps_Pushdown_rope_attachment_417928deb0.png",
        "instructions":  [
                             "Inicialmente, incline-se para frente, pegue o cabo e alinhe seu braço com o seu tronco",
                             "Estabilize seu ombro e seu tronco",
                             "Mantenha seu tronco alinhado com seu quadril",
                             "Realize o movimento de extensão de cotovelo de forma controlada"
                         ],
        "importantTips":  [
                              "Evite fazer movimentos com o tronco e ombros",
                              "Evite usar impulso ou movimentos bruscos",
                              "Permaneça com o alinhamento do cotovelo em relação ao tronco"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "vp723afh0ua1bqs9a6vnjg7t",
        "name":  "Stiff",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/15431201_Barbell_Stiff_Legged_Deadlift_Hips_FIX_f7bca89549.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/15431201_Barbell_Stiff_Legged_Deadlift_Hips_FIX_eaed4b95ad.png",
        "instructions":  [
                             "Coloque-se de pé com os pés posicionados na linha dos quadris",
                             "Segure a barra posicionando as mãos na linha dos ombros",
                             "Mantenha seus glúteos e abdômen contraidos e o tronco reto",
                             "Realize o movimento descendo seu tronco para baixo mantendo uma leve flexão dos joelhos"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Evite curvar seu tronco durante o movimento de descida",
                              "Faça o movimento até onde a sua mobilidade e flexibilidade permitir",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Posteriores"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "vrf5n09ixlymt6faz03twylt",
        "name":  "Cadeira Extensora",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/35181201_Band_Seated_Leg_Extension_male_Thighs_0381e83f59.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/35181201_Band_Seated_Leg_Extension_male_Thighs_b85dadbf2b.png",
        "instructions":  [
                             "Sente-se em um banco e coloque seu tronco no encosto da cadeira",
                             "Posicione suas mãos no apoio ao lado dos seus quadris",
                             "Faça o movimento de extensão do seu joelho com as duas das pernas",
                             "Quando seus joelhos estiverem completamente estendidos, retorne de maneira controlada"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar.",
                              "Evite fazer chutes, controle o equipamento subindo e descendo a sua perna",
                              "Mantenha um padrão de respiração suave"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Cadeira Extensora",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "vxffb23gki6un6kt34uuhaex",
        "name":  "Panturrilha Hack Machine",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/8e1a115381f3710575796dcbac3f3140.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/1dd65352166eeb07a48c8a4dd269c0c5.png",
        "instructions":  [
                             "Posicione-se de pé com os ombros, tronco e quadril apoiados no Hack",
                             "Coloque suas mãos no suporte e mantenha seus joelhos estendidos",
                             "Realize o movimento ficando na ponta dos pés"
                         ],
        "importantTips":  [
                              "Evite descolar seu corpo do apoio do Hack",
                              "Suba e desça de forma controlada, sem movimentos excessivamente rápidos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Hack Machine",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Panturrilhas"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "w057fh63ce5mjuf6xoejpmru",
        "name":  "Abdominal Tesoura no Banco",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/84301201_Seated_Leg_Kick_on_a_Chair_male_Hips_398b1d6637.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/84301201_Seated_Leg_Kick_on_a_Chair_male_Hips_b19a08dc8b.png",
        "instructions":  [
                             "Sente-se no banco e apoie as duas mãos ao lado dos quadris",
                             "Faça uma leve extensão do seu tronco colocando o mesmo para trás",
                             "Retire os pés do chão e mantenha seus joelhos estendidos",
                             "Realize o movimento de elevação dos membros inferiores de maneira alternada"
                         ],
        "importantTips":  [
                              "Evite movimentos excessivos com o tronco",
                              "Evite elevar demasiadamente seus membros inferiores",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Banco Reto",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "w3y7bxbbdb22e3h0x0b3szzn",
        "name":  "Desenvolvimento sentado com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/04051201_Dumbbell_Seated_Shoulder_Press_Shoulders_FIX_2_81dfe5bd7b.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/04051201_Dumbbell_Seated_Shoulder_Press_Shoulders_FIX_2_248d7c854a.png",
        "instructions":  [
                             "Fique sentado com os halteres na direção das orelhas e o cotovelo levemente abaixo da linha dos ombros",
                             "Eleve os halteres para cima até realizar a extensão completa dos cotovelos",
                             "Contraia seu abdomên e glúteos para estabilizar seu tronco",
                             "Realize o movimento de subida e descida de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Não perca contato do seu tronco com o apoio do banco",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Trapézio"
                             ]
    },
    {
        "id":  "w80jfb5npe6sk13bjvqpoq2r",
        "name":  "Tríceps Francês Sentado com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03891201_Dumbbell_Seated_Bench_Extension_Upper_Arms_bed80569c5.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03891201_Dumbbell_Seated_Bench_Extension_Upper_Arms_1647d80b52.png",
        "instructions":  [
                             "Inicialmente, sente-se em um banco e coloque seus braços acima da cabeça alinhados com a orelha",
                             "Segure o halter com as duas mãos e olhe para frente",
                             "Inicie o movimento com os cotovelos dobrados e halter atrás da cabeça",
                             "Realize o movimento de extensão dos cotovelos forma controlada"
                         ],
        "importantTips":  [
                              "Mantenha seus ombros e braços estabilizados durante o movimento",
                              "Evite usar impulso ou movimentos bruscos",
                              "Mantenha seu tronco estabilizado durante os movimentos",
                              "Permaneça com o alinhamento dos cotovelos em relação as orelhas"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Tríceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "wa5glwu4b8lckvyr91iq9136",
        "name":  "Recuo Alternado com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03811201_Dumbbell_Rear_Lunge_Thighs_FIX_bbfb8ce2e0.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03811201_Dumbbell_Rear_Lunge_Thighs_FIX_e287c4e860.png",
        "instructions":  [
                             "Segure os halteres e mantenha seus braços estendidos ao longo do corpo e próximo ao seu quadril",
                             "Seu tronco permanecerá ereto e você posionará um pé ao lado do outro",
                             "Retroceda uma das pernas para trás e em seguida flexione seus quadris e seus joelhos e desça até onde for possível, mantendo seu pé da frente posicionado no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos e alinhando seus pés lado a lado"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Evite jogar seu joelho da frente para dentro, mantenha o alinhamento com seu quadril",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "wcaggez1dfariqfrk26rvrgr",
        "name":  "Flexão de Braço com Palmas",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/12731201_Clap_Push_Up_Plyometrics_Chest_ef685568f2.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/12731201_Clap_Push_Up_Plyometrics_Chest_2b1d186c31.png",
        "instructions":  [
                             "Apoie as mãos no chão na largura dos ombros, pés ligeiramente afastados e mantenha seu corpo formando uma linha reta da cabeça aos calcanhares",
                             "Em seguida, flexione os cotovelos levando o peitoral em direção ao chão",
                             "Desça até formar um ângulo de aproximadamente 90° nos cotovelos e empurre o solo com força e velocidade, de forma explosiva",
                             "Gere impulso suficiente para que as mãos saiam do chão e enquanto estiver no ar, bata uma palma rapidamente",
                             "Retorne as mãos ao solo com controle e de forma sincronizada, amorteça o impacto com os braços semiflexionados e repita"
                         ],
        "importantTips":  [
                              "Mantenha o tronco ereto em todo o momento",
                              "Mantenha seu abdômen contraído",
                              "Foque na qualidade do movimento e na explosividade"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "wlfibmmikcrah67rff7mh7oe",
        "name":  "Levantamento Terra Unilateral com Barra",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/17561201_Barbell_Single_Leg_Deadlift_Hips_73d05c87c8.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/17561201_Barbell_Single_Leg_Deadlift_Hips_502c1ff943.png",
        "instructions":  [
                             "Coloque-se de pé com os pés posicionados na linha dos quadris",
                             "Segure a barra posicionando as mãos na linha dos ombros",
                             "Mantenha seus glúteos e abdômen contraidos e o tronco reto",
                             "Realize o movimento descendo seu tronco para baixo e estendendo uma das pernas para trás até que fique alinhada com o tronco",
                             "Faça o retorno de forma controlada"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Faça o movimento até onde a sua mobilidade e flexibilidade permitir",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Posteriores"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "wqwbk24wv5nk5w07zyrsr29z",
        "name":  "Supino Reto Smith",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/f0cb2be3a607074af5bdc31903181428.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/996c58e7bb5f30396ab4a7639b4bdac0.png",
        "instructions":  [
                             "Deite-se no banco com os pés no chão",
                             "Segure a barra guiada e posicione suas mãos na linha dos ombros",
                             "Inicie com os cotovelos estendidos",
                             "Realize o movimento descendo a barra até que ela se aproxime do seu peitoral",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu quadril do apoio do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Máquina Smith",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "wtzz2i6f7oe6b7emzf3fjvg0",
        "name":  "Prancha Dinâmica",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/f80bf70657b4c0ee79987f5f8a3f1389.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/9f9eb252ac616e39cdf14a0da7ad8be7.png",
        "instructions":  [
                             "Posicione-se no chão com os joelhos estendidos e cotovelos no chão alinhados com os ombros",
                             "Coloque seus pés afastados e na direção dos quadris",
                             "Mantenha seus joelhos, quadris e tronco totalmente alinhados",
                             "Contraia seu abdomên, glúteos e musculaturas das escápulas",
                             "Estenda seus cotovelos alternadamente e apoie a palma das mãos no chão, retorne e apoie os cotovelos no chão e repita "
                         ],
        "importantTips":  [
                              "Evite movimento de subir e descer o tronco",
                              "Evite que seu quadril desça",
                              "Não coloque os cotovelos à frente ou atrás da linha dos ombros"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "x1hybzod4udnnwkfdzxvwu57",
        "name":  "Bíceps unilateral na Polia Alta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/12031201_Cable_One_Arm_Inner_Biceps_Curl_Upper_Arms_1e3d7800b7.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/12031201_Cable_One_Arm_Inner_Biceps_Curl_Upper_Arms_b40c976099.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Cotovelo alinhado com o ombro durante o movimento",
                             "Flexione o cotovelo completamente",
                             "Faça a volta do movimento de forma controlada"
                         ],
        "importantTips":  [
                              "Evite que seu ombro suba",
                              "Não flexione o tronco lateralmente",
                              "Evite usar impulso ou movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "x2ndvijhmpavvyufey9q3dpi",
        "name":  "Extensão de punho com Barra Reta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/14111201_Barbell_Palms_Down_Wrist_Curl_Over_A_Bench_Forearms_e5351ff9c1.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/14111201_Barbell_Palms_Down_Wrist_Curl_Over_A_Bench_Forearms_8a18cded33.png",
        "instructions":  [
                             "Inicie ajoelhado com o antebraço posicionado em cima do banco",
                             "Posicine seu punho na borda do banco e segure a barra com a palma das mãos virada para baixo",
                             "Realize o movimento de extensão do punho de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Não descole seu antebraço do banco",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra reta",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Antebraços"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "xmq4txk3jd1m8xcv40zlhbsj",
        "name":  "Elevação Frontal sentada com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03921201_Dumbbell_Seated_Front_Raise_Shoulders_e5aa477cee.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03921201_Dumbbell_Seated_Front_Raise_Shoulders_2edf506ba9.png",
        "instructions":  [
                             "Fique sentado com os halteres ao lado do seu quadril",
                             "Eleve os halteres até a altura dos seus ombros",
                             "Contraia seu abdomên e glúteos para estabilizar seu tronco",
                             "Realize o movimento de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Evite encolhe seus ombros",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Peito"
                             ]
    },
    {
        "id":  "xp33ne2m46nyiqysveb4r1p2",
        "name":  "Alongamento Posição do Pombo Bilateral",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/7db30f5d22169d8166ef052d928818cb.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/b31317999bd290bd73b8674c9ecf4866.png",
        "instructions":  [
                             "Sente-se no chão e cruze suas pernas colocando uma por cima da outra",
                             "Apoie seus braços em cima das suas pernas, próximo ao joelho",
                             "Faça força empurrando suas pernas para baixo e incline seu tronco para frente"
                         ],
        "importantTips":  [
                              "Você poderá alternar a posição da perna que fica por cima",
                              "Mantenha a posição que for possível de acordo com a sua flexibilidade",
                              "Inspire pelo nariz e expire pela boca enquanto mantém seu corpo parado"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Glúteos"
                           ],
        "secondaryMuscles":  [
                                 "Abdutores"
                             ]
    },
    {
        "id":  "y1olbdn5dopigdxfijay35hw",
        "name":  "Elevação Frontal com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03101201_Dumbbell_Front_Raise_Shoulders_f3f1b31962.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03101201_Dumbbell_Front_Raise_Shoulders_927014b303.png",
        "instructions":  [
                             "Fique de pé com os halteres ao lado do seu quadril",
                             "Eleve os halteres até a altura dos seus ombros",
                             "Contraia seu abdomên e glúteos para estabilizar seu tronco",
                             "Realize o movimento de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Evite encolhe seus ombros",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Peito"
                             ]
    },
    {
        "id":  "yaejpfk5ge61slk7d65bdtve",
        "name":  "Remada Curvada com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02931201_Dumbbell_Bent_Over_Row_Back_FIX_0a5d76c0d7.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/02931201_Dumbbell_Bent_Over_Row_Back_FIX_745affd422.png",
        "instructions":  [
                             "Coloque-se de pé com os pés posicionados na linha dos quadris",
                             "Segure os halteres posicionando as mãos ao lado dos quadris",
                             "Incline seu tronco à frente mantendo os halteres alinhados com os seus ombros",
                             "Realize o movimento puxando os halteres para cima até que ele se aproxime a lateral do seu tronco",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite balançar seu corpo para frente e para trás",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Ombros",
                                 "Bíceps"
                             ]
    },
    {
        "id":  "yazrp05zajoqi7kn31fb6ouf",
        "name":  "Rosca bíceps sentado com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03911201_Dumbbell_Seated_Curl_Upper_Arms_3519d11a69.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03911201_Dumbbell_Seated_Curl_Upper_Arms_d08a7e8980.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Cotovelo alinhado com o tronco durante o movimento",
                             "Flexione o cotovelo completamente",
                             "Desça o antebraço de forma controlada"
                         ],
        "importantTips":  [
                              "Não balance seu cotovelo para frente durante o movimento",
                              "Evite que seu cotovelo fique a frente do tronco",
                              "Não flexione o tronco lateralmente",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "yg0n69at8psjpghqnk9jaweq",
        "name":  "Rosca martelo sentado com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/16781201_Dumbbell_Seated_Hammer_Curl_Upper_Arms_8746b326b3.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/16781201_Dumbbell_Seated_Hammer_Curl_Upper_Arms_7a49d2877e.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Cotovelo alinhado com o tronco durante o movimento",
                             "Flexione o cotovelo completamente",
                             "Desça o antebraço de forma controlada"
                         ],
        "importantTips":  [
                              "Não balance seu cotovelo para frente durante o movimento",
                              "Evite que seu cotovelo fique a frente do tronco",
                              "Não perca o apoio de todo o tronco com o banco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "yhhg1pgtitgxoxm6qjvhhq46",
        "name":  "Remada Cavalinho",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/116b7fa1f0dc1651be18ee76ae302b0e.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/ae5c2098f57d5b5c923449399e06625b.png",
        "instructions":  [
                             "Posicione a barra entre seus pés",
                             "Alinhe seus pés na altura dos seus quadris",
                             "Incline seu tronco e flexione seu joelho",
                             "Segue o triângulo e realize o movimento de puxar de forma controlada"
                         ],
        "importantTips":  [
                              "Evite balançar seu corpo para frente e para trás",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Ombros",
                                 "Bíceps"
                             ]
    },
    {
        "id":  "yhqg6xi85l2ml31mntp1g2ti",
        "name":  "Remada Baixa (Pegada Supinada)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/32331201_Cable_Seated_Supine_grip_Row_male_Back_2bcef735f9.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/32331201_Cable_Seated_Supine_grip_Row_male_Back_264050e669.png",
        "instructions":  [
                             "Sente-se no banco com os pés posicionados no apoio",
                             "Segure a barra com os braços estendidos para frente e a palma da mão voltada para cima",
                             "Mantenha seu tronco ereto e abdômen contraido",
                             "Realize o movimento puxando a barra até que ela se aproxime do seu abdômen",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite balançar seu corpo para frente e para trás",
                              "Mantenha seu quadril fixo no banco",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Remada Baixa",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "yj9bem6wtr3pmf7e1pq6rq61",
        "name":  "Elevação de Ombro em Y",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/33bf5058fbfd0451204c01ba355617c0.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/b615f6f6b62305eed2c3caf1477310a6.png",
        "instructions":  [
                             "Apoie seus pés no chão e deite-se de frente para o encosto do banco inclinado à 45 graus aproximadamente",
                             "Segure os halteres para baixo na linha dos ombros e com a palma das mãos viradas para trás",
                             "Realize o movimento de elevação completa levando os halteres em uma direção diagonal",
                             "Desça seus braços de maneira controlada"
                         ],
        "importantTips":  [
                              "Evite movimentar seu quadril e tronco retirando eles do encosto do banco",
                              "Mantenha seu abdômen e glúteo contraídos e faça a manutenção da postura do tronco",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Trapézio"
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "ypspr636fqxhdv794yq2qguo",
        "name":  "Elevação alternada das pernas",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/48261201_Alternate_Leg_Raise_male_Hips_40192b5b79.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/48261201_Alternate_Leg_Raise_male_Hips_3d1fedec69.png",
        "instructions":  [
                             "Deite-se no chão com os joelhos estendidos e os pés inicialmente um ao lado do outro",
                             "Posicione seus braços estendidos ao lado do seu corpo e suas mãos levemente embaixo do seus glúteos",
                             "Retire os pés e pernas no chão mantendo os joelhos estendidos",
                             "Realize o movimento elevando a perna e descendo lentamente e alternando os lados"
                         ],
        "importantTips":  [
                              "Evite descer a perna de forma rápida",
                              "Evite movimentar sua coluna lombar",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "yqm7mdy5pogy0f8aq2a7l48u",
        "name":  "Prancha com Toque nos Ombros",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/52731201_Plank_Shoulder_Tap_Waist_5561a96414.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/52731201_Plank_Shoulder_Tap_Waist_e00b6bf6c4.png",
        "instructions":  [
                             "Posicione-se no chão com os joelhos estendidos, palma das mãos no chão e alinhadas com os ombros",
                             "Coloque seus pés afastados e na direção dos quadris",
                             "Mantenha seus joelhos, quadris e tronco totalmente alinhados",
                             "Contraia seu abdomên, glúteos e musculaturas das escápulas",
                             "Toque no ombro com a mão oposta e de forma alternada"
                         ],
        "importantTips":  [
                              "Evite movimento de subir e descer o tronco",
                              "Evite que seu quadril desça",
                              "Não coloque os cotovelos à frente ou atrás da linha dos ombros"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "ysys6g7apkhwe78q5bfldbfl",
        "name":  "Barra Fixa no Graviton (Pegada Supinada)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00171201_Assisted_Pull_up_Back_be7691a255.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00171201_Assisted_Pull_up_Back_a3dc273e86.png",
        "instructions":  [
                             "Segure a barra com as mãos na direção dos seus ombros",
                             "Oriente a palma da sua mão para frente",
                             "Coloque seus joelhos no encosto do apoio",
                             "Realize o movimento puxando seu corpo para cima até que seu queixo ultrapasse a barra",
                             "Desça de maneira controlada"
                         ],
        "importantTips":  [
                              "Faça sempre a extensão completa dos seus cotovelos durante o movimento de retorno",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Gráviton",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps"
                             ]
    },
    {
        "id":  "yuew3m5jpn3s6k872o27vhre",
        "name":  "Rosca bíceps na Polia Baixa (Barra Reta)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/b479fc8f7ebfb8c9c7f7db3ca416c8bd.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/fd793756f33e65efe1a91020901dcaa7.png",
        "instructions":  [
                             "Mantenha o tronco ereto",
                             "Cotovelo alinhado com o tronco durante o movimento",
                             "Flexione o cotovelo completamente",
                             "Desça o antebraço de forma controlada"
                         ],
        "importantTips":  [
                              "Não balance seu cotovelo para frente durante o movimento",
                              "Evite que seu cotovelo fique a frente do tronco",
                              "Não deixe que seu tronco vá para trás"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "yvwdd0ii5zue4trs812rsh2x",
        "name":  "Agachamento Sumô com Kettlebell (Frontal)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05331201_Kettlebell_Front_Squat_Thighs_8a3e9a755f.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/05331201_Kettlebell_Front_Squat_Thighs_3698e851ae.png",
        "instructions":  [
                             "Segure o Kettlebell com as duas mãos na altura do seu peitoral ",
                             "Seu tronco permanecerá ereto e você posionará os pés afastados e a ponta dos pés rodadas para fora",
                             "Flexione seus quadris e seus joelhos e desça até onde for possível, mantendo seus pés posicionados no chão",
                             "Em seguida, retorne a posição inicial estendendo seus quadris e joelhos"
                         ],
        "importantTips":  [
                              "Mantenha o tronco reto e evite se curvar",
                              "Evite jogar seus joelhos para dentro",
                              "Evite impulsos ou movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Kettlebell",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos",
                                 "Adutores"
                             ]
    },
    {
        "id":  "yx9t2vbuv8hgbbfvys6vu1xn",
        "name":  "Extensão de Quadril com Tronco Inclinado",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/693ec2d60fb44202136241c8fae166e7.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/ba2214859bcdbf4cbde110d6c405ae64.png",
        "instructions":  [
                             "Posicione-se de pé com a faixa elástica ao redor dos tornozelos",
                             "Incline o seu tronco e apoie suas mãos no encosto do banco",
                             "Mantenha seus glúteos e abdômen contraidos e o tronco reto",
                             "Realize o movimento elevando sua perna para trás até que ela se alinhe com o seu quadril"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Suba e desça de forma controlada utilizando seus glúteos e posteriores de coxa",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Faixa elástica",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Glúteos"
                           ],
        "secondaryMuscles":  [
                                 "Posteriores"
                             ]
    },
    {
        "id":  "yym1ztn9b77tas4jw82w493r",
        "name":  "Elevação Pélvica com Barra Reta na Caixa",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/1e9f3c85827efc9995f321c48387e34e.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/045288f70d69752439c9da5974dc7b7d.png",
        "instructions":  [
                             "Sente-se no chão com a barra posicionada no seu quadril e as suas costas encostadas na caixa",
                             "Flexione os joelhos e coloque os pés um pouco à frente dos glúteos",
                             "Posicione suas mãos segurando na barra",
                             "Mantenha seus glúteos e abdômen contraidos",
                             "Realize o movimento elevando seu quadril até que ele se alinhe com seu tronco"
                         ],
        "importantTips":  [
                              "Evite realizar o movimento com a coluna lombar",
                              "Suba e desça de forma controlada utilizando seus glúteos e posteriores de coxa",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Glúteos"
                           ],
        "secondaryMuscles":  [
                                 "Posteriores"
                             ]
    },
    {
        "id":  "yyzq4m0ihz838qsd08ls6epu",
        "name":  "Crucifixo Polia Média",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01881201_Cable_Middle_Fly_Chest_FIX_41310bfd6b.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01881201_Cable_Middle_Fly_Chest_FIX_1ccf15921a.png",
        "instructions":  [
                             "Posicione a polia na parte média ou onde ela fique na linha dos seus ombros",
                             "Pegue um lado de cada vez e se posicione no meio do equipamento",
                             "Mantenha o tronco ereto e posicione um pé à frente do outro",
                             "Inicie com os braços estendidos para o lado com eles na linha do seu ombro e realize o movimento aproximando seus braços",
                             "Quando seus braços se encontrarem na altura do seu peitoral, retorne de maneira controlada"
                         ],
        "importantTips":  [
                              "Evite balançar seu corpo para frente e para trás excessivamente",
                              "Mantenha seu tronco ereto com abdômen e glúteos contraidos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "z22t7bwmgb17t4rn92klx1i2",
        "name":  "Abdominal Supra com Corda na Polia",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01751201_Cable_Kneeling_Crunch_Waist_FIX_2_f21d764480.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01751201_Cable_Kneeling_Crunch_Waist_FIX_2_7d91738cfb.png",
        "instructions":  [
                             "Posicione-se com os joelhos no chão de frente para a polia",
                             "Pegue a corda e segure com as duas mãos na altura da sua cabeça",
                             "Mantenha os cotovelos dobrados e direcionados para frente",
                             "Realize o movimento de flexão do tronco"
                         ],
        "importantTips":  [
                              "Mantenha seu quadril fixo, sem movimento e faça apenas a flexão do tronco",
                              "Mantenha a contração do abdômen durante toda a execução",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Abdômen "
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "z6gahdlhhzbssx022zrmyryl",
        "name":  "Puxada Neutra Triângulo",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/26161201_Cable_Lateral_Pulldown_with_V_bar_Back_642d37ac94.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/26161201_Cable_Lateral_Pulldown_with_V_bar_Back_3d95ca93ac.png",
        "instructions":  [
                             "Sente-se no banco com os pés e os joelhos posicionados no apoio",
                             "Segure o triângulo com os braços estendidos para cima",
                             "Mantenha seu tronco ereto e abdômen contraido",
                             "Realize o movimento puxando o triângulo até que ele se aproxime do seu peitoral",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite retirar seu quadril do apoio do banco",
                              "Mantenha seu abdômen e glúteo contraídos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Pulley",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "z6tr5r6j0xeouyrljnz6k5fm",
        "name":  "Crucifixo Polia Baixa",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01791201_Cable_Low_Fly_Chest_FIX_2_f6241b0e6b.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/01791201_Cable_Low_Fly_Chest_FIX_2_18c45fcf8b.png",
        "instructions":  [
                             "Posicione a polia na parte baixa",
                             "Pegue um lado de cada vez e se posicione no meio do equipamento",
                             "Mantenha o tronco ereto e posicione um pé à frente do outro",
                             "Inicie com os braços estendidos na altura do seu tronco e realize o movimento na diagonal para cima",
                             "Quando seus braços se encontrarem na altura do seu peitoral, retorne de maneira controlada"
                         ],
        "importantTips":  [
                              "Evite balançar seu corpo para frente e para trás excessivamente",
                              "Mantenha seu tronco ereto com abdômen e glúteos contraidos",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Crossover",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Peito"
                           ],
        "secondaryMuscles":  [
                                 "Ombros"
                             ]
    },
    {
        "id":  "zakyo2x326tytdgrtjszrgx1",
        "name":  "Extensão de tronco",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/88951201_45_degrees_Back_Extension_Scapular_Adduction_male_8b51be587b.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/88951201_45_degrees_Back_Extension_Scapular_Adduction_male_8b778a212d.png",
        "instructions":  [
                             "Posicione seus pés no local correto e ajuste a altura do banco para que seu quadril fique acima do apoio do banco",
                             "Cruze os braços no seu peitoral",
                             "Contraia seus glúteos",
                             "Realize o movimento de forma controlada"
                         ],
        "importantTips":  [
                              "Evite descolar o quadril do encosto do banco",
                              "Evite jogar seu tronco excessivamente para trás no final do movimento de subida",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Banco Romano",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos",
                                 "Posteriores"
                             ]
    },
    {
        "id":  "zg2qf7w2bvohsyr5uprl7nkt",
        "name":  "Rosca Scott com Barra Reta",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00701201_Barbell_Preacher_Curl_Upper_Arms_123925397b.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/00701201_Barbell_Preacher_Curl_Upper_Arms_9a899ab8e0.png",
        "instructions":  [
                             "Mantenha os cotovelos fixos e o corpo estável durante o exercício",
                             "Mantenha seu tronco ereto",
                             "Realize o movimento completo de extensão do cotovelo"
                         ],
        "importantTips":  [
                              "Evite usar impulso ou movimentos bruscos",
                              "Evite projetar seu ombro para frente",
                              "Não deixe que seu braço perca contato com o apoio"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Barra olímpica",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Bíceps"
                           ],
        "secondaryMuscles":  [

                             ]
    },
    {
        "id":  "zkaml8ipidk9eabau855wy91",
        "name":  "Elevação Pélvica Máquina",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/f52363e1d75ae815adac7054d5156d28.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/42abc8774c8b8edabfae729e721f7076.png",
        "instructions":  [
                             "Sente-se no banco da máquina com as costas apoiadas no encosto ou banco fixo, geralmente na altura da escápula",
                             "Ajuste o rolo acolchoado (ou suporte de carga) de modo que fique posicionado sobre a crista ilíaca (parte frontal do quadril) e os pés devem ficar na largura do quadril e alinhados com os joelhos",
                             "Comece com o quadril abaixado, próximo ao chão, com os joelhos flexionados em cerca de 90° e empurre os pés contra o solo, contraindo os glúteos com força, e eleve o quadril em direção ao teto",
                             "Leve o quadril até formar uma linha reta entre ombros, quadris e joelhos no topo do movimento e depois desça de forma controlada e repita"
                         ],
        "importantTips":  [
                              "Evite arquear a lombar no topo do movimento, o movimento deve vir dos quadris",
                              "Não levante com o pescoço ou costas, mantenha o tronco estabilizado",
                              "Pode usar um colchonete ou almofada para o quadril, caso a máquina pressione demais"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Elevação Pélvica De Solo",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Glúteos"
                           ],
        "secondaryMuscles":  [
                                 "Posteriores"
                             ]
    },
    {
        "id":  "zkp6hd7d2vaynoak3ojb5whm",
        "name":  "Elevação Frontal sentada e alternada com Halteres",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03871201_Dumbbell_Seated_Alternate_Front_Raise_Shoulders_b7a9134024.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/03871201_Dumbbell_Seated_Alternate_Front_Raise_Shoulders_085c720016.png",
        "instructions":  [
                             "Fique sentado com os halteres ao lado do seu quadril",
                             "Eleve os halteres de forma alternada até a altura dos seus ombros",
                             "Contraia seu abdomên e glúteos para estabilizar seu tronco",
                             "Realize o movimento de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Evite encolhe seus ombros",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Peito"
                             ]
    },
    {
        "id":  "zqss5jbbhn9rds3uauctoqqm",
        "name":  "Remada Baixa (Pegada Pronada)",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/b4b85a4840f2c9900619a84b8c473c9a.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/a77d928f2c39fb649b765e26c0eb0caa.png",
        "instructions":  [
                             "Sente-se no banco com os pés posicionados no apoio",
                             "Segure a barra com os braços estendidos para frente e a palma da mão voltada para cima",
                             "Mantenha seu tronco ereto e abdômen contraido",
                             "Realize o movimento puxando a barra até que ela se aproxime do seu abdômen",
                             "Retorne de forma controlada"
                         ],
        "importantTips":  [
                              "Evite balançar seu corpo para frente e para trás",
                              "Mantenha seu quadril fixo no banco",
                              "Evite impulsos e movimentos bruscos"
                          ],
        "category":  "Máquinas de Academia",
        "equipment":  "Remada Baixa",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Costas"
                           ],
        "secondaryMuscles":  [
                                 "Bíceps",
                                 "Ombros"
                             ]
    },
    {
        "id":  "zs241qml53vuauew6nwkit6v",
        "name":  "Avanço Dois Tempos",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/50181201_Bodyweight_Pulse_Forward_Lunge_Thighs_224818497a.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/50181201_Bodyweight_Pulse_Forward_Lunge_Thighs_bfb6d008e9.png",
        "instructions":  [
                             "Fique em pé, com os pés afastados na largura dos quadris, braços ao lado do corpo",
                             "Dê um passo à frente com uma das pernas, apoiando o pé completamente no chão, flexione os joelhos, descendo o corpo até que o joelho de trás fique próximo ao chão (sem encostar) e o da frente forme um ângulo de 90°",
                             "Realize um movimento curto para cima e para baixo (bombeamento), com pequena amplitude",
                             "Após um pulses, empurre com a perna da frente para voltar à posição inicial e repita"
                         ],
        "importantTips":  [
                              "Mantenha o tronco ereto durante todo o movimento, evite inclinar o corpo para frente",
                              "Ative o core para proteger a lombar e melhorar a estabilidade",
                              "Evite jogar seu joelho para dentro quando realizar o avanço e o bombeamento"
                          ],
        "category":  "Peso do Corpo",
        "equipment":  "Nenhum",
        "level":  "advanced",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos"
                             ]
    },
    {
        "id":  "zs7mdk65kp1pw9vs2pznkysm",
        "name":  "Desenvolvimento em pé",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/53281201_Barbell_Standing_Shoulders_Press_Shoulders_27c741260e.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/53281201_Barbell_Standing_Shoulders_Press_Shoulders_eccc1bfbb0.png",
        "instructions":  [
                             "Fique de pé com os halteres na direção das orelhas e o cotovelo levemente abaixo da linha dos ombros",
                             "Eleve os halteres para cima até realizar a extensão completa dos cotovelos",
                             "Contraia seu abdomên e glúteos para estabilizar seu tronco",
                             "Realize o movimento de subida e descida de forma controlada"
                         ],
        "importantTips":  [
                              "Evite impulsos e movimentos bruscos",
                              "Mantenha seus ombros estabilizados",
                              "Não movimente demasiadamente seu tronco"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "beginner",
        "primaryMuscles":  [
                               "Ombros"
                           ],
        "secondaryMuscles":  [
                                 "Tríceps",
                                 "Trapézio"
                             ]
    },
    {
        "id":  "zwxzz2tedq5c0qzumyzirs4v",
        "name":  "Agachamento Frontal Assimétrico",
        "videoUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/e965a732389207d63a2a09367d27a2d8.mp4",
        "imageUrl":  "https://strong-animal-02f89d5138.media.strapiapp.com/65dc6f5c0dc0b715971bda73444e9d09.png",
        "instructions":  [
                             "Fique de pé, com os pés afastados na largura dos ombros",
                             "Segure um halter em uma das mãos, próximo ao ombro, com o cotovelo dobrado e apontando para frente e para baixo",
                             "O outro braço pode ficar ao lado do corpo ou estendido à frente para equilíbrio",
                             "Empurre o chão com os calcanhares e retorne à posição inicial, mantendo o core ativado e o tronco ereto, depois disso repita"
                         ],
        "importantTips":  [
                              "Mantenha o abdômen ativo o tempo todo para neutralizar o desequilíbrio da carga",
                              "Mantenha-se olhando para frente e evite inclinar o tronco lateralmente",
                              "Comece com cargas leves até dominar a técnica, pois o desequilíbrio pode sobrecarregar a coluna se mal executado"
                          ],
        "category":  "Peso Livre",
        "equipment":  "Halteres",
        "level":  "intermediate",
        "primaryMuscles":  [
                               "Quadríceps"
                           ],
        "secondaryMuscles":  [
                                 "Glúteos",
                                 "Abdômen "
                             ]
    }
];

/**
 * Busca inteligente de exercÃ­cio por nome ou correspondÃªncia parcial
 */
export function findExerciseGuide(exerciseName: string): ExerciseGuide | undefined {
  if (!exerciseName) return undefined;
  const normalized = exerciseName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

  // 1. Busca exata
  const exact = EXERCISE_DATABASE.find(e => {
    const eNorm = e.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    return eNorm === normalized;
  });
  if (exact) return exact;

  // 2. Busca por substring ou palavras-chave
  const words = normalized.split(/\s+/).filter(w => w.length > 2);
  let bestMatch: ExerciseGuide | undefined;
  let maxScore = 0;

  for (const item of EXERCISE_DATABASE) {
    const itemNorm = item.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let score = 0;
    for (const w of words) {
      if (itemNorm.includes(w)) {
        score += w.length;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = item;
    }
  }

  return maxScore >= 4 ? bestMatch : undefined;
}
