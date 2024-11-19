import { useState } from "react"


export const useForm = () => {
    const [formulario, setFormulario] = useState("") // [formulario = formulario. representa el estado del componente  | setFormulario = representa la función con la que cambiaremos el valor de ese estado] | useState = recibe como argumento el valor inicial. y retorna el estado actual del componente y la función que hará el cambio del componente


    const serializeForm = (formulario) => { // creamos función manejadora para serializar el formulario. la función será valida para cualquier formulario.
        const formData = new FormData(formulario) // creamos constante para instanciar el objeto y su clase FormData, el cual almacena todos los datos del formulario. key and value. 
        console.log(formData)

        const data = {} // creamos constante de objeto vacío donde guardaremos los futuros valores del formulario. key y value

        for (let [name, value] of formData) { //recorremos con un for of el name y el value de formData, es decir, de todos los datos del formulario
            data[name] = value                  // y asignamos a la constante data el name. quedaría name = value. [name(primera posición array),value(segunda posición array)]
        }

        return data //retonamos y obtenemos el objeto data con su llave / valor

    }

    const handlerSubmit = (ev) => { //funcion manejadora que ejecutará el evento submit. le asignamos un preventDefault. afecta al botón submit
        ev.preventDefault()
        console.log(ev.target) //target es una propiedad del evento target.

        const data = serializeForm(ev.target) // en la constante data se ejecutará la función de serialización cuando se clicke el submit

        setFormulario(data) // se actualizará la información recibida en el formulario
    }


    const handlerChange = ({ target }) => { // función manejadora del evento change, que permitirá modificar los datos introducidos en el formulario. afecta a todo el formulario

        const { name, value } = target // cuando se realice el evento, lo instanciamos en la constante creada, la cual hemos desestructurado.

        setFormulario({         //datos actualizados, recogeremos los datos del formulario antiguo, y los datos del nuevo
            ...formulario,      //esparcimos los datos del anterior formulario
            [name]: value       //name entre corchetes ya que no queremos que se cree una nueva propiedad (key) y nuevo valor.
        })
    }


    return {
        handlerSubmit,      //retornamos estas funciones y formData para poder enviarlos como argumentos a otra función en otro componente
        handlerChange,
        formulario
    }
}

