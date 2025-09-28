import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

export const FooterBanner = styled.div`
  height: 500px;
  width: 100%;
  background-color: #fff3ebff;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 100px;
  align-items: center;
  flex-wrap: wrap;
`;

export const WithNeighbor = styled.div`
    font-size: 40px;
    font-weight: 550;
    color: #d86310ff;
`;

export const DownloadNow = styled.div`
  font-size: 40px;
  font-weight: 550;
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterRight = styled.div`
  display: flex;
  img {
    height: 500px;
  }
`;

export const Stores = styled.div`
margin-top: 10px;
    display:flex;
    gap: 15px;   
    img {
        width: 150px;
        cursor: pointer;
    }
`;


export const FooterTopInfos = styled.div`
  display: flex;
  gap:10vw;
  border-bottom: 0.3px solid #eee;
`;
export const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  margin-right: 100px;
`;
export const Carrot = styled.div`
  font-size: 18px;
  font-weight: 800;
  display: flex;
  gap: 5px;
  color: #ff720f;
  margin-bottom: 10px;
  img {
    width: 17px;
    cursor: pointer;
  }
`;

export const OtherContacts = styled.div`
  display: flex;
  gap: 18px;
  img {
    width: 20px;
    cursor: pointer;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FooterTitle = styled.span`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const FooterLink = styled.div`
  font-size: 14px;
  color: #555;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;



export const FooterBottom = styled.div`
  font-size: 12px;
  font-weight:600;
  color: #999;
  margin-top:20px;
  width: 900px;
`;
