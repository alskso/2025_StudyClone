import styled, { keyframes } from "styled-components";

/** layout */
export const Page = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 16px 80px;
  background: #fff;
`;

export const Hero = styled.section`
  width: 100%;
  max-width: 980px;
`;

// 메인 타이틀 문장
export const TitleRow = styled.div`
  margin: 128px 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: clamp(24px, 4.2vw, 42px);
  line-height: 1.25;
  font-weight: 500;
  letter-spacing: -0.03em;
  gap: 10px;
  color: #2a3038;

  strong {
    color: #ff6f0f;
    font-weight: 700;
  }

  
`;

/** 검색 영역 (위치 pill + 통합 검색바) */
export const SearchRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: center;
  margin: 16px 0 0 0;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

/* 위치 pill */
export const LocationPill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 14px;
  background: #2a3038;
  color: #fff;
  border: 0;
  border-radius: 999px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const Caret = styled.span`
  width: 8px;
  height: 8px;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(45deg);
`;

/* 통합 검색바 */
export const SearchWrap = styled.form`
  position: relative;
  height: 48px;
  display: grid;
  grid-template-columns: auto 1fr 48px;
  align-items: center;
  border: 1px solid #e6e6e6;
  border-radius: 999px;
  background: #fff;
`;

/* 카테고리 버튼 + 화살표 */
export const CategoryButton = styled.button`
  height: 100%;
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 0;
  background: transparent;
  font-weight: 600;
  font-size: 18px;
  color: #555d6d;
  cursor: pointer;

  &::after {
    content: "";
    height: 24px;
    width: 1px;
    background: #eee;
    margin-left: 12px;
  }
`;



/* 카테고리 드롭다운 */
export const CategoryMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 10px;
  width: 100px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
  padding: 6px 0;
  z-index: 20;
`;

export const CategoryItem = styled.button`
  width: 100%;
  padding: 10px 14px;
  background: transparent;
  border: 0;
  text-align: left;
  cursor: pointer;
  color: #333;

  &[data-active="true"] {
    font-weight: 800;
    color: #111;
  }

  &:hover {
    background: #f7f7f7;
  }
`;

/* 검색 입력 + 제출 버튼 */
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  outline: none;
  padding: 0 12px;
  font-size: 14px;

  &::placeholder {
    color: #b4b4b4;
  }
`;

export const SearchSubmit = styled.button`
  height: 36px;
  width: 36px;
  margin-right: 6px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 999px;
  background: #111;
  color: #fff;
  cursor: pointer;
`;



// 인기 검색어 부분
export const KeywordsRow = styled.div`
  display: flex;
  align-items: center;
  padding-left: 150px;
  flex-wrap: wrap;
  gap: 8px;
  color: #555D6D;
`;

export const Keyword = styled.button`
  border: 0;
  background: transparent;
  color: #555D6D;
  padding: 4px 0;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: #ff6f0f;
  }
`;


// 카테고리 버튼 부분
export const CardGrid = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 12px;
  

  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  background: #eeeff1;
  border-radius: 16px;
  height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  align-items: flex-start;
  padding: 12px 16px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }

  &:focus-visible {
    outline: 3px solid rgba(255, 111, 15, 0.35);
  }
`;

export const CardIcon = styled.div`
  font-size: 26px;
  display: grid;
  place-items: center;
`;

export const CardLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

/** neighborhood chips */
export const ChipsWrap = styled.div`
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Chip = styled.button`
  border: 0;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 999px;
  background: ##eeeff1;
  color: #2a3038;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: #eee;
  }
`;

// 타이틀 단어 애니메이션 
const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  10% { opacity: 1; transform: translateY(0); }
  70% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-10px); }
`;

export const FadeWord = styled.strong`
  display: inline-block;
  animation: ${fadeInOut} 2s ease-in-out;
`;
