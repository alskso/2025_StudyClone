import { useState } from "react";
import SellingItems from "../../components/SellingItems/SellingItems";
import * as S from "./SellingItemsListStyle";
import data from "../../data/data.json";
import { Product } from "../../types";

interface SellingItemsListProps {
  filter?: (product: (typeof data.products)[0]) => boolean; 
  limit?: number;        // ✅ 고정 개수 (예: 6개 섹션)
  initialCount?: number; // ✅ 더보기 리스트 초기값 (예: 20개 시작)
  step?: number;         // ✅ 더보기 단위 (예: 20개씩 추가)
}

export default function SellingItemsList({ filter, limit, initialCount = 20, step = 20 }: SellingItemsListProps) {
  const filteredProducts: Product[] = filter
    ? data.products.filter(filter)
    : data.products;

  // ✅ visibleCount는 "더보기 모드"일 때만 사용
  const [visibleCount, setVisibleCount] = useState(initialCount);

  // ✅ limit 있으면 무조건 그 개수까지만 보여줌
  const displayedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + step);
  };

  return (
    <div>
      <S.ListContainer>
      <S.ListHugger>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <S.ItemWrapper key={product.id}>
              <SellingItems product={product} />
            </S.ItemWrapper>
          ))
        ) : (
          <S.ProductNone>등록된 상품이 없습니다.</S.ProductNone>
        )}
      </S.ListHugger>
    </S.ListContainer>
      {!limit && visibleCount < filteredProducts.length && (
      <S.LoadMoreWrapper>
        <S.LoadMoreButton onClick={handleLoadMore}>
          더보기
        </S.LoadMoreButton>
      </S.LoadMoreWrapper>
    )}
    </div>
  );
}
