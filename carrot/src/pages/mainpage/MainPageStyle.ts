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

// 🔥 검색바 관련 스타일 삭제됨

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
  background: #eeeff1;
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
