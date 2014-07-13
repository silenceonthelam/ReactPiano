/** @jsx React.DOM */

var Piano = React.createClass({displayName: 'Piano',
	// getDefaultProps: function() {
	// 	return {
	// 		temperament: "equal",
	// 		numKeys: 32,
	// 		keys: keys
	// 	}
	// },
	// propTypes: {
		// temperament: React.propTypes.string,
		// numKeys: React.propTypes.number,
		// keys: React.propTypes.object
	// },
	getInitialState: function() {
		return {
			keys: this.props.keys,
			wave: "Sine"
		};
	},
	render: function() {
		return (
			React.DOM.div( {className:"piano-container"}, 
				PianoControls(null ),
				PianoKeys( {keys:this.state.keys} )
			)

		);
	}
});

var PianoControls = React.createClass({displayName: 'PianoControls',
	render: function() {
		return (
			React.DOM.div( {className:"piano-controls"}, 
				
				React.DOM.div( {className:"circle-ctrls"}, 
					React.DOM.div( {className:"circle-ctrl"}, "sine"),
					React.DOM.div( {className:"circle-ctrl"}, "squ"),
					React.DOM.div( {className:"circle-ctrl"}, "saw"),
					React.DOM.div( {className:"circle-ctrl"}, "tri")
				),

				React.DOM.div( {className:"piano-display"}
					
				)
			)
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

// <div data-pitchClass="a" data-octave="2" className="key"></div>
// 	<div data-pitchClass="bb" data-octave="2" className="key black"></div>
// <div data-pitchClass="b" data-octave="2" className="key"></div>
// <div data-pitchClass="c" data-octave="3" className="key"></div>
// 	<div data-pitchClass="db" data-octave="3" className="key black"></div>
// <div data-pitchClass="d" data-octave="3" className="key"></div>
// 	<div data-pitchClass="eb" data-octave="3" className="key black"></div>
// <div data-pitchClass="e" data-octave="3" className="key"></div>
// <div data-pitchClass="f" data-octave="3" className="key"></div>
// 	<div data-pitchClass="gb" data-octave="3" className="key black"></div>
// <div data-pitchClass="g" data-octave="3" className="key"></div>
// 	<div data-pitchClass="ab" data-octave="3" className="key black"></div>

var PianoKeys = React.createClass({displayName: 'PianoKeys',
	render: function() {

		var keys = this.props.keys.map(function(key, i) {
			return (
				React.DOM.span( {'data-ocatve':key.octave, 
					'data-pitchclass':key.pitchClass,
					className:"key " + (key.pitchClass.indexOf('#') || 
						key.pitchClass.indexOf('b')) ? "black" : ""}
				)
			);
		});

		return (
			React.DOM.div( {className:"piano-keys"}, 
				keys
			)
		);
	}
});

// var WhiteKey = {};

// var BlackKey = {};

// var Key = React.createClass({
// 	mixins: [WhiteKey, BlackKey]
// });

React.renderComponent(Piano( {keys:generateKeys(numKeys)} ), document.getElementById('piano'));














