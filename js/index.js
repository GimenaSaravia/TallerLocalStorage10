document.getElementById("buttonText").addEventListener("click", function() {
    // Obtener el valor del input
    const inputText = document.getElementById("inputText").value;
    
    // Guardar el valor en localStorage con la clave 'inputData'
    localStorage.setItem("inputData", inputText);
});
