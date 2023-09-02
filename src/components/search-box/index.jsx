import './index.css';

const SearchInput = ({ onChangeHandler, placeholder, className }) => {

    console.log('Render SearchInput')
    
        return (
            <input
            className={`search-box ${className}`}
            type="search"
            placeholder={placeholder}
            onChange={onChangeHandler}
            />
        )
    }

export default SearchInput;