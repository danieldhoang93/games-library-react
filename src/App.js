import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();

    this.state = {
      gamesLibrary: [],
      searchField: '',
    }

  }

  componentDidMount() {
    fetch('https://rawg-video-games-database.p.rapidapi.com/games', {
      headers: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "8b85c99eb4msh81792c776352b02p13b5c9jsne62e7387b31c",
        "useQueryString": true
      }})
      .then(response => response.json())
      .then(games => this.setState({gamesLibrary:games.results}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const { gamesLibrary, searchField} = this.state;
    const filteredGames = gamesLibrary.filter(game =>
      game.name.toLowerCase().includes(searchField.toLowerCase())
      );
    
    return (
      <div className="App">
        <h1>Games Library</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}/>
        <CardList gamesLibrary={filteredGames}/>
      </div>
    );
  }
}

export default App;
