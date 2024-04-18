import Image from 'next/image';
import { GrLanguage } from "react-icons/gr";
import { PiPersonArmsSpreadLight } from "react-icons/pi";
import logo from '../../../public/logo.png';

export default function Header() {
  return (
    <header className="header h-24 flex justify-between items-center p-2">
      <div className="logo w-[240px] shrink-0">
        <Image src={logo} alt="logo" width={250} height={80} />
      </div>
      <nav className="nav w-full">
        <div className="flex justify-between text-center">
            <div className="w-full">쇼핑</div>
            <div className="w-full">회사소개</div>
            <div className="w-full">제휴문의</div>
            <div className="w-full">고객문의</div>
            <div className="w-full">뉴스</div>
        </div>
      </nav>
      <div className="other w-[240px] flex justify-around px-4 items-center">
        <div className="flex gap-x-2 items-center">KOR <span><GrLanguage /></span></div>

        <div><PiPersonArmsSpreadLight /></div>
      </div>
    </header>
  );
}