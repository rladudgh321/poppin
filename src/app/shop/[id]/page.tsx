
import Breadcrumb from "../../shared/Breadcrumb";
import Banner from "@/app/shared/Banner";
import DetailPage from "./DetailPage";
import Main from "./Main";


export default function ShopDetail() {
    
    return (
        <>
            <Banner menu_title="쇼핑" />
            <Breadcrumb first="쇼핑" firstLink='/shop' />
            <Main />
            <DetailPage />
        </>
    );
}