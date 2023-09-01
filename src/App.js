import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list";
import SearchInput from "./components/search-box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
        )
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    console.log('render App')
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchInput className='monster-search-box' onChangeHandler={onSearchChange} placeholder='search monster' />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
