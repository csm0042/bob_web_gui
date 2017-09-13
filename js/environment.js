// Plays a sound file 
function playSound(sound) {
    var snd = new Audio(sound);
    snd.play()
    return true;
}


// Home screen refresh
function envScreenRefresh(sound) {
    systemClock('datetime_env');
    playSound(sound);
}