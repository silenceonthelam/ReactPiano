/** @jsx React.DOM */

var PianoContainer = React.createClass({displayName: 'PianoContainer',

});

var PianoControls = React.createClass({displayName: 'PianoControls',

});

//btnCtrl mixin?

var TimbreControls = React.createClass({displayName: 'TimbreControls',

});

var GainControl = React.createClass({displayName: 'GainControl',

});



var Piano = React.createClass({displayName: 'Piano',

});

var WhiteKey = {};

var BlackKey = {};

var Keys = React.createClass({displayName: 'Keys',
	mixins: [WhiteKey, BlackKey]
});















