import {PianoActions} 				 from "../actions/PianoActions";
import PianoControls 				 from "./PianoControls";
import PianoKeyboard 				 from "./PianoKeyboard";
import PianoStore 					 from "../stores/PianoStore";
import React, {Component, PropTypes} from "react";

import "../../styles/style";

function getPianoState() {
	return {
        currentNote: PianoStore.getCurrentNote(),
		keys: PianoStore.getAllKeys(),
        remainingSpace: PianoStore.getRemainingSpace(),
		synthSettings: PianoStore.getSynthSettings()
	};
}

class Piano extends Component {
    constructor(props) {
        super(props);
        
        this._onChange = this._onChange.bind(this);
        this.state = getPianoState();
    }
	render() {
		return (
			<section className="piano">
				<div className="piano__side--left"></div>
					<div className="piano__wrapper">
						<PianoControls
							currentNote={this.state.currentNote}
							synthSettings={this.state.synthSettings} />
						<PianoKeyboard 
							currentNote={this.state.currentNote}
							keys={this.state.keys}
							remainingSpace={this.state.remainingSpace} />
					</div>
				<div className="piano__side--right"></div>
			</section>
		);
	}
	componentDidMount() {
        PianoStore.addChangeListener(this._onChange);

        window.addEventListener("resize", function() {
            PianoActions.recalcNumKeys(this.innerWidth);
        });
	}
	componentWillUnmount() {
        window.removeEventListener("resize");
		PianoStore.removeChangeListener(this._onChange);
	}
	_onChange() {
		this.setState(getPianoState());
	}	
}

export default Piano;