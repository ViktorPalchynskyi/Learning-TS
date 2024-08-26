import React from 'react';

type HeaderProps = {
    children: string;
};

export default function Header({
    children,
}: HeaderProps): JSX.Element {
    return <h2>{children}</h2>;
}
