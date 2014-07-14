/** @jsx React.DOM */

var ctx = new webkitAudioContext(),
	osc,
	gainNode,
	compressor,
	freq;

function calcTemperament(key) {
	//todo: different versions of temperaments
	return 440 * (Math.pow(Math.pow(2,1/12), (key + 1 - 49)));
}

function calcPy(tuningRatio) {
	tuningRatio[0] = 1;
	tuningRatio[1] = 256/243;
	tuningRatio[2] = 9/8;
	tuningRatio[3] = 32/27;
	tuningRatio[4] = 81/64;
	tuningRatio[5] = 4/3;
	tuningRatio[6] = 729/512;
	tuningRatio[7] = 3/2;
	tuningRatio[8] = 128/81;
	tuningRatio[9] = 27/16;
	tuningRatio[10] = 16/9;
	tuningRatio[11] = 243/128;
	return tuningRatio;
}

function calcJust(tuningRatio) {
	tuningRatio[0] = 1;
	tuningRatio[1] = 16/15;
	tuningRatio[2] = 9/8;
	tuningRatio[3] = 6/5;
	tuningRatio[4] = 5/4;
	tuningRatio[5] = 4/3;
	tuningRatio[6] = 45/32;
	tuningRatio[7] = 3/2;
	tuningRatio[8] = 8/5;
	tuningRatio[9] = 5/3;
	tuningRatio[10] = 9/5;
	tuningRatio[11] = 15/8;
	return tuningRatio;
}

function calcMeanTone(tuningRatio) {
	tuningRatio[0] = 1;
	tuningRatio[1] = 1.0700;
	tuningRatio[2] = 1.1180;
	tuningRatio[3] = 1.1963;
	tuningRatio[4] = 1.2500;
	tuningRatio[5] = 1.3375;
	tuningRatio[6] = 1.3975;
	tuningRatio[7] = 1.4953;
	tuningRatio[8] = 1.6000;
	tuningRatio[9] = 1.6719;
	tuningRatio[10] = 1.7889;
	tuningRatio[11] = 1.8692;
	return tuningRatio;
}

function calcIntonation(key, temperament) {
	// var that = $(that);
	// var octMult = 1;
	// var pitch = that.attr('data-pitchClass');
	// var oct = that.attr('data-octave');
	// ref = 440;
	// refKey = 49;
	// curKey = that.index()+1;
	// //console.log("Cur " + curKey);
	// var keyDiff = curKey - refKey;
	// //console.log("Key " + keyDiff);
	// var pitchNum = keyDiff % 12;
	// //console.log("pn " + pitchNum);
	// //refPitch = 'a'; //for future variants on the tuning
	// refOct = 4;
	// if (pitchNum < 0) {pitchNum = 12 - Math.abs(pitchNum);}
	// var tuningRatio = [];
	// var refPitch = [];
	// var baseReference = 440;
	// freq;
	// if (temperament == 1) { //pythagorean
	// 	calcPy(tuningRatio);
	// } else if (temperament == 2) { //just
	// 	calcJust(tuningRatio);
	// } else if (temperament == 3) { //meanTone
	// 	calcMT(tuningRatio);
	// }
	// console.log('trpn',tuningRatio[pitchNum]);
	// if (pitchNum > 2) {
	// 	oct = oct - 1;
	// }
	// if (oct > refOct ) {
	// 	octMult = oct - refOct + 1;
	// 	freq = baseReference * tuningRatio[pitchNum] * Math.pow(2,(octMult-1));
	// } else if (oct < refOct) {
	// 	octMult = refOct - oct + 1;
	// 	freq = baseReference * tuningRatio[pitchNum] * Math.pow(2,-(octMult-1));
	// } else {
	// 	freq = baseReference * tuningRatio[pitchNum];
	// }
	// return freq;
}

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
				PianoKeys( {keys:this.state.keys, 
					onPlayNote:this.playNote} )
			)

		);
	},
	playNote: function(key,i) {
		console.log('key', key,i);

		// var that = $(this);

		// osc = ctx.createOscillator();
		// osc.detune.value = getDetuneAmt();
		// console.log(getOscType());
		// osc.type = getOscType();

		// var temperament = getTemperament();

		// if (temperament == 0) {
		// 	calcET(that);
		// } else {
		// 	calcOther(that,temperament);
		// }

		// osc.frequency.value = freq;
		// gainNode = ctx.createGainNode();

		// gainNode.gain.value = 0.0;
		// var loudness = getVolume();

		// osc.connect(gainNode);

		// compressor = ctx.createDynamicsCompressor();
		// gainNode.connect(compressor);
		// compressor.connect(ctx.destination);
		// osc.start(0);

		// var now = ctx.currentTime;
		// gainNode.gain.cancelScheduledValues(now);
		// gainNode.gain.setValueAtTime(gainNode.gain.value, now);
		// gainNode.gain.linearRampToValueAtTime(loudness, now + .001);
	},
	stopNote: function() {
		var now = ctx.currentTime;
		gainNode.gain.cancelScheduledValues(now);
		gainNode.gain.setTargetValueAtTime(0.0, now + .35, .15);
	}
});

