import { VscAccount } from "react-icons/vsc";
import Button from "../UI/Button";

type Props = {};

const LoginButton = (props: Props) => {
    return (
        <div>
            <Button>
                <VscAccount className={"w-8 h-8"} />
            </Button>
        </div>
    );
};

export default LoginButton;
