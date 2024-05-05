'use client'

import { useParams } from "next/navigation";

import { PictureAtom } from '@/app/recoil';
import { useRecoilValue } from 'recoil';
import Info from "./Info";
import Picture from "./Picture";

export default function Main() {
    const params = useParams();
    const Data = useRecoilValue(PictureAtom);
    return (
        <main className="max-w-7xl mx-auto">
            {
                Data.map((v) => (
                    <div key={v.id} className="flex justify-center">
                        {v.id === Number(params?.id) &&
                        (
                            <>
                                <Picture product={v} />
                                <Info Data={v} />
                            </>
                        )}
                    </div>
                ))
            }
        </main>
    );
}