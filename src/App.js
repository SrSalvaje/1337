import styles from './App.module.css';
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import CardGrid from "./components/CardGrid/CardGrid";


function App() {
  return (
    <div className={styles.App}>
        <Header/>
        <SearchBar/>
        <CardGrid>

        </CardGrid>
    </div>
  );
}

export default App;
