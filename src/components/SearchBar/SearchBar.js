import React, { useEffect, useState } from "react";
import useDebounce from "../../Hooks/useDebounce";
import styles from "./SearchBar.module.css";
import PropTypes from "prop-types";

const SearchBar = (props) => {
  const { setSearchQuery } = props;

  const [searchTerm, setSearchTerm] = useState("");

  const debounceSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debounceSearch) {
      setSearchQuery(debounceSearch);
    } else {
      setSearchTerm("");
      setSearchQuery("");
    }
  }, [debounceSearch]);

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="search by name or office"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
    </div>
  );
};

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func,
};

export default SearchBar;
