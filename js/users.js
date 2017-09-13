// Plays a sound file 
function playSound(sound) {
    var snd = new Audio(sound);
    snd.play()
    return true;
}


// Home screen refresh
function userScreenRefresh(sound) {
    systemClock('datetime_user');
    playSound(sound);
}