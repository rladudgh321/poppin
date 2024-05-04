'use client'

import Image from 'next/image';
import top from '../../../public/top.png';
import { useCallback } from 'react';

export default function LocationTop() {
    const onClickTop = useCallback(()=>{
        scrollTo({top:0, behavior: "smooth"});
    },[]);
    return (
        <div className="fixed bottom-5 right-5">
            <span>
                <Image src={top} alt='top' width={34} height={34} onClick={onClickTop} />
            </span>
        </div>
    );
}