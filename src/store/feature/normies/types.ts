interface NormieStructure {
  id: number;
  name: string;
  urbanTribe: string;
  isNormie: boolean;
  description: string;
  age: number;
  images: string[];
  isFriend?: boolean;
}

export default NormieStructure;
