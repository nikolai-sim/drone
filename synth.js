
const audioContext = new (window.AudioContext || window.webkitAudioContext);

// create oscillators start frequency values are slightly detuned for some nice phasing

let osc1 = audioContext.createOscillator()
osc1.frequency.value = 220 
let osc2 = audioContext.createOscillator()
osc2.frequency.value = 219
let osc3 = audioContext.createOscillator()
osc3.frequency.value = 221



// when volume dial is interacted with it changes the gain value for oscillator 1

document.getElementById('volume').addEventListener('input', changeVolume => {
    gainNode.gain.value = document.getElementById('volume').value
    
})

document.getElementById('volume-2').addEventListener('input', changeVolume2 => {
    gainNode2.gain.value = document.getElementById('volume-2').value
    
})

document.getElementById('volume-3').addEventListener('input', changeVolume2 => {
    gainNode3.gain.value = document.getElementById('volume-3').value
    
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

document.getElementById('frequency').addEventListener("input", changeFrequency => {
    osc1.frequency.value = document.getElementById('frequency').value
    
})

document.getElementById('frequency-2').addEventListener("input", changeFrequency2 => {
    osc2.frequency.value = document.getElementById('frequency-2').value
    
})

document.getElementById('frequency-3').addEventListener("input", changeFrequency3 => {
    osc3.frequency.value = document.getElementById('frequency-3').value
    
})



// master gain

let masterGain = audioContext.createGain()
masterGain.gain.value = 0.5

// filter nodes with variable type, Q cutoff
// oscillators go into gain nodes, gain nodes go into filters, filters all feed into the master gain which is connected to audiocontext.destination

let filter1 = audioContext.createBiquadFilter()
filter1.type = 'lowpass'
filter1.frequency.value = 4800
filter1.connect(masterGain)

document.getElementById('filter-1').addEventListener('click', changeFilter1 => {
    filter1.type = document.querySelector('input[type="radio"][name="filter-1"]:checked').value
})

document.getElementById('cutoff-1').addEventListener('input', changeCutoff1 => {
    filter1.frequency.value = document.getElementById('cutoff-1').value
})

document.getElementById('q1').addEventListener('input', changeq1 => {
    filter1.Q.value = document.getElementById('q1').value
})

let filter2 = audioContext.createBiquadFilter()
filter2.type = 'lowpass'
filter2.frequency.value = 4800
filter2.connect(masterGain)

document.getElementById('filter-2').addEventListener('click', changeFilter2 => {
    filter2.type = document.querySelector('input[type="radio"][name="filter-2"]:checked').value
})

document.getElementById('cutoff-2').addEventListener('input', changeCutoff2 => {
    filter2.frequency.value = document.getElementById('cutoff-2').value
})

document.getElementById('q2').addEventListener('input', changeq2 => {
    filter2.Q.value = document.getElementById('q2').value
})

let filter3 = audioContext.createBiquadFilter()
filter3.type = 'lowpass'
filter3.frequency.value = 4800
filter3.connect(masterGain)

document.getElementById('filter-3').addEventListener('click', changeFilter3 => {
    filter3.type = document.querySelector('input[type="radio"][name="filter-3"]:checked').value
})

document.getElementById('cutoff-3').addEventListener('input', changeCutoff3 => {
    filter3.frequency.value = document.getElementById('cutoff-3').value
})

document.getElementById('q3').addEventListener('input', changeq3 => {
    filter3.Q.value = document.getElementById('q3').value
})

// individual gain nodes one per voice

let gainNode = audioContext.createGain()
gainNode.gain.value =0.3
gainNode.connect(filter1)

let gainNode2 = audioContext.createGain()
gainNode2.gain.value =0.3
gainNode2.connect(filter2)

let gainNode3 = audioContext.createGain()
gainNode3.gain.value =0.3
gainNode3.connect(filter3)

// this function just changes the color of the on buttons for the oscillators to show that a function in on

function colorChangeOn(button) {
    button.setAttribute('class', 'clicked')
}

function colorChangeOff(button) {
    button.removeAttribute('class','clicked')
}


// starts oscillators and connects them to their respective gain nodes 
// stop function just disconnects the master gain from the audiocontext.destination to stop audio

function play(){
    masterGain.connect(audioContext.destination)
    osc1.connect(gainNode)
    osc2.connect(gainNode2)
    osc3.connect(gainNode3)
    osc1.start()
    osc2.start()
    osc3.start()
        
}

function stop(){
    masterGain.disconnect(audioContext.destination)

}

function autoScale(scale, voice) {
    if (scale == '3rd') {
        voice.frequency.value = (osc1.frequency.value / 4 ) * 5
    }
    else if (scale == '5th') {
        voice.frequency.value = (osc1.frequency.value / 2) * 3
    }

    else if (scale == '6th') {
        voice.frequency.value = (osc1.frequency.value / 3) * 5
    }

    else if (scale == '8th') {
        voice.frequency.value = osc1.frequency.value * 2
    }
}

