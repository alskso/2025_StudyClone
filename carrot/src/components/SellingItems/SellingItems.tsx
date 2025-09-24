// src/components/SellingItems/SellingItems.tsx
import * as S from "./SellingItemsStyle";

interface Product {
  id: number;
  images: string[];
  title: string;
  category: string;
  time: string;
  price: string;
  seller: {
    name: string;
    location: string;
  };
}

interface Props {
  product: Product;
}

export default function SellingItems({ product }: Props) {
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
