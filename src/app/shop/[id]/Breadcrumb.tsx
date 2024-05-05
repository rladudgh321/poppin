import Link from 'next/link';

interface BreadcrumbProps {
    params?: { id: string };
    first?: string;
    firstLink?: string;
}

export default function Breadcrumb({params, first, firstLink}: BreadcrumbProps) {
    console.log(params)
    return (
        <nav className="max-w-7xl mx-auto my-10">
            <div className="flex gap-x-4 flex-row-reverse">
                <Link href={firstLink}>{first}</Link>
                <div>&gt;</div>
                <Link href="/">홈</Link>
            </div>
        </nav>
    );
}