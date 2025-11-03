import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header.jsx";

const CHARACTER = "/img/end_rewrite/elephant.svg";
const MUTE_ICON = "/img/end_rewrite/mute.svg";
const CHAT_ICON = "/img/end_rewrite/chat.svg";

const Endwritestep02 = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(true); // 점 애니메이션

  // 음소거 클릭
  const handleMuteClick = () => setIsAnimating((prev) => !prev);

  // 채팅 클릭
  const handleChatClick = () => navigate("/rewrite_end/step03");

  return (
    <Screen>
      {/* 상단 헤더*/}
      <Header title="" showBack={false} />
      <CloseBtn onClick={() => navigate("/rewrite_end")}>×</CloseBtn>

      {/* 중앙 콘텐츠 */}
      <Content>
        <Character src={CHARACTER} alt="코끼리" />
        <Question>
          신데렐라 동화에서
          <br />
          가장 좋아했던 캐릭터가 뭐야?
        </Question>
      </Content>

      {/* 하단 반원 영역 */}
      <ArcArea>
        <Arc />
        {/* 움직이는 초록 점들 */}
        <DotWrapper>
          {Array.from({ length: 5 }).map((_, i) => (
            <Dot key={i} $delay={i * 0.2} $isAnimating={isAnimating} />
          ))}
        </DotWrapper>

        {/* 하단 아이콘 (음소거 / 채팅) */}
        <BottomIcons>
          <IconButton onClick={handleMuteClick}>
            <img src={MUTE_ICON} alt="음소거" />
          </IconButton>

          <IconButton onClick={handleChatClick}>
            <img src={CHAT_ICON} alt="채팅" />
          </IconButton>
        </BottomIcons>
      </ArcArea>
    </Screen>
  );
};

export default Endwritestep02;

//스타일 컴포넌트

// 점 위아래 튀는 애니메이션
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
  font-size: 28px;
  color: #342e29;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
`;

const Character = styled.img`
  width: 138px;
  height: auto;
  user-select: none;
  pointer-events: none;
  margin-bottom: 20px;
`;

const Question = styled.p`
  color: #3a372f;
  font-family: "NanumSquareRound";
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  margin: 0;
`;

// 반원 배경
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
  background: #fff5d2;
  border-top-left-radius: 50% 40%;
  border-top-right-radius: 50% 40%;
`;

// 초록 점
const DotWrapper = styled.div`
  position: absolute;
  bottom: 150px;
  display: flex;
  gap: 10px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--color-green-400, #c5e384);
  ${({ $isAnimating, $delay }) =>
    $isAnimating &&
    css`
      animation: ${bounce} 1.2s ease-in-out infinite;
      animation-delay: ${$delay}s;
    `}
`;

// 하단 아이콘
const BottomIcons = styled.div`
  position: absolute;
  bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 70px;
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
  }
`;
