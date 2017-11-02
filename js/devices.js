// fylt1 state class
//===========================================================================
var fylt1 = (function () {
    var state = 'OFF'; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function(id) {
        state = getState(id);
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON';
            setState(id, 'on');
        } else {
            state = 'OFF';
            setState(id, 'off');
        };
        playSound('sound/helm_engage_clean.mp3');
    };
    return pub; // expose externally
}());

// fylt2 state class
//===========================================================================
var fylt2 = (function () {
    var state = 'OFF'; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function(id) {
        state = getState(id);
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            setState(id, 'on');
        } else {
            state = 'OFF'
            setState(id, 'off');
        };
        playSound('sound/helm_engage_clean.mp3');
    };
    return pub; // expose externally
}());

// ewlt1 state class
//===========================================================================
var ewlt1 = (function () {
    var state = 'OFF'; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function(id) {
        state = getState(id);
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            setState(id, 'on');
        } else {
            state = 'OFF'
            setState(id, 'off');
        };
        playSound('sound/helm_engage_clean.mp3');
    };
    return pub; // expose externally
}());

// cclt1 state class
//===========================================================================
var cclt1 = (function () {
    var state = 'OFF'; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function(id) {
        state = getState(id);
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            setState(id, 'on');
        } else {
            state = 'OFF'
            setState(id, 'off');
        };
        playSound('sound/helm_engage_clean.mp3');
    };
    return pub; // expose externally
}());

// lrlt1 state class
//===========================================================================
var lrlt1 = (function () {
    var state = 'OFF'; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function(id) {
        state = getState(id);
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            setState(id, 'on');
        } else {
            state = 'OFF'
            setState(id, 'off');
        };
        playSound('sound/helm_engage_clean.mp3');
    };
    return pub; // expose externally
}());

// lrlt2 state class
//===========================================================================
var lrlt2 = (function () {
    var state = 'OFF'; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function(id) {
        state = getState(id);
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            setState(id, 'on');
        } else {
            state = 'OFF'
            setState(id, 'off');
        };
        playSound('sound/helm_engage_clean.mp3');
    };
    return pub; // expose externally
}());

// drlt1 state class
//===========================================================================
var drlt1 = (function () {
    var state = 'OFF'; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function(id) {
        state = getState(id);
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            setState(id, 'on');
        } else {
            state = 'OFF'
            setState(id, 'off');
        };
        playSound('sound/helm_engage_clean.mp3');
    };
    return pub; // expose externally
}());

// bylt1 state class
//===========================================================================
var bylt1 = (function () {
    var state = 'OFF'; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function(id) {
        state = getState(id);
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            setState(id, 'on');
        } else {
            state = 'OFF'
            setState(id, 'off');
        };
        playSound('sound/helm_engage_clean.mp3');
    };
    return pub; // expose externally
}());

// br1lt1 state class
//===========================================================================
var br1lt1 = (function () {
    var state = 'OFF'; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function(id) {
        state = getState(id);
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            setState(id, 'on');
        } else {
            state = 'OFF'
            setState(id, 'off');
        };
        playSound('sound/helm_engage_clean.mp3');
    };
    return pub; // expose externally
}());

// br1lt2 state class
//===========================================================================
var br1lt2 = (function () {
    var state = 'OFF'; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function(id) {
        state = getState(id);
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            setState(id, 'on');
        } else {
            state = 'OFF'
            setState(id, 'off');
        };
        playSound('sound/helm_engage_clean.mp3');
    };
    return pub; // expose externally
}());

// br2lt1 state class
//===========================================================================
var br2lt1 = (function () {
    var state = 'OFF'; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function(id) {
        state = getState(id);
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            setState(id, 'on');
        } else {
            state = 'OFF'
            setState(id, 'off');
        };
        playSound('sound/helm_engage_clean.mp3');
    };
    return pub; // expose externally
}());

// br2lt2 state class
//===========================================================================
var br2lt2 = (function () {
    var state = 'OFF'; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function(id) {
        state = getState(id);
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            setState(id, 'on');
        } else {
            state = 'OFF'
            setState(id, 'off');
        };
        playSound('sound/helm_engage_clean.mp3');
    };
    return pub; // expose externally
}());

// br3lt1 state class
//===========================================================================
var br3lt1 = (function () {
    var state = 'OFF'; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function(id) {
        state = getState(id);
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            setState(id, 'on');
        } else {
            state = 'OFF'
            setState(id, 'off');
        };
        playSound('sound/helm_engage_clean.mp3');
    };
    return pub; // expose externally
}());

// br3lt2 state class
//===========================================================================
var br3lt2 = (function () {
    var state = 'OFF'; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function(id) {
        state = getState(id);
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            setState(id, 'on');
        } else {
            state = 'OFF'
            setState(id, 'off');
        };
        playSound('sound/helm_engage_clean.mp3');
    };
    return pub; // expose externally
}());


function refreshDeviceStates() {
    fylt1.getState('fylt1-state');
    fylt2.getState('fylt2-state');
    ewlt1.getState('ewlt1-state');
    cclt1.getState('cclt1-state');
    lrlt1.getState('lrlt1-state');
    lrlt2.getState('lrlt2-state');
    drlt1.getState('drlt1-state');
    bylt1.getState('bylt1-state');
    br1lt1.getState('br1lt1-state');
    br1lt2.getState('br1lt2-state');
    br2lt1.getState('br2lt1-state');
    br2lt2.getState('br2lt2-state');
    br3lt1.getState('br3lt1-state');
    br3lt2.getState('br3lt2-state');
};

