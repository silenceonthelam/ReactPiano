import DetuneControl 				 from "./DetuneControl";
import {DisplayControl}    			 from "./DisplayControl";
import GainControl 					 from "./GainControl";
import OscControl 					 from "./OscControl";
import React, {Component, PropTypes} from "react";
import TuningControl 		         from "./TuningControl";

class PianoControls extends Component {
    constructor(props) {
        super(props);
    }
	render() {
		return (
			<div className="piano__controls">
				<div className="piano__controls__col">
					<div className="controls__group">
						<GainControl
							val={this.props.synthSettings.masterGain} />
						<DetuneControl 
							val={this.props.synthSettings.detuneAmt} />
					</div>
					<OscControl 
						val={this.props.synthSettings.oscType} />
				</div>
				<div className="piano__controls__col">
					<DisplayControl
						octave={this.props.currentNote.octave}
						pitchClass={this.props.currentNote.pitchClass} />
				</div>
				<div className="piano__controls__col">
					<TuningControl 
						val={this.props.synthSettings.tuning} />
					<div className="controls__group--speaker">
						<div className="controls__speaker">
						</div>
					</div>
				</div>
			</div>
		);
	}
}

PianoControls.propTypes = {
	currentNote: PropTypes.object,
	synthSettings: PropTypes.object
};

PianoControls.defaultProps = {
	currentNote: {},
	synthSettings: {}
};

export default PianoControls;