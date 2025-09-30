import Header from "../../components/Header/Header";
import SellingItemsList from "../../components/SellingItemsList/SellingItemsList";
import { useParams } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Product } from "../../types";

import * as S from "./DetailPageStyle";

type DetailPageProps = {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
};

function DetailPage({ products, setProducts }: DetailPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5));

  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    if (product) {
      const updatedProducts = products.map((p) => {
        if (p.id === Number(id)) {
          return {
            ...p,
            views: p.views + 1,
          };
        }
        return p;
      });
      setProducts(updatedProducts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setProducts]);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!product) return <div>상품을 찾을 수 없습니다</div>;

  const images = product.images || [product.images];

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const parseTimeToMinutes = (timeStr: string): number => {
    if (timeStr.includes("일")) {
      const days = parseInt(timeStr, 10);
      return days * 24 * 60;
    } else if (timeStr.includes("시간")) {
      const hours = parseInt(timeStr, 10);
      return hours * 60;
    } else if (timeStr.includes("분")) {
      const minutes = parseInt(timeStr, 10);
      return minutes;
    }
    return 0;
  };

  const elapsedMinutes = parseTimeToMinutes(product.time);
  const isExpired = elapsedMinutes >= 30 * 24 * 60;

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
            {product.isSold || isExpired ? (
              <S.ToTheApp_none
                type="button"
                value={product.isSold ? "판매 완료" : "판매 불가"}
                disabled
              />
            ) : (
              <S.ToTheApp
                type="button"
                value="당근 앱에서 보기"
                onClick={() => setIsAppModalOpen(true)}
              />
            )}
          </S.RightSection>
        </S.Hugger>
        <S.MoreHugger>
          <S.BottomText>
            <S.More>{product.seller.name} 의 판매물품</S.More>
            <S.ShowMore to="/storemain">더 구경하기 &gt; </S.ShowMore>
          </S.BottomText>
          <SellingItemsList
            filter={(p) => p.seller.name === product.seller.name}
            limit={6}
            products={products}
          />
        </S.MoreHugger>
        <S.MoreHugger>
          <S.BottomText>
            {/* 인기매물은 조회수 50이상을 기준으로 띄웁니다! */}
            <S.More>인기매물</S.More>
            <S.ShowMore to="/storemain">더 구경하기 &gt; </S.ShowMore>
          </S.BottomText>
          <SellingItemsList
            filter={(product) => product.views >= 50} // 조회수 50 이상만
            limit={6}
            products={products}
          />
        </S.MoreHugger>
        {/* 사진 상세 모달 */}
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
                    setZoom(1);
                  }}
                />
              )}
              {currentIndex < images.length - 1 && (
                <S.ModalNextButton
                  onClick={() => {
                    setCurrentIndex(currentIndex + 1);
                    setZoom(1);
                  }}
                />
              )}
            </S.ModalContent>
          </S.ModalOverlay>
        )}{" "}
        {/* 앱 다운로드 모달 */}
        {isAppModalOpen && (
          <S.ModalAppOverlay onClick={() => setIsAppModalOpen(false)}>
            <S.ModalBox onClick={(e) => e.stopPropagation()}>
              <S.ModalAppHeader>
                QR 코드 스캔
                <S.CloseAppButton onClick={() => setIsAppModalOpen(false)}>
                  ×
                </S.CloseAppButton>
              </S.ModalAppHeader>
              <S.QRWrapper>
                <S.InApp>당근 앱으로 열기</S.InApp>
                <img
                  src="/assets/qrcode.png"
                  alt="QR 코드"
                  style={{ width: "200px", height: "200px" }}
                />
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#666",
                  }}
                >
                  <br />
                  모바일에서만 이용할 수 있어요.
                  <br />
                  휴대전화 카메라로 QR 코드를 스캔하세요.
                </p>
              </S.QRWrapper>
            </S.ModalBox>
          </S.ModalAppOverlay>
        )}
      </S.Container>
    </>
  );
}

export default DetailPage;
