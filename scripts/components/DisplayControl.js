import React from "react";

export const DisplayControl = ({octave, pitchClass}) => (
	<section className="ctrls__display">
		<span className="ctrl__label--pitch-class">
			{pitchClass || "_"} 
		</span>
		<span className="ctrl__label--octave">
			{octave || "_"}
		</span>
	</section>
);