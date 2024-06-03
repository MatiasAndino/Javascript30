const rangeBorder = document.getElementById('spacing');
rangeBorder.addEventListener('change', changeBorder)

const rangeBlur = document.getElementById('blur');
rangeBlur.addEventListener('change', changeBlur);

const base = document.getElementById('base');
base.addEventListener('change', changeBorder)



function changeBorder() {
    

    const imagen = document.querySelector('img');
    imagen.style.border = `solid ${rangeBorder.value}px ${base.value}`;
}

function changeBlur() {
    const imagen = document.querySelector('img');
    imagen.style.filter = `blur(${rangeBlur.value}px)`
}

