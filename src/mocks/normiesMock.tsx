import NormieStructure from "../store/feature/normies/types";

export const normiesMock: NormieStructure[] = [
  {
    id: 1,
    name: "Morticia Darks",
    urbanTribe: "Metalhead",
    isNormie: false,
    description:
      "Came from the frozen lands of the Antartida. Her heart is cold like the winter and she's ready to ignore you any time you show that you are happy or you try to make a joke.",
    age: 23,
    image:
      "https://cdn.leonardo.ai/users/85d57301-957e-45b5-8213-e4df2524bcc1/generations/ec38e2c3-8744-4c81-9ca6-fc201ba69c99/Leonardo_Diffusion_sketch_funny_cartoon_blackmetal_girl_0.jpg",
  },
  {
    id: 2,
    name: "Extasy Pete",
    urbanTribe: "Modern",
    isNormie: true,
    description:
      "Just arrived from the Born neightbourhood in Bcn. Avocados and Brunch-Electronic are his passion, and he's always ready to yell at people on twitter while wearing his gafapastas. ",
    age: 33,
    image:
      "https://cdn.leonardo.ai/users/85d57301-957e-45b5-8213-e4df2524bcc1/generations/529d5967-cf13-49f4-9fa0-75eb56f6ca42/Leonardo_Diffusion_studio_ghibli_sketch_colorful_happy_arrogan_3.jpg",
  },
  {
    id: 3,
    name: "Rotten Jimmy",
    urbanTribe: "Punk Rat",
    isNormie: false,
    description:
      "Always running away from baths and cologne. He will have you listening to his stories about how dangerous he is, but will not tell you about all the money his papa sends to him every weekend. ",
    age: 45,
    image:
      "https://cdn.leonardo.ai/users/85d57301-957e-45b5-8213-e4df2524bcc1/generations/1a6fc1f7-a4b4-4289-9485-e9084d8148e1/Leonardo_Diffusion_studio_ghibli_sketch_cartoon_2d_punk_guy_wi_2.jpg",
  },
];

export const modifiedFriendNormiesMock: NormieStructure[] = [
  {
    id: 1,
    name: "Morticia Darks",
    urbanTribe: "Metalhead",
    isNormie: false,
    description:
      "Came from the frozen lands of the Antartida. Her heart is cold like the winter and she's ready to ignore you any time you show that you are happy or you try to make a joke.",
    age: 23,
    image:
      "https://cdn.leonardo.ai/users/85d57301-957e-45b5-8213-e4df2524bcc1/generations/ec38e2c3-8744-4c81-9ca6-fc201ba69c99/Leonardo_Diffusion_sketch_funny_cartoon_blackmetal_girl_0.jpg",
    isFriend: true,
  },
  {
    id: 2,
    name: "Extasy Pete",
    urbanTribe: "Modern",
    isNormie: true,
    description:
      "Just arrived from the Born neightbourhood in Bcn. Avocados and Brunch-Electronic are his passion, and he's always ready to yell at people on twitter while wearing his gafapastas. ",
    age: 33,
    image:
      "https://cdn.leonardo.ai/users/85d57301-957e-45b5-8213-e4df2524bcc1/generations/529d5967-cf13-49f4-9fa0-75eb56f6ca42/Leonardo_Diffusion_studio_ghibli_sketch_colorful_happy_arrogan_3.jpg",
  },
  {
    id: 3,
    name: "Rotten Jimmy",
    urbanTribe: "Punk Rat",
    isNormie: false,
    description:
      "Always running away from baths and cologne. He will have you listening to his stories about how dangerous he is, but will not tell you about all the money his papa sends to him every weekend. ",
    age: 45,
    image:
      "https://cdn.leonardo.ai/users/85d57301-957e-45b5-8213-e4df2524bcc1/generations/1a6fc1f7-a4b4-4289-9485-e9084d8148e1/Leonardo_Diffusion_studio_ghibli_sketch_cartoon_2d_punk_guy_wi_2.jpg",
  },
];

