"use client";
import Button from "@/components/UI/Button";
import { AddItemToDB } from "@/db/supabase";
import { ItemType } from "@/type/item";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type FormData = {
    title: string;
    description: string;
    image_url: string;
};

type Props = {
    item?: ItemType;
};

const UpdateForm = ({ item }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            title: item?.title ?? "",
            description: item?.description ?? "",
            image_url: item?.image_url ?? "",
        },
    });

    const router = useRouter();

    const [tag, setTag] = useState(item?.tags?.[0] ?? "");
    const [tag2, setTag2] = useState(item?.tags?.[1] ?? "");
    const [tag3, setTag3] = useState(item?.tags?.[2] ?? "");
    const [tag4, setTag4] = useState(item?.tags?.[3] ?? "");
    const [tag5, setTag5] = useState(item?.tags?.[4] ?? "");

    const onSubmit: SubmitHandler<FormData> = (data) => {
        AddItemToDB(
            data.title,
            data.description,
            data.image_url,
            [tag, tag2, tag3, tag4, tag5]
                .filter((x) => x !== "" && typeof x === "string")
                .map((x) => x.trim())
        ).finally(() => {
            router.replace("/");
        });
    };
    return (
        <div className="p-2   justify-center  h-[80vh] w-full flex">
            <div className="max-w-[400px] flex flex-col gap-3 w-full">
                <h1 className="text-4xl text-center">Add item</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-2 justify-center items-center w-full"
                >
                    <div className="flex flex-col w-full">
                        <p className="title p-1 text-2xl">Title</p>
                        <input
                            className="bg-primary p-2 rounded-md"
                            {...register("title", { required: true })}
                        />
                        <p className="text-accent text-center">
                            {errors.title && <span>Title is required</span>}
                        </p>
                    </div>

                    <div className="flex flex-col w-full">
                        <p className="image_url p-1 text-2xl">Image url</p>
                        <input
                            className="bg-primary p-2 rounded-md"
                            {...register("image_url", { required: true })}
                        />
                        <p className="text-accent text-center">
                            {" "}
                            {errors.image_url && (
                                <span>Image URL is required</span>
                            )}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <p className="description p-1 text-2xl">Tags (max 5)</p>
                        <input
                            type="text"
                            className="bg-primary p-2 rounded-md"
                            value={tag}
                            onChange={(e) => {
                                setTag(e.target.value);
                            }}
                        />
                        <input
                            type="text"
                            className="bg-primary p-2 rounded-md"
                            value={tag2}
                            onChange={(e) => {
                                setTag2(e.target.value);
                            }}
                        />
                        <input
                            type="text"
                            className="bg-primary p-2 rounded-md"
                            value={tag3}
                            onChange={(e) => {
                                setTag3(e.target.value);
                            }}
                        />
                        <input
                            type="text"
                            className="bg-primary p-2 rounded-md"
                            value={tag4}
                            onChange={(e) => {
                                setTag4(e.target.value);
                            }}
                        />
                        <input
                            type="text"
                            className="bg-primary p-2 rounded-md"
                            value={tag5}
                            onChange={(e) => {
                                setTag5(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <p className="description p-1 text-2xl">Description</p>
                        <textarea
                            className="bg-primary p-2 rounded-md min-h-[200px]"
                            {...register("description", { required: true })}
                        />
                        <p className="text-accent text-center">
                            {errors.description && (
                                <span>Description is required</span>
                            )}
                        </p>
                    </div>
                    <Button
                        type="submit"
                        override="w-full"
                    >
                        Add item
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default UpdateForm;
