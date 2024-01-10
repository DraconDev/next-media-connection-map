import { FaPlus } from "react-icons/fa";
import { SiChainlink } from "react-icons/si";
import Button from "../UI/Button";
import LoginButton from "./LoginButton";
import SearchBar from "./SearchBar";

type Props = {};

const FirstRow = (props: Props) => {
    return (
        <div className="w-full flex gap-2">
            <Button link="/">
                <SiChainlink className="w-8 h-8" />
            </Button>
            <SearchBar />
            <Button link="/add">
                <FaPlus className="w-8 h-8" />
            </Button>
            <LoginButton />
        </div>
    );
};

export default FirstRow;
