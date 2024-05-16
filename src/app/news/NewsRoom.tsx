"use client"

import { useRecoilValue } from "recoil";
import { NewsAtom } from "../recoil";
import Link from "next/link";

export default function NewsRoom() {
    const Data = useRecoilValue(NewsAtom);
    
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-4">
        {
            Data.map((v,i) => {
                return (
                <div key={v.id}>
                    <div className="img relative w-full h-0 pb-[100%]">
                        <Link  href={v.url}>
                            <img className="absolute top-0 left-0 right-0 w-full h-full object-cover" src={v.images[0].src} alt={v.title} />
                            <img className="absolute top-0 left-0 right-0 w-full h-full object-cover opacity-0 transition-all duration-500 ease-in-out hover:opacity-100" src={v.images[1].src} alt={v.title} />
                        </Link>
                    </div>
                    <div className="title line">{v.title}</div>
                    <div className="flex float-end">{v.from}</div>
                    {/* <div className="other relative flex justify-between">
                        <span>
                            <>
                                {
                                    v.id !== 1
                                    ? <Image src={newIcon} alt="new" width={34} height={16} />
                                    : <Image src={recommendIcon} alt="new" width={34} height={16} />
                                }
                            </>
                        </span>
                        <span className="relative">
                            <span className="absolute right-0 w-[27px]">
                                <BiHeartCircle className="absolute text-[30px] text-slate-400" />
                                <Image src={likeIcon} alt='like' width={27} height={13} className="absolute opacity-0 transition-all hover:opacity-100" />
                            </span>
                        </span>
                    </div> */}
                </div>
                );
            })
        }
    </div>
        </div>
    );
}

/*
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
*/