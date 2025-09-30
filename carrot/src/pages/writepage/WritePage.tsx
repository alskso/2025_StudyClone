import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./WritePageStyle";
import { Product } from "../../types";

type Props = {
  addProduct: (p: Product) => void;
};

const CATEGORIES = [
  "디지털기기",
  "생활가전",
  "가구/인테리어",
  "생활주방",
  "뷰티/미용",
];

function WritePage({ addProduct }: Props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [location, setLocation] = useState(""); // 판매 위치
  const [nickname, setNickname] = useState(""); // ✅ 닉네임
  const navigate = useNavigate();

  // 여러 장 업로드
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setImages((prev) => [...prev, reader.result!.toString()]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // 업로드한 사진 삭제
  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: Product = {
      id: Date.now(),
      images: images.length > 0 ? images : ["/assets/default.png"],
      title,
      category,
      time: "방금 전",
      price: price + "원",
      description,
      views: 0,
      seller: {
        name: nickname || "익명", // ✅ 닉네임 추가
        location: location || "미정", // ✅ 판매 위치
      },
      isSold: false,
    };

    console.log("새로 작성된 상품:", newProduct);

    addProduct(newProduct);
    navigate("/"); // 작성 후 메인페이지로 이동
  };
  
  const CATEGORIES = [
    "디지털기기",
    "생활가전",
    "가구/인테리어",
    "생활주방",
    "뷰티/미용",
  ];

  // ...
  const [category, setCategory] = useState<string>(CATEGORIES[0]);

  return (
    <S.Container>
      <S.Title>글 작성하기</S.Title>
      <S.Form onSubmit={handleSubmit}>
        {/* 이미지 업로드 */}
        <S.ImageUpload type="file" accept="image/*" multiple onChange={handleImageChange} />

        {/* 미리보기 */}
        <S.PreviewWrapper>
          {images.map((img, i) => (
            <S.PreviewBox key={i}>
              <S.PreviewImage src={img} alt="preview" />
              <S.RemoveButton type="button" onClick={() => handleRemoveImage(i)}>×</S.RemoveButton>
            </S.PreviewBox>
          ))}
        </S.PreviewWrapper>

        <S.Input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.Input
          type="number"
          placeholder="가격"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <S.TextArea
          placeholder="설명"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/*카테고리 입력*/}
      <S.CategoryGroup>
          <S.CategoryTitle>카테고리</S.CategoryTitle>
          {CATEGORIES.map((c) => (
            <S.CategoryOption key={c}>
              <input
                type="radio"
                name="category"
                value={c}
                checked={category === c}
                onChange={(e) => setCategory(e.target.value)}
              />
              {c}
            </S.CategoryOption>
          ))}
        </S.CategoryGroup>
        {/* 닉네임 입력 */}
        <S.Input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        {/* 판매 위치 입력 */}
        <S.Input
          type="text"
          placeholder="판매 위치 (예: 쌍문동, 송파구)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <S.SubmitButton type="submit">작성 완료</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
}

export default WritePage;
