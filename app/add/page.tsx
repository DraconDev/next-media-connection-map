"use client";
import Button from "@/components/UI/Button";
import { AddItemToDB } from "@/db/supabase";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type FormData = {
    title: string;
    description: string;
    image_url: string;
};

type Props = {};

const AddItem = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const [tags, setTags] = useState<string[]>([]);
    const [tag, setTag] = useState("");
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        AddItemToDB(data.title, data.description, data.image_url, tags);
    };
    return (
        <div className=" p-2 bg-red flex flex-col gap-3 justify-center items-center h-[80vh] w-full">
            <h1 className="text-4xl">Add an item</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2 justify-center items-center"
            >
                <div className="flex flex-col">
                    <p className="title p-1 text-2xl">Title</p>
                    <input
                        className="bg-primary p-2 rounded-md"
                        {...register("title", { required: true })}
                    />
                    <p className="text-accent text-center">
                        {errors.title && <span>Title is required</span>}
                    </p>
                </div>

                <div className="flex flex-col">
                    <p className="image_url p-1 text-2xl">Image url</p>
                    <input
                        className="bg-primary p-2 rounded-md"
                        {...register("image_url", { required: true })}
                    />
                    <p className="text-accent text-center">
                        {" "}
                        {errors.image_url && <span>Image URL is required</span>}
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="description p-1 text-2xl">Tag+</p>
                    <input
                        type="text"
                        value={tag}
                        onChange={(e) => {
                            setTag(e.target.value);
                        }}
                    />
                    <Button
                        action={() => {
                            if tag.length() > 3 {

                                setTags([...tags, tag]);
                                setTag("");
                            }
                        }}
                    />
                </div>
                <div className="flex flex-col">
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
    );
};

export default AddItem;
