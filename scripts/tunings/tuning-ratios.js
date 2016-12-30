// dictionaries of tuning ratios for intonations based on ratios: intonations

function calcPy(pitchNum) {
	var tuningRatio = [];

	tuningRatio[0] = 1;
	tuningRatio[1] = 256/243;
	tuningRatio[2] = 9/8;
	tuningRatio[3] = 32/27;
	tuningRatio[4] = 81/64;
	tuningRatio[5] = 4/3;
	tuningRatio[6] = 729/512;
	tuningRatio[7] = 3/2;
	tuningRatio[8] = 128/81;
	tuningRatio[9] = 27/16;
	tuningRatio[10] = 16/9;
	tuningRatio[11] = 243/128;

	return tuningRatio[pitchNum];
}

function calcJust(pitchNum) {
	var tuningRatio = [];

	tuningRatio[0] = 1;
	tuningRatio[1] = 16/15;
	tuningRatio[2] = 9/8;
	tuningRatio[3] = 6/5;
	tuningRatio[4] = 5/4;
	tuningRatio[5] = 4/3;
	tuningRatio[6] = 45/32;
	tuningRatio[7] = 3/2;
	tuningRatio[8] = 8/5;
	tuningRatio[9] = 5/3;
	tuningRatio[10] = 9/5;
	tuningRatio[11] = 15/8;

	return tuningRatio[pitchNum];
}

function calcMeanTone(pitchNum) {
	var tuningRatio = [];
	
	tuningRatio[0] = 1;
	tuningRatio[1] = 1.0700;
	tuningRatio[2] = 1.1180;
	tuningRatio[3] = 1.1963;
	tuningRatio[4] = 1.2500;
	tuningRatio[5] = 1.3375;
	tuningRatio[6] = 1.3975;
	tuningRatio[7] = 1.4953;
	tuningRatio[8] = 1.6000;
	tuningRatio[9] = 1.6719;
	tuningRatio[10] = 1.7889;
	tuningRatio[11] = 1.8692;

	return tuningRatio[pitchNum];
}

export function calcTuningRatio(temperament, pitchNum) {
    switch (temperament) {
        case "pythagorean": return calcPy(pitchNum);
            break;
        case "just": return calcJust(pitchNum);
            break;
        case "meantone": return calcMeanTone(pitchNum);
            break;
        default: 
    }
}