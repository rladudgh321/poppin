'use client'

import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  emailOrPhone: string | number;
}

export default function FindIdForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onChangeBtn = useCallback(()=>{},[]);
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <div className="text-center">
      <div className="text-2xl">이메일 찾기</div>
      <form className="flex justify-center mt-4 gap-x-2" onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-y-2'>
          <div className='flex items-center'>
            <label htmlFor='user-type' className='basis-28 flex justify-start'>회원유형</label>
            <div className='flex flex-col flex-grow'>
              <select name="user_type" onChange={onChangeBtn} className='mb-3 border border-slate-300 h-10' >
                <option value="normal">개인회원</option>
                <option value="foreign">외국인회원</option>
                <option value="business">사업자회원</option>
                <option value="law">법인회원</option>
              </select>
              <div className='flex gap-x-6'>
                <div className=''>
                  <input type="radio" name="option" id="email" />
                  <label htmlFor="email" className='ml-2'>이메일</label>
                </div>
                <div>
                  <input type="radio" name="option" id="phone" />
                  <label htmlFor="phone" className='ml-2'>핸드폰번호</label>
                </div>
              </div>
            </div>

          </div>
          <div className='flex my-5'>
            <label htmlFor="name" className='basis-28 w-full flex justify-start items-center'>이름</label>
            <input placeholder='이름' id='name' type="text" className=" w-[40vw] border border-slate-300 p-2" {...register("name", { required: true })} />
            { errors.name && <div className="text-red-500 font-extrabold">이름을 입력해주세요</div> }
          </div>
          <div className='flex'>
            <label htmlFor="find-email" className='text-left basis-28 flex justify-start items-center'>이메일로 찾기</label>
            <input id='find-email' placeholder='이메일' type="text" className="w-[40vw] border border-slate-300 p-2" {...register("password", { required: true })} />
            { errors.password && <div className="text-red-500 font-extrabold">비밀번호를 입력해주세요</div> }
          </div>
        </div>
        <input type="submit" value="로그인" className='border border-slate-300 bg-slate-600 text-white p-4' />
      </form>
    </div>
  );
}