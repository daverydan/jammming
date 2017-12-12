import React from 'react';
import './Track.css';

class Track extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isRemoval: true,
		};
	}

	renderAction() {
		if (this.state.isRemoval === true) return '-'; 
		else return '+';
	}

	render() {
		return (
			<div className="Track">
			  <div className="Track-information">
			    <h3>Track Name</h3>
			    <p>Track Artist | Track Album</p>
			  </div>
				  <a className="Track-action">{this.renderAction()}</a>
			</div>
		)
	}
}

export default Track;