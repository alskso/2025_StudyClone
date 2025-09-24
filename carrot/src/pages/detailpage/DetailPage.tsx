import Header from "../../components/Header/Header";
import SellingItemsList from "../../components/SellingItemsList/SellingItemsList";
import data from "../../data/data.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

import * as S from "./DetailPageStyle";

function DetailPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3)); // 최대 3배
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5)); // 최소 0.5배

  const { id } = useParams<{ id: string }>();
  const product = data.products.find((p) => p.id === Number(id));

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!product) return <div>상품을 찾을 수 없습니다</div>;

  // 기존 image → images 배열로 가정
  const images = product.images || [product.images];

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.root>홈 &gt; 중고거래 &gt; {product.title}</S.root>
        {/* 왼쪽 */}
        <S.Hugger>
          <S.LeftSection>
            <S.Imghugger>
              <S.ProductImage
                src={images[currentIndex]}
                alt={`상품 이미지 ${currentIndex + 1}`}
                onClick={openModal}
              />
              {images.length > 1 && (
                <>
                  {currentIndex > 0 && <S.PrevButton onClick={handlePrev} />}
                  {currentIndex < images.length - 1 && (
                    <S.NextButton onClick={handleNext} />
                  )}
                </>
              )}
              {images.length > 1 && (
                <S.DotsWrapper>
                  {images.map((_, index) => (
                    <S.Dot
                      key={index}
                      active={index === currentIndex}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </S.DotsWrapper>
              )}
            </S.Imghugger>
            <S.SellerInfo>
              <S.SellerRightInfo>
                <S.SellerProfileHugger>
                  <S.SellerProfileImg
                    src="/assets/defaultprofile.png"
                    alt="기본프로필"
                  />
                </S.SellerProfileHugger>
                <div>
                  <S.SellerName>{product.seller.name}</S.SellerName>
                  <S.SellerLocation>{product.seller.location}</S.SellerLocation>
                </div>
              </S.SellerRightInfo>
              <div>
                <S.MannerTemperature>
                  <S.MannerGraph>
                    <div>
                      <S.TempValue value={49.9}>49.9°C</S.TempValue>
                      <S.GaugeWrapper>
                        <S.GaugeBar value={49.9} />
                      </S.GaugeWrapper>
                    </div>
                    <S.Emoji>😊</S.Emoji>
                  </S.MannerGraph>
                  <S.MannerLabel>매너온도</S.MannerLabel>
                </S.MannerTemperature>
              </div>
            </S.SellerInfo>
          </S.LeftSection>

          {/* 오른쪽 */}
          <S.RightSection>
            <S.Title>{product.title}</S.Title>
            <S.Details>
              <S.Category href="/storemain">{product.category}</S.Category>·{" "}
              {product.time}
            </S.Details>
            <S.Price>{product.price}</S.Price>
            <S.Description>{product.description}</S.Description>
            <S.Reactions> 채팅 2 · 관심12 · 조회 {product.views}</S.Reactions>
            <S.ToTheApp type="button" value="당근 앱에서 보기" />
          </S.RightSection>
        </S.Hugger>
        <S.MoreHugger>
          <S.More>{product.seller.name} 의 판매물품</S.More>
          <SellingItemsList />
        </S.MoreHugger>
        <S.MoreHugger>
          <S.More>인기매물</S.More>
        </S.MoreHugger>
        {isModalOpen && (
          <S.ModalOverlay onClick={closeModal}>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
              <S.CloseButton onClick={closeModal}>×</S.CloseButton>
              <S.ZoomControls>
                <button onClick={zoomOut}>-</button>
                <button onClick={zoomIn}>+</button>
              </S.ZoomControls>

              <S.ModalImage
                src={images[currentIndex]}
                alt={`상품 이미지 ${currentIndex + 1}`}
                style={{
                  transform: `scale(${zoom})`,
                  transition: "transform 0.2s",
                }}
              />
              {currentIndex > 0 && (
                <S.ModalPrevButton
                  onClick={() => {
                    setCurrentIndex(currentIndex - 1);
                    setZoom(1); // 확대 초기화
                  }}
                />
              )}
              {currentIndex < images.length - 1 && (
                <S.ModalNextButton
                  onClick={() => {
                    setCurrentIndex(currentIndex + 1);
                    setZoom(1); // 확대 초기화
                  }}
                />
              )}
            </S.ModalContent>
          </S.ModalOverlay>
        )}
      </S.Container>
    </>
  );
}

export default DetailPage;
