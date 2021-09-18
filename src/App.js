import React, {useState, useEffect} from "react";
import styles from './App.module.css';
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import CardGrid from "./components/CardGrid/CardGrid";
import mock from "./fakeData";
import Card from "./components/Card/Card";

function App() {


  return (
    <div className={styles.App}>
        <Header/>
        <SearchBar/>
        <CardGrid>
            {mock.map(employee => <Card
                image={employee.imagePortraitUrl}
                name={employee.name}
                socialMedia={employee.twitter}
                office={employee.office}
            />)}
        </CardGrid>
    </div>
  );
}

export default App;
