type IsString<T> = T extends string
    ? 'This is a string'
    : 'This is not a string';

type A = IsString<string>;
type B = IsString<number>;

type ExtractString<T> = T extends string ? string : never;
type Result = ExtractString<string | number | boolean>;

type CkeckType<T> = T extends string ? string[] : T[];

const value1: CkeckType<string> = ['ss', 'gg'];
const value2: CkeckType<{ name: string }> = [
    { name: 'Viktor' },
    { name: 'Irina' },
];

type Flatten<T> = T extends any[] ? T[number] : T;

type C = Flatten<{name: string}>;
type D = Flatten<{name: string}[]>;

type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never; 
type Func = () => number;
type FuncInfer = GetReturnType<Func>;

type ElementType<T> = T extends (infer U)[] ? U : T; 
type E = ElementType<string[]>;  // string
type F = ElementType<number[]>;  // number
type G = ElementType<boolean>;   // boolean


type ToArray<T> = T extends any ? T[] : never;
type H = ToArray<string | number>; // string[] | number[]