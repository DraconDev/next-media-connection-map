"use client";
import { User, createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import Button from "../UI/Button";

import Image from "next/image";

type Props = {};

const LoginButton = (props: Props) => {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
        process.env.NEXT_PUBLIC_SUPABASE_KEY ?? ""
    );

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const {
                    data: { user },
                } = await supabase.auth.getUser();
                console.log(user);
                setUser(user);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, []);

    return !user ? (
        <Button link="/auth">
            <VscAccount className="w-8 h-8" />
        </Button>
    ) : (
        <Button
            action={() => supabase.auth.signOut()}
            override="p-0 flex justify-center items-center"
        >
            <Image
                src={user?.user_metadata?.avatar_url}
                width={40}
                height={40}
                alt={"Avatar"}
                loader={() => user?.user_metadata?.avatar_url}
                className="rounded-full"
            />
        </Button>
    );
};

export default LoginButton;
