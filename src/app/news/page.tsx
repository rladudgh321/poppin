import Banner from "../shared/Banner";
import NewsRoom from "./NewsRoom";

export default function NewsPage() {
    return (
        <div>
            <Banner menu_title="뻥튀기 소식" />
            <main className="mx-auto max-w-7xl">
                <h1 className="line py-8 text-center text-xl">뻥튀기 소식</h1>
                <div className="my-4 px-4">7개 소식</div>
                <NewsRoom />
            </main>
        </div>
    );
}



        /**
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
         */