var PianoControls = React.createClass({displayName: 'PianoControls',
	render: function() {
		return (
			React.DOM.div( {className:"piano-controls"}, 
				
				React.DOM.div( {className:"press-btn-ctrls"}, 
					React.DOM.div( {className:"press-btn-ctrl"}, "sine"),
					React.DOM.div( {className:"press-btn-ctrl"}, "squ"),
					React.DOM.div( {className:"press-btn-ctrl"}, "saw"),
					React.DOM.div( {className:"press-btn-ctrl"}, "tri")
				),

				React.DOM.div( {className:"piano-display-switch"}, 
					React.DOM.label( {className:"piano-display-label"}, "What to play"),
					React.DOM.input( {type:"radio", name:"display"} ),
					React.DOM.input( {type:"radio", name:"display"} )
				),

				React.DOM.div( {className:"knob-ctrls"}, 
					React.DOM.label(null, 
						React.DOM.input( {type:"range"} )
					),
					React.DOM.label(null, 
						React.DOM.input( {type:"range"} )
					)		
				),

				DisplayControl(null )

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


var DisplayControl = React.createClass({displayName: 'DisplayControl',
	render: function() {
		return (
			React.DOM.div( {className:"piano-display"}, 
				React.DOM.div( {className:"piano-display-info"}, 
					React.DOM.span( {className:"chord-type"}, "Triads only"),
					React.DOM.span( {className:"chord-name"}, "C Major")
				),
				React.DOM.div( {className:"piano-display-chord-members"}, 
					React.DOM.span( {className:"piano-display-chord-member"}, "C"),
					React.DOM.span( {className:"piano-display-chord-member"}, "E"),
					React.DOM.span( {className:"piano-display-chord-member"}, "G")
				)
			)
		);
	}
});

var PianoKeys = React.createClass({displayName: 'PianoKeys',
	render: function() {

		var keys = this.props.keys.map(function(key, i) {

			var isBlack = (key.pitchClass.split('').indexOf('#') !== -1 ||
							(key.pitchClass.split('').indexOf('b') !== -1) 
							? "black" : "") ? "black" : "",
				keyClass = "key " + isBlack;

			return (
				React.DOM.span( {'data-ocatve':key.octave, 
					'data-pitchclass':key.pitchClass,
					className:keyClass,
					onClick:this.playNote.bind(this, key,i)}
				)
			);
		}.bind(this));

		return (
			React.DOM.div( {className:"piano-keys"}, 
				keys
			)
		);
	},
	playNote: function(key,i) {
		this.props.onPlayNote(key,i);
	}
});

React.renderComponent(
	Piano( {keys:generateKeys(numKeys)} ), 
	document.getElementById('piano')
);














