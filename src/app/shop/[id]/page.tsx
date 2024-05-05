
import Breadcrumb from "../../shared/Breadcrumb";
import Banner from "../Banner";
import DetailPage from "./DetailPage";
import Main from "./Main";


export default function ShopDetail() {
    
    return (
        <>
            <Banner />
            <Breadcrumb first="쇼핑" firstLink='/shop' />
            <Main />
            <DetailPage />
        </>
    );
}