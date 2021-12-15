
const audioContext = new (window.AudioContext || window.webkitAudioContext);

// create oscillators start frequency values are slightly detuned for some nice phasing

let osc1 = audioContext.createOscillator()
osc1.frequency.value = 220 
let osc2 = audioContext.createOscillator()
osc2.frequency.value = 219
let osc3 = audioContext.createOscillator()
osc3.frequency.value = 221

// when volume dial is interacted with it changes the gain value for oscillator 1

document.getElementById('volume').addEventListener('click', changeVolume => {
    gainNode.gain.value = document.getElementById('volume').value
    console.log(gainNode.gain.value)
})

document.getElementById('volume-2').addEventListener('click', changeVolume2 => {
    gainNode2.gain.value = document.getElementById('volume-2').value
    console.log(gainNode.gain.value)
})

document.getElementById('volume-3').addEventListener('click', changeVolume2 => {
    gainNode3.gain.value = document.getElementById('volume-3').value
    console.log(gainNode.gain.value)
})

// when waveforms are selected it changes the oscillator type i.e waveform

document.getElementById('waveforms').addEventListener('click', changeWaveform => {
    osc1.type = document.querySelector('input[type="radio"][name="osc"]:checked').value
})

document.getElementById('waveforms-2').addEventListener('click', changeWaveform2 => {
    osc2.type = document.querySelector('input[type="radio"][name="osc2"]:checked').value
})

document.getElementById('waveforms-3').addEventListener('click', changeWaveform2 => {
    osc3.type = document.querySelector('input[type="radio"][name="osc3"]:checked').value
})

// gets the value of the frequency sliders and applies that value to the osc freq

document.getElementById('frequency').addEventListener("click", changeFrequency => {
    osc1.frequency.value = document.getElementById('frequency').value
    
})

document.getElementById('frequency-2').addEventListener("click", changeFrequency2 => {
    osc2.frequency.value = document.getElementById('frequency-2').value
    
})

document.getElementById('frequency-3').addEventListener("click", changeFrequency3 => {
    osc3.frequency.value = document.getElementById('frequency-3').value
    
})



// gain nodes for individual oscillators as well as a master gain

let masterGain = audioContext.createGain()
masterGain.gain.value = 0.5

let filter1 = audioContext.createBiquadFilter()
filter1.type = 'lowpass'
filter1.frequency.value = 4800
filter1.connect(masterGain)

document.getElementById('filter-1').addEventListener('click', changeFilter1 => {
    filter1.type = document.querySelector('input[type="radio"][name="filter-1"]:checked').value
})

document.getElementById('cutoff-1').addEventListener('click', changeCutoff1 => {
    filter1.frequency.value = document.getElementById('cutoff-1').value
})

document.getElementById('q1').addEventListener('click', changeq1 => {
    filter1.Q.value = document.getElementById('q1').value
})

let gainNode = audioContext.createGain()
gainNode.gain.value =0.3
gainNode.connect(filter1)

let gainNode2 = audioContext.createGain()
gainNode2.gain.value =0.3
gainNode2.connect(masterGain)

let gainNode3 = audioContext.createGain()
gainNode3.gain.value =0.3
gainNode3.connect(masterGain)

function colorChangeOn(button) {
    button.setAttribute('class', 'clicked')
}

function colorChangeOff(button) {
    button.removeAttribute('class','clicked')
}



function play(){
    masterGain.connect(audioContext.destination)
    osc1.connect(gainNode)
    osc1.start()
    osc2.start()
    osc3.start()
        
}

function stop(){
    masterGain.disconnect(audioContext.destination)

}

