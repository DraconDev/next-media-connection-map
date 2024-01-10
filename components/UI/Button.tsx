"use client";

import Link from "next/link";

// import link

type Props = {
    onClick?: () => void;
    children?: JSX.Element | JSX.Element[] | string;
    link?: string;
};

const Button = (props: Props) => {
    const style = "p-2 bg-primary rounded-lg py-1";
    return props.link ? (
        <Link
            className={style}
            href={props.link}
        >
            {props?.children}
        </Link>
    ) : (
        <button className={style}>{props?.children}</button>
    );
};

export default Button;
