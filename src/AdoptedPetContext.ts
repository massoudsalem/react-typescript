import { createContext } from "react";
import { Pet } from "./APIResponseTypes";

// I don't know why 'Eng. Holt' doesn't use the as operator here, but I'm going to use it.
const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void]>([
  {} as Pet,
  () => {},
]);
export default AdoptedPetContext;
