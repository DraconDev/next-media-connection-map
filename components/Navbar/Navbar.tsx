import SearchBar from "./SearchBar";
import Tags from "./Tags";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div>
            <SearchBar />
            Navbar
            <Tags />
        </div>
    );
};

export default Navbar;
