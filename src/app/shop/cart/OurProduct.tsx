export default function OurProduct() {
    return (
        <div className="border border-slate-300 mt-4">
            <div className="bg-slate-200">일반상품(1)</div>
            <table className="w-full">
                <tr className="flex border border-slate-300">
                    <td className="border border-slate-200 border-collapse basis-8 flex justify-center"><input type="checkbox" name="" id="" /></td>
                    <td className="border border-slate-200 border-collapse flex justify-center basis-24">이미지</td>
                    <td className="border border-slate-200 border-collapse flex justify-center flex-grow">상품정보</td>
                    <td className="border border-slate-200 border-collapse flex justify-center basis-24">판매가</td>
                    <td className="border border-slate-200 border-collapse flex justify-center basis-20">수량</td>
                    <td className="border border-slate-200 border-collapse flex justify-center basis-24">적립금</td>
                    <td className="border border-slate-200 border-collapse flex justify-center basis-20">배송구분</td>
                    <td className="border border-slate-200 border-collapse flex justify-center basis-16">배송비</td>
                    <td className="border border-slate-200 border-collapse flex justify-center basis-24">합계</td>
                    <td className="border border-slate-200 border-collapse flex justify-center basis-28">선택</td>
                </tr>
                <tr className="flex border border-slate-300">
                    <td className="border border-slate-200 border-collapse basis-8 flex justify-center items-center"><input type="checkbox" name="" id="" /></td>
                    <td className="border border-slate-200 border-collapse basis-24 shrink-0 flex justify-center items-center">이미지</td>
                    <td className="border border-slate-200 border-collapse flex-grow shrink flex items-center">이장님냉동딸기 2kg(1kgx2봉)</td>
                    <td className="border border-slate-200 border-collapse basis-24 flex justify-center items-center">￦22,500</td>
                    <td className="border border-slate-200 border-collapse basis-20 flex flex-col items-center justify-center">
                        <input type="number" name="" id="" className="w-10 border border-slate-300 p-1" defaultValue={1} />
                        <input type="button" value="변경" className="border border-slate-300 p-1" />
                    </td>
                    <td className="border border-slate-200 border-collapse basis-24 flex justify-center items-center">-</td>
                    <td className="border border-slate-200 border-collapse basis-20 flex items-center justify-center">개별배송</td>
                    <td className="border border-slate-200 border-collapse basis-16 flex justify-center items-center">무료</td>
                    <td className="border border-slate-200 border-collapse basis-24 flex items-center justify-center">￦45,000</td>
                    <td className="border border-slate-200 border-collapse basis-28 flex flex-col">
                        <input type="button" value="주문하기" className="bg-slate-500 text-white" />
                        <input type="button" value="관심상품등록" className="border border-slate-400" />
                        <input type="button" value="삭제" className="border border-slate-400" />
                    </td>
                </tr>
            </table>
            <div className="flex justify-between">
                <div>[개별배송]</div>
                <div className="flex gap-x-2">
                    <div>구매금액</div>
                    <div>45,000</div>
                    <div>+</div>
                    <div>배송비</div>
                    <div>0</div>
                    <div>(무료)</div>
                    <div>=</div>
                    <div>합계: </div>
                    <div>45,000</div>
                </div>
            </div>
            <div>할인 적용 금액은 주문서작성의 결제예정금액에서 확인 가능합니다</div>
            <div className="flex justify-between">
                <div className="flex gap-x-2">
                    <div className="flex items-center">선택된 상품을</div>
                    <div><button className="border border-slate-400 px-2 py-1">삭제하기</button></div>
                    <div><button className="border border-slate-400 px-2 py-1">해외배송으로 옮기기</button></div>
                </div>
                <div className="flex gap-x-4">
                    <button className="border border-slate-400 px-2 py-1">장바구니 비우기</button>
                    <button className="border border-slate-400 px-2 py-1">견적서 출력</button>
                </div>
            </div>
            <div className="flex border border-slate-400">
                <div className="border border-slate-200">총 상품금액</div>
                <div className="border border-slate-200">총 배송비</div>
                <div className="border border-slate-200">결제 금액</div>
            </div>
            <div className="flex">
                <div>45000</div>
                <div>0</div>
                <div>45000</div>
            </div>
        </div>
    );
}