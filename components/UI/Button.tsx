type Props = {
    onClick?: () => void;
    children?: JSX.Element | JSX.Element[] | string;
};

const Button = (props: Props) => {
    return <div className="p-2 bg-secondary">{props.children}</div>;
};

export default Button;
