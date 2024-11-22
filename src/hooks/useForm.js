import { useState } from "react"


/**
 * Hook personalizado para gestionar formularios, serializar sus datos y manejar los cambios en los campos del formulario.
 *
 * Este hook proporciona funcionalidades para manejar el estado de un formulario, serializar sus datos y actualizar el estado del formulario cuando los campos cambian.
 *
 * @returns {Object} Un objeto con los siguientes valores:
 *   - `handlerSubmit`: Función para manejar el evento `submit` del formulario.
 *   - `handlerChange`: Función para manejar el evento `change` de los campos del formulario.
 *   - `formulario`: El estado actual del formulario con los datos introducidos.
 */
export const useForm = () => {

     // Estado para almacenar los datos del formulario
    const [formulario, setFormulario] = useState("") 


      /**
     * Serializa los datos de un formulario y los convierte en un objeto con clave-valor.
     * 
     * @param {HTMLFormElement} formulario - El formulario HTML a ser serializado.
     * @returns {Object} Un objeto con los datos del formulario, donde cada campo es una clave y su valor es el valor ingresado.
     */
    const serializeForm = (formulario) => { 

        const formData = new FormData(formulario) // se crea una instancia de FormData con los datos del formulario
        console.log(formData)

        const data = {} // creamos constante de objeto vacío donde guardaremos los futuros valores del formulario. key y value

        // Recorremos los datos del formulario y los añadimos al objeto 'data'
        for (let [name, value] of formData) { 
            data[name] = value                  
        }

        return data // Retorna el objeto con los datos serializados

    }

    /**
     * Maneja el evento `submit` de un formulario, previene su comportamiento por defecto y serializa los datos.
     * 
     * @param {Event} ev - El evento de submit que se dispara al enviar el formulario.
     * 
     */
    const handlerSubmit = (ev) => { 

        ev.preventDefault() // Prevenimos el comportamiento por defecto (recarga de página)
        
        const data = serializeForm(ev.target) // Serializa el formulario y guarda los datos en el estado 'formulario'
    }

    /**
     * Maneja el evento `change` de los campos del formulario. Actualiza el estado del formulario con los valores actuales.
     * 
     * @param {Event} ev - El evento de cambio que se dispara al modificar un campo del formulario.
     * 
     */
    const handlerChange = ({ target }) => { 

        const { name, value } = target // Desestructuramos el campo del formulario

        setFormulario({         // Actualizamos el estado del formulario con los nuevos datos
            ...formulario,      //esparcimos los datos del anterior formulario
            [name]: value       // Actualizamos el valor del campo modificado
        })
    }


    return {
        handlerSubmit,      //retornamos estas funciones y el estado del formulario
        handlerChange,
        formulario
    }
}

