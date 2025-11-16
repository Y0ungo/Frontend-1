import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header.jsx";

const CHARACTER = "/img/end_rewrite/lion.svg";
const MUTE_ICON = "/img/end_rewrite/mute.svg";
const CHAT_ICON = "/img/end_rewrite/chat.svg";
const CLOSE_ICON = "/icons/new_right_part.svg";

const Endwritestep02 = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(true);

  const [open, setOpen] = useState(false);

  const handleMuteClick = () => setIsAnimating((prev) => !prev);
  const handleChatClick = () => navigate("/rewrite_end/step03");

  return (
    <Screen>
      <Header title="" showBack={false} />
      <CloseBtn onClick={() => setOpen(true)}>
        <img src={CLOSE_ICON} alt="닫기" />
      </CloseBtn>

      <Content>
        <Character src={CHARACTER} alt="사자" />
        <Question>
          신데렐라 동화에서
          <br />
          가장 좋아했던 캐릭터가 뭐야?
        </Question>
      </Content>

      <ArcArea>
        <Arc />

        <DotWrapper>
          {Array.from({ length: 5 }).map((_, i) => (
            <Dot key={i} $delay={i * 0.2} $isAnimating={isAnimating} />
          ))}
        </DotWrapper>

        <BottomIcons>
          <IconButton onClick={handleMuteClick}>
            <img src={MUTE_ICON} alt="음소거" />
          </IconButton>

          <IconButton onClick={handleChatClick}>
            <img src={CHAT_ICON} alt="채팅" />
          </IconButton>
        </BottomIcons>
      </ArcArea>

      {open && (
        <Dim onClick={() => setOpen(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalTitle>앗! 그만두시겠어요?</ModalTitle>
            <ModalDesc>
              아직 대화를 완성하기엔 대화가 조금 부족해요.
              <br />
              그만하면 지금까지의 대화를 되돌릴 수 없어요.
            </ModalDesc>

            <BtnRow>
              <CancelBtn onClick={() => navigate("/rewrite_end/")}>
                나가기
              </CancelBtn>
              <DeleteBtn onClick={() => setOpen(false)}>
                계속 대화하기
              </DeleteBtn>
            </BtnRow>
          </Modal>
        </Dim>
      )}
    </Screen>
  );
};

export default Endwritestep02;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(-10px); opacity: 1; }
`;

const Screen = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  overflow: hidden;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 28px;
    height: 28px;
    display: block;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  text-align: center;
`;

const Character = styled.img`
  width: 138px;
  margin-bottom: 20px;
  user-select: none;
  pointer-events: none;
`;

const Question = styled.p`
  color: #3a372f;
  font-family: "NanumSquareRound";
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
`;

const ArcArea = styled.div`
  position: relative;
  width: 390px;
  height: 300px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Arc = styled.div`
  position: absolute;
  inset: 0;
  background: #fff8e3;
  border-top-left-radius: 90% 50%;
  border-top-right-radius: 90% 50%;
`;

const DotWrapper = styled.div`
  position: absolute;
  bottom: 180px;
  display: flex;
  gap: 10px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: #c5e384;
  border-radius: 50%;

  ${({ $isAnimating, $delay }) =>
    $isAnimating &&
    css`
      animation: ${bounce} 1.2s ease-in-out infinite;
      animation-delay: ${$delay}s;
    `}
`;

const BottomIcons = styled.div`
  position: absolute;
  bottom: 40px;
  width: 100%;
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 64px;
    height: 64px;
  }
`;


const Dim = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9990;
`;

const Modal = styled.div`
  width: 320px;
  border-radius: 16px;
  background: #fff;
  padding: 20px 20px 16px;
  text-align: center;
`;

const ModalTitle = styled.h3`
  color: #3a372f;
  font-size: 20px;
  font-weight: 800;
  margin: 6px 0 8px;
`;

const ModalDesc = styled.p`
  color: #7a7a7a;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`;

const BtnRow = styled.div`
  display: flex;
  gap: 8px;
`;

const CancelBtn = styled.button`
  flex: 1;
  height: 48px;
  background: #f1f1f1;
  border-radius: 24px;
  border: none;
  color: #7a7a7a;
  font-family: NanumSquareRound;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  flex: 1;
  height: 48px;
  background: #ffd342;
  border-radius: 24px;
  border: none;
  color: #fff;
  font-weight: 700;
  font-family: NanumSquareRound;
  cursor: pointer;
`;
