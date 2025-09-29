import styled from "styled-components";
import SellingItemsList from "../../components/SellingItemsList/SellingItemsList";


export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    background: #fff;
    width: 70%;
    margin: 0 auto;
`;
export const ContentContainer =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #fff;
    width: 100%;
    max-width: 1150px;
    margin: 0 auto;
    margin-top: 2%;
    margin-left: 16%;
`;
//페이지 설명
export const PageNav = styled.div``;
export const PositionTitle = styled.h1`
    margin-top: 15px;
`;
export const SeperationBox = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
`;  
export const SideFilter = styled.div`
    width: 23%;`;
export const FilterTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const ResetFilter = styled.button`
    all: unset;
    cursor: pointer;
    border-bottom: #868B94 solid 1.5px;
    color: #868B94;
    `;
export const AvailableFilter = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    margin-bottom: 5%;
    border-bottom: 1px solid rgba(134, 139, 148, 0.1);

    input {
        appearance: none; 
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border: 2px solid #ff6600;
        border-radius: 4px;
        background-color: #fff;
        cursor: pointer;
        position: relative;

        &:checked {
        background-color: #ff6600;
        border-color: #ff6600;
        }

        &:checked::after {
        content: "✔";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
        font-size: 14px;
        color: #fff; 
        }
    }
`;

export const PositionFilter = styled.div`
    padding-bottom: 10%;
    border-bottom: 1px solid rgba(134, 139, 148, 0.1);
    margin-bottom: 5%;
`;
export const FilterSelcet = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 14px;
    padding: 1% 0;

    input {
        appearance: none; 
        -webkit-appearance: none;
        width: 18px;
        height: 18px;
        border: 2px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
        position: relative;
        transition: 0.2s;
    }

    /* 선택됐을 때 */
    input:checked {
        border-color: #ff6600;
        background-color: #ff6600;
    }

    input:checked::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff; 
        border-radius: 50%;
    }
`;


export const FilterBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    b{
        display: block;   
        margin-bottom: 10px;
    }
    padding-bottom: 10%;
    border-bottom: 1px solid rgba(134, 139, 148, 0.1);
    margin-bottom: 5%;
`;


export const PriceFilterButton = styled.label`
    input {
        display: none; /* 라디오 기본 숨김 */
    }

    span {
        display: inline-block;
        width: auto; /* 버튼 가로 크기 */
        min-width: 35px;
        text-align: center;
        padding: 8px 12px;
        border: 1.5px solid #ccc;
        border-radius: 9999px; /* pill 모양 */
        font-size: 14px;
        cursor: pointer;
        transition: 0.2s;
    }

    input:checked + span {
        background-color: #2a3038;
        border-color: #2a3038;
        color: #fff;
    }
`;
export const PriceInputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;

    input {
        width: 80px;
        padding: 6px 8px;
        border: 1.5px solid #ccc;
        border-radius: 6px;
        font-size: 14px;
        outline: none;

        &:focus {
        border-color: #ff6600;
        }
    }

    span {
        font-size: 14px;
        color: #555;
    }
`;

export const PriceApplyButton = styled.button`
    all: unset;
    cursor: pointer;
    margin-top: 8px;
    font-size: 14px;
    color: #868B94;
    border-bottom: 1px solid rgba(134, 139, 148, 0.5);
    width: 52px;
    &:hover {
        color: #ff6600;
        border-bottom-color: #ff6600;
    }
`;


export const FloatingButton = styled.button`
    position: fixed;
    bottom: 60px; 
    right: 120px;  
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ff6600;
    color: white;
    font-size: 28px;
    font-weight: bold;
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
    transform: scale(1.1);
}
`;
