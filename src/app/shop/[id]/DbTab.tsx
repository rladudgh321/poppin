'use client'
import { useCallback, useEffect, useRef, useState } from "react";

export default function DbTab() {
    const [tab, setTab] = useState<string>("coupon");
    const onClickTab = useCallback((e: React.ChangeEvent) => {
        const { value } = e.target as HTMLButtonElement;
        setTab(value);
    },[]);
    const onClickBtnCoupon = useCallback(()=>{
        setTab('coupon');
    },[]);
    const onClickBtnDetailPage = useCallback(()=>{
        setTab('detail_page');
    },[]);
    const onClickBtnProductInfo = useCallback(()=>{
        setTab('product_info');
    },[]);
    const onClickBtnReview = useCallback(()=>{
        setTab('review');
    },[]);
    const onClickBtnQnA = useCallback(()=>{
        setTab('QnA');
    },[]);
   
    return (
        <div className="flex justify-center border-b border-slate-500">
            <>
                <input type="radio" name="tab" value="coupon" id="coupon" onChange={onClickTab} />
                <label htmlFor="coupon">
                    { tab === 'coupon' 
                        ? <button className="border border-slate-300 py-2 px-4 selected">할인쿠폰</button> 
                        : <button className="border border-slate-300 py-2 px-4" onClick={onClickBtnCoupon}>할인쿠폰</button>
                    }
                </label>
            </>
            <>
                <input type="radio" name="tab" value="detail_page" onChange={onClickTab} />
                {
                    tab === 'detail_page'
                    ? <button className="border border-slate-300 py-2 px-4 selected">상세페이지</button>
                    : <button className="border border-slate-300 py-2 px-4" onClick={onClickBtnDetailPage}>상세페이지</button>
                }
            </>
                <input type="radio" name="tab" value="product_info" onChange={onClickTab} />
                {
                    tab === 'product_info'
                    ? <button className="border border-slate-300 py-2 px-4 selected">상품정보</button>
                    : <button className="border border-slate-300 py-2 px-4" onClick={onClickBtnProductInfo}>상품정보</button>
                }
            <>
            </>
            <>
                <input type="radio" name="tab" value="review" onChange={onClickTab} />
                { 
                    tab === 'review'
                    ? <button className="border border-slate-300 py-2 px-4 selected">리뷰</button>
                    : <button className="border border-slate-300 py-2 px-4" onClick={onClickBtnReview}>리뷰</button>
                }
            </>
            <>
                <input type="radio" name="tab" value="QnA" onChange={onClickTab} />
                {
                    tab === 'QnA'
                    ? <button className="border border-slate-300 py-2 px-4 selected">Q&A</button>
                    : <button className="border border-slate-300 py-2 px-4" onClick={onClickBtnQnA}>Q&A</button>
                }
            </>
        </div>
    );
}