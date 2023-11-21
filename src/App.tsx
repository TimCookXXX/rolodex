import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list";
import SearchInput from "./components/search-box";
import { getData } from "./utils/data.utils";

export interface Monster {
    id: string;
    name: string;
    email: string;
}

const App = () => {
    const [searchField, setSearchField] = useState("");
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getData<Monster[]>(
                "https://jsonplaceholder.typicode.com/users"
            );
            setMonsters(users);
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        });

        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = e.target.value.toLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <div className="App">
            <h1 className="app-title">Monster Rolodex</h1>
            <SearchInput
                className="monster-search-box"
                onChangeHandler={onSearchChange}
                placeholder="search monster"
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
};

export default App;
