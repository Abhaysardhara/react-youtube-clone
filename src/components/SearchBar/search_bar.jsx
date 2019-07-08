import React from "react";
import "./search_bar.css";

const SearchBar = props => {
    return (
      <div className="search-wrapper">
        <input
          type="search"
          onChange={e => props.onSearchVideos(e.target.value)}
          className="search-bar"
          placeholder="Abhay said type any song name"
        />
      </div>
    );
}

export default SearchBar;
