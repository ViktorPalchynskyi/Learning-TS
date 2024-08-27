interface Owner {
    name: string;
    age: number;
    height: number;
    jump(): void;
}
type PartialOwner = Omit<Owner, 'name' | 'jump'> & Partial<Pick<Owner, 'name' | 'jump'>>;
type MyPartial<T extends object, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type MyReadonly<T extends object, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;
declare const owner: MyReadonly<Owner, 'name' | 'jump'>;
