var PianoControls = require("./PianoControls"), 
	PianoKeyboard = require("./PianoKeyboard"),
	React 		  = require("react");

var Piano = React.createClass({
	propTypes: {
		currentChord: React.PropTypes.string,
		currentNotes: React.PropTypes.array,
		keys: React.PropTypes.array,
		synthSettings: React.PropTypes.object
	},
	getDefaultProps: function() {
		return {
			currentChord: "",
			currentNotes: [],
			keys: [],
			synthSettings: {}
		};
	},
	render: function() {
		return (
			<div className="piano__wrapper">
				<PianoControls
					currentChord={this.props.currentChord}
					currentNotes={this.props.currentNotes}
					synthSettings={this.props.synthSettings} />
				<div className="piano__shelf">	
				</div>
				<PianoKeyboard 
					currentNotes={this.props.currentNotes}
					keys={this.props.keys} />
			</div>
		);
	}
});

module.exports = Piano;