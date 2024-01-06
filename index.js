

function outcome(){

    let num1 = Number(document.getElementById('num-um').value)
    let num2 = Number(document.getElementById('num-dois').value)
    let total = 0

    if (document.getElementById('box1').checked)
    total = num1 + num2
    else if (document.getElementById('box2').checked)
    total = num1 - num2
    else if (document.getElementById('box3').checked)
    total = num1 * num2
    else if (document.getElementById('box4').checked)
    total = num1 / num2
    document.getElementById('resultadoArea').innerHTML = 'Resultado: ' + String(total)
}