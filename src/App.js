import React, {useState, useEffect} from "react";
import styles from './App.module.css';
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import CardGrid from "./components/CardGrid/CardGrid";
import mock from "./fakeData";
import Card from "./components/Card/Card";
import useEmployeeFilter from "./Hooks/useEmployeeFilter";

function App() {

    const [data, setData] = useState(mock)

    const [searchQuery, setSearchQuery] = useState("")

    const employees = useEmployeeFilter(searchQuery, data)

    return (
    <div className={styles.App}>
        <Header/>
        <SearchBar searchQuery ={searchQuery}
            setSearchQuery = {setSearchQuery}
        />
        <CardGrid>
            {employees ? employees.map(employee => <Card
                image={employee.imagePortraitUrl}
                name={employee.name}
                socialMedia={employee.twitter}
                office={employee.office}
            />)
                : "...Loading"
            }
        </CardGrid>
    </div>
    );
}

export default App;
