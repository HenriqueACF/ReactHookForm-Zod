"use client"

import {Form, useForm} from "react-hook-form";



export default function Home() {
    const {register, control} = useForm();
    
    const handleSuccess = () => {
        alert('sucesso')
    }
    const handleError = () => {
        alert('erro')   
    }
  return (
      <div className="container mx-auto">
          
          <Form
            control={control}
            action={'https://jsonplaceholder.typicode.com/posts'}
            onSuccess={handleSuccess}
            onError={handleError}
          >
              <input 
                  {...register("title", {required: true})} className="mr-3 border border-white p-3 text-black"/>
              <input 
                  {...register("body", {required: true})} className="mr-3 border border-white p-3 text-black"/>
              <input
                  {...register("userId", {required: true})} className="border border-white p-3 text-black"/>
              <button>Enviar</button>
          </Form>
          
      </div>
  );
}
