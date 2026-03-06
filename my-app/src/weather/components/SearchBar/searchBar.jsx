import { useState } from "react";
import "./searchBar.css";

const SearchBar = ({onSearch}) => {
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        if (inputValue.trim() !== "") {
            onSearch(inputValue);
        }
    }
    return(
        <div className = "search-container">
            <input 
                type="text" 
                className = "search-input"
                placeholder="Введите город..."
                id="cityInput"
                value={inputValue}
                onChange = {(e) => setInputValue(e.target.value)}
                onKeyDown = {(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
            <button className="search-btn" onClick={handleSearch} id="searchBtn">
                    <svg width="20"
                        height="20"
                        viewBox = "0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                    </svg>
            </button>
        </div>
    );
}

export default SearchBar;