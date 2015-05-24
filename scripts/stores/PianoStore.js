// functional utils
var _                 = require("lodash"); // optimized "underscore.js"
    
// es6/node polyfills
var assign            = require("object-assign"), // copy objs
    EventEmitter      = require("events").EventEmitter; // event helpers

// flux architecture
var AppDispatcher     = require("../AppDispatcher"),
    PianoConstants    = require("../PianoConstants");

// generate keys based on available space
var PianoKeyGenerator = require("../piano-key-generator");

// generate frequencies
var noteUtils         = require("../note-utils");

// the only constant is "change"
//      ~ Wayne Gretzky
//          ~ Michael Scott
const CHANGE_EVENT = "change";

// make sure this is only declared once
var audioCtx = audioCtx || new AudioContext();

var _currentChord = "",
    _currentNotes = [],
    _pianoKeys    = [];

var numKeys = PianoKeyGenerator.getNumKeys(window.innerWidth);
_pianoKeys = PianoKeyGenerator.generateKeys(numKeys);

// todo: on page resize
function regenerateKeys() {}

var _synthSettings = {
    detuneAmt: 0,
    masterGain: 0.5,
    oscType: "sine",
    temperament: "pythagorean"
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

function updateTemperament(temperament) {
    _synthSettings.temperament = temperament;
}

var PianoStore = assign({}, EventEmitter.prototype, {
    getAllKeys: function() {
        return _pianoKeys;
    },
    getCurrentChord: function() {
        return _currentChord;
    },
    getCurrentNotes: function() {
        return _currentNotes;
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

var currentNotes = [],
    currentGainNodes = [];

function playNote(note) {
    var freq = noteUtils.calcFreq(note, _synthSettings.temperament);

    var osc = audioCtx.createOscillator(),
        gainNode = audioCtx.createGain();

    osc.frequency.value = freq;
    osc.detune.value = _synthSettings.detuneAmt;
    osc.type = _synthSettings.oscType;

    // default the gain to 0 so envelopes will work
    gainNode.gain.value = 0;

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start(0);

    var now = audioCtx.currentTime;

    gainNode.gain.cancelScheduledValues(now);
    gainNode.gain.setValueAtTime(gainNode.gain.value, now);
    gainNode.gain.linearRampToValueAtTime(_synthSettings.masterGain, now + .001);

    currentNotes.push(osc);
    currentGainNodes.push(gainNode);
}

// todo: keymapping stuff

// 1, 2 => pitch bend
// 3, 4, 5, 6, 7, 8 => modulation

// tab => sustain

// a =>
    // w =>
// s =>
    // e =>
// d =>
// f =>
    // t =>
// g =>
    // y =>
// h =>
    // u =>
// j =>

// k =>
    // o =>
// l =>
    // p =>
// ; =>
// ' =>

// octaves: z, x
// velocity: c, v

function playSpecificNote(note, keypressed) {} // todo

function stopNote(note) {
    // var currentNote = currentNotes.pop();
    var currentGainNode = currentGainNodes.pop();

    var now = audioCtx.currentTime;
    currentGainNode.gain.cancelScheduledValues(now);
    currentGainNode.gain.setTargetAtTime(0.0, now + .35, .15);
}

function stopSpecificNote(note, keypressed) {} // todo

AppDispatcher.register(function(action) {
    switch(action.actionType) { 

        //how the piano should display
        //todo: better, more testable way of doing this
        case PianoConstants.PIANO_RECALC_NUM_KEYS:
            regenerateKeys();
            PianoStore.emitChange();
            break;

        // play notes with mouse
        case PianoConstants.PIANO_PLAY_NOTE:
            playNote(action.note);
            PianoStore.emitChange();
            break;

        case PianoConstants.PIANO_STOP_NOTE:
            stopNote(action.note);
            PianoStore.emitChange();
            break;

        // play notes with qwerty keyboard
        case PianoConstants.PIANO_PLAY_SPECIFIC_NOTE:
            playSpecificNote(action.note, keypressed);
            PianoStore.emitChange();
            break;

        case PianoConstants.PIANO_STOP_SPECIFIC_NOTE:
            stopSpecificNote(action.note, keypressed);
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

         case PianoConstants.PIANO_UPDATE_TEMPERAMENT:
            updateTemperament(action.temperament);
            PianoStore.emitChange();
            break;

        default:
            // no op
    }
});

module.exports = PianoStore;