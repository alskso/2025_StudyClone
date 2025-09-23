import * as S from "./SellingItemsStyle";
import data from "../../data/data.json";

export default function SellingItems() {
  const truncatedTitle =
    data.product.title.length > 12
      ? data.product.title.slice(0, 12) + "..."
      : data.product.title;
  return (
    <S.Card>
      <S.ImageContainer>
        <S.Image src={data.product.image} alt="마크 레고" />
      </S.ImageContainer>
      <S.Info>
        <S.Title>{truncatedTitle}</S.Title>
        <S.Price>{data.product.price}</S.Price>
        <S.Meta>
          {data.product.seller.location} · {data.product.time}
        </S.Meta>
      </S.Info>
    </S.Card>
  );
}
