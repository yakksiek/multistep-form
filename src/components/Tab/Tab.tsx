interface Props {
    children: React.ReactNode;
}

function Tab({ children }: Props) {
    return <div>{children}</div>;
}

export default Tab;
