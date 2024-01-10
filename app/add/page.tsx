"use client";
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

    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
    return (
        <div className="h-screen p-2 bg-red flex flex-col gap-2 justify-center items-center">
            <h1>Add an item</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2 justify-center items-center"
            >
                                <p className="title p-1 text-xl">title</p>
                <input
                    defaultValue="title"
                    className="bg-primary p-2 rounded-md"
                    {...register("title", { required: true })}
                />
                                <p className="description p-1 text-xl">description</p>
                <input
                    defaultValue="description"
                    className="bg-primary p-2 rounded-md"

                    {...register("description", { required: true })}
                />
                <p className="image_url p-1 text-xl">image_url</p>
                <input
                    defaultValue="image_url"
                    className="bg-primary p-2 rounded-md"

                    {...register("image_url", { required: true })}
                />
                <button type="submit">Add item</button>
            </form>
            {errors.title && <span>Title is required</span>}
            {errors.description && <span>Description is required</span>}
            {errors.image_url && <span>Image URL is required</span>}
        </div>
    );
};

export default AddItem;
