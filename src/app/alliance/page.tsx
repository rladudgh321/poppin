import Banner from "../shared/Banner";
import AllianceContact from "./AllianceContact";

export default function AlliancePage() {
    return (
        <main>
            <Banner menu_title="제휴문의" />
            <h1 className="line py-8 text-center text-xl">제휴문의</h1>
            <AllianceContact />
        </main>
    );
}