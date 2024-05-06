import Link from 'next/link';

export default function LoginInfoPage() {
  return (
    <div className="flex justify-center my-10">
      <div className='border-t border-slate-300 flex gap-x-4 py-4'>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Link href='/login/findid'>아이디 찾기</Link>
        <Link href='/login/findpassword' className='border-l border-slate-300 pl-4'>비밀번호 찾기</Link>
        <Link href='/login/signup' className='border-l border-slate-300 pl-4'>회원가입</Link>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </div>
    </div>
  );
}