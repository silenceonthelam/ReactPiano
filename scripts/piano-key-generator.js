var	pitchClassNames = ['A','Bb','B','C','C#','D','Eb','E','F','F#','G','Ab'],
	octaves = [0,1,2,3,4,5,6,7,8,9,10,11];

// maybe this should be a "class" itself
	// const PITCH_CLASS_NAMES: ['A','Bb','B','C','C#','D','Eb','E','F','F#','G','Ab'];

	// pitch class names should not exist on the obj themselves,
	// rather, they should be a look-up, based on pitch class indicies
	// as the names themselves can change, based on the rules of music theory

	// todo: PC stuff to move to music theory module
	// also, this will fix enharmonic issues
var PianoKeyGenerator = {
	generateKeys: function(numKeys) {
		// just incase numKeys is not properly initialized
		var numKeys = numKeys || 24;

		var keys = [],
			k = 0;

		var startOctave = 0,
			startPitchClass = 0;

		//adjust the start octaves if the screen is small
		//b/c who wants a keyboard with just the lowest octave
		//well, maybe people might want that,
		//but that's their problem

		if (numKeys <= 60 && numKeys > 48) {
			startOctave = 1;
		} else if (numKeys <= 48 && numKeys > 36) {
			startOctave = 2;
		} else if (numKeys <= 36 && numKeys > 24) {
			startOctave = 3;
		} else {
			startOctave = 4;
		}

		var offset = 0;

		if (startOctave > 0) {
			offset = startOctave * 12;
		}

		var keyNumber = offset;

		// this is more of a while loop
		for (var i=startOctave; i<octaves.length; i++) { //octaves really isn't needed
			for (var j=startPitchClass; j<pitchClassNames.length; j++) {

				keys.push({
					keyNumber: keyNumber++,
					octave: octaves[i],
					pitchClass: pitchClassNames[j]
				});

				if (k >= numKeys) {
					break;
				}

				k++;
			}

			if (k >= numKeys) {
				break;
			}
		}

		return keys;
	},
	//todo:
    //add eq. border on each side of key rows
    //based on remaining pxs
	getNumKeys: function(availWidth) {
	    var windowWidth = availWidth,
	        horizontalPadding = 30,
	        blackKeyIndicies = [1,3,6,8,10],
	        totalKeys = 0,
	        whiteKeys = 7,
	        whiteKeyWidth = 49,
	        blackKeys = 5,
	        blackKeyWidth = 34,
	        octaveWidth = 7 * whiteKeyWidth, //(whiteKeys * whiteKeyWidth) + (blackKeys * blackKeyWidth),
	        totalOctaves = parseInt((windowWidth - horizontalPadding) / octaveWidth, 10),
	        extraWidth = (windowWidth - horizontalPadding) % octaveWidth;

	        // console.log("white", whiteKeys * whiteKeyWidth);
		        // console.log("black", blackKeys * blackKeyWidth);
		        // console.log("totalWidth", window.innerWidth);
		        // console.log("octaveWidth", octaveWidth);
		        // console.log("totalOctaves", totalOctaves);
		        // console.log("extraWidth", extraWidth);

	        var extraKeys = 0,
	            i = 0;

	        if (extraWidth > whiteKeyWidth) {
	            while (extraWidth > 0) {
	                extraWidth = extraWidth - whiteKeyWidth;
	                extraKeys++;
	                i++;
	            }
	        } else if (extraWidth === whiteKeyWidth) {
	            extraKeys = 1;
	        }

	        // console.log("extraKeys", extraKeys);

	        totalKeys = totalOctaves * 12 + extraKeys;

	        // console.log("totalKeys", totalKeys);

	    //make sure to end of a white key
	    var endingKey = totalKeys % 12;

	    // console.log("endingKey", endingKey);

	    if (blackKeyIndicies.indexOf(endingKey)) {
	        totalKeys--;
	    }


	    return totalKeys;
	}
};

module.exports = {
	getNumKeys: PianoKeyGenerator.getNumKeys,
	generateKeys: PianoKeyGenerator.generateKeys
};