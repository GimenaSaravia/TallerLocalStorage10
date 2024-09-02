// Obtener el valor almacenado en localStorage con la clave 'inputData'
const storedData = localStorage.getItem("inputData");

// Mostrar el dato en el span con id 'data'
document.getElementById("data").textContent 
    if (storedData) {
        document.getElementById("data").textContent = storedData;
    } else {
        document.getElementById("data").textContent = "No hay datos guardados";
    }

