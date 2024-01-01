import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

// the below data is a default value to be used in the aopted pet context we could also use a null value
// however we would have to chack if it was null throughout the app

const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void]>([
  {
    id: 1337,
    name: "Fido",
    animal: "dog",
    description: "Lorem ipsum",
    breed: "Beagle",
    images: [],
    city: "Seattle",
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;
