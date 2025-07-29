"use client"

import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {SignUpForm} from "@/types/SignUpForm";
import { Input } from "@mui/material";


export default function Home() {
  const { handleSubmit, control } = useForm<SignUpForm>()
  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
  }

  return (
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            
           <Controller
            control={control}
            name='name'
            rules={{required: true, minLength: 3, maxLength: 100}}
            render={({field, fieldState})=> 
                <Input {...field}
                    style={{backgroundColor: '#FFF'}}
                    error={fieldState.invalid}
                />
           }
           />

            <Controller
                control={control}
                name='lastName'
                render={({field})=>
                    <Input {...field}
                           style={{backgroundColor: '#FFF'}}
                    />
            }
            />

            <Controller
                control={control}
                name='age'
                render={({field, fieldState})=>
                    <Input {...field}
                           style={{backgroundColor: '#FFF'}}
                           error={fieldState.invalid}
                    />
            }
                rules={{required: true, min: 18}}
            />
            <input type="submit" value="Enviar" />
        </form>
      </div>
  );
}
