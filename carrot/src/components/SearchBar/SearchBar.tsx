import { useState } from "react";
import * as S from "../SearchBar/SearchBarStyle"; 
import { Product } from "../../types";

type Props = {
  location: string;
  setLocation: (loc: string) => void;
  setShowModal: (v: boolean) => void;
  products: Product[];
  onSearch?: (query: string, category: string | null) => void;
  currentSearchQuery?: string;
};

type Category = "중고거래" | "알바" | "부동산" | "중고차" | "동네업체" | "동네생활" | "모임";

const CATEGORIES: Category[] = [
    "중고거래", "알바", "부동산", "중고차", "동네업체", "동네생활", "모임",
];

function SearchBar({
  location,
  setLocation,
  setShowModal,
  products,
  onSearch,
}: Props) {
  const [category, setCategory] = useState<Category>("중고거래");
  const [query, setQuery] = useState("");
  const [openCat, setOpenCat] = useState(false);


  const handleSearchSubmit = () => {
    if (onSearch) {
      onSearch(query, category === "중고거래" ? null : category);
    }
  };

  return (
    <S.SearchRow>
      {/* 위치 부분 */}
      <S.LocationPill onClick={() => setShowModal(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
        >
          <path d="M12.0022 0.498047C6.10466 0.498047 2.06836 4.96307 2.06836 10.4215C2.06836 14.28 4.55706 17.553 6.82617 19.7593C7.98687 20.8782 9.1371 21.7775 10.005 22.3944C10.4679 22.7331 10.9513 23.0575 11.448 23.346C11.7722 23.5342 12.2218 23.5551 12.546 23.3669C13.0436 23.078 13.5163 22.7313 13.989 22.4049C14.8569 21.7879 16.0072 20.8887 17.1679 19.7698C19.437 17.5634 21.9257 14.3009 21.9257 10.4319C21.9361 4.96307 17.8998 0.498047 12.0022 0.498047ZM12.0022 14.4787C9.76451 14.4787 7.94504 12.6592 7.94504 10.4215C7.94504 8.18374 9.76451 6.36427 12.0022 6.36427C14.24 6.36427 16.0595 8.18374 16.0595 10.4215C16.0595 12.6592 14.24 14.4787 12.0022 14.4787Z" />
        </svg>
        {location}
        <S.Caret />
      </S.LocationPill>

      {/* 검색창 */}
      <S.SearchWrap
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchSubmit();
        }}
      >
        {/* 카테고리 버튼 */}
        <S.CategoryButton type="button" onClick={() => setOpenCat((o) => !o)}>
          {category}
          <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
            <path
              d="M8.17379 8C6.46508 8 5.54326 10.0042 6.65527 11.3016L10.4811 15.765C11.2792 16.6962 12.7199 16.6962 13.5181 15.765L17.3439 11.3016C18.4559 10.0042 17.5341 8 15.8253 8H8.17379Z"
              fill="currentColor"
            />
          </svg>
        </S.CategoryButton>

        {/* 드롭다운 */}
        {openCat && (
          <S.CategoryMenu onMouseLeave={() => setOpenCat(false)}>
            {CATEGORIES.map((c) => (
              <S.CategoryItem
                key={c}
                data-active={c === category}
                onClick={() => {
                  setCategory(c);
                  setOpenCat(false);
                }}
              >
                {c}
              </S.CategoryItem>
            ))}
          </S.CategoryMenu>
        )}

        {/* 검색 입력 */}
        <S.SearchInput
          placeholder="검색어를 입력해주세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* 제출 버튼 */}
        <S.SearchSubmit type="submit" aria-label="검색">
          <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.6507 2.15225C11.1821 2.62088 11.1821 3.38068 11.6507 3.84931L18.1022 10.3008H2.99922C2.33648 10.3008 1.79922 10.8381 1.79922 11.5008C1.79922 12.1635 2.33648 12.7008 2.99922 12.7008H18.1022L11.6507 19.1523C11.1821 19.6209 11.1821 20.3807 11.6507 20.8493C12.1193 21.3179 12.8791 21.3179 13.3477 20.8493L21.8477 12.3493C22.0728 12.1243 22.1992 11.8191 22.1992 11.5008C22.1992 11.1825 22.0728 10.8773 21.8477 10.6523L13.3477 2.15225C12.8791 1.68362 12.1193 1.68362 11.6507 2.15225Z"
              fill="currentColor"
            />
          </svg>
        </S.SearchSubmit>
      </S.SearchWrap>
    </S.SearchRow>
  );
}

export default SearchBar;
