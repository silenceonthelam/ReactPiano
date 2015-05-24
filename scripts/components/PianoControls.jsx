var DetuneControl 	   = require("./DetuneControl"),
	DisplayControl     = require("./DisplayControl"),
	GainControl 	   = require("./GainControl"),
	OscControl 		   = require("./OscControl"),
	React 			   = require("react"),
	TemperamentControl = require("./TemperamentControl");
	
var PianoControls = React.createClass({
	propTypes: {
		currentChord: React.PropTypes.string,
		currentNotes: React.PropTypes.array,
		synthSettings: React.PropTypes.object
	},
	getDefaultProps: function() {
		return {
			currentChord: "",
			currentNotes: [],
			synthSettings: {}
		};
	},
	render: function() {	
		return (
			<div className="piano__controls">
				<div className="piano__controls__col">
					<div className="controls__group">
						<GainControl
							val={this.props.synthSettings.masterGain} />
						<DetuneControl 
							val={this.props.synthSettings.detuneAmt} />
					</div>
					<OscControl 
						val={this.props.synthSettings.oscType} />
				</div>
				<div className="piano__controls__col">
					<DisplayControl
						currentChord={this.props.currentChord}
						currentNotes={this.props.currentNotes} />
				</div>
				<div className="piano__controls__col">
					<TemperamentControl 
						val={this.props.synthSettings.temperament} />
				</div>
			</div>
		);
	}
});

module.exports = PianoControls;