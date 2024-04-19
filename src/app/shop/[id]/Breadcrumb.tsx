import Link from 'next/link';

export default function Breadcrumb({params}: {params?: { id: string }}) {
    console.log(params)
    return (
        <nav className="max-w-7xl mx-auto my-10">
            <div className="flex gap-x-4 float-end">
                <Link href="/">홈</Link>
                <div>&gt;</div>
                <Link href="/shop">SHOP</Link>
            </div>
        </nav>
    );
}