import {calcFreq}     from "../note-utils";
import {generateKeys} from "../piano-key-generator";

var EventEmitter   = require("events").EventEmitter,
    AppDispatcher  = require("../AppDispatcher"),
    PianoConstants = require("../PianoConstants");

const CHANGE_EVENT = "change";

var audioCtx = new (window.AudioContext || window.webkitAudioContext)(),
    _pianoKeys = generateKeys(window.innerWidth).keys,
    _remainingSpace = generateKeys(window.innerWidth).remainingSpace || 0,
    _currentNote = {};

var _synthSettings = {
    detuneAmt: 0,
    masterGain: 0.5,
    oscType: "sine",
    tuning: "equal"
};

// audioParam updaters
function updateDetune(detuneVal) {
    _synthSettings.detuneAmt = parseFloat(detuneVal, 10);
}

function updateGain(gainVal) {
    _synthSettings.masterGain = parseFloat(gainVal, 10);
}

function updateOscType(oscType) {
    _synthSettings.oscType = oscType;
}

function updateTuning(tuning) {
    _synthSettings.tuning = tuning;
}

var PianoStore = Object.assign({}, EventEmitter.prototype, {
    getAllKeys: function() {
        return _pianoKeys;
    },
    getCurrentNote: function() {
        return _currentNote;
    },
    getRemainingSpace: function() {
        return _remainingSpace;
    },    
    getSynthSettings: function() {
        return _synthSettings;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

var currentGainNodes = [];

function playNote(note) {
    var freq = calcFreq(note, _synthSettings.tuning);

    var osc = audioCtx.createOscillator(),
        gainNode = audioCtx.createGain();

    osc.frequency.value = freq;
    osc.detune.value = _synthSettings.detuneAmt;
    osc.type = _synthSettings.oscType;
    gainNode.gain.value = 0;

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start(0);

    var now = audioCtx.currentTime;

    gainNode.gain.cancelScheduledValues(now);
    gainNode.gain.linearRampToValueAtTime(_synthSettings.masterGain, now + .005);
    currentGainNodes.push(gainNode);
}

function stopNote(note) {
    var currentGainNode = currentGainNodes.pop();
    var now = audioCtx.currentTime;
    currentGainNode.gain.cancelScheduledValues(now);
    currentGainNode.gain.linearRampToValueAtTime(0.0, now + .5);
}

AppDispatcher.register(function(action) {
    switch(action.actionType) { 
        
        // how the piano should display
        case PianoConstants.PIANO_RECALC_NUM_KEYS:
            _pianoKeys = generateKeys(action.winWidth).keys;
            _remainingSpace = generateKeys(action.winWidth).remainingSpace || 0;
            PianoStore.emitChange();
            break;

        // play notes with mouse
        case PianoConstants.PIANO_PLAY_NOTE:
            playNote(action.note);
            _currentNote = action.note;
            PianoStore.emitChange();
            break;

        case PianoConstants.PIANO_STOP_NOTE:
            stopNote(action.note);
            _currentNote = {};
            PianoStore.emitChange();
            break;

        // audio params
        case PianoConstants.PIANO_UPDATE_DETUNE:
            updateDetune(action.detuneVal);
            PianoStore.emitChange();
            break;

        case PianoConstants.PIANO_UPDATE_GAIN:
            updateGain(action.gainVal);
            PianoStore.emitChange();
            break;

        case PianoConstants.PIANO_UPDATE_OSC_TYPE:
            updateOscType(action.oscType);
            PianoStore.emitChange();
            break;

        case PianoConstants.PIANO_UPDATE_TUNING:
            updateTuning(action.tuning);
            PianoStore.emitChange();
            break;

        default:
            // no op
    }
});

module.exports = PianoStore;