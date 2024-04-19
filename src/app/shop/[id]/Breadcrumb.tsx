import Link from 'next/link';

export default function Breadcrumb({params}: {params?: { id: string }}) {
    console.log(params)
    return (
        <nav className="max-w-7xl mx-auto my-10">
            <div className="flex gap-x-4 flex-row-reverse">
                <Link href="/shop">SHOP</Link>
                <div>&gt;</div>
                <Link href="/">홈</Link>
            </div>
        </nav>
    );
}