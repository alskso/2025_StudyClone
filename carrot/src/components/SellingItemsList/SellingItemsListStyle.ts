import styled from "styled-components";

export const ListContainer = styled.div`
    display:flex;
    padding-left: 30px;
`;
export const ListHugger = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ItemWrapper = styled.div`
  flex: 0 0 160px;
  width: 160px;
`;

export const ProductNone = styled.h1`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  color: #555D6D;
  width: 865px;
`;

export const LoadMoreWrapper = styled.div`
  display: flex;
  margin: 20px 0;
`;

export const LoadMoreButton = styled.button`
  padding: 10px 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 85%;

  &:hover {
    background-color: #f8f8f8;
    border-color: #ccc;
  }

  &:active {
    background-color: #eee;
  }
`;

