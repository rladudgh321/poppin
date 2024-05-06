import Breadcrumb from '@/app/shared/Breadcrumb';
import FindPasswordForm from './Form';

export default function FindIDPage(){
  return (
    <div>
      <Breadcrumb first='로그인' firstLink='/login' />
      <FindPasswordForm />
    </div>
  );
}