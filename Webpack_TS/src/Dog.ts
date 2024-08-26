export default class Dog {
    constructor(
        public name: string,
        public breed: string,
        public age: number,
    ){}

    public bark(): void {
        console.log('Gav Gav!!!!');
    }
}