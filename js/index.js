// Plays a sound file 
function playSound(sound) {
    var snd = new Audio(sound);
    snd.play()
    return true;
}


// Home screen refresh
function screenRefresh(sound) {
    systemClock('system-time');
    playSound(sound);
}
