import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {
	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.save = this.save.bind(this);
	}

	handleNameChange(event) {
		this.props.onNameChange(event.target.value)
	}

	save(event) {
		event.preventDefault();
		this.props.onSave(this.props.playlistName, this.props.playlistTracks);
		// event.target.parentNode.childNodes[0].value = 'New Playlist';
	}

	render() {
		return (
			<div className="Playlist">
			  <input defaultValue="New Playlist" onChange={this.handleNameChange} />
			  <TrackList playlistName={this.props.playlistName} tracks={this.props.playlistTracks} onRemove={this.props.onRemove} />
			  <a className="Playlist-save" onClick={this.save}>SAVE TO SPOTIFY</a>
			</div>
		)
	}
}

export default PlayList;