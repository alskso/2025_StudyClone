import styled from "styled-components";


export const Container = styled.div`
  width: 100vw;
  height: 70px;
  z-index:1000;
`;
export const Hugger = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  background-color: white;
  top: 0;
  box-shadow: 0 2px 6px rgba(244, 244, 244, 0.1);
  @media (max-width: 980px) {
    width: 94vw;
    justify-content: space-between;
    padding: 0 3vw;
  }
`;
export const Logo = styled.img`
    width: 23px;
`
export const LogoText = styled.span`
  font-size: 22px;
  font-weight: 800;
  margin-left: 7px;
  color: #ff720f;
`;

export const Categories = styled.div`
  display: flex;
  gap: 20px;
  color: black;
  font-weight: 500;
  &:hover > div {
    opacity: 0.5;
  }

  &:hover > div:hover {
    opacity: 1;
  }
  @media (max-width: 980px) {
    display: none;
  }
`;
export const PerCategory = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position: relative;
  width:auto;
  height:60px;
  cursor: pointer;
  transition: opacity 0.2s ease;
  &:hover > div,
  &:focus-within > div {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 70%; /* 부모 아래 */
  left: 0;
  margin-top: 8px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  overflow: hidden;

  display: flex;
  align-items:flex-start;
  flex-direction: column;
  min-width: 140px;
  padding: 8px 0;

  /* 기본은 숨김 */
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: all 0.25s ease;
  ${PerCategory}:hover & {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

export const DropdownItem = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  white-space: nowrap;
  display:flex;
  justify-content:center;
  align-items:center;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Arrow = styled.img`
  height: 11px;
  margin: 5px 0 0 5px
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    cursor:pointer;
  }
`;

export const SetLocation = styled.div`
  width: auto;
  padding: 0 10px;
  background-color: #eee;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  display: none;
  cursor: pointer;

  @media (max-width: 980px) {
    display: flex;
  }
`;

export const LocIcon = styled.img`
  width: 23px;
`

export const NowLocation = styled.span`
  font-weight:700;
  margin-left: 5px;
`
export const DownIcon = styled.img`
  width: 12px;
  margin-left: 5px;
`;

export const DownLoad = styled.div`
  width: 100px;
  height: 30px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #ff720f;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #ff730f9b;
  }
  @media (max-width: 980px) {
    display: none;
  }
`;

export const Hamburger = styled.img`
  width: 22px;
  display: none;
  cursor: pointer;
  @media (max-width: 980px) {
    display: flex;
  }
`;
export const Search = styled.img`
  width: 22px;
  cursor: pointer;
`;
export const SearchHugger = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width:30px;
  height:30px;
  border-radius:5px;
  &:hover{
    background-color:#eee;
  }
`;
export const RightIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  position:relative;
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

export const ModalHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  position:absolute;
  right:10px;
  border: none;
  background: none;
  font-size: 40px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 14px;
`;

export const CurrentLocation = styled.div`
  background: #fff3ed;
  border-radius: 8px;
  padding: 10px;
  color: #ff720f;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  display:flex;
  justify-content: center;
  align-items:center;
  gap:5px;
`;

export const LocationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  li {
    padding: 10px 5px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
  }
`;

export const Target = styled.img`
  width:15px;
  margin-bottom:-2px;
`
export const InputSearchHugger = styled.div`
  position:absolute;
  top:70px;
  right:30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  &:hover {
    background-color: #eee;
  }
`;

export const MiniSearch = styled.img`
  width:15px;
`;