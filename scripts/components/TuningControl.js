import {PianoActions} 				 from "../actions/PianoActions";
import React, {Component, PropTypes} from "react";

const tunings = [{
		displayName: "Equal",
		val: "equal"
	},{
		displayName: "Pythag",
		val: "pythagorean"
	},{
		displayName: "Just",
		val: "just"
	},{
		displayName: "Mean-tone",
		val: "meantone"
	}];

class TuningControl extends Component {
	render() {
		return (
			<div className="controls__group">
				{this.renderItems(tunings)}
			</div>
		);
	}
	renderItems(tunings) {
		return tunings.map(tuning => {
			var isChecked = tuning.val === this.props.val,
				classMod = "";

			if (isChecked) {
				classMod = "--checked";
			}
			return (
				<label className="controls__label--stacked" htmlFor="tuning" key={tuning.val}>
					<span className={"controls__label__text--stacked" + classMod}>
						{tuning.displayName}
					</span>				
					<input 
						checked={isChecked}
						className="controls__btn--square" 
						id={"tuning-" + tuning.val}
						name="tuning"
						onChange={this.updateVal}
						type="radio"
						value={tuning.val} />					
				</label>
			);
		});
	}
	updateVal(e) {
		PianoActions.updateTuning(e.target.value);
	}
}

TuningControl.propTypes = {
	val: PropTypes.string
};

TuningControl.defaultProps = {
	val: "equal"
};

export default TuningControl;