
export default function CustomerContact() {
    return (
        <form className="max-w-7xl mx-auto">
            <div className="flex">
                <div>질문유형</div>
                <div>
                    <select name="product_type" id="product_type">
                        <option value="query_product">상품문의</option>
                        <option value="query_sign">결제문의</option>
                        <option value="query_deliver">배송문의</option>
                        <option value="query_exchange">교환반품문의</option>
                        <option value="query_cancel">취소환불문의</option>
                        <option value="query_etc">기타문의</option>
                    </select>
                </div>
            </div>

            <div className="flex">
                <div>문의제목</div>
                <div>
                    <input type="text" className="border border-x-slate-300" />
                </div>
            </div>

            <div className="flex">
                <div>상품 / 주문 검색</div>
                <div>
                    <input type="text" className="border border-x-slate-300" />
                </div>
            </div>

            <div className="flex">
                <div>수신받을 이메일</div>
                <div>
                    <input type="text" className="border border-x-slate-300" />
                </div>
                <div>예시 | 111@green.com</div>
            </div>

            <div className="flex">
                <div>휴대폰 번호</div>
                <div>
                    <input type="text" className="border border-x-slate-300" />
                </div>
                <div>예시 | 010-1234-5678</div>
            </div>

            <div className="flex">
                <div>작성자</div>
                <div>
                    <input type="text" className="border border-x-slate-300" />
                </div>
            </div>

            <div className="flex">
                <div>내용</div>
                <div>
                    <input type="text" className="border border-x-slate-300" />
                </div>
            </div>

            <div className="flex">
                <div>개인정보 수집 및 이용 동의</div>
                <div>
                    <div className="border border-slate-300 h-24 overflow-scroll">
                        <div>■ 개인정보의 수집·이용 목적</div>
                        <div>서비스 제공 및 계약의 이행, 구매 및 대금결제, 물품배송 또는 청구지 발송, 회원관리 등을 위한 목적</div>

                        <div>■ 수집하려는 개인정보의 항목</div>
                        <div>이름, 주소, 연락처, 이메일 등</div>

                        <div>■ 개인정보의 보유 및 이용 기간</div>
                        <div>회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외없이 해당정보를 파기합니다. </div>
                    </div>
                    <div>
                        <div className="flex gap-x-2">
                            <div>
                                <label htmlFor="info_ok">동의함</label>
                                <input type="radio" name="info" id="info_ok" value="info_ok" />
                            </div>
                            <div>
                                <label htmlFor="info_no">동의안함</label>
                                <input type="radio" name="info" id="info_no" value="info_no" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <input type="submit" value="등록" />
            </div>

        </form>
    );
}