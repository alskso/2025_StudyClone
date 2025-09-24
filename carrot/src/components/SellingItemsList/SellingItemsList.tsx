import SellingItems from "../../components/SellingItems/SellingItems";
import * as S from "./SellingItemsListStyle";

function SellingItemsList() {
  return (
    <S.ListHugger>
      <SellingItems />
      {/* 아직 작성중입니다! 세부페이지 아래쪽 리스트 컴포넌트입니다 */}
    </S.ListHugger>
  );
}

export default SellingItemsList;