'use client'

import { useParams } from "next/navigation";

export default function Picture({images}) {
    const params = useParams();
    const queryDecode = decodeURIComponent(params?.id as string);
    return (
        <div>{queryDecode}</div>
    );
}