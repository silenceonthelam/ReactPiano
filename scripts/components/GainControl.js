import {PianoActions} 				 from "../actions/PianoActions";
import React, {Component, PropTypes} from "react";

class GainControl extends Component {
	render() {
		return (
			<label className="controls__label--slider" htmlFor="gain">
				<span className="controls__label__text">
					Gain
				</span>
				<input 
					className="controls__slider" 
					id="gain"
					max="1"
					min="0"
					onChange={this.updateVal}
					ref="gain"
					step=".05"
					type="range"
					value={this.props.val} />
			</label>
		);
	}
	updateVal(e) {
		PianoActions.updateGain(e.target.value);
	}
}

GainControl.propTypes = {
	val: PropTypes.number
};

GainControl.defaultProps = {
	val: .5
};	

export default GainControl;