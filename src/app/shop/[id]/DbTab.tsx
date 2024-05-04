'use client'
import { useCallback, useEffect, useState } from "react";

export default function DbTab() {
    const [tab, setTab] = useState<string>("coupon");
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
    useEffect(()=>{
        const locationCoupon = document.querySelector('#coupon') as HTMLElement;
        const locationCouponOffsetTop = locationCoupon.offsetTop;
        const locationDetailPage = document.querySelector('#detail_page') as HTMLElement;
        const locationDetailPageOffset = locationDetailPage.offsetTop;
        const locationProductInfo = document.querySelector('#info') as HTMLElement;
        const locationProductInfoOffset = locationProductInfo.offsetTop;
        const locationReview = document.querySelector('#review') as HTMLElement;
        const locationReviewOffset = locationReview.offsetTop;
        const locationQnA = document.querySelector('#qna') as HTMLElement;
        const locationQnAOffset = locationQnA.offsetTop;
        if(tab === 'coupon') {
            window.scrollTo({ top: locationCouponOffsetTop, behavior: "smooth" });
        } else if (tab === 'detail_page') {
            window.scrollTo({ top: locationDetailPageOffset, behavior: "smooth" });
        } else if(tab === 'product_info') {
            window.scrollTo({ top: locationProductInfoOffset, behavior: "smooth" });
        } else if(tab === 'review') {
            window.scrollTo({ top: locationReviewOffset, behavior: "smooth" });
        } else if(tab === 'QnA') {
            window.scrollTo({ top: locationQnAOffset, behavior: "smooth" });
        }
    },[tab])
    return (
        <div className="flex justify-center border-b border-slate-500">
            <>
                <label htmlFor="coupon">
                    { tab === 'coupon' 
                        ? <button className="border border-slate-300 py-2 px-4 selected">할인쿠폰</button> 
                        : <button className="border border-slate-300 py-2 px-4" onClick={onClickBtnCoupon}>할인쿠폰</button>
                    }
                </label>
            </>
            <>
                {
                    tab === 'detail_page'
                    ? <button className="border border-slate-300 py-2 px-4 selected">상세페이지</button>
                    : <button className="border border-slate-300 py-2 px-4" onClick={onClickBtnDetailPage}>상세페이지</button>
                }
            </>
                {
                    tab === 'product_info'
                    ? <button className="border border-slate-300 py-2 px-4 selected">상품정보</button>
                    : <button className="border border-slate-300 py-2 px-4" onClick={onClickBtnProductInfo}>상품정보</button>
                }
            <>
            </>
            <>
                { 
                    tab === 'review'
                    ? <button className="border border-slate-300 py-2 px-4 selected">리뷰</button>
                    : <button className="border border-slate-300 py-2 px-4" onClick={onClickBtnReview}>리뷰</button>
                }
            </>
            <>
                {
                    tab === 'QnA'
                    ? <button className="border border-slate-300 py-2 px-4 selected">Q&A</button>
                    : <button className="border border-slate-300 py-2 px-4" onClick={onClickBtnQnA}>Q&A</button>
                }
            </>
        </div>
    );
}