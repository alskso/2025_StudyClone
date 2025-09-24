import * as S from "./SellingItemsStyle";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";

export default function SellingItems() {
  const { id } = useParams<{ id: string }>();
  const product = data.products.find((p) => p.id === Number(id));
  
  if (!product) return <div>상품을 찾을 수 없습니다</div>;

  const truncatedTitle =
    product.title.length > 12
      ? product.title.slice(0, 12) + "..."
      : product.title;
  return (
    <S.Card>
      <S.ImageContainer>
        <S.Image src={product.images[0]} alt="상품이미지" />
      </S.ImageContainer>
      <S.Info>
        <S.Title>{truncatedTitle}</S.Title>
        <S.Price>{product.price}</S.Price>
        <S.Meta>
          {product.seller.location} · {product.time}
        </S.Meta>
      </S.Info>
    </S.Card>
  );
}
