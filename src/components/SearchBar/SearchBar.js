import React, { useEffect, useState } from "react";
import useDebounce from "../../Hooks/useDebounce";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const { setSearchQuery } = props;

  const [searchTerm, setSearchTerm] = useState("");

  const debounceSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debounceSearch) {
      console.log("inside searchBar, will set search to", debounceSearch);
      setSearchQuery(debounceSearch);
    } else {
      console.log("inside searchBar, clearing search terms");
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

export default SearchBar;
