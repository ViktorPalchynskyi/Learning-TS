import React from 'react';

type GeeterProps = {
    person: string;
};

export default function Greeter({ person }: GeeterProps): JSX.Element {
    return <h2>Hi, {person}</h2>;
}
