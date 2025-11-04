import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header.jsx";
import { useNavigate } from "react-router-dom";

const ICON_RECORDING = "/img/onboarding/recording.svg";
const ICON_RECORD11 = "/img/onboarding/Record11.svg";
const ICON_PAUSE = "/img/onboarding/record_pause.svg";
const ICON_RESTART = "/img/onboarding/restart.svg";
const ICON_DONE = "/img/onboarding/done.svg";

const Storystep02 = () => {
  const navigate = useNavigate();

  //녹음 상태 관리
  const [status, setStatus] = useState("idle");

  const handleMicClick = () => {
    if (status === "idle") setStatus("recording");
    else if (status === "recording") setStatus("paused");
    else setStatus("idle");
  };

  const statusIcon =
    status === "idle"
      ? ICON_RECORDING
      : status === "recording"
      ? ICON_RECORD11
      : ICON_PAUSE;

  //하단 상태 루프
  const renderArcTexts = () => {
    if (status === "recording") {
      return <ArcText>버튼을 눌러 말하기를 멈출 수 있어요.</ArcText>;
    }
    if (status === "paused") {
      return <ArcText>버튼을 눌러 말하기를 멈출 수 있어요.</ArcText>;
    }
    return (
      <>
        <ArcText>조용한 곳에서 또박또박 말씀해주세요.</ArcText>
      </>
    );
  };

  return (
    <Screen>
      {/* 공통 헤더 */}
      <Header title="동화 만들기" showBack={true} onBack={() => navigate(-1)} />

      {/* 프로그레스 바 */}
      <ProgressWrapper>
        <ProgressBar $progress={45} />
      </ProgressWrapper>

      {/* 메인 콘텐츠 */}
      <Content>
        <MainText>
          아이에게 들려주고 싶은 이야기를
          <br />
          자유롭게 말씀해주세요.
        </MainText>
        <SubText onClick={() => navigate("/mystory/ai_story/step03")}>
          텍스트로 입력하기 &gt;
        </SubText>
      </Content>

      {/* 하단 반원 + 녹음 상태 */}
      <ArcArea>
        <Arc />
        <ArcTexts>{renderArcTexts()}</ArcTexts>

        {/* 상태별 컨트롤 */}
        {status !== "paused" ? (
          <MicButton type="button" onClick={handleMicClick}>
            <img src={statusIcon} alt="녹음 버튼" width="64" height="64" />
          </MicButton>
        ) : (
          <ControlRow>
            <IconBtn
              type="button"
              aria-label="다시 녹음"
              onClick={() => setStatus("recording")}
            >
              <img src={ICON_RESTART} alt="다시 녹음" width="64" height="64" />
            </IconBtn>

            <IconBtn
              type="button"
              aria-label="일시정지"
              onClick={handleMicClick}
            >
              <img src={ICON_PAUSE} alt="일시정지" width="64" height="64" />
            </IconBtn>

            <IconBtn
              type="button"
              aria-label="완료"
              onClick={() => navigate("/mystory/ai_story/step04")}
            >
              <img src={ICON_DONE} alt="완료" width="64" height="64" />
            </IconBtn>
          </ControlRow>
        )}
      </ArcArea>
    </Screen>
  );
};

export default Storystep02;

//스타일 컴포넌트
const Screen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  overflow: hidden;
`;

//프로그레스
const ProgressWrapper = styled.div`
  width: 100%;
  height: 4px;
  background: #f2f2f2;
`;

const ProgressBar = styled.div`
  width: ${({ $progress }) => $progress || 0}%;
  height: 100%;
  background: var(--color-bg-primary, #ffd342);
  transition: width 0.3s ease;
`;


const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
`;

const MainText = styled.p`
  color: var(--color-text-interactive-secondary, #342e29);
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
`;

const SubText = styled.p`
  color: var(--color-icon-tertiary, #bbb);
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  cursor: pointer;
`;

//하단
const ArcArea = styled.div`
  position: relative;
  width: 390px;
  height: 330px;
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

const ArcTexts = styled.div`
  position: absolute;
  bottom: 176px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 320px;
  text-align: center;
`;

const ArcText = styled.div`
  color: var(--color-text-interactive-secondary-hovered, #736a64);
  text-align: center;
  font-family: "NanumSquareRound";
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

const MicButton = styled.button`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 64px;
  padding: 0;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ControlRow = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const IconBtn = styled.button`
  width: 64px;
  height: 64px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
`;
