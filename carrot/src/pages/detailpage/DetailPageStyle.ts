import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 70vw;
  gap: 24px;
`;

export const Hugger = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 0.3px solid #eee;
  padding-bottom: 20px;
  gap: 20px;
  flex-wrap: wrap;
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const root = styled.div`
    margin-left:-35vw;
`;

export const ProductImage = styled.img`
  height:100%;
  max-width: 450px;
  border-radius: 8px;
  object-fit: cover;
`;

export const Imghugger = styled.div`
    height:450px;
`;

export const SellerInfo = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  max-width: 450px;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;  

export const SellerRightInfo = styled.div`
    display:flex;
`;

export const SellerProfileHugger = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow:hidden;
  margin-right:10px;
`; 
export const SellerProfileImg = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const SellerName = styled.div`
    font-weight:600;
`;

export const SellerLocation = styled.div`
    font-size:14px;
    color:#444;
`;

/* 매너온도 */

export const MannerGraph = styled.div`
  display: flex;
`;


export const MannerTemperature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TempValue = styled.div<{ value: number }>`
  font-size: 14px;
  font-weight: bold;
  color: ${({ value }) =>
    value <= 36.5 ? "#4A90E2" : value <= 50 ? "#FF6F0F" : "#FF3B30"};
`;

export const GaugeWrapper = styled.div`
  width: 80px;
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
  margin: 4px 0;
`;

export const GaugeBar = styled.div<{ value: number }>`
  width: ${({ value }) => Math.min(value, 100)}%;
  height: 100%;
  background-color: ${({ value }) =>
    value <= 36.5 ? "#4A90E2" : value <= 50 ? "#FF6F0F" : "#FF3B30"};
  transition: width 0.3s ease;
`;

export const Emoji = styled.div`
  font-size: 25px;
`;

export const MannerLabel = styled.div`
  color: #aaa;
  margin-right: 0;
  text-align: center;
`;


export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #444;
`;

export const Details = styled.div`
    color: #bbb;
    cursor: default;
`;

export const Category = styled.a`
    color: inherit;
    cursor: pointer;
    text-decoration: underline;
`;

export const Reactions = styled.div`
  color: #bbb;
  cursor: default;
  margin: 5px 0;
`;

export const ToTheApp = styled.input`
  height: 40px;
  border: none;
  background-color: #ff720f;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #ff730f9b;
  }
`;

export const More = styled.div`
    font-size: 23px;
    font-weight: 500;
`;

export const MoreHugger = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 0.3px solid #eee;
  padding-bottom: 20px;
  gap: 20px;
  flex-wrap: wrap;

  &:last-child {
    border-bottom: none;
  }
`;