import Banner from "../shared/Banner";
import CustomerContact from "./CustomerContact";

export default function ShopPage() {
    return (
        <main>
            <Banner menu_title="고객문의" />
            <h1 className="line py-8 text-center text-xl">고객문의</h1>
            <CustomerContact />
        </main>
    );
}