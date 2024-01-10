type Props = {
    onClick?: () => void;
    children?: JSX.Element | JSX.Element[] | string;
};

const Button = (props: Props) => {
    return <button className="p-2 bg-secondary ">{props.children}</button>;
};

export default Button;
