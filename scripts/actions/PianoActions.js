var AppDispatcher  = require('../AppDispatcher'),
	PianoConstants = require('../PianoConstants');

var PianoActions = {
	recalcNumKeys: function() {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_RECALC_NUM_KEYS
		});
	},
	playNote: function(note) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_PLAY_NOTE,
			note: note
		});
	},
	playSpecificNote: function(note, keyPressed) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_PLAY_SPECIFIC_NOTE,
			keyPressed: keyPressed,
			note: note
		});
	},
	stopNote: function(note) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_STOP_NOTE,
			note: note
		});
	},
	stopSpecificNote: function(note, keyPressed) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_STOP_SPECIFIC_NOTE,
			keyPressed: keyPressed,
			note: note
		});
	},
	updateDetune: function(detuneVal) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_UPDATE_DETUNE,
			detuneVal: detuneVal
		});
	},
	updateGain: function(gainVal) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_UPDATE_GAIN,
			gainVal: gainVal
		});
	},
	updateOscType: function(oscType) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_UPDATE_OSC_TYPE,
			oscType: oscType
		});
	},
	updateTemperament: function(temperament) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_UDPATE_TEMPERAMENT,
			temperament: temperament
		});
	}
};

module.exports = PianoActions;