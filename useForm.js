import { useState } from "react";


export const useForm = (initialform = {}) => {

  const [formState, setFormState] = useState(initialform);
  
      
  
    const onInputChange  = ({target}) =>{
        const {name, value} = target;//Desestructuracion del event.target
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () =>{
        setFormState( initialform );
    }

    return{
        ...formState,//enviar la desestructuracion del formState
        formState,
        onInputChange,
        onResetForm,
    }
}

