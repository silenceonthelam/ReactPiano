var _ 			 = require("lodash"),
	PianoActions = require("../actions/PianoActions"),
	React 		 = require("react");

// todo: some sort of getAvailableTunings()
// todo: combine to create generic btn component
// todo: rename all this "temperament" stuff to "tunings" to better reflect semantics

var TemperamentControl = React.createClass({
	statics: {
		tunings: [{
			displayName: "Equal",
			val: "equal", 
		},{
			displayName: "Pythagorean",
			val: "pythagorean", 
		},{
			displayName: "Just",
			val: "just", 
		},{
			displayName: "Mean-tone",
			val: "meantone"
		}]
	},
	propTypes: {
		val: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			val: "Equal"
		};
	},
	render: function() {
		return (
			<div className="controls__group">
				<h3 className="controls__label__title">Tunings</h3>

				{this.renderItems(TemperamentControl.tunings)}
			</div>
		);
	},
	renderItems: function(tunings) {
		return _.map(tunings, function(tuning) {

			var isChecked = tuning.val === this.props.val,
				classModifier = "";

			if (isChecked) {
				classModifier = "--checked";
			}

			return (
				<label className="controls__label--stacked" htmlFor="temperament" key={tuning.val}>
					<input 
						checked={isChecked}
						className="controls__btn--square" 
						id={"temperament-" + tuning.val}
						name="temperament"
						onChange={this.updateVal}
						type="radio"
						value={tuning.val} />

					<span className={"controls__label__text--stacked" + classModifier}>
						{tuning.displayName}
					</span>
				</label>
			);
		}, this);
	},
	updateVal: function(e) {
		PianoActions.updateTemperament(e.target.value);
	}
});

module.exports = TemperamentControl;

