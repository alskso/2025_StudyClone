// src/components/SellingItemsList/SellingItemsList.tsx
import SellingItems from "../../components/SellingItems/SellingItems";
import * as S from "./SellingItemsListStyle";
import data from "../../data/data.json";

interface SellingItemsListProps {
  sellerName: string;
  currentProductId: number;
}

export default function SellingItemsList({
  sellerName,
  currentProductId,
}: SellingItemsListProps) {
  // 판매자명이 같은 상품만, 현재 상품 제외
  const filteredProducts = data.products.filter(
    (p) => p.seller.name === sellerName && p.id !== currentProductId
  );

  return (
    <S.ListHugger>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <SellingItems key={product.id} product={product} />
        ))
      ) : (
        <div>판매자가 등록한 다른 상품이 없습니다.</div>
      )}
    </S.ListHugger>
  );
}
