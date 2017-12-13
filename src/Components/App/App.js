import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			searchResults: 'The Thunder Rolls',
		};
	}

  render() {
    return (
    	<div>
    		<h1>Ja<span className="highlight">mmm</span>ing</h1>
    		<div className="App">
		  		<SearchBar />
		    	<div className="App-playlist">
			    	<SearchResults searchResults={this.state.searchResults} />
			    	<PlayList />
		    	</div>
	    	</div>
    	</div>
    )
  }
}

export default App;
