import React, {useState, useEffect} from "react";
import styles from './App.module.css';
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import CardGrid from "./components/CardGrid/CardGrid";
import mock from "./fakeData";
import Card from "./components/Card/Card";

function App() {

    const [data, setData] = useState(mock)
    const [profilesToDisplay, setProfilesToDisplay ] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")


    useEffect(() => {
        setProfilesToDisplay(mock)
    }, [data])

    useEffect(()=> {
        if(searchQuery) {
            let filteredEmployees = data.filter((employee) => employee.office.toUpperCase().includes(searchQuery.toUpperCase().trim()) || employee.name.toUpperCase().includes(searchQuery.toUpperCase().trim()) )
            if (filteredEmployees.length > 0) {
                setProfilesToDisplay(filteredEmployees)
            } else {
                setProfilesToDisplay(data)
            }
        } else {
            setProfilesToDisplay(data)
        }

    }, [searchQuery])

    return (
    <div className={styles.App}>
        <Header/>
        <SearchBar searchQuery ={searchQuery}
            setSearchQuery = {setSearchQuery}
        />
        <CardGrid>
            {profilesToDisplay ? profilesToDisplay.map(employee => <Card
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
