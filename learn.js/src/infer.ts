import { ReactNode } from 'react';

export function call<Args extends any[], ReturnType>(
    calledFunction: (...args: Args) => ReturnType,
    ...args: Args
): ReturnType {
    return calledFunction(...args);
}

function getProperty<T extends object, K extends keyof T = keyof T>(
    obj: T,
    key: K
): T[K] {
    return obj[key];
}

const result = call(
    getProperty,
    { a: 'asdf', b: 'azcv', c: 24 },
    'c'
);

type GenericFunction = (...args: any[]) => any;

type FunctionReturn<FucntionType extends GenericFunction> =
    FucntionType extends (...args: any[]) => infer ReturnType
        ? ReturnType
        : never;

interface Info {
    date: Date;
    timestamp: string;
    name: string;
}

type Obj = { a: Info };

// type RetrunType = FunctionReturn<typeof getProperty<Obj, 'a'>>
type test = ReturnType<typeof getProperty<Obj, 'a'>>;

// type Constructor = new (...args: any[])

type GetComponentProps<
    Component extends (props: { children: any }) => ReactNode
> = Component extends (props: infer Props) => ReactNode
    ? Props
    : never;

// const ButtonContainer: JSX.Element<Omit<GetComponentProps<typof Button>, 'title'>> = (props) => {
//     const title = useSelector((state) => selectByButtonTitle(state, userId));

//     return <Button  {...props} title={title}/>;
// }
