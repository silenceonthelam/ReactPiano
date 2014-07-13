var pianoSizes = {
	fullSize: 88,
	portable: 61,
	portableSmall: 32
};

var	pitchClasses = [0,1,2,3,4,5,6,7,8,9,10,11],
	pitchClassNames = [
		'A','Bb','B','C','C#','D','Eb','E','F','F#','G','Ab'
	],
	octaves = [0,1,2,3,4,5,6,7,8,9,10,11];

var windowWidth = window.innerWidth,
 	//7 white keys ea. 50px account for octave width
  	//we want to calculate key width based on that
	keyWidth = (7*44/12),
	numKeys = parseFloat(((windowWidth-40)/keyWidth),10);
	//extraKeys = windowWidth % keyWidth;

	//console.log( (((windowWidth)/keyWidth) - 34) );

	//other rules to implement
		//octaves start on C
		//always end on a white key
		//add eq. border on each side of key rows
			//based on remaining pxs
		//if 3? or fewer octaves, start on octave 2
		//if 4? octaves, start on octave 1
		//if 5? octaves, start on octave 0

	//console.log('numKeys', numKeys);

var generateKeys = function(numKeys) {
	var keys = [],
		k = 0;

	for (var i=0; i<octaves.length; i++) {
		for (var j=0; j<pitchClassNames.length; j++) {
			keys.push({
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
};


// var keys2 = generateKeys(numKeys);

// console.log('keys', keys2);





