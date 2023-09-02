import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list";
import SearchInput from "./components/search-box";

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  const [title, setTitle] = useState('')

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  const onTitleChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase()
    setTitle(searchFieldString)
  }

  useEffect(() => {
    console.log('render effect');
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users))
  }, [])


  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })

    console.log('UseEffect filtered monsters');

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])


  return (
    <div className="App">
    <h1 className="app-title">{title}</h1>
    <SearchInput className='monster-search-box' onChangeHandler={onSearchChange} placeholder='search monster' />
    <SearchInput className='monster-search-box' onChangeHandler={onTitleChange} placeholder='search monster' />
    <CardList monsters={filteredMonsters} />
  </div>
  )
}

export default App;
