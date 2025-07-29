"use client"

import {SubmitHandler, useForm} from "react-hook-form";

type  Inputs = {
  name: string;
  lastName: string;
  age: number;
};

export default function Home() {
  const { handleSubmit, register, formState:{errors} } = useForm<Inputs>()
  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }

  return (
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input
              {...register('name', {required: true, minLength:2, maxLength:50})}
              placeholder="Digite seu nome"
              className="border border-white p-3 text-black"
          />
          {errors.name?.type==='required' && <p>Campo obrigatório</p>}
          {errors.name?.type==='minLength' && <p>Este item precisa ter pelo menos 2 caracteres</p>}

          <input
              {...register('lastName')}
              placeholder="Digite seu sobrenome"
              className="block mt-4 border border-white p-3 text-black"
          />

          <input
              type="number"
              {...register('age', {required: 'Campo idade obrigatório',  min:18, max:100})}
              placeholder="Digite sua idade"
              className="block mt-4 border border-white p-3 text-black"
          />
          {errors.age &&  <p>{errors.age.message}</p>}

          <input type="submit" value="Enviar" />
        </form>
      </div>
  );
}
