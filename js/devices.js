// fylt1 state class
//===========================================================================
var fylt1 = (function () {
    var state = 'OFF'; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function() {
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-orange-bg'
        } else {
            state = 'OFF'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-white-bg'
        }
        playSound('sound/computerbeep_4.mp3');
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
    pub.getState = function() {
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-orange-bg'
        } else {
            state = 'OFF'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-white-bg'
        }
        playSound('sound/computerbeep_4.mp3');
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
    pub.getState = function() {
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-orange-bg'
        } else {
            state = 'OFF'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-white-bg'
        }
        playSound('sound/computerbeep_4.mp3');
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
    pub.getState = function() {
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-orange-bg'
        } else {
            state = 'OFF'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-white-bg'
        }
        playSound('sound/computerbeep_4.mp3');
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
    pub.getState = function() {
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-orange-bg'
        } else {
            state = 'OFF'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-white-bg'
        }
        playSound('sound/computerbeep_4.mp3');
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
    pub.getState = function() {
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-orange-bg'
        } else {
            state = 'OFF'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-white-bg'
        }
        playSound('sound/computerbeep_4.mp3');
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
    pub.getState = function() {
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-orange-bg'
        } else {
            state = 'OFF'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-white-bg'
        }
        playSound('sound/computerbeep_4.mp3');
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
    pub.getState = function() {
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-orange-bg'
        } else {
            state = 'OFF'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-white-bg'
        }
        playSound('sound/computerbeep_4.mp3');
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
    pub.getState = function() {
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-orange-bg'
        } else {
            state = 'OFF'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-white-bg'
        }
        playSound('sound/computerbeep_4.mp3');
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
    pub.getState = function() {
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-orange-bg'
        } else {
            state = 'OFF'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-white-bg'
        }
        playSound('sound/computerbeep_4.mp3');
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
    pub.getState = function() {
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-orange-bg'
        } else {
            state = 'OFF'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-white-bg'
        }
        playSound('sound/computerbeep_4.mp3');
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
    pub.getState = function() {
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-orange-bg'
        } else {
            state = 'OFF'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-white-bg'
        }
        playSound('sound/computerbeep_4.mp3');
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
    pub.getState = function() {
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-orange-bg'
        } else {
            state = 'OFF'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-white-bg'
        }
        playSound('sound/computerbeep_4.mp3');
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
    pub.getState = function() {
        return state;
    };
    pub.toggleState = function(id) {
        if (state == 'OFF') {
            state = 'ON'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-orange-bg'
        } else {
            state = 'OFF'
            document.getElementById(id).className = 'lcars-button radius fixed-size lcars-white-bg'
        }
        playSound('sound/computerbeep_4.mp3');
    };
    return pub; // expose externally
}());