import styled from "styled-components";
import { Link } from "react-router-dom";


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
  display:flex;
  width:100%;
`;

export const ProductImage = styled.img`
  height:100%;
  width:100%;
  object-fit: cover;
`;

export const Imghugger = styled.div`
  height: 450px;
  width: 450px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
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
export const PrevButton = styled.button`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: url("/assets/prevbtn.png") no-repeat center center;
  background-size: contain;
  border: none;
  width: 20px;
  height: 40px;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: url("/assets/nextbtn.png") no-repeat center center;
  background-size: contain;
  border: none;
  width: 20px;
  height: 40px;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  overflow: visible; 
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform-origin: center center;
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;
  z-index: 10;
`;
export const ModalPrevButton = styled.button`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: url("/assets/prevbtn.png") no-repeat center center;
  background-size: contain;
  border: none;
  width: 10px;
  height: 60px;
  cursor: pointer;
  z-index: 10;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const ModalNextButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: url("/assets/nextbtn.png") no-repeat center center;
  background-size: contain;
  border: none;
  width: 10px;
  height: 60px;
  cursor: pointer;
  z-index: 10;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
export const ZoomControls = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    font-size: 30px;
    cursor: pointer;
    background: transparent;
    color: #eee;
  }
`;

export const DotsWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 5;
`;

export const Dot = styled.div<{ active?: boolean }>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#ffffffff" : "#cccccc93")};
  cursor: pointer;
`;

export const More = styled.div`
  font-size: 23px;
  font-weight: 500;
`;

export const BottomText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;
`;

export const ShowMore = styled(Link)`
  color: #ff720f;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const QRWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ModalAppOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  position: relative;
  background: #fff;
  width: 500px;
  max-width: 90%;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ModalAppHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const CloseAppButton = styled.button`
  position: absolute;
  right: 10px;
  border: none;
  background: none;
  font-size: 40px;
  cursor: pointer;
`;

export const InApp = styled.span`
  font-size: 23px;
  font-weight: 500;
`;