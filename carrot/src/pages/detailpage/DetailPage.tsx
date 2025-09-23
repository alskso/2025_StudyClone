import Header from "../../components/Header/Header";
import SellingItemsList from "../../components/SellingItemsList/SellingItemsList";
import data from "../../data/data.json";

import * as S from "./DetailPageStyle";

function DetailPage() {
  return (
    <>
      <Header />
      <S.Container>
        <S.root>홈 &gt; 중고거래 &gt; {data.product.title}</S.root>
        {/* 왼쪽 */}
        <S.Hugger>
          <S.LeftSection>
            <S.Imghugger>
              <S.ProductImage
                src={data.product.image}
                alt="화장품 더미 이미지"
              />
            </S.Imghugger>
            <S.SellerInfo>
              <S.SellerRightInfo>
                <S.SellerProfileHugger>
                  <S.SellerProfileImg
                    src={data.product.image}
                    alt="화장품 더미 이미지"
                  />
                </S.SellerProfileHugger>
                <div>
                  <S.SellerName>{data.product.seller.name}</S.SellerName>
                  <S.SellerLocation>
                    {data.product.seller.location}
                  </S.SellerLocation>
                </div>
              </S.SellerRightInfo>
              <div>
                <S.MannerTemperature>
                  <S.MannerGraph>
                    <div>
                      <S.TempValue value={data.product.seller.temperature}>
                        {data.product.seller.temperature}°C
                      </S.TempValue>
                      <S.GaugeWrapper>
                        <S.GaugeBar value={data.product.seller.temperature} />
                      </S.GaugeWrapper>
                    </div>
                    <S.Emoji>😊</S.Emoji>
                  </S.MannerGraph>
                  <S.MannerLabel>매너온도</S.MannerLabel>
                </S.MannerTemperature>
              </div>
            </S.SellerInfo>
          </S.LeftSection>

          {/* 오른쪽 */}
          <S.RightSection>
            <S.Title>{data.product.title}</S.Title>
            <S.Details>
              <S.Category href="/storemain">{data.product.category}</S.Category>
              · {data.product.time}
            </S.Details>
            <S.Price>{data.product.price}</S.Price>
            <S.Description>{data.product.description}</S.Description>
            <S.Reactions>
              {" "}
              채팅 {data.product.reactions.chat} · 관심{" "}
              {data.product.reactions.interest} · 조회{" "}
              {data.product.reactions.views}
            </S.Reactions>
            <S.ToTheApp type="button" value="당근 앱에서 보기" />
          </S.RightSection>
        </S.Hugger>
        <S.MoreHugger>
          <S.More>피치 의 판매물품</S.More>
          <SellingItemsList />
        </S.MoreHugger>
        <S.MoreHugger>
          <S.More>인기매물</S.More>
        </S.MoreHugger>
      </S.Container>
    </>
  );
}

export default DetailPage;
