'use client'
import { useCallback, useState } from "react";

export default function DbTab() {
    const [tab, setTab] = useState<string>("coupon");
    const onClickTab = useCallback((e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const { value } = e.target as HTMLButtonElement;
        setTab(value);
    },[])
    return (
        <div className="flex justify-center border-b border-slate-500">
            <>
                <input type="radio" name="tab" value="coupon" id="coupon" onClick={onClickTab} />
                <label htmlFor="coupon">
                    { tab === 'coupon' 
                        ? <button className="border border-slate-300 py-2 px-4 selected">할인쿠폰</button> 
                        : <button className="border border-slate-300 py-2 px-4">할인쿠폰</button>
                    }
                </label>
            </>
            <>
                <input type="radio" name="tab" value="detail_page" onClick={onClickTab} />
                {
                    tab === 'detail_page'
                    ? <button className="border border-slate-300 py-2 px-4 selected">상세페이지</button>
                    : <button className="border border-slate-300 py-2 px-4">상세페이지</button>
                }
            </>
                <input type="radio" name="tab" value="product_info" onClick={onClickTab} />
                {
                    tab === 'product_info'
                    ? <button className="border border-slate-300 py-2 px-4 selected">상품정보</button>
                    : <button className="border border-slate-300 py-2 px-4">상품정보</button>
                }
            <>
            </>
            <>
                <input type="radio" name="tab" value="review" onClick={onClickTab} />
                { 
                    tab === 'review'
                    ? <button className="border border-slate-300 py-2 px-4 selected">리뷰</button>
                    : <button className="border border-slate-300 py-2 px-4">리뷰</button>
                }
            </>
            <>
                <input type="radio" name="tab" value="QnA" onClick={onClickTab} />
                {
                    tab === 'QnA'
                    ? <button className="border border-slate-300 py-2 px-4 selected">Q&A</button>
                    : <button className="border border-slate-300 py-2 px-4">Q&A</button>
                }
            </>
        </div>
    );
}