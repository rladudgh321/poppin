'use client'

import { useRouter } from 'next/navigation'

export default function ShopDetail({params}: {params: { id: string }}) {
    const router = useRouter();
    console.log(params)
    return (
        <main>
            <div>detail: {params?.id}</div>
        </main>
    );
}