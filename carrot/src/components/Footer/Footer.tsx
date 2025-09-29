import { useLocation } from "react-router-dom";
import * as S from "./FooterStyle";

function Footer() {
  const location = useLocation();

  const isMainPage = location.pathname === "/";
  return (
    <S.FooterContainer>
      {!isMainPage && (
        <S.FooterBanner>
          <S.FooterLeft>
            <S.WithNeighbor>당근에서 가까운 이웃과 함께해요.</S.WithNeighbor>
            <S.DownloadNow>지금 바로 다운로드하기</S.DownloadNow>
            <S.Stores>
              <img src="/assets/appstore.svg" alt="appstore downloads" />
              <img
                src="/assets/googleplay.svg"
                alt="google play store download"
              />
            </S.Stores>
          </S.FooterLeft>
          <S.FooterRight>
            <img
              src="/assets/footerimg.webp"
              alt="google play store download"
            />
          </S.FooterRight>
        </S.FooterBanner>
      )}
      <S.FooterTopInfos>
        <S.SocialIcons>
          <S.Carrot>
            <img src="/assets/logo.png" alt="당근" />
            당근
          </S.Carrot>
          <S.OtherContacts>
            <a
              href="https://www.facebook.com/daangn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/facebooklogo.png" alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/daangnmarket/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/instagramlogo.png" alt="instagram" />
            </a>
            <a
              href="https://www.youtube.com/@daangn_official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/youtubelogo.png" alt="youtube" />
            </a>
          </S.OtherContacts>
        </S.SocialIcons>

        <S.FooterTop>
          <S.FooterColumn>
            <S.FooterTitle>회사</S.FooterTitle>
            <S.FooterLink >회사 소개</S.FooterLink>
            <S.FooterLink >당근페이</S.FooterLink>
            <S.FooterLink >팀문화</S.FooterLink>
            <S.FooterLink >서비스 소개</S.FooterLink>
            <S.FooterLink >블로그</S.FooterLink>
            <S.FooterLink >채용</S.FooterLink>
          </S.FooterColumn>

          <S.FooterColumn>
            <S.FooterTitle>탐색</S.FooterTitle>
            <S.FooterLink >중고거래</S.FooterLink>
            <S.FooterLink >부동산</S.FooterLink>
            <S.FooterLink >중고차</S.FooterLink>
            <S.FooterLink >알바</S.FooterLink>
            <S.FooterLink >동네업체</S.FooterLink>
            <S.FooterLink >동네생활</S.FooterLink>
            <S.FooterLink >모임</S.FooterLink>
            <S.FooterLink >채팅하기</S.FooterLink>
          </S.FooterColumn>

          <S.FooterColumn>
            <S.FooterTitle>비즈니스</S.FooterTitle>
            <S.FooterLink >당근 비즈니스</S.FooterLink>
            <S.FooterLink >제휴 문의</S.FooterLink>
            <S.FooterLink >광고 문의</S.FooterLink>
          </S.FooterColumn>

          <S.FooterColumn>
            <S.FooterTitle>Karrot</S.FooterTitle>
            <S.FooterLink >Canada ↗</S.FooterLink>
            <S.FooterLink >United States ↗</S.FooterLink>
            <S.FooterLink >United Kingdom ↗</S.FooterLink>
            <S.FooterLink >日本 ↗</S.FooterLink>
          </S.FooterColumn>

          <S.FooterColumn>
            <S.FooterTitle>문의</S.FooterTitle>
            <S.FooterLink >IR</S.FooterLink>
            <S.FooterLink >PR</S.FooterLink>
            <S.FooterLink >고객센터</S.FooterLink>
          </S.FooterColumn>
        </S.FooterTop>
      </S.FooterTopInfos>
      <S.FooterBottom>
        (주) 당근마켓
        <br />
        대표 김용현, 황도연 | 사업자번호 375-87-00088
        <br />
        직업정보제공사업 신고번호 J1200020200016
        <br />
        통신판매업 신고번호 2021-서울서초-2875
        <br />
        호스팅 사업자 Amazon Web Service(AWS)
        <br />
        주소 서울특별시 구로구 디지털로 300, 10층 (당근서비스)
        <br />
        전화 1877-9737 | 고객문의 cs@daangnservice.com
        <br />
        <br />
        이용약관 | 개인정보처리방침 | 운영정책 | 위치기반서비스 이용약관 |
        이용자보호 비전과 계획 | 청소년보호정책
      </S.FooterBottom>
    </S.FooterContainer>
  );
}

export default Footer;
