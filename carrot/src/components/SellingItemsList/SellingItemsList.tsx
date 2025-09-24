import SellingItems from "../../components/SellingItems/SellingItems";
import * as S from "./SellingItemsListStyle";
import data from "../../data/data.json";

interface SellingItemsListProps {
  filter?: (product: (typeof data.products)[0]) => boolean; // 선택적 필터 함수
}

export default function SellingItemsList({ filter }: SellingItemsListProps) {
  const filteredProducts = filter
    ? data.products.filter(filter)
    : data.products;

  return (
    <S.ListContainer>
      <S.ListHugger>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <S.ItemWrapper key={product.id}>
              <SellingItems product={product} />
            </S.ItemWrapper>
          ))
        ) : (
          <div>상품이 없습니다.</div>
        )}
      </S.ListHugger>
    </S.ListContainer>
  );
}
