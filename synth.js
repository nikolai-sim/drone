
const audioContext = new (window.AudioContext || window.webkitAudioContext);

// create oscillators

let osc1 = audioContext.createOscillator() 
let osc2 = audioContext.createOscillator()

// when volume dial is interacted with it changes the gain value for oscillator 1

document.getElementById('volume').addEventListener('click', changeVolume => {
    gainNode.gain.value = document.getElementById('volume').value
    console.log(gainNode.gain.value)
})

// when waveforms are selected it changes the oscillator type i.e waveform

document.getElementById('waveforms').addEventListener('click', changeWaveform => {
    osc1.type = document.querySelector('input[type="radio"][name="osc"]:checked').value
})

document.getElementById('frequency-one').addEventListener("click", changeFrequency => {
    osc1.frequency.value = document.getElementById('frequency-one').value
    
})


let gainNode = audioContext.createGain()
gainNode.gain.value =0.1
gainNode.connect(audioContext.destination)

function play(){
    osc1.connect(gainNode)
    osc1.start()
    
}

function stop(){
    osc1.disconnect(gainNode)
}

let noteFreq = [ 92.50, 103.83, 116.54, 138.59, 155.56, 185.00, 207.65, 233.08, 277.18, 311.13, 369.99, 415.30, 466.16, 554.37, 622.25, 739.99, 830.61, 
    932.33, 1108.73, 1244.51, 1479.98, 1661.22, 1864.66, 2217.46]

function getRandomInt(max) {
     return Math.floor(Math.random() * max);
}

