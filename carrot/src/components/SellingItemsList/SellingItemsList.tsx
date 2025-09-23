import SellingItems from "../../components/SellingItems/SellingItems";
import * as S from "./SellingItemsListStyle";

function SellingItemsList() {
  return (
    <S.ListHugger>
      <SellingItems />
      <SellingItems />
    </S.ListHugger>
  );
}

export default SellingItemsList;