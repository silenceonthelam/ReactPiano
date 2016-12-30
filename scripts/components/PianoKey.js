import {PianoActions} 				 from "../actions/PianoActions";
import React, {Component, PropTypes} from "react";

class PianoKey extends Component {
    constructor(props) {
        super(props);

        this.playNote = this.playNote.bind(this);
        this.stopNote = this.stopNote.bind(this);
    }
	render() {
		return (
			<span className={"key " + this.props.keyClass}
				onMouseDown={this.playNote}
				onMouseUp={this.stopNote}>
			</span>
		);
	}
	playNote() {
		PianoActions.playNote(this.props);
	}
	stopNote() {
		PianoActions.stopNote(this.props);
	}
}

PianoKey.propTypes = {
	keyClass: PropTypes.string,
	keyNumber: PropTypes.number,
	octave: PropTypes.number,
	pitchClass: PropTypes.string
};

PianoKey.defaultProps = {
	keyClass: "",
	keyNumber: 0,
	octave: 0,
	pitchClass: ""
};

export default PianoKey;