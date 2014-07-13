/** @jsx React.DOM */

var Piano = React.createClass({
	getDefaultProps: function() {
		return {
			temperament: "equal",
			numKeys: 32,
			keys: keys
		}
	},
	propTypes: {
		temperament: React.propTypes.string,
		numKeys: React.propTypes.number,
		keys: React.propTypes.object
	},
	getInitialState: function() {
		return {
			wave: "Sine"
		};
	},
	render: function() {
		return (
			<div className="piano-container">
				<PianoControls />
				<PianoKeys />
			</div>

		);
	}
});

var PianoControls = React.createClass({
	render: function() {
		return (
			<div className="piano-controls">
				
				<div className="circle-ctrls">
					<div className="circle-ctrl">sine</div>
					<div className="circle-ctrl">squ</div>
					<div className="circle-ctrl">saw</div>
					<div className="circle-ctrl">tri</div>
				</div>

				<div className="piano-display">
					
				</div>
			</div>
		);
	}
});

// //btnCtrl mixin?

// var TimbreControls = React.createClass({

// });

// //knob mixin?

// var GainControl = React.createClass({
	// render: function() {
	// 	return (
	// 		<label for="">
	// 			<input type="range">
	// 			Gain
	// 		</label>
	// 	);
	// }
// });

// var DetuneControl = React.createClass({

// });


// var DisplayControl = React.createClass({

// });




var PianoKeys = React.createClass({
	render: function() {
		return (
			<div className="piano-keys">

				<div data-pitchClass="a" data-octave="2" className="key"></div>
					<div data-pitchClass="bb" data-octave="2" className="key black"></div>
				<div data-pitchClass="b" data-octave="2" className="key"></div>
				<div data-pitchClass="c" data-octave="3" className="key"></div>
					<div data-pitchClass="db" data-octave="3" className="key black"></div>
				<div data-pitchClass="d" data-octave="3" className="key"></div>
					<div data-pitchClass="eb" data-octave="3" className="key black"></div>
				<div data-pitchClass="e" data-octave="3" className="key"></div>
				<div data-pitchClass="f" data-octave="3" className="key"></div>
					<div data-pitchClass="gb" data-octave="3" className="key black"></div>
				<div data-pitchClass="g" data-octave="3" className="key"></div>
					<div data-pitchClass="ab" data-octave="3" className="key black"></div>

				<div data-pitchClass="a" data-octave="3" className="key"></div>
					<div data-pitchClass="bb" data-octave="3" className="key black"></div>
				<div data-pitchClass="b" data-octave="3" className="key"></div>
				<div data-pitchClass="c" data-octave="4" className="key"></div>
					<div data-pitchClass="db" data-octave="4" className="key black"></div>
				<div data-pitchClass="d" data-octave="4" className="key"></div>
					<div data-pitchClass="eb" data-octave="4" className="key black"></div>
				<div data-pitchClass="e" data-octave="4" className="key"></div>
				<div data-pitchClass="f" data-octave="4" className="key"></div>
					<div data-pitchClass="gb" data-octave="4" className="key black"></div>
				<div data-pitchClass="g" data-octave="4" className="key"></div>
					<div data-pitchClass="ab" data-octave="4" className="key black"></div>

				<div data-pitchClass="a" data-octave="4" className="key"></div>
					<div data-pitchClass="bb" data-octave="4" className="key black"></div>
				<div data-pitchClass="b" data-octave="4" className="key"></div>
				<div data-pitchClass="c" data-octave="5" className="key"></div>
					<div data-pitchClass="db" data-octave="5" className="key black"></div>
				<div data-pitchClass="d" data-octave="5" className="key"></div>
					<div data-pitchClass="eb" data-octave="5" className="key black"></div>
				<div data-pitchClass="e" data-octave="5" className="key"></div>
				<div data-pitchClass="f" data-octave="5" className="key"></div>
					<div data-pitchClass="gb" data-octave="5" className="key black"></div>
				<div data-pitchClass="g" data-octave="5" className="key"></div>
					<div data-pitchClass="ab" data-octave="5" className="key black"></div>

			</div>
		);
	}
});

// var WhiteKey = {};

// var BlackKey = {};

// var Key = React.createClass({
// 	mixins: [WhiteKey, BlackKey]
// });

React.renderComponent(<Piano />, document.getElementById('piano'));














