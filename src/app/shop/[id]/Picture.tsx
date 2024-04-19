'use client'

import Image from "next/image";
import { useParams } from "next/navigation";

import { imagesItems, imagesProps } from "@/app/shared/interface";
import DetailCarousel from "./DetailCarousel";

export default function Picture({images}: imagesProps) {
    const params = useParams();
    const queryDecode = decodeURIComponent(params?.id as string);
    console.log({images})
    return (
        <div>
            <div className="h-[500px]">
                {images?.title === queryDecode && <Image src={images?.src} alt={images?.title} width={500} height={500} className="overflow-hidden h-[500px]" />}
                <div className="relative">
                    {images?.title === queryDecode && <DetailCarousel images={images} />}
                </div>
            </div>
        </div>
    );
}