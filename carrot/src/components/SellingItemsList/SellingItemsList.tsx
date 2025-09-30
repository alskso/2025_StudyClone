import { useState } from "react";
import SellingItems from "../../components/SellingItems/SellingItems";
import * as S from "./SellingItemsListStyle";
import data from "../../data/data.json";
import { Product } from "../../types";

interface SellingItemsListProps {
  filter?: (product: (typeof data.products)[0]) => boolean; 
  limit?: number;        
  initialCount?: number; 
  step?: number;      
}

export default function SellingItemsList({ filter, limit, initialCount = 20, step = 20 }: SellingItemsListProps) {
  const filteredProducts: Product[] = filter
    ? data.products.filter(filter)
    : data.products;

  const [visibleCount, setVisibleCount] = useState(initialCount);

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
