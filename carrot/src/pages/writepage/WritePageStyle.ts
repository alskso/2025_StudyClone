import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ImageUpload = styled.input`
  margin-bottom: 10px;
`;

export const PreviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const PreviewBox = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: -6px;
  right: -6px;
  background: #ff6f0f;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 18px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 18px;
  resize: none;
  min-height: 100px;
`;

export const SubmitButton = styled.button`
  padding: 12px;
  background-color: #ff6f0f;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e65c00;
  }
`;

export const CategoryGroup = styled.div`
  margin: 20px 0;
`;

export const CategoryTitle = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CategoryOption = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 15px;
  cursor: pointer;

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
