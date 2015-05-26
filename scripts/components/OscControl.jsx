var _ 			 = require("lodash"),
	PianoActions = require("../actions/PianoActions"),
	React 		 = require("react");

var OscControl = React.createClass({
	statics: {
		oscTypes: [{
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
		}]
	},
	propTypes: {
		val: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			val: ""
		};
	},
	render: function() {
		return (
			<div className="controls__group--middle">
				{this.renderOscs(OscControl.oscTypes)}
			</div>
		);
	},
	renderOscs: function(oscs) {
		return _.map(oscs, function(osc) {

			var isChecked = osc.val === this.props.val,
				classModifier = "";

			if (isChecked) {
				classModifier = "--checked";
			}


			return (
				<label className="controls__label" htmlFor="oscType" key={osc.val}>
					<span className={"controls__label__text" + classModifier}>
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
		}, this);
	},
	updateVal: function(e) {
		PianoActions.updateOscType(e.target.value);
	}
});

module.exports = OscControl;