import Dog from './Dog';
import ShelterDog from './ShelterDog';
import { add, divide, multiply } from './utils';

const gavych = new Dog('Gav Gavych', 'Dvorovoy', 12);

gavych.bark();

console.log(add(21, 3));
console.log(divide(21, 3));
console.log(multiply(21, 3));

const sharik = new ShelterDog('Sharik', 'Doberman', 2, 'budka');
