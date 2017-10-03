// MAIN WINDOW MODE
//===========================================================================
var mainWindowMode = (function () {
    var state = 0; // Private Variable
    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
        if (state == 1) {
            document.getElementById('main-nav1').className =  "lcars-orange-bg tall";
            document.getElementById('main-nav2').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav3').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav4').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav5').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav6').className =  "lcars-blue-bg tall";          
        } else if (state == 2) {
            document.getElementById('main-nav1').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav2').className =  "lcars-orange-bg tall";
            document.getElementById('main-nav3').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav4').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav5').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav6').className =  "lcars-blue-bg tall";          
        } else if (state == 3) {
            document.getElementById('main-nav1').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav2').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav3').className =  "lcars-orange-bg tall";
            document.getElementById('main-nav4').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav5').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav6').className =  "lcars-blue-bg tall";           
        } else if (state == 4) {
            document.getElementById('main-nav1').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav2').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav3').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav4').className =  "lcars-orange-bg tall";
            document.getElementById('main-nav5').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav6').className =  "lcars-blue-bg tall";            
        } else if (state == 5) {
            document.getElementById('main-nav1').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav2').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav3').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav4').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav5').className =  "lcars-orange-bg tall";
            document.getElementById('main-nav6').className =  "lcars-blue-bg tall";           
        } else if (state == 6) {
            document.getElementById('main-nav1').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav2').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav3').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav4').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav5').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav6').className =  "lcars-orange-bg tall";        
        } else {
            document.getElementById('main-nav1').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav2').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav3').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav4').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav5').className =  "lcars-blue-bg tall";
            document.getElementById('main-nav6').className =  "lcars-blue-bg tall";                       
        };
    };
    pub.getState = function() {
        return state;
    };
    return pub; // expose externally
}());


// NAVIGATION BUTTON CONTROL
//===========================================================================
function mainNav1() {
    mainWindowMode.changeState(1);
    mainUpdate1();
    playSound('sound/computerbeep_5.mp3');
}

function mainNav2() {
    mainWindowMode.changeState(2);
    mainUpdate2();
    playSound('sound/computerbeep_5.mp3');
}

function mainNav3() {
    mainWindowMode.changeState(3);
    mainUpdate3();
    playSound('sound/computerbeep_5.mp3');
}

function mainNav4() {
    mainWindowMode.changeState(4);
    mainUpdate4();
    playSound('sound/computerbeep_5.mp3');
}

function mainNav5() {
    mainWindowMode.changeState(5);
    mainUpdate5();
    playSound('sound/computerbeep_5.mp3');
}

function mainNav6() {
    mainWindowMode.changeState(6);
    mainUpdate6();
    playSound('sound/computerbeep_5.mp3');
}



// CUSTOM FUNCTIONS FOR SCREEN REFRESH
//===========================================================================

function mainUpdate0() {
    if (mainWindowMode.getState() == 0) {
        document.getElementById('main-screen-title').innerHTML = "";
        document.getElementById('main-window-frame').src = "main_blank.html";
    };
};

function mainUpdate1() {
    if (mainWindowMode.getState() == 1) {
        document.getElementById('main-screen-title').innerHTML = "";
        document.getElementById('main-window-frame').src = "main_blank.html";
    };
};

function mainUpdate2() {
    if (mainWindowMode.getState() == 2) {
        document.getElementById('main-screen-title').innerHTML = "Device Control";
        document.getElementById('main-window-frame').src = "main_control.html";
    };
};

function mainUpdate3() {
    if (mainWindowMode.getState() == 3) {
        document.getElementById('main-screen-title').innerHTML = "Crew Status";
        document.getElementById('main-window-frame').src = "main_blank.html";
    };
};

function mainUpdate4() {
    if (mainWindowMode.getState() == 4) {
        document.getElementById('main-screen-title').innerHTML = "Environmental Control";
        document.getElementById('main-window-frame').src = "main_blank.html";
    };
};

function mainUpdate5() {
    if (mainWindowMode.getState() == 5) {
        document.getElementById('main-screen-title').innerHTML = "Crew Schedule";
        document.getElementById('main-window-frame').src = "main_blank.html";
    };
};

function mainUpdate6() {
    if (mainWindowMode.getState() == 6) {
        document.getElementById('main-screen-title').innerHTML = "Security";
        document.getElementById('main-window-frame').src = "main_blank.html";
    };
};
