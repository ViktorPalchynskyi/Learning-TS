export type Error = {
    type: string;
    [key: string]: unknown;
};

type Record = {
    [key: string]: string;
};

// interface UiError extends Error {
//     type: 'uiError';
//     a: string;
// }

// interface DataError extends Error {
//     type: 'dataError';
//     b: string;
// }

// const exm = {
//     uiError: '</>',
//     dataError: '</>',
// };

interface Owner {
    name: string;
    age: number;
    height: number;
    jump(): void;
}

type PartialOwner = {
    [Property in keyof Owner]?: Owner[Property];
};

type RequiredOwner = {
    [Property in keyof Owner]-?: Owner[Property];
};

type ReadonlyOwner = {
    readonly [Property in keyof Owner]: Owner[Property];
};

type NoReadonlyOwner = {
    -readonly [Property in keyof Owner]: Owner[Property];
};

type OwnerGetters = {
    [Property in keyof Owner as `get${Capitalize<Property>}`]: () => Owner[Property];
};

type OwnerSetters = {
    [Property in keyof Owner as `set${Capitalize<Property>}`]: (
        value: Owner[Property]
    ) => void;
};

type Getters<T> = {
    [Property in keyof T as `get${Capitalize<
        Property & string
    >}`]: () => T[Property];
};

type Setters<T> = {
    [Property in keyof T as `set${Capitalize<Property & string>}`]: (
        value: T[Property]
    ) => void;
};

type CompleteType<T> = T & Getters<T> & Setters<T>;

// class Example implements CompleteType<Owner> {
//     name: string;
//     age: number;
//     height: number;
//     jump(): void {
//         throw new Error('Method not implemented.');
//     }
//     getName: () => string;
//     getAge: () => number;
//     getHeight: () => number;
//     getJump: () => () => void;
//     setName: (value: string) => void;
//     setAge: (value: number) => void;
//     setHeight: (value: number) => void;
//     setJump: (value: () => void) => void;
// }
