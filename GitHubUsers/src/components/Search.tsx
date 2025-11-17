import { BsSearch } from "react-icons/bs";

const Search = () => {
    return (
        <div>
            <h2>Find a user:</h2>
            <p>Search your best repositories</p>
            <div>
                <input type="text" placeholder="Put the user name:" />
                <button>
                    <BsSearch></BsSearch>
                </button>
            </div>
        </div>
    )
}

export default Search