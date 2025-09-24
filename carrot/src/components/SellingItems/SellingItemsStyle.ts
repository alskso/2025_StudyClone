import styled from "styled-components";

export const Card = styled.div`
  width: 160px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* hover 시 확대 */
  }
`;

export const Info = styled.div`
  margin-top: 8px;
`;

export const Title = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`;

export const Price = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Meta = styled.div`
  font-size: 12px;
  color: #888;
`;
