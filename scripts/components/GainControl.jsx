var PianoActions = require("../actions/PianoActions"),
	React 		 = require("react");

var GainControl = React.createClass({
	propTypes: {
		val: React.PropTypes.number
	},
	getDefaultProps: function() {
		return {
			slider: {
				displayName: "Gain",
				id: "gain",
				max: 1,
				min: 0,
				step: 0.01,
				val: 0.5
			},
			val: 0
		};
	},
	render: function() {
		return (
			<label className="controls__label" htmlFor={this.props.slider.id}>
				<span className="controls__label__text">
					{this.props.slider.displayName}
				</span>
				<input 
					className="controls__slider" 
					id={this.props.slider.id}
					max={this.props.slider.max}
					min={this.props.slider.min}
					onChange={this.updateVal}
					ref="gain"
					step={this.props.slider.step}
					type="range"
					value={this.props.val} />
			</label>
		);
	},
	updateVal: function(e) {
		PianoActions.updateGain(e.target.value);
	}
});

module.exports = GainControl;