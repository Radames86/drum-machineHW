// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
let count = 0
// This function is called every 600ms
function update() {

    // Play the 'tick' sound
    tick.play();
    tock.play()
}

// This function sets up update() to be called every 600ms no need to change this either
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms // don't change this leave it alone
setTimeout(setupUpdate, 300);
