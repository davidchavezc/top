const PI = 3.14159;
function humberto(diametro){
    let area = ((diametro / 2)**2) * PI;
    return area;
}

let diametro = prompt('Indica el diametro del circulo');
let area = humberto(diametro);
alert('El area del circulo es ' + area);