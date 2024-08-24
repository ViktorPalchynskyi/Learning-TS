let highScore: number | boolean;

const stuff: number[] | string[] = [];

type SkillLevel = 'Beginner' | 'Inermediate' | 'Advanced' | 'Expert';

type SkilScoolStudent = {
    name: string;
    age: number;
    sport: 'ski' | 'snowboard';
    level: SkillLevel;
};

type RGB = {
    r: number;
    g: number;
    b: number;
};

type HSL = {
    h: number;
    s: number;
    l: number;
};

const colors: (RGB | HSL)[] = [];

function greet(names: string | string[]): void {
    if (Array.isArray(names)) {
        names.forEach((name) => console.log(`Hello, ${name}`));
    } else {
        console.log(`Hello, ${names}`);
    }
}
