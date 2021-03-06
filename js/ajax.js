function wemoLookup(id) {
    var id_sep = id.split("-");
    var name = id_sep[0];
    var addr;
    

    switch(name) {
        case "fylt1":
            addr = "192.168.86.21";
            break;
        case "fylt2":
            addr = "192.168.86.34";
            break;
        case "bylt1":
            addr = "192.168.86.22";
            break;
        case "ewlt1":
            addr = "192.168.86.23";
            break;
        case "cclt1":
            addr = "192.168.86.24";
            break;
        case "lrlt1":
            addr = "192.168.86.25";
            break;
        case "lrlt2":
            addr = "192.168.86.33";
            break;
        case "drlt1":
            addr = "192.168.86.26";
            break;       
        case "br1lt1":
            addr = "192.168.86.27";
            break;
        case "br1lt2":
            addr = "192.168.86.28";
            break;
        case "br2lt1":
            addr = "192.168.86.29";
            break;
        case "br2lt2":
            addr = "192.168.86.30";
            break;
        case "br3lt1":
            addr = "192.168.86.31";
            break;
        case "br3lt2":
            addr = "192.168.86.32";
            break;                            
    }
    return [name, addr];
}


// Ajax call to a PHP script on server which sets device state commands in a database
function setState(id, state) {
    var result = wemoLookup(id);
    var dev_name = result[0]
    var dev_addr = result[1]

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Search result for keywords

            if (this.responseText.search(/on/i) != -1 || this.responseText == '1') {
                document.getElementById(id).style.background = "#c69";
            };

            if ((this.responseText.search(/off/i) != -1 && this.responseText.search(/offline/i) == -1) || this.responseText.search(/0/i) != -1) {
                document.getElementById(id).style.background = "#f90";
            };

            if (this.responseText.search(/offline/i) != -1 || this.responseText.search(/error/i) != -1) {
                document.getElementById(id).style.background = "rgb(255, 0, 0)";
            };
        };
    };
    // USING PHP APPROACH VIA DATABASE
    var url = "php/set_state_socket.php?";
    xhttp.open("POST", url, true); 
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("devname=" + dev_name + "&devcmd=" + state);
};


// Ajax call to a PHP script on server to get current device state from database
function getState(id) {
    var result = wemoLookup(id);
    var dev_name = result[0]
    var dev_addr = result[1]

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Search result for keywords
            if (this.responseText.search(/,on,/i) != -1 || this.responseText == '1') {
                document.getElementById(id).style.background = "#c69";
            };

            if ((this.responseText.search(/,off,/i) != -1 && this.responseText.search(/offline/i) == -1) || this.responseText.search(/0/i) != -1) {
                document.getElementById(id).style.background = "#f90";
            };

            if (this.responseText.search(/,offline,/i) != -1 || this.responseText.search(/error/i) != -1) {
                document.getElementById(id).style.background = "rgb(255, 0, 0)";
            };
        };
    };
    var url = "php/get_state_socket.php?";   
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("devname=" + dev_name);
};