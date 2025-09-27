import styled from "styled-components";

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

/* 카테고리 버튼 */
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
