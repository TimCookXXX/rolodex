import { Component } from "react";
import './index.css';

class SearchInput extends Component {
    render() {
    const { onChangeHandler, placeholder, className } = this.props;
        return (
            <input
            className={`search-box ${className}`}
            type="search"
            placeholder={placeholder}
            onChange={onChangeHandler}
            />
        )
    }
}

export default SearchInput;