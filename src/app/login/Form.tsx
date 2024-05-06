'use client'

import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  id: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <div className="text-center mt-20">
      <div className="text-2xl">로그인</div>
      <form className="flex justify-center mt-4 gap-x-2" onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-y-2'>
          <div>
            <input placeholder='ID' type="text" className=" w-[40vw] border border-slate-300 p-2" {...register("id", { required: true })} />
            { errors.id &&
            <div className='flex'>
              <div className="text-red-500 font-extrabold">ID를 입력해주세요</div>
            </div> }
          </div>
          <div className='mt-5'>
            <input placeholder='비밀번호' type="text" className="w-[40vw] border border-slate-300 p-2" {...register("password", { required: true })} />
            { errors.password &&
            <div className='flex'>
              <div className="text-red-500 font-extrabold">비밀번호를 입력해주세요</div>
            </div> }
          </div>
        </div>
        <input type="submit" value="로그인" className='border border-slate-300 bg-slate-600 text-white p-4' />
      </form>
    </div>
  );
}