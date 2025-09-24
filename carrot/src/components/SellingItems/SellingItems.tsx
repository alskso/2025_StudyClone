import * as S from "./SellingItemsStyle";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const truncatedTitle =
    product.title.length > 12
      ? product.title.slice(0, 12) + "..."
      : product.title;

  const handleClick = () => {
    navigate(`/detailpage/${product.id}`);
  };

  return (
    <S.Card onClick={handleClick} style={{ cursor: "pointer" }}>
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
