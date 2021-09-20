import React, {useState, useEffect, useRef, useCallback} from "react";
import styles from './App.module.css';
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import CardGrid from "./components/CardGrid/CardGrid";
import mock from "./fakeData";
import Card from "./components/Card/Card";
import useEmployeeFilter from "./Hooks/useEmployeeFilter";
import useInfiniteScroll from "./Hooks/useInfiniteScroll";

function App() {

    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                headers: {
                    'Authorization': 'api-key 14:2021-09-20:tina.nielsen@tretton37.com b8153ba5f35aa240f0c612ba099ed35cb9f7e46ca489531cdb3c91f4e03e6985'
                }
            }

            try {
                const response = await fetch('https://api.1337co.de/v3/employees', options)
                const parseResponse = await response.json()
                console.log(parseResponse)
                setData(parseResponse)
            } catch (e) {
                console.log("fetch failed with", e)
            }
        }
        if(!data) {
          fetchData()
        }
    }, [data])


    //
    //filter based on search
    const [searchQuery, setSearchQuery] = useState("")
    const employees = useEmployeeFilter(searchQuery, data)


    const {isInViewPort, cardGridRef, renderIndex} = useInfiniteScroll(data, setData)

    const _itemsToRender = () => {
        if (searchQuery ) {
            return employees
        }

        if(renderIndex) {
            return data.slice(0, renderIndex)
        }

        return data.slice(0,20)
    }



    return (
    <div className={styles.App}>
        <Header/>
        <SearchBar searchQuery ={searchQuery}
            setSearchQuery = {setSearchQuery}
        />
        <CardGrid reference ={cardGridRef}>
            {data ? _itemsToRender().map((employee) =>
                <Card
                    image={employee.imagePortraitUrl}
                    name={employee.name}
                    socialMedia={employee.twitter}
                    office={employee.office}
                />)
                : "...Loading"
            }
            <div className={styles.inView} ref={isInViewPort}>Hello Friends</div>
        </CardGrid>
    </div>
    );
}

export default App;
