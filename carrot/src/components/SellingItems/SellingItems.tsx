import * as S from "./SellingItemsStyle";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  images: string[];
  title: string;
  category: string;
  time: string;
  price: string;
  isSold?: boolean;
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

  const parseTimeToMinutes = (timeStr: string): number => {
    if (timeStr.includes("일")) {
      const days = parseInt(timeStr, 10);
      return days * 24 * 60;
    } else if (timeStr.includes("시간")) {
      const hours = parseInt(timeStr, 10);
      return hours * 60;
    } else if (timeStr.includes("분")) {
      const minutes = parseInt(timeStr, 10);
      return minutes;
    }
    return 0;
  };

  const elapsedMinutes = parseTimeToMinutes(product.time);
  const isExpired = elapsedMinutes >= 30 * 24 * 60;

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

        {/* 판매 완료 또는 판매 불가 표시 */}
        {product.isSold && <S.SoldOverlay>판매 완료</S.SoldOverlay>}
        {!product.isSold && isExpired && (
          <S.SoldOverlay>판매 불가</S.SoldOverlay>
        )}
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
