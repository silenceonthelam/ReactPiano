var _ 			 = require("lodash"),
	PianoActions = require("../actions/PianoActions"),
	React 		 = require("react");

var DisplayControl = React.createClass({
	propTypes: {
		chordMembers: React.PropTypes.arrayOf(React.PropTypes.string),
		currentChord: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			chordMembers: ["c","e","g"], //todo: how to properly display sharps/flats/etc.
			currentChord: "C Major"
		};
	},
	render: function() {
		// {this.props.currentChord}
		// {this.renderChordMembers(this.props.chordMembers)}
		return (
			<div className="ctrls__display">
				<div className="display__info">
					<span className="display__info__chord-name" 
						onClick={this.updateDisplayChordChange}>
						
					</span>
				</div>
				<div className="display__chord-members">
					
				</div>
			</div>
		);
	},
	renderChordMembers: function(chordMembers) {
		//todo: isHighlighted
		return _.map(chordMembers, function(chordMember) {
			return (
				<span className="display__chord-member" 
						key={"note-" + chordMember}
						onClick={this.updateChordMemberClick}>
					{chordMember}
				</span>
			);
		}, this);
	},
	updateChordMemberClick: function() {

	},
	updateDisplayChordChange: function() {
		// PianoActions.updateChordDisplay(e.target.value);
	}
});

module.exports = DisplayControl;