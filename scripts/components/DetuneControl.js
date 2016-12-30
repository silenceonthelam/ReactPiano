import {PianoActions} 				 from "../actions/PianoActions";
import React, {Component, PropTypes} from "react";

class DetuneControl extends Component {
	render() {
		return (
			<label className="controls__label--slider" htmlFor="detune">
				<span className="controls__label__text">
					Detune
				</span>
				<input 
					className="controls__slider" 
					id="detune"
					max="50"
					min="-50"
					onChange={this.updateVal}
					ref="detune"
					step="1"
					type="range"
					value={this.props.val} />
			</label>
		);
	}
	updateVal(e) {
		PianoActions.updateDetune(e.target.value);
	}
}

DetuneControl.propTypes = {
	val: PropTypes.number
};

DetuneControl.defaultProps = {
	val: 0
};	

export default DetuneControl; 