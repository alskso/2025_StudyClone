import { useState, useCallback } from "react"; // 👈 useCallback 임포트
import { Container as HeaderContainer } from "../../components/Header/HeaderStyle";
import * as S from "./StoreMainStyle";
import { Product } from "../../types";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar/SearchBar";
import SellingItemsList from "../../components/SellingItemsList/SellingItemsList";
import { useNavigate } from "react-router-dom";

export const CustomHeaderContainer = styled(HeaderContainer)`
 height: 0px;
`;

type StoreMainProps = {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  products: Product[];
};

function StoreMain({
  location,
  setLocation,
  setShowModal,
  products,
}: StoreMainProps) {
  // ✅ 위치 필터 state
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // 가격 필터 state

  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null); // 입력용 임시 state

  const [tempMinPrice, setTempMinPrice] = useState<string>("");
  const [tempMaxPrice, setTempMaxPrice] = useState<string>("");

  const [onlyAvailable, setOnlyAvailable] = useState(false);

  // ✅ 검색어 상태 추가
  const [searchQuery, setSearchQuery] = useState<string>(""); //초기화

  const resetFilters = () => {
    setSelectedLocation(null);
    setSelectedCategory(null);
    setSelectedPrice(null);
    setMinPrice(null);
    setMaxPrice(null);
    setTempMinPrice("");
    setTempMaxPrice("");
    setSearchQuery(""); 
    setSelectedCategory(null);
  };
  const navigate = useNavigate(); // 문자열 가격을 숫자로 변환하는 유틸
  function parsePrice(priceStr: string): number {
    return parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
  }

  // 💡 useCallback을 사용하여 필터 함수 정의 및 안정화
  const productFilter = useCallback(
    (p: Product) => {
      const priceNum = parsePrice(p.price);
      // 검색어 상태를 최신 값으로 사용
      const searchLower = searchQuery.toLowerCase().trim();

      // ✅ 검색 필터링 로직
      const matchesSearch =
        !searchLower ||
        (p.title?.toLowerCase().includes(searchLower) ?? false) ||
        (p.description?.toLowerCase().includes(searchLower) ?? false) ||
        (p.category?.toLowerCase().includes(searchLower) ?? false);

      return (
        matchesSearch && // 검색 조건 추가
        (!selectedLocation || p.seller.location === selectedLocation) &&
        (!selectedCategory || p.category === selectedCategory) &&
        (!selectedPrice || priceNum <= selectedPrice) &&
        (!minPrice || priceNum >= minPrice) &&
        (!maxPrice || priceNum <= maxPrice) &&
        (!onlyAvailable || !p.isSold)
      );
    },
    [
      // 💡 의존성 배열에 filter에 사용되는 모든 state를 명시
      searchQuery,
      selectedLocation,
      selectedCategory,
      selectedPrice,
      minPrice,
      maxPrice,
      onlyAvailable,
    ]
  );

  return (
    <>
        {" "}
      <CustomHeaderContainer>
            <Header />  {" "}
      </CustomHeaderContainer>
        {" "}
      <S.SearchContainer>
           {" "}
        <SearchBar
          location={location}
          setLocation={setLocation}
          setShowModal={setShowModal}
          products={products}
          // ✅ onSearch 핸들러 추가
          onSearch={(query, category) => {
            setSearchQuery(query.trim());
            setSelectedCategory(category || null);
          }}
        ></SearchBar>
          {" "}
      </S.SearchContainer>
        {" "}
      <S.ContentContainer>
            {/* 페이지 설명 */}    {" "}
        <S.PageNav>
                홈 &gt; <b>중고거래</b>     {" "}
          {/* 주소데이터로 변경 필요! */}     {" "}
          <S.PositionTitle>
            서울특별시 도봉구{""}{" "}
            <span>{selectedLocation ? selectedLocation : "전체"}</span> 중고거래
          </S.PositionTitle>
              {" "}
        </S.PageNav>
                {/* 필터랑 상품 구역 나누기 */}   {" "}
        <S.SeperationBox>
              {" "}
          <S.SideFilter>
            {/* ... 필터 UI (변동 없음) ... */}      {/* 필터부분 제목 */}
                 {" "}
            <S.FilterTitle>
                     <h3>필터</h3>      {" "}
              <S.ResetFilter onClick={resetFilters}>초기화</S.ResetFilter>  
                {" "}
            </S.FilterTitle>
                  {/*거래가능 필터 */}     {" "}
            <S.AvailableFilter>
                    {" "}
              <input
                type="checkbox"
                style={{ accentColor: "#FF6600" }}
                checked={onlyAvailable}
                onChange={(e) => setOnlyAvailable(e.target.checked)}
              />
                     <p>거래 가능만 보기</p>     {" "}
            </S.AvailableFilter>
                  {/* 위치 필터 */}     {" "}
            <S.PositionFilter>
                     <b>위치</b>       <p>서울특별시 도봉구</p> 
                  {" "}
              <S.FilterSelcet>
                       {" "}
                <input
                  type="radio"
                  name="location"
                  value="쌍문동"
                  checked={selectedLocation === "쌍문동"}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                />
                        <span>쌍문동</span>      {" "}
              </S.FilterSelcet>
                    {" "}
              <S.FilterSelcet>
                       {" "}
                <input
                  type="radio"
                  name="location"
                  value="창동"
                  checked={selectedLocation === "창동"}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                />
                        <span>창동</span>      {" "}
              </S.FilterSelcet>
                   {" "}
            </S.PositionFilter>
                        {/* 카테고리 필터*/}     {" "}
            <S.FilterBox>
                     <b>카테고리</b>      {" "}
              <S.FilterSelcet>
                       {" "}
                <input
                  type="radio"
                  name="category"
                  value="디지털기기"
                  checked={selectedCategory === "디지털기기"}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                />
                        <span>디지털기기</span>      {" "}
              </S.FilterSelcet>
                    {" "}
              <S.FilterSelcet>
                       {" "}
                <input
                  type="radio"
                  name="category"
                  value="생활가전"
                  checked={selectedCategory === "생활가전"}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                />
                        <span>생활가전</span>      {" "}
              </S.FilterSelcet>
                    {" "}
              <S.FilterSelcet>
                       {" "}
                <input
                  type="radio"
                  name="category"
                  value="가구/인테리어"
                  checked={selectedCategory === "가구/인테리어"}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                />
                        <span>가구/인테리어</span>      {" "}
              </S.FilterSelcet>
                    {" "}
              <S.FilterSelcet>
                       {" "}
                <input
                  type="radio"
                  name="category"
                  value="생활주방"
                  checked={selectedCategory === "생활주방"}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                />
                        <span>생활주방</span>      {" "}
              </S.FilterSelcet>
                    {" "}
              <S.FilterSelcet>
                       {" "}
                <input
                  type="radio"
                  name="category"
                  value="뷰티/미용"
                  checked={selectedCategory === "뷰티/미용"}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                />
                        <span>뷰티/미용</span>      {" "}
              </S.FilterSelcet>
                   {" "}
            </S.FilterBox>
                  {/* 가격 필터 */}     {" "}
            <S.FilterBox>
                     <b>가격</b>      {" "}
              <S.PriceFilterButton>
                       {" "}
                <input
                  type="radio"
                  name="price"
                  value="0"
                  checked={selectedPrice === 0}
                  onChange={(e) => setSelectedPrice(Number(e.target.value))}
                />
                        <span>나눔</span>      {" "}
              </S.PriceFilterButton>
                    {" "}
              <S.PriceFilterButton>
                       {" "}
                <input
                  type="radio"
                  name="price"
                  value="5000"
                  checked={selectedPrice === 5000}
                  onChange={(e) => setSelectedPrice(Number(e.target.value))}
                />
                        <span>5,000원 이하</span>      {" "}
              </S.PriceFilterButton>
                    {" "}
              <S.PriceFilterButton>
                       {" "}
                <input
                  type="radio"
                  name="price"
                  value="10000"
                  checked={selectedPrice === 10000}
                  onChange={(e) => setSelectedPrice(Number(e.target.value))}
                />
                        <span>10,000원 이하</span>      {" "}
              </S.PriceFilterButton>
                    {" "}
              <S.PriceFilterButton>
                       {" "}
                <input
                  type="radio"
                  name="price"
                  value="20000"
                  checked={selectedPrice === 20000}
                  onChange={(e) => setSelectedPrice(Number(e.target.value))}
                />
                        <span>20,000원 이하</span>      {" "}
              </S.PriceFilterButton>
                    {" "}
              <S.PriceInputGroup>
                       {" "}
                <input
                  type="number"
                  placeholder="0"
                  value={tempMinPrice}
                  onChange={(e) => setTempMinPrice(e.target.value)}
                />
                        <span>-</span>
                       {" "}
                <input
                  type="number"
                  placeholder="5000"
                  value={tempMaxPrice}
                  onChange={(e) => setTempMaxPrice(e.target.value)}
                />
                      {" "}
              </S.PriceInputGroup>
                    {" "}
              <S.PriceApplyButton
                onClick={() => {
                  setSelectedPrice(null);
                  setMinPrice(tempMinPrice ? Number(tempMinPrice) : null);
                  setMaxPrice(tempMaxPrice ? Number(tempMaxPrice) : null);
                }}
              >
                        적용하기       {" "}
              </S.PriceApplyButton>
                   {" "}
            </S.FilterBox>
                {" "}
          </S.SideFilter>
              {" "}
          <div style={{ flex: 1 }}>
                 {" "}
            <SellingItemsList
              filter={productFilter} // 👈 useCallback으로 정의된 함수 전달
              initialCount={20}
              step={20}
            />
                {" "}
          </div>
             {" "}
        </S.SeperationBox>
           {" "}
        <S.FloatingButton onClick={() => navigate("/writepage")}>
               {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            width="35"
            height="35"
          >
                  {" "}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
                 {" "}
          </svg>
            {" "}
        </S.FloatingButton>
          {" "}
      </S.ContentContainer>
       {" "}
    </>
  );
}

export default StoreMain;
