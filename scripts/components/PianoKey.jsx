var React 		 = require("react"),
	PianoActions = require("../actions/PianoActions");

var PianoKey = React.createClass({
	propTypes: {
		keyClass: React.PropTypes.string,
		keyNumber: React.PropTypes.number,
		octave: React.PropTypes.number,
		pitchClass: React.PropTypes.string,
	},
	getDefaultProps: function() {
		return {
			keyClass: "",
			keyNumber: 0,
			octave: 0,
			pitchClass: ""
		};
	},
	render: function() {
		return (
			<span className={"key " + this.props.keyClass}
				onMouseDown={this.playNote}
				onMouseUp={this.stopNote}>
			</span>
		);
	},
	isFunctionalKey: function(keyPressed) {
		var actionableKeys = [
			1,2,3,4,5,6,7,8, 
			"tab",
			"a","w","s","e",
			"d","f","t","g","y",
			"h","u","j","k","o",
			"l","p",";","'",
			"z", "x", "c", "v"
		];

		return actionableKeys.indexOf(keyPressed);
	},
	playNote: function() {
		PianoActions.playNote(this.props);
	},
	playSpecificNote: function(e) { //todo
		// onKeyDown={this.playSpecificNote}
		// onKeyUp={this.stopSpecificNote}
		
		//todo: get focus
		var keyPressed = e;

		console.log("e", e);

		// if (isFunctionalKey(keyPressed)) {
		// 	PianoActions.playSpecificNote(this.props, keyPressed);
		// }
	},
	stopNote: function() {
		PianoActions.stopNote(this.props);
	},
	stopSpecificNote: function(e) { //todo
		// var keyPressed = e;

		// if (isFunctionalKey(keyPressed)) {
		// 	PianoActions.stopSpecificNote(this.props, keyPressed);
		// }
	}
});



module.exports = PianoKey;