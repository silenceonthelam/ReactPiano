var PianoActions = require("../actions/PianoActions"),
	React 		 = require("react");

var DetuneControl = React.createClass({
	propTypes: {
		val: React.PropTypes.number
	},
	getDefaultProps: function() {
		return {
			slider: {
				displayName: "Detune",
				id: "detune",
				max: 50,
				min: -50,
				step: 1,
				val: 0
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
					ref="detune"
					step={this.props.slider.step}
					type="range"
					value={this.props.val} />
			</label>
		);
	},
	updateVal: function(e) {
		PianoActions.updateDetune(e.target.value);
	}
});

module.exports = DetuneControl;