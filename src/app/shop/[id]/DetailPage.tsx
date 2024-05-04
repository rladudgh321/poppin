import DbTab from "./DbTab"
import DetailPageCoupon from "./DetailPage/DetailPageCoupon";
import DetailPageImg from "./DetailPage/DetailPageImg";
import DetailPageInformation from "./DetailPage/Infomation";
import DetailPageQnA from "./DetailPage/QnA";
import DetailPageReview from "./DetailPage/Review";

export default function DetailPage() {
    return (
        <div className="max-w-7xl mx-auto">
            <DbTab />
            <DetailPageCoupon />
            <DetailPageImg />
            <DetailPageInformation />
            <DetailPageReview />
            <DetailPageQnA />
        </div>
    );
}

