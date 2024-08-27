export interface IdLabel {
    id: number;
}

interface NameLabel {
    name: string;
}

type NameId<Lable extends string | number> = Lable extends string ? NameLabel : IdLabel;

const createLabel = <Lable extends number | string>(label: Lable): NameId<Lable> => {
    throw '';
};

const a = createLabel(123);
const b = createLabel('123');
