import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList'

class SearchResults extends React.Component {
	render() {
		return (
			<div className="SearchResults">
				<div className="SearchResults-box">
          <h2>Results</h2>
          <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
        </div>
			</div>
		)
	}
}

export default SearchResults;