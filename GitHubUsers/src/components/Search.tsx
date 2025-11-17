type SearchProps = {
    loadUser: (username: string) => Promise<void>;
}

import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ loadUser }: SearchProps) => {
    const [username, setUsername] = useState("");

    return (
        <div>
            <h2>Find a user:</h2>
            <p>Search your best repositories</p>
            <div>
                <input type="text" 
                placeholder="Put the user name:" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={() => loadUser(username)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}

export default Search