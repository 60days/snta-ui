import create from "zustand";
import type { Product } from "./data/types";
//import { devtools, persist } from "zustand/middleware";

interface RelationshipData {
  id: string;
  name: string;
  type: string;
  plural: string;
}

interface AgeData {
  id: string;
  name: string;
  type: string;
}

interface InterestData {
  id: string;
  name: string;
  sentence: string;
}

interface ResultData {
  resultInterest: InterestData;
  answer2: string;
  products: Product[];
}

interface SntaState {
  isAndroid: boolean;
  relationship?: RelationshipData;
  age?: AgeData;
  interest1?: InterestData;
  interest2?: InterestData;
  result?: ResultData;

  api: {
    setIsAndroid: (isAndroid: boolean) => void;
    setRelationship: (relationship: RelationshipData) => void;
    setAge: (age: AgeData) => void;
    setInterest1: (interest1: InterestData) => void;
    setInterest2: (interest2: InterestData) => void;
    setResult: (result: ResultData) => void;
    reset: () => void;
  };
}

const useState = create<SntaState>((set, get) => ({
  isAndroid: false,
  relationship: undefined,
  age: undefined,
  interest1: undefined,
  interest2: undefined,
  result: undefined,
  api: {
    setIsAndroid: (isAndroid: boolean) => set({ isAndroid }),
    setRelationship: (relationship: RelationshipData) => set({ relationship }),
    setAge: (age: AgeData) => set({ age }),
    setInterest1: (interest1: InterestData) => set({ interest1 }),
    setInterest2: (interest2: InterestData) => set({ interest2 }),
    setResult: (result: ResultData) => set({ result }),
    reset: () => {},
  },
}));

export default useState;
