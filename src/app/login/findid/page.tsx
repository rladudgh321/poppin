import Breadcrumb from '@/app/shared/Breadcrumb';
import FindIdForm from './Form';

export default function FindIDPage(){
  return (
    <div>
      <Breadcrumb first='로그인' firstLink='/login' />
      <FindIdForm />
    </div>
  );
}