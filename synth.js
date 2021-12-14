
const audioContext = new (window.AudioContext || window.webkitAudioContext);

// create oscillators

let osc1 = audioContext.createOscillator()
osc1.frequency.value = 220 
let osc2 = audioContext.createOscillator()
osc2.frequency.value = 219

// when volume dial is interacted with it changes the gain value for oscillator 1

document.getElementById('volume').addEventListener('click', changeVolume => {
    gainNode.gain.value = document.getElementById('volume').value
    console.log(gainNode.gain.value)
})

document.getElementById('volume-2').addEventListener('click', changeVolume2 => {
    gainNode2.gain.value = document.getElementById('volume-2').value
    console.log(gainNode.gain.value)
})

// when waveforms are selected it changes the oscillator type i.e waveform

document.getElementById('waveforms').addEventListener('click', changeWaveform => {
    osc1.type = document.querySelector('input[type="radio"][name="osc"]:checked').value
})

document.getElementById('waveforms-2').addEventListener('click', changeWaveform2 => {
    osc2.type = document.querySelector('input[type="radio"][name="osc2"]:checked').value
})

// gets the value of the frequency sliders and applies that value to the osc freq

document.getElementById('frequency').addEventListener("click", changeFrequency => {
    osc1.frequency.value = document.getElementById('frequency').value
    
})

document.getElementById('frequency-2').addEventListener("click", changeFrequency2 => {
    osc2.frequency.value = document.getElementById('frequency-2').value
    
})

let gainNode = audioContext.createGain()
gainNode.gain.value =0.3
gainNode.connect(audioContext.destination)

let gainNode2 = audioContext.createGain()
gainNode2.gain.value =0.3
gainNode2.connect(audioContext.destination)

function play(){
    osc1.connect(gainNode)
    osc1.start()
    osc2.start()
    
}

function stop(){
    osc1.disconnect(gainNode)
    osc2.disconnect(gainNode2)
}



