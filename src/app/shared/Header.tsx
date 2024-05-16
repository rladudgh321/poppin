import Image from 'next/image';
import { GrLanguage } from "react-icons/gr";
import { PiPersonArmsSpreadLight } from "react-icons/pi";
import logo from '../../../public/logo.png';
import Link from 'next/link';


export default function Header() {
  return (
    <header className="header h-24 flex justify-between items-center p-2 text-xl">
      <div className="logo w-[240px] shrink-0">
        <Link href="/"><Image src={logo} alt="logo" width={250} height={80} /></Link>
      </div>
      <nav className="nav w-full">
        <div className="flex justify-between text-center">
            <div className="w-full"><Link href="/shop">쇼핑</Link></div>
            <div className="w-full"><Link href="/intro">회사소개</Link></div>
            <div className="w-full"><Link href="/alliance">제휴문의</Link></div>
            <div className="w-full"><Link href="/customer">고객문의</Link></div>
            <div className="w-full"><Link href="/news">뉴스</Link></div>
        </div>
      </nav>
      <div className="other w-[240px] flex justify-around px-4 items-center">
        <div className="flex gap-x-2 items-center">
        <GrLanguage />
          <select name='lang'>
            <option value="ko">KOR</option>
            <option value="en">ENG</option>
          </select>
          
        </div>
        <Link href='/login'>
          <PiPersonArmsSpreadLight />
        </Link>
      </div>
    </header>
  );
}