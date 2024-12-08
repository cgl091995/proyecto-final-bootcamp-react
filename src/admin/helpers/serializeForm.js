

/**
 * Función que serializa los datos de un formulario en un objeto.
 * Toma un formulario HTML como entrada, recorre sus campos y 
 * convierte los valores en un objeto clave-valor donde las claves 
 * son los nombres de los campos del formulario.
 *
 * @param {HTMLFormElement} formulario - El formulario HTML que se desea serializar.
 * @returns {Object} - Un objeto con los datos del formulario, donde las claves son los nombres de los campos y los valores son sus respectivos valores.
 */
export const serializeForm = (formulario) => { 
    console.log(formulario)
    // Creamos una nueva instancia de FormData con los datos del formulario
    const formData = new FormData(formulario)  
    console.log(formData)

    // Creamos un objeto vacío para almacenar los datos del formulario
    const data = {} 

    // Recorremos los campos del formulario y agregamos sus valores al objeto
    for (let [name, value] of formData) { 
        data[name] = value                 
    }
    // Devolvemos el objeto con los datos serializados
    return data 

}