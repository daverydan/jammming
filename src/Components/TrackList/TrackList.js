import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

const tracks = [
	{
		id: 1,
		name: 'Amarillo by Morning',
		artist: 'George Strait',
		album: 'Greatest Hits',
	},
	{
		id: 2,
		name: 'The Thunder Rolls',
		artist: 'Garth Brooks',
		album: 'No Fences',
	},
	{
		id: 3,
		name: 'You\'ll Never Leave Harlan Alive',
		artist: 'Brad Paisley',
		album: 'Part II',
	},
	{
		id: 4,
		name: 'Amarillo by Morning',
		artist: 'Moe Bandy',
		album: 'Sings His Favorite Classics',
	}
];


class TrackList extends React.Component {
	matchTrack(track) {
		if (this.props.track === track.name || this.props.track === track.artist || this.props.track === track.album) return true;
	}

	render() {
		return(
			<div className="TrackList">
				{
					tracks.map( track => 
						this.matchTrack(track) ? <Track key={'track-'+track.id} track={track} /> : null
					)
				}
			</div>
		)
	}
}

export default TrackList;