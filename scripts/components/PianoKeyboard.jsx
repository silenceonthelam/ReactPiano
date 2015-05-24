var _ 		 = require("lodash"),
	React    = require("react"),
	PianoKey = require("./PianoKey");

var PianoKeyboard = React.createClass({
	propTypes: {
		keys: React.PropTypes.array
	},
	getDefaultProps: function() {
		return {
			keys: []
		};
	},
	shouldComponentUpdate: function(nextProps) {
		return this.props.keys.length !== nextProps.keys.length;
	},
	render: function() {
		return (
			<div className="piano__keys">
				{this.renderPianoKeys(this.props.keys)}
			</div>
		);
	},
	renderPianoKeys: function(pianoKeys) {
		//todo: convert note name to pitch class
		return _.map(pianoKeys, function(key) {
			var isBlack = (key.pitchClass.split('').indexOf('#') !== -1 ||
							(key.pitchClass.split('').indexOf('b') !== -1) 
							? "black" : "") ? "black" : "",
				keyClass = isBlack;

			// note: "key" is the "key" in the React sense, not a piano key
			return (
				<PianoKey
					key={"key-" + key.keyNumber} 
					keyClass={keyClass}
					keyNumber={key.keyNumber}
					octave={key.octave}
					pitchClass={key.pitchClass} />
			);
		});
	}
});

module.exports = PianoKeyboard;