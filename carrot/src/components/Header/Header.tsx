import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./HeaderStyle";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false); // ✅ 앱 다운로드 모달 상태
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Hugger>
        <S.LogoContainer onClick={() => navigate("/mainpage")}>
          <S.Logo src="/assets/logo.png" alt="로고" />
          <S.LogoText>당근</S.LogoText>
        </S.LogoContainer>

        <S.Categories>
          {" "}
          <S.PerCategory>중고거래</S.PerCategory>{" "}
          <S.PerCategory>
            {" "}
            부동산 <S.DownIcon src="/assets/down.png" alt="펼치기" />{" "}
            <S.Dropdown>
              {" "}
              <S.DropdownItem>부동산 검색</S.DropdownItem>{" "}
              <S.DropdownItem>
                {" "}
                중개사 서비스{" "}
                <S.Arrow src="/assets/arrow.png" alt="더보기 화살표" />{" "}
              </S.DropdownItem>{" "}
              <S.DropdownItem>
                {" "}
                이용 가이드{" "}
                <S.Arrow src="/assets/arrow.png" alt="더보기 화살표" />{" "}
              </S.DropdownItem>{" "}
            </S.Dropdown>{" "}
          </S.PerCategory>{" "}
          <S.PerCategory>
            {" "}
            중고차 <S.DownIcon src="/assets/down.png" alt="펼치기" />{" "}
            <S.Dropdown>
              {" "}
              <S.DropdownItem>중고차 검색</S.DropdownItem>{" "}
              <S.DropdownItem>
                {" "}
                딜러용 서비스{" "}
                <S.Arrow src="/assets/arrow.png" alt="더보기 화살표" />{" "}
              </S.DropdownItem>{" "}
            </S.Dropdown>{" "}
          </S.PerCategory>{" "}
          <S.PerCategory>
            {" "}
            알바 <S.DownIcon src="/assets/down.png" alt="펼치기" />{" "}
            <S.Dropdown>
              {" "}
              <S.DropdownItem>알바 검색</S.DropdownItem>{" "}
              <S.DropdownItem>당근알바 소개</S.DropdownItem>{" "}
              <S.DropdownItem>
                {" "}
                기업형 서비스{" "}
                <S.Arrow src="/assets/arrow.png" alt="더보기 화살표" />{" "}
              </S.DropdownItem>{" "}
              <S.DropdownItem>
                {" "}
                신뢰와 안전{" "}
                <S.Arrow src="/assets/arrow.png" alt="더보기 화살표" />{" "}
              </S.DropdownItem>{" "}
            </S.Dropdown>{" "}
          </S.PerCategory>{" "}
          <S.PerCategory>동네업체</S.PerCategory>{" "}
          <S.PerCategory>동네생활</S.PerCategory>{" "}
          <S.PerCategory>모임</S.PerCategory>{" "}
        </S.Categories>

        <S.RightIcons>
          <S.SetLocation onClick={() => setShowModal(true)}>
            <S.LocIcon src="/assets/locationicon.png" alt="위치 아이콘" />
            <S.NowLocation>
              쌍문동
              <S.DownIcon src="/assets/down.png" alt="펼치기" />
            </S.NowLocation>
          </S.SetLocation>
          <S.SearchHugger>
            <S.Search src="/assets/search.png" alt="검색" />
          </S.SearchHugger>
          <S.Hamburger src="/assets/hamburgerbar.png" alt="햄버거 바" />
          <S.DownLoad onClick={() => setShowDownloadModal(true)}>
            앱 다운로드
          </S.DownLoad>
        </S.RightIcons>
      </S.Hugger>

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
