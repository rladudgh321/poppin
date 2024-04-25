'use client'

import Image from "next/image";
import { useParams } from "next/navigation";

import { imagesItems } from "@/app/shared/interface";
import DetailCarousel from "./DetailCarousel";
import { useRecoilState } from "recoil";
import { PictureActiveAtom } from "@/app/recoil";
import { useState } from "react";

export default function Picture({product}: {product:imagesItems}) {
    const params = useParams();
    // const queryDecode = decodeURIComponent(params?.id as string);  
    const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
        <div>
            <div className="h-[500px]">
                {product.id === Number(params.id) && <Image src={product?.images[activeIndex].src} alt={product?.title} width={500} height={500} className="overflow-hidden h-[500px]" />}
                <div className="relative">
                    {product?.id === Number(params.id) && <DetailCarousel setActiveIndex={setActiveIndex} images={product.images} />}
                </div>
            </div>
        </div>
    );
}