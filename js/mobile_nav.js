// MAIN WINDOW MODE
//===========================================================================
var mainWindowMode = (function () {
    var state = 1; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };
    pub.getState = function() {
        return state;
    };
    return pub; // expose externally
}());


// NAVIGATION BUTTON CONTROL
//===========================================================================
function nav1() {
    mainWindowMode.changeState(1);
    update1();
    //playSound('sound/computerbeep_5.mp3');
}

function nav2() {
    mainWindowMode.changeState(2);
    update2();
    //playSound('sound/computerbeep_5.mp3');
}

function nav3() {
    mainWindowMode.changeState(3);
    update3();
    //playSound('sound/computerbeep_5.mp3');
}

function nav4() {
    mainWindowMode.changeState(4);
    update4();
    //playSound('sound/computerbeep_5.mp3');
}

function nav5() {
    mainWindowMode.changeState(5);
    update5();
    //playSound('sound/computerbeep_5.mp3');
}

function nav6() {
    mainWindowMode.changeState(6);
    update6();
    //playSound('sound/computerbeep_5.mp3');
}



// CUSTOM FUNCTIONS FOR SCREEN REFRESH
//===========================================================================

function update1() {
    if (mainWindowMode.getState() == 1) {
        document.getElementById('window-frame').src = "home.html";
    };
};

function update2() {
    if (mainWindowMode.getState() == 2) {
        document.getElementById('window-frame').src = "floor1.html";
    };
};

function update3() {
    if (mainWindowMode.getState() == 3) {
        document.getElementById('window-frame').src = "floor2.html";
    };
};

function update4() {
    if (mainWindowMode.getState() == 4) {
        document.getElementById('window-frame').src = "sched.html";
    };
};

function update5() {
    if (mainWindowMode.getState() == 5) {
        document.getElementById('window-frame').src = "env.html";
    };
};

function update6() {
    if (mainWindowMode.getState() == 6) {
        document.getElementById('window-frame').src = "diag.html";
    };
};





