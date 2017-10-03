// STATUS WINDOW MODE
//===========================================================================
var statusWindowMode = (function () {
    var state = 0; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
        if (state == 1) {
            document.getElementById('status-nav1').className =  "lcars-orange-bg tall";
            document.getElementById('status-nav2').className =  "lcars-blue-bg tall";
        } else if (state == 2) {
            document.getElementById('status-nav1').className =  "lcars-blue-bg tall";
            document.getElementById('status-nav2').className =  "lcars-orange-bg tall";
        } else {
            document.getElementById('status-nav1').className =  "lcars-blue-bg tall";
            document.getElementById('status-nav2').className =  "lcars-blue-bg tall";
        };
    };
    pub.getState = function() {
        return state;
    };
    return pub; // expose externally
}());


// NAVIGATION BUTTON CONTROL
//===========================================================================
function statusNav1() {
    statusWindowMode.changeState(1);
    statusUpdate1();
    playSound('sound/computerbeep_5.mp3');
}

function statusNav2() {
    statusWindowMode.changeState(2);
    statusUpdate2();
    playSound('sound/computerbeep_5.mp3');
}


// CUSTOM FUNCTIONS FOR SCREEN REFRESH
//===========================================================================

function statusUpdate0() {
    if (statusWindowMode.getState() == 0) {
        document.getElementById('status-screen-title').innerHTML = "B.O.B. Home Automation System"
        document.getElementById('status-window-frame').src = "status_blank.html"
    };
};

function statusUpdate1() {
    if (statusWindowMode.getState() == 1) {
        document.getElementById('status-screen-title').innerHTML = "System Status"
        document.getElementById('status-window-frame').src = "status_system.html"        
    };
};

function statusUpdate2() {
    if (statusWindowMode.getState() == 2) {
        document.getElementById('status-screen-title').innerHTML = "System Diagnostics"
        document.getElementById('status-window-frame').src = "status_blank.html"
    };
};
