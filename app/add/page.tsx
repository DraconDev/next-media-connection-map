import { useForm } from "react-hook-form";

type Props = {};

const AddItem = (props: Props) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    defaultValue="title"
                    {...(register("title"), { required: true })}
                />
                <input
                    defaultValue="description"
                    {...(register("description"), { required: true })}
                />
                <input
                    defaultValue="image_url"
                    {...(register("image_url"), { required: true })}
                />
                <button type="submit">Add item</button>
            </form>
        </div>
    );
};

export default AddItem;
