const drumParts = {
    97:'clap',
    115:'hihat',
    100:'kick',
    102:'openhat',
    103:'boom',
    104:'ride',
    106:'snare',
    107:'tom',
    108:'tink'
}

addEventListener("keypress", logKey);

function logKey(e){
    const charCode = e.charCode;
    const drumPart = drumParts[charCode];
    if (!drumPart) return;

    const sound = document.getElementById(drumPart);
    sound.currentTime = 0;
    sound.play();

    const key = document.querySelector(`.key[data-key="${charCode}"]`)
    key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(k => {
    k.addEventListener('transitionend', (e) => {
        if (e.propertyName !== 'transform') return;

        k.classList.remove('playing');
    })
})