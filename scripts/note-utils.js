var _ 			 = require("lodash"),
    Temperaments = require("./tunings/temperaments"),
    TuningRatios = require("./tunings/tuning-ratios");

var pitchClasses = [0,1,2,3,4,5,6,7,8,9,10,11],
	noteNames = ["A","B","C","D","E","F","G"];

var _ref = {
    freq: 440,
    key: 49,
    octave: 4
};

function getPitchClassFromNote(note) {}
function getNoteFromPitchClass(pitchClass) {}
function getNextFlatEnharmonic(note) {}
function getNextSharpEnharmonic(note) {}

function getOctaveMultiplier(currentOctave) {
	// subtract from which is greater
    return (currentOctave > _ref.octave) ? 
    		currentOctave - _ref.octave : 
    		(_ref.octave - currentOctave) * -1;
}

function getPitchNum(keyDiff) {
	var pitchNum = keyDiff % 12;

	if (pitchNum < 0) {
		return normalizePitchClass(pitchNum);
	} else if (pitchNum === -0) {
		return Math.abs(pitchNum);
	}

	return pitchNum;
}

function normalizePitchClass(pitchNum) {
    return 12 - Math.abs(pitchNum);
}

function calcFreq(note, temperament) {
	var currentKey = note.keyNumber + 1, //offset 0-index
        currentOctave = note.octave;

    if (temperament === "equal") {
        return Temperaments.calcEqualTemperament(currentKey);
    }  else {
		var keyDiff = currentKey - _ref.key,
			pitchNum = getPitchNum(keyDiff);

		var tuningRatio = TuningRatios.calcTuningRatio(temperament, pitchNum),
		    octaveMultiplier = getOctaveMultiplier(currentOctave);

		if (currentOctave === _ref.octave) {
			return _ref.freq * tuningRatio;
		} else {
			return _ref.freq * tuningRatio * Math.pow(2, octaveMultiplier);
		}
    }
}

module.exports = {
	calcFreq: calcFreq
};