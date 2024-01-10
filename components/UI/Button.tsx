"use client";

import Link from "next/link";

// import link

type Props = {
    action?: () => void;
    children?: JSX.Element | JSX.Element[] | string;
    link?: string;
    override?: string;
};

const Button = (props: Props) => {
    const style =
        "p-2 bg-primary rounded-lg  hover:bg-accent text-xl hover:text-primary transition-all duration-300 outline-1 outline-accent" +
        ` ${props?.override && props.override}`;
    return props.link ? (
        <Link
            className={style}
            href={props.link}
        >
            {props?.children}
        </Link>
    ) : (
        <button
            className={style}
            onClick={props?.action}
        >
            {props?.children}
        </button>
    );
};

export default Button;
