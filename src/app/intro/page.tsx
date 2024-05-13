import Banner from "../shared/Banner";
import Hello from "./Hello";

export default function IntroPage() {
    return (
        <main>
            <Banner menu_title="인사말" />
            <h1 className="line py-8 text-center text-xl">인사말</h1>
            <Hello />
        </main>
    );
}