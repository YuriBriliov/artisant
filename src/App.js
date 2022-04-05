import React, {useState, useEffect} from "react";
import CardList from "./components/CardList/CardList";
import './App.css'
import Header from "./components/Header/Header";
import Filter from "./components/FIlter/Filter";
function App() {

    const [cards, setCards] = useState([]);
    const [filtered, setFiltered] = useState(cards);

    useEffect(() => {
      async function fetchData(){
        const response = await fetch("https://artisant.io/api/products");
        const {
          data: { products },
        } = await response.json();
        // console.log(products);
        setCards(products);
      }
      fetchData()
    }, []);

    useEffect(()=>{
        setFiltered(cards);
    },[cards])

    function Filtered(arg){
      if(arg.target.value === 'avaliable'){
        setFiltered([...cards.filter((item) => item.quantity_available < 1)]);
      }else if (arg.target.value === 'all'){
        setFiltered(cards)
      }
    }

  return (
    <div className="App">
      <Header />
      <Filter filterIt={Filtered} />
      <CardList items={filtered} />
    </div>
  );
}

export default App;
