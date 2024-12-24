//Array de divisas

const divisas = [
    { id: "USD", nombre: "Dolar de Estados Unidos", precio: 1017 },
    { id: "EUR", nombre: "Euro", precio: 1060 },
    { id: "BRL", nombre: "Reales", precio: 160 },
    { id: "MXN", nombre: "Peso Mexicano", precio: 50 },
]

//Funcion para pedir la moneda
function pedirMoneda() {
    let moneda = prompt("Ingrese la moneda que desea convertir: \n USD (Precio : 1017 ARS) \n EUR (Precio : 1060 ARS) \n BRL (Precio : 160 ARS) \n MXN (Precio : 50 ARS)");
    moneda = moneda.toUpperCase();
    if (moneda == divisas[0].id || moneda == divisas[1].id || moneda == divisas[2].id || moneda == divisas[3].id) {
        alert("Has elegido la moneda " + moneda)
        pedirMonto(moneda)
    }
    else {
        alert("Moneda no valida")
        pedirMoneda()
    }
}

//Función para pedir el monto
function pedirMonto(moneda) {
    let monto = prompt(`Ingrese el monto de la moneda que elegiste a convertir (${moneda})`)
    monto = parseFloat(monto)
    if (isNaN(monto) || monto == "" || monto == null || monto == 0) {
        alert("Monto no valido")
        pedirMonto(moneda)
    } else {
        calcularConversion(moneda, monto)
    }
}

//Función para calcular conversión
function calcularConversion(moneda, monto) {
    let calculadora = divisas.find(d => d.id === moneda); 
    let conversion = monto * calculadora.precio; alert(`El monto ${monto} ${calculadora.nombre} equivale a ${conversion} ARS`);
    if(confirm("¿Desea volver a usar la calculadora de divisas?")){
        pedirMoneda()
    }else{
        alert("Gracias por usar la calculadora de divisas")
    }
}

pedirMoneda()




