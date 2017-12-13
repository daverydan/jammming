import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			searchResults: [{
				id: 4,
				name: 'Mary, Did You Know',
				artist: 'Pentatonix',
				album: 'That\'s Christmas To Me',
			}, {
				id: 5,
				name: 'Little Drummer Boy',
				artist: 'for KING & COUNTRY',
				album: 'Into The Silent Night',
			}],
			playlistName: 'Danny\'s Playlist',
			playlistTracks: [{
					id: 1,
					name: 'O Holy Night',
					artist: 'Mercy Me',
					album: 'The Christmas Sessions',
				}, {
					id: 2,
					name: 'O Come All Ye Faithful',
					artist: 'Casting Crowns',
					album: 'Peace On Earth',
				}, {
					id: 3,
					name: 'Noel',
					artist: 'Lauren Daigle',
					album: 'Adore: Christmas Songs of Worship',
			}],
		};
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.updatePlaylistName = this.updatePlaylistName.bind(this);
	}

	addTrack(newTrack) {
		let playlist = this.state.playlistTracks;
		const trackFoundInPlaylist = playlist.find(track => track.id === newTrack.id);
    if (!trackFoundInPlaylist) {
      playlist.push(newTrack);
      this.setState({playlistTracks: playlist});
    }
	}

	removeTrack(removeTrack) {
		const updatedPlaylist = this.state.playlistTracks.filter(track => track.id !== removeTrack.id);
    this.setState({playlistTracks: updatedPlaylist});
	}

	updatePlaylistName(name) {
		this.setState({ playlistName: name });
	}

  render() {
    return (
    	<div>
    		<h1>Ja<span className="highlight">mmm</span>ing</h1>
    		<div className="App">
		  		<SearchBar />
		    	<div className="App-playlist">
			    	<SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
			    	<PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} />
		    	</div>
	    	</div>
    	</div>
    )
  }
}

export default App;
