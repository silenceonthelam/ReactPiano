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
				PianoKeys( {keys:this.state.keys, onPlayNote:this.playNote} )
			)

		);
	},
	playNote: function(key) {
		console.log('key', key);
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

var PianoKeys = React.createClass({displayName: 'PianoKeys',
	render: function() {

		var keys = this.props.keys.map(function(key, i) {

			var isBlack = (key.pitchClass.split('').indexOf('#') !== -1 ||
							(key.pitchClass.split('').indexOf('b') !== -1) ? "black" : "") ? "black" : "",
				keyClass = "key " + isBlack;

			return (
				React.DOM.span( {'data-ocatve':key.octave, 
					'data-pitchclass':key.pitchClass,
					className:keyClass,
					onClick:this.props.onPlayNote.bind(this.key, i)}
				)
			);
		}.bind(this));

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














