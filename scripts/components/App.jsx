var Piano 	   = require("./Piano"),
	PianoStore = require("../stores/PianoStore"),
	React 	   = require("react");

function getPianoState() {
	return {
		currentChord: PianoStore.getCurrentChord(),
		currentNotes: PianoStore.getCurrentNotes(),
		keys: PianoStore.getAllKeys(),
		synthSettings: PianoStore.getSynthSettings()
	};
}

var App = React.createClass({
	getInitialState: function() {
		return getPianoState();
	},
	render: function() {
		return (
			<div className="piano" ref="piano">
				<div className="piano__side--left"></div>
				<Piano 
					currentChord={this.state.currentChord}
					currentNotes={this.state.currentNotes}
					keys={this.state.keys}
					synthSettings={this.state.synthSettings} />
				<div className="piano__side--right"></div>
			</div>
		);
	},
	componentDidMount: function() {
		PianoStore.addChangeListener(this._onChange);
		// this.refs.piano.getDOMNode().focus();
	},
	componentWillUnmount: function() {
		PianoStore.removeChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState(getPianoState());
	}
});

module.exports = App;