import PianoKey 				 	 from "./PianoKey";
import React, {Component, PropTypes} from "react";

class PianoKeyboard extends Component {
    constructor(props) {
        super(props);
    }  
	render() {
		const extraBorder = {
			"borderLeftWidth": this.props.remainingSpace / 2 + "px",
			"borderRightWidth": this.props.remainingSpace / 2 + "px"
		};

		return (
			<div className="piano__keys" style={extraBorder}>
				{ this.renderPianoKeys(this.props.keys) }
			</div>		
		);
	}
	renderPianoKeys(pianoKeys) {
		return pianoKeys.map((key) => {
			let isBlack = (key.pitchClass.split("").indexOf("#") !== -1 ||
							(key.pitchClass.split("").indexOf("b") !== -1) 
							? "black" : "") ? "black" : "",
				keyClass = isBlack; 

			// Note: "key" is the "key" in the React sense, not a piano key.
				// => Also, this "note" is a note in a the mention sense, not a music note.

			return (
				<PianoKey
					key={"key-" + key.keyNumber} 
					keyClass={keyClass}
					keyNumber={key.keyNumber}
					octave={key.octave}
					pitchClass={key.pitchClass}  />
			);
		});
	}	
}

PianoKeyboard.propTypes = {
	keys: PropTypes.array,
	remainingSpace: React.PropTypes.number
};

PianoKeyboard.defaultProps = {
	keys: [],
	remainingSpace: 0
};

export default PianoKeyboard;