import Guide from "./Guide";
import MainProductDetail from "./MainProductDetail";
import Progress from "./Progress";

export default function CartPage() {
    return (
        <main className="mx-auto max-w-7xl">
            <h1 className="line py-8 text-center text-xl">장바구니</h1>
            <Progress />
            <MainProductDetail />
            <Guide />
        </main>
    );
}
