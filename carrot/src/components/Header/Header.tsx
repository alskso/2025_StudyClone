import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./HeaderStyle";
import SearchBar from "../SearchBar/SearchBar";
import data from "../../data/data.json";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [location, setLocation] = useState("쌍문동");
  const navigate = useNavigate();
  
  const popularKeywords: string[] = [
    "인기검색어",
    "에어컨",
    "자전거",
    "아이폰",
    "캠핑",
    "냉장고",
    "골프",
    "나이키",
    "텐트",
    "다이슨",
    "힐링",
    "포트카드",
    "에어팟",
    "버즈",
    "스타벅스",
    "삼성",
    "다이아몬드",
    "선물",
    "노트북",
    "레고",
    "의자",
  ];
  const handleKeywordClick = (keyword: string) => {
    console.log(`검색어 클릭: ${keyword}`); //검색어를 클릭하면 검색창에 뜨지 않고 바로 관련 중고메인페이지로 이동하게 할 예정
  };

  return (
    <S.Container>
      <S.Hugger>
        <S.LogoContainer onClick={() => navigate("/")}>
          <S.Logo src="/assets/logo.png" alt="로고" />
          <S.LogoText>당근</S.LogoText>
        </S.LogoContainer>

        {/* 카테고리 영역 */}
        <S.Categories>
          <S.PerCategory>중고거래</S.PerCategory>
          <S.PerCategory>
            부동산 <S.DownIcon src="/assets/down.png" alt="펼치기" />
            <S.Dropdown>
              <S.DropdownItem>부동산 검색</S.DropdownItem>
              <S.DropdownItem>
                중개사 서비스{" "}
                <S.Arrow src="/assets/arrow.png" alt="더보기 화살표" />
              </S.DropdownItem>
              <S.DropdownItem>
                이용 가이드{" "}
                <S.Arrow src="/assets/arrow.png" alt="더보기 화살표" />
              </S.DropdownItem>
            </S.Dropdown>
          </S.PerCategory>
          <S.PerCategory>
            중고차 <S.DownIcon src="/assets/down.png" alt="펼치기" />
            <S.Dropdown>
              <S.DropdownItem>중고차 검색</S.DropdownItem>
              <S.DropdownItem>
                딜러용 서비스{" "}
                <S.Arrow src="/assets/arrow.png" alt="더보기 화살표" />
              </S.DropdownItem>
            </S.Dropdown>
          </S.PerCategory>
          <S.PerCategory>
            알바 <S.DownIcon src="/assets/down.png" alt="펼치기" />
            <S.Dropdown>
              <S.DropdownItem>알바 검색</S.DropdownItem>
              <S.DropdownItem>당근알바 소개</S.DropdownItem>
              <S.DropdownItem>
                기업형 서비스{" "}
                <S.Arrow src="/assets/arrow.png" alt="더보기 화살표" />
              </S.DropdownItem>
              <S.DropdownItem>
                신뢰와 안전{" "}
                <S.Arrow src="/assets/arrow.png" alt="더보기 화살표" />
              </S.DropdownItem>
            </S.Dropdown>
          </S.PerCategory>
          <S.PerCategory>동네업체</S.PerCategory>
          <S.PerCategory>동네생활</S.PerCategory>
          <S.PerCategory>모임</S.PerCategory>
        </S.Categories>

        <S.RightIcons>
          <S.SetLocation onClick={() => setShowModal(true)}>
            <S.LocIcon src="/assets/locationicon.png" alt="위치 아이콘" />
            <S.NowLocation>
              {location}
              <S.DownIcon src="/assets/down.png" alt="펼치기" />
            </S.NowLocation>
          </S.SetLocation>

          <S.SearchHugger onClick={() => setShowSearchBar((prev) => !prev)}>
            <S.Search src="/assets/search.png" alt="검색" />
          </S.SearchHugger>

          <S.Hamburger src="/assets/hamburgerbar.png" alt="햄버거 바" />
          <S.DownLoad onClick={() => setShowDownloadModal(true)}>
            앱 다운로드
          </S.DownLoad>
        </S.RightIcons>
      </S.Hugger>
      {showSearchBar && (
        <S.SearchBarContainer>
          <S.SearchBarHugger>
            <SearchBar
              location={location}
              setLocation={setLocation}
              setShowModal={setShowModal}
              products={data.products}
            />
          </S.SearchBarHugger>
          <S.PopularKeywords>
            {popularKeywords.map((keyword, index) => (
              <S.KeywordItem
                key={index}
                onClick={() => handleKeywordClick(keyword)}
              >
                {keyword}
              </S.KeywordItem>
            ))}
          </S.PopularKeywords>
        </S.SearchBarContainer>
      )}

      {/* 지역 변경 모달 */}
      {showModal && (
        <S.ModalOverlay onClick={() => setShowModal(false)}>
          <S.ModalBox onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              지역 변경
              <S.CloseButton onClick={() => setShowModal(false)}>
                ×
              </S.CloseButton>
            </S.ModalHeader>
            <S.SearchInput placeholder="지역이나 동네로 검색하기" />
            <S.InputSearchHugger>
              <S.MiniSearch src="/assets/search.png" alt="검색" />
            </S.InputSearchHugger>
            <S.CurrentLocation>
              <S.Target src="/assets/target.png" alt="과녁 아이콘" /> 현재 내
              위치 사용하기
            </S.CurrentLocation>
            <S.LocationList>
              <li>서울특별시, 도봉구, 쌍문동</li>
              <li>인천광역시, 연수구, 송도동</li>
              <li>경상남도, 양산시, 물금읍</li>
            </S.LocationList>
          </S.ModalBox>
        </S.ModalOverlay>
      )}

      {/* 앱 다운로드 모달 */}
      {showDownloadModal && (
        <S.ModalOverlay onClick={() => setShowDownloadModal(false)}>
          <S.ModalBox onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              QR 코드 스캔
              <S.CloseButton onClick={() => setShowDownloadModal(false)}>
                ×
              </S.CloseButton>
            </S.ModalHeader>
            <S.QRWrapper>
              <S.InApp>당근 앱으로 열기</S.InApp>
              <img
                src="/assets/qrcode.png"
                alt="QR 코드"
                style={{ width: "200px", height: "200px" }}
              />
              <p
                style={{ textAlign: "center", fontSize: "14px", color: "#666" }}
              >
                <br />
                모바일에서만 이용할 수 있어요.
                <br />
                휴대전화 카메라로 QR 코드를 스캔하세요.
              </p>
            </S.QRWrapper>
          </S.ModalBox>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
}
export default Header;
