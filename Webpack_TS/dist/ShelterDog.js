import Dog from './Dog.js';
export default class ShelterDog extends Dog {
    constructor(name, breed, age, shelter) {
        super(name, breed, age);
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.shelter = shelter;
    }
}
