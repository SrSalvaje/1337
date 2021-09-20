import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import CardGrid from "./components/CardGrid/CardGrid";
import mock from "./fakeData";
import Card from "./components/Card/Card";
import useEmployeeFilter from "./Hooks/useEmployeeFilter";
import useInfiniteScroll from "./Hooks/useInfiniteScroll";
import useFetch from "./Hooks/useFetch";

function App() {
  const [data, isLoading, hasError, retry] = useFetch();

  //
  //filter based on search
  const [searchQuery, setSearchQuery] = useState("");
  const employees = useEmployeeFilter(searchQuery, data);

  const { isInViewPort, cardGridRef, renderIndex } = useInfiniteScroll();

  const _itemsToRender = () => {
    if (searchQuery) {
      console.log(
        "inside items to render, there is a search query",
        searchQuery,
        employees
      );
      return employees;
    }

    if (renderIndex) {
      return data.slice(0, renderIndex);
    }
    //how many cards should be displayed on initial load
    return data.slice(0, 20);
  };

  return (
    <div className={styles.App}>
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CardGrid reference={cardGridRef}>
        {isLoading && "...is Loading"}
        {hasError && `ups, something went wrong: ${hasError}`}
        {data &&
          _itemsToRender().map((employee, i) => (
            <Card
              key={`${i}-${employee.name.replace(/\s+/g, "")}`}
              image={employee.imagePortraitUrl}
              name={employee.name}
              socialMedia={employee.twitter}
              office={employee.office}
            />
          ))}
        <div className={styles.inView} ref={isInViewPort}></div>
      </CardGrid>
    </div>
  );
}

export default App;
