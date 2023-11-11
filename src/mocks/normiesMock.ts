import normieStructure from "../store/feature/normies/types";

const normiesMock: normieStructure[] = [
  {
    id: 1,
    name: "Anastasia Darks",
    urbanTribe: "Metalhead",
    isNormie: false,
    description:
      "Came from the frozen lands of the Antartida. Her heart is cold like the winter and she's ready to ignore you any time you show that you are happy or you try to make a joke.",
    age: 23,
    images: [
      "https://th.bing.com/th/id/OIG.ZrszJetpUzWoHixF3AOq?w=270&h=270&c=6&r=0&o=5&pid=ImgGn",
      "https://th.bing.com/th/id/OIG.Qz0jHwoCBqNSWkXpjDj0?pid=ImgGn&w=1024&h=1024&rs=1",
      "https://cdn.leonardo.ai/users/85d57301-957e-45b5-8213-e4df2524bcc1/generations/ec38e2c3-8744-4c81-9ca6-fc201ba69c99/Leonardo_Diffusion_sketch_funny_cartoon_blackmetal_girl_0.jpg",
    ],
  },
  {
    id: 2,
    name: "Exasty Pete",
    urbanTribe: "Modern",
    isNormie: true,
    description:
      "Just arrived from the Born neightbourhood in Bcn. Avocados and Brunch-Electronic are his passion, and he's always ready to yell at people on twitter while wearing his gafapastas. ",
    age: 33,
    images: [
      "http://coloquialmente.com/sites/default/files/inline-images/gafapasta_0.jpg",
      "https://th.bing.com/th/id/OIG.dwh2FsusQ5qJvDhaXUnZ?pid=ImgGn",
      "https://cdn.leonardo.ai/users/85d57301-957e-45b5-8213-e4df2524bcc1/generations/529d5967-cf13-49f4-9fa0-75eb56f6ca42/Leonardo_Diffusion_studio_ghibli_sketch_colorful_happy_arrogan_3.jpg",
    ],
  },
];

export default normiesMock;
