'use client'

import { useParams } from "next/navigation";

import Info from "./Info";
import Picture from "./Picture";
import { imagesItems } from "@/app/shared/interface";

export default function Main() {
    const params = useParams();
    const queryDecode = decodeURIComponent(params?.id as string);
    const images:imagesItems[] = [
        {id:1, src:'https://plus.unsplash.com/premium_photo-1676642613556-e3a217b2751e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', fake:'https://images.unsplash.com/photo-1504714146340-959ca07e1f38?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '단호박', price:4000 },
        {id:2, src:'https://plus.unsplash.com/premium_photo-1676642611795-9f1de2b99f83?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', fake:'https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?q=80&w=1568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '자색고구마', price:5000 },
        {id:3, src:'https://plus.unsplash.com/premium_photo-1667049292983-d2524dd0ef08?q=80&w=1149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', fake:'https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '양파', price:5000 },
        {id:4, src:'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', fake:'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1803&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '국내산쌀', price:5000 },
        {id:5, src:'https://plus.unsplash.com/premium_photo-1675964349731-e7710eaebf8f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', fake:'https://plus.unsplash.com/premium_photo-1668799886311-592c6a53b52b?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '현미', price:5000 },
    ];
    return (
        <main>
            {
                images.map((v) => (
                    <div key={v.id} className="flex">
                        {v.title === queryDecode &&
                        (
                            <>
                                <Picture images={v} />
                                <Info />
                            </>
                        )}
                    </div>
                ))
            }
        </main>
    );
}