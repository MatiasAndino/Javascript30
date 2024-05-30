const toDegree = decimal => ((decimal / 60) * 360) + 90;
const hourToDegree = decimal => ((decimal / 12) * 360) + 90;


setInterval(() => {
    const date = new Date();
    const segundos = date.getSeconds();
    const minutos = date.getMinutes();
    const horas = date.getHours();

    const secundero = document.querySelector('.second-hand');
    secundero.style.transform = `rotate(${toDegree(segundos)}deg)`
    
    const minutero = document.querySelector('.min-hand');
    minutero.style.transform = `rotate(${toDegree(minutos)}deg)`

    const hora = document.querySelector('.hour-hand');
    hora.style.transform = `rotate(${hourToDegree(horas)}deg)`;

},1000)