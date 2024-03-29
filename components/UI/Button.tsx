"use client";

import Link from "next/link";

// import link

type Props = {
    action?: () => void;
    children?: JSX.Element | JSX.Element[] | string;
    link?: string;
    override?: string;
    type?: "button" | "submit";
};

const Button = (props: Props) => {
    const style =
        "p-2 bg-primary   hover:text-accent text-xl  transition-all duration-200 outline-1 outline-accent flex justify-center items-center" +
        ` ${props?.override && props.override}`;
    return props.link ? (
        <Link
            className={style}
            href={props.link}
            onClick={props?.action}
        >
            {props?.children}
        </Link>
    ) : (
        <button
            className={style}
            onClick={props?.action}
            type={props?.type ? props.type : "button"}
        >
            {props?.children}
        </button>
    );
};

export default Button;
