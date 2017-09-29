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
            document.getElementById('status-nav3').className =  "lcars-blue-bg tall";
            document.getElementById('status-nav4').className =  "lcars-blue-bg tall";
        } else if (state == 2) {
            document.getElementById('status-nav1').className =  "lcars-blue-bg tall";
            document.getElementById('status-nav2').className =  "lcars-orange-bg tall";
            document.getElementById('status-nav3').className =  "lcars-blue-bg tall";
            document.getElementById('status-nav4').className =  "lcars-blue-bg tall";
        } else if (state == 3) {
            document.getElementById('status-nav1').className =  "lcars-blue-bg tall";
            document.getElementById('status-nav2').className =  "lcars-blue-bg tall";
            document.getElementById('status-nav3').className =  "lcars-orange-bg tall";
            document.getElementById('status-nav4').className =  "lcars-blue-bg tall";
        } else if (state == 4) {
            document.getElementById('status-nav1').className =  "lcars-blue-bg tall";
            document.getElementById('status-nav2').className =  "lcars-blue-bg tall";
            document.getElementById('status-nav3').className =  "lcars-blue-bg tall";
            document.getElementById('status-nav4').className =  "lcars-orange-bg tall";
        } else {
            document.getElementById('status-nav1').className =  "lcars-blue-bg tall";
            document.getElementById('status-nav2').className =  "lcars-blue-bg tall";
            document.getElementById('status-nav3').className =  "lcars-blue-bg tall";
            document.getElementById('status-nav4').className =  "lcars-blue-bg tall";
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

function statusNav3() {
    statusWindowMode.changeState(3);
    statusUpdate3();
    playSound('sound/computerbeep_5.mp3');
}

function statusNav4() {
    statusWindowMode.changeState(4);
    statusUpdate4();
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
        document.getElementById('status-screen-title').innerHTML = "B.O.B. Home Automation System - System Status"
        document.getElementById('status-window-frame').src = "status_system.html"        
    };
};

function statusUpdate2() {
    if (statusWindowMode.getState() == 2) {
        document.getElementById('status-screen-title').innerHTML = "B.O.B. Home Automation System - System Diagnostics"
        document.getElementById('status-window-frame').src = "status_blank.html"
    };
};

function statusUpdate3() {
    if (statusWindowMode.getState() == 3) {
        document.getElementById('status-screen-title').innerHTML = "B.O.B. Home Automation System - Enviromental Status"
        document.getElementById('status-window-frame').src = "status_blank.html"
    };
};

function statusUpdate4() {
    if (statusWindowMode.getState() == 4) {
        document.getElementById('status-screen-title').innerHTML = "B.O.B. Home Automation System"
        document.getElementById('status-window-frame').src = "status_blank.html"
    };
};








function statusUpdate1a() {
    document.getElementById('status-text1').innerHTML = "Chris<br>Deanna<br>Aiden<br>Sarah<br>Max<br>Nibbler";
    document.getElementById('status-text2').innerHTML = "Home<br>Away<br>Home<br>Home<br>Home<br>Home";
    document.getElementById('status-text3').innerHTML = "fylt1<br>fylt2<br>ewlt1<br>cclt1<br>lrlt1<br>lrlt2<br>drlt1<br>bylt1";
    document.getElementById('status-text4').innerHTML = fylt1.getState() + "<br>" + fylt2.getState() + "<br>" + ewlt1.getState() + "<br>" + cclt1.getState() + "<br>" + lrlt1.getState() + "<br>" + lrlt2.getState() + "<br>" +  drlt1.getState() + "<br>" + bylt1.getState();
    document.getElementById('status-text5').innerHTML = "br1lt1<br>br1lt2<br>br2lt1<br>br2lt2<br>br3lt1<br>br3lt2";
    document.getElementById('status-text6').innerHTML = br1lt1.getState() + "<br>" + br1lt2.getState() + "<br>" + br2lt1.getState() + "<br>" + br2lt2.getState() + "<br>" + br3lt1.getState() + "<br>" + br3lt2.getState();
};
