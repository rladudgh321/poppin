import Breadcrumb from '@/app/shared/Breadcrumb';
import SignupForm from './Form';

export default function FindIDPage(){
  return (
    <div>
      <Breadcrumb first='로그인' firstLink='/login' />
      <SignupForm />
    </div>
  );
}