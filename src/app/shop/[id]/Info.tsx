'use client'

import { imagesItems } from "@/app/shared/interface";
import { useParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import recommendIcon from '../../../../public/recommend.png';
import newIcon from '../../../../public/new.png';

type Inputs = {
    amount: number;
  }

export default function Info({Data}: {Data:imagesItems}) {
    const params = useParams();
    // const [Data,setData] = useRecoilState(PictureAtom);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>();
      console.log('info',params.id);
    // const queryDecode = decodeURIComponent(params?.id as string);
    const amountNumber = watch("amount") as number;
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <form className="ml-20" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
                {
                    Data.id === 1 
                    ? <Image src={recommendIcon} alt="new" width={34} height={16} />
                    : <Image src={newIcon} alt="new" width={34} height={16} />

                }
            </div>
            <div className="text-lg font-bold">{Data.id === Number(params.id) && Data.title }</div>
            <div className="text-gray-500 mb-5 border-b border-gray-300 py-5">{Data.id === Number(params.id) && Data.price + '원' }</div>
            <div className="flex gap-x-4 border-b border-gray-300 pb-5">
                <div>배송비 방법</div>
                <div>택배</div>
            </div>
            <div className="my-5">(최소주문수량 1개 이상)</div>
            <div className="text-red-500 text-sm border-b border-gray-300">수량을 선택해주세요</div>
            <div className="flex gap-x-4 py-5 border-b border-gray-300">
                <div>{Data.id === Number(params.id) && Data.title }</div>
                <input id="amount" type="number" defaultValue={1} min={1} {...register("amount", { valueAsNumber:true })} className="border border-gray-300 w-14" />
                <div>{errors.amount && <span>1이상만 됨</span>}</div>
                <span>개</span>
            </div>
            <div className="flex gap-x-2 py-5 border-b border-gray-300 items-center">
                <div>총 상품금액(수량): </div>
                <div className="text-xl">{ Number(amountNumber * Data.price).toLocaleString() }원</div>
                <div>({amountNumber}개)</div>
            </div>
            <div>
                <button className="bg-slate-500 text-white w-full h-10">Buy Now</button>
            </div>
            <div className="flex gap-x-2 mt-2">
                <button className="border border-slate-300 basis-6/12 h-8 text-sm">ADD CARD</button>
                <button className="border border-slate-300 basis-6/12 h-8 text-sm">장바구니</button>
            </div>
            <div className="flex gap-x-4 items-center mt-5">
                <div className="text-sm">SNS 채널</div>
                <div>트위터</div>
                <div>인스타</div>
            </div>
            <div className="flex gap-x-2 mt-5 text-sm">
                <button className="border border-slate-300 basis-1/2 h-8">추천메일 보내기</button>
                <button className="border border-slate-300 basis-1/2 h-8">대량구매 문의</button>
            </div>
        </form>
    );
}