export const modifiedEnemyNormiesMock: NormieStructure[] = [
  {
    id: 1,
    name: "Morticia Darks",
    urbanTribe: "Metalhead",
    isNormie: false,
    description:
      "Came from the frozen lands of the Antartida. Her heart is cold like the winter and she's ready to ignore you any time you show that you are happy or you try to make a joke.",
    age: 23,
    image:
      "https://cdn.leonardo.ai/users/85d57301-957e-45b5-8213-e4df2524bcc1/generations/ec38e2c3-8744-4c81-9ca6-fc201ba69c99/Leonardo_Diffusion_sketch_funny_cartoon_blackmetal_girl_0.jpg",
  },
  {
    id: 2,
    name: "Extasy Pete",
    urbanTribe: "Modern",
    isNormie: true,
    description:
      "Just arrived from the Born neightbourhood in Bcn. Avocados and Brunch-Electronic are his passion, and he's always ready to yell at people on twitter while wearing his gafapastas. ",
    age: 33,
    image:
      "https://cdn.leonardo.ai/users/85d57301-957e-45b5-8213-e4df2524bcc1/generations/529d5967-cf13-49f4-9fa0-75eb56f6ca42/Leonardo_Diffusion_studio_ghibli_sketch_colorful_happy_arrogan_3.jpg",

    isFriend: false,
  },
  {
    id: 3,
    name: "Rotten Jimmy",
    urbanTribe: "Punk Rat",
    isNormie: false,
    description:
      "Always running away from baths and cologne. He will have you listening to his stories about how dangerous he is, but will not tell you about all the money his papa sends to him every weekend. ",
    age: 45,
    image:
      "https://cdn.leonardo.ai/users/85d57301-957e-45b5-8213-e4df2524bcc1/generations/1a6fc1f7-a4b4-4289-9485-e9084d8148e1/Leonardo_Diffusion_studio_ghibli_sketch_cartoon_2d_punk_guy_wi_2.jpg",
  },
];

export const newNormieMock: NormieStructure = {
  id: 4,
  name: "Perroflauta",
  urbanTribe: "Test",
  isNormie: false,
  description: "Test",
  age: 10,
  image: "https://test.jpg",
};

export const normiesAddedMock: NormieStructure[] = [
  {
    id: 1,
    name: "Morticia Darks",
    urbanTribe: "Metalhead",
    isNormie: false,
    description:
      "Came from the frozen lands of the Antartida. Her heart is cold like the winter and she's ready to ignore you any time you show that you are happy or you try to make a joke.",
    age: 23,
    image:
      "https://cdn.leonardo.ai/users/85d57301-957e-45b5-8213-e4df2524bcc1/generations/ec38e2c3-8744-4c81-9ca6-fc201ba69c99/Leonardo_Diffusion_sketch_funny_cartoon_blackmetal_girl_0.jpg",
  },
  {
    id: 2,
    name: "Extasy Pete",
    urbanTribe: "Modern",
    isNormie: true,
    description:
      "Just arrived from the Born neightbourhood in Bcn. Avocados and Brunch-Electronic are his passion, and he's always ready to yell at people on twitter while wearing his gafapastas. ",
    age: 33,
    image:
      "https://cdn.leonardo.ai/users/85d57301-957e-45b5-8213-e4df2524bcc1/generations/529d5967-cf13-49f4-9fa0-75eb56f6ca42/Leonardo_Diffusion_studio_ghibli_sketch_colorful_happy_arrogan_3.jpg",
  },
  {
    id: 3,
    name: "Rotten Jimmy",
    urbanTribe: "Punk Rat",
    isNormie: false,
    description:
      "Always running away from baths and cologne. He will have you listening to his stories about how dangerous he is, but will not tell you about all the money his papa sends to him every weekend. ",
    age: 45,
    image:
      "https://cdn.leonardo.ai/users/85d57301-957e-45b5-8213-e4df2524bcc1/generations/1a6fc1f7-a4b4-4289-9485-e9084d8148e1/Leonardo_Diffusion_studio_ghibli_sketch_cartoon_2d_punk_guy_wi_2.jpg",
  },
  {
    id: 4,
    name: "Perroflauta",
    urbanTribe: "Test",
    isNormie: false,
    description: "Test",
    age: 10,
    image: "https://test.jpg",
  },
];
