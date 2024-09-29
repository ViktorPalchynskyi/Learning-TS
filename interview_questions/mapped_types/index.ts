interface User {
    id: number;
    name: string;
    age: number;
}

type MyPartial<T> = { [K in keyof T]?: T[K] };
type MyRequered<T> = { [K in keyof T]-?: T[K] };

type MyReadonly<T> = { readonly [k in keyof T]: T[k] };
type MyNotReadonly<T> = { -readonly [k in keyof T]: T[k] };

type NullableProperties<T> = {
    [K in keyof T]: T[K] extends number ? number | null : T[K];
};

