import { ChangeEvent } from "react";
import "./index.css";

interface ISearchInput extends ISearchInputProps {
    className: string;
    placeholder?: string;
}

interface ISearchInputProps {
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
    onChangeHandler,
    placeholder,
    className,
}: ISearchInput) => {
    return (
        <input
            className={`search-box ${className}`}
            type="search"
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    );
};

export default SearchInput;
