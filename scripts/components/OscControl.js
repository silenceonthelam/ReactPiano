import {PianoActions} 				 from "../actions/PianoActions";
import React, {Component, PropTypes} from "react";

const oscTypes = [{
		displayName: "sin",
		val: "sine", 
	},{
		displayName: "sqr",
		val: "square", 
	},{
		displayName: "saw",
		val: "sawtooth", 
	},{
		displayName: "tri",
		val: "triangle"
	}];

class OscControl extends Component {
	render() {
		return (
			<div className="controls__group--oscs">
				{this.renderOscs(oscTypes)}
			</div>
		);
	}
	renderOscs(oscs) {
		return oscs.map(osc => {
			var isChecked = osc.val === this.props.val,
				classMod = "";

			if (isChecked) {
				classMod = "--checked";
			}

			return (
				<label className="controls__label" htmlFor="oscType" key={osc.val}>
					<span className={"controls__label__text" + classMod}>
						{osc.displayName}
					</span>
					<input 
						checked={isChecked}
						className="controls__btn--round" 
						id={"oscType-" + osc.val}
						name="oscType"
						onChange={this.updateVal}
						type="radio"
						value={osc.val} />
				</label>
			);
		});
	}
	updateVal(e) {
		PianoActions.updateOscType(e.target.value);
	}
}

OscControl.propTypes = {
	val: PropTypes.string
};

OscControl.defaultProps = {
	val: "sine"
};	

export default OscControl;