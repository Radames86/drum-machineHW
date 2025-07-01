// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const snare = new Audio('sounds/snare-drum.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');
let count = 0
// This function is called every 600ms
function update() {
    count++
    const metronomeCount = (count % 4) + 1
    document.querySelector('#count').innerText = metronomeCount
    const metronomeCheckbox = document.querySelector('#metronome')
    if(metronomeCheckbox.checked){
    if (count % 4) {
        tock.play()
    } else {
        tick.play()
    }
  }
    const kickCheckbox = document.querySelector('#kick-drum')
    const kickTiming = document.querySelector('#kick-drum-timing').value
    if(kickCheckbox.checked && Number(kickTiming) === metronomeCount){
        kick.play()
    }
    const snareCheckbox = document.querySelector('#snare-drum')
    const snareTiming = document.querySelector('#snare-drum-timing').value
    if(snareCheckbox.checked && Number(snareTiming) === metronomeCount){
        snare.play()
    }
        
    
    const hihatCheckbox = document.querySelector('#hihat-drum')
    if(hihatCheckbox.checked){
        
    }
}


// This function sets up update() to be called every 600ms no need to change this either
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms // don't change this leave it alone
setTimeout(setupUpdate, 300);
