const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function lampOn(){
    lamp.src = './imagens/lampadaligada.jpg'
}
function lampOff(){
    lamp.src = './imagens/lampadadesligada.jpg'
}
function lampBroken(){
    lamp.src = './imagens/lampadaquebrada.jpg'
}


turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('dblclick', lampBroken)