'use client'

import { useCallback, useState } from "react";
import OurProduct from "./OurProduct";
import ForeignProduct from "./ForeignProduct";

export default function MainProductDetail() {
    const [ourContry, setOurContry] = useState<boolean>(true);
    const notToOurCountry = useCallback(() => {
        setOurContry(false);
    }, []);
    const ToOurCountry = useCallback(() => {
        setOurContry(true);
    }, []);
    return (
        <div>
            {
                ourContry
                ?
                <div className="flex">
                    <button className="p-4 shrink-0">국내 배송(1)</button>
                    <button className="p-4 bg-slate-200 flex-grow text-left" onClick={notToOurCountry}>해외 배송(0)</button>
                </div>
                :
                <div className="flex">
                    <button className="p-4 bg-slate-200 shrink-0" onClick={ToOurCountry}>국내 배송(1)</button>
                    <button className="p-4 shrink-0">해외 배송(0)</button>
                    <div className="flex-grow bg-slate-200">&nbsp;</div>
                </div>
            }

            {
                ourContry 
                ? <OurProduct />
                : <ForeignProduct />
            
            }
        </div>
    );
}