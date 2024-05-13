import Banner from "../shared/Banner";
import NewsRoom from "./NewsRoom";

export default function NewsPage() {
    return (
        <main>
            <Banner menu_title="뻥튀기 소식" />
            <h1 className="line py-8 text-center text-xl">뻥튀기 소식</h1>
            <NewsRoom />
        </main>
    );
}