import {useController, UseControllerProps} from "react-hook-form";
import {SignUpForm} from "@/types/SignUpForm";

export const Input = (props: UseControllerProps<SignUpForm>) => {
    
    const { field, fieldState } = useController(props)  
    
    return (
        <div>
            <input 
                {...field}
                placeholder={props.name}
                className={`border ${fieldState.invalid ? 'border-red' : 'border-white'} p-3 text-black`}
            />
            {fieldState.error?.type === 'required' && <p>Campo Obrigatório.</p> }
            {fieldState.error?.type === 'minLength' && <p>O tamanho minimo é de 2 caracteres.</p> }
            {fieldState.error?.type === 'min' && <p>Valor minimo exigido.</p> }
            {fieldState.error?.type === 'max' && <p>Valor maximo exigido.</p> }
            {fieldState.error  && <p>teste</p> }
            
        </div>
    )
}