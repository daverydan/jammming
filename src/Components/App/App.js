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
			playlistName: 'Danny\'s Playlist',
			playlistTracks: [
				{
					name: 'O Holy Night',
					artist: 'Mercy Me',
					album: 'The Christmas Sessions',
				},
				{
					name: 'O Come All Ye Faithful',
					artist: 'Casting Crowns',
					album: 'Peace On Earth',
				},
				{
					name: 'Noel',
					artist: 'Lauren Daigle',
					album: 'Adore: Christmas Songs of Worship',
				},
			],
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
			    	<PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
		    	</div>
	    	</div>
    	</div>
    )
  }
}

export default App;
