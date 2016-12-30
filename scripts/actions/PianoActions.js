import AppDispatcher  from "../AppDispatcher";
import PianoConstants from "../PianoConstants";

export const PianoActions = {
	recalcNumKeys: function(winWidth) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_RECALC_NUM_KEYS,
			winWidth: winWidth
		});
	},
	playNote: function(note) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_PLAY_NOTE,
			note: note
		});
	},
	stopNote: function(note) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_STOP_NOTE,
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
	updateTuning: function(tuning) {
		AppDispatcher.dispatch({
			actionType: PianoConstants.PIANO_UDPATE_TUNING,
			tuning: tuning
		});
	}	
};