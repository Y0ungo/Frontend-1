import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Header from "../../components/Header.jsx";
import { useNavigate } from "react-router-dom";

const ICON_RIGHT_HEADER = "/icons/new_right_part.svg";
const ICON_RIGHT = "/img/ai_story/right.svg";

const Storystep03 = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [error, setError] = useState(false); // 50자 미만 에러
  const [showQuitModal, setShowQuitModal] = useState(false);

  const handleNext = () => {
    if (text.trim().length < 50) {
      setError(true);
      return;
    }
    navigate("/mystory/ai_story/step04");
  };

  return (
    <Screen>
      <Header
        title="동화 만들기"
        showBack={true}
        onBack={() => navigate(-1)}
        action={{
          icon: ICON_RIGHT_HEADER,
          handler: () => setShowQuitModal(true),
        }}
      />

      <ProgressWrapper>
        <ProgressBar $progress={20} />
      </ProgressWrapper>

      <Content>
        <Label>에피소드</Label>
        <SubText>자유롭게 적어주세요.</SubText>

        <InputBox
          placeholder="구체적인 템플릿을 플레이스홀더로 넣기"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (e.target.value.trim().length >= 50) setError(false);
          }}
          $error={error}
          $shake={error}
        />
        <GuideText>최소 50자 이상 입력해주세요.</GuideText>

        {error && (
          <ErrorMsg>50자 이상 입력해야 다음 단계로 넘어갈 수 있어요.</ErrorMsg>
        )}
      </Content>

      <BottomArea>
        <VoiceText onClick={() => navigate("/mystory/ai_story/step02")}>
          음성으로 입력하기&nbsp;
          <ArrowIcon src={ICON_RIGHT} />
        </VoiceText>

        <NextButton disabled={text.trim().length < 50} onClick={handleNext}>
          다음
        </NextButton>
      </BottomArea>

      {/* 모달 */}
      {showQuitModal && (
        <Dim onClick={() => setShowQuitModal(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalTitle>앗! 그만두시겠어요?</ModalTitle>
            <ModalDesc>
              아직 동화를 완성하지 못했어요.
              <br />
              나가면 지금까지의 기록을 되돌릴 수 없어요.
            </ModalDesc>

            <ModalBtnRow>
              <ModalBtnGray onClick={() => navigate("/home")}>
                그만두기
              </ModalBtnGray>
              <ModalBtnYellow onClick={() => setShowQuitModal(false)}>
                계속 제작하기
              </ModalBtnYellow>
            </ModalBtnRow>
          </Modal>
        </Dim>
      )}
    </Screen>
  );
};

export default Storystep03;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
`;

const ProgressWrapper = styled.div`
  width: 100%;
  height: 4px;
  background: #f2f2f2;
`;
const ProgressBar = styled.div`
  width: ${({ $progress }) => $progress || 0}%;
  height: 100%;
  background: #ffd342;
  transition: width 0.3s ease;
`;

const Content = styled.div`
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.h3`
  color: #393939;
  font-family: NanumSquareRound;
  font-size: 16px;
  font-weight: 800;
`;

const SubText = styled.p`
  color: #7a7a7a;
  font-family: NanumSquareRound;
  font-size: 12px;
`;

const InputBox = styled.textarea`
  width: 100%;
  height: 456px;
  border: 1px solid ${({ $error }) => ($error ? "#F44336" : "#e8e8e8")};
  border-radius: 8px;
  background: #fff;
  padding: 12px;
  resize: none;
  font-family: NanumSquareRound;
  font-size: 14px;
  color: #393939;

  ${({ $shake }) =>
    $shake &&
    css`
      animation: ${shake} 0.3s ease;
    `}

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-color: ${({ $error }) => ($error ? "#F44336" : "#FFD342")};
    box-shadow: ${({ $error }) =>
      $error
        ? "0 0 0 3px rgba(244, 67, 54, 0.15)"
        : "0 0 0 3px rgba(255, 211, 66, 0.25)"};
  }
`;

const GuideText = styled.div`
  display: flex;
  padding: 0 16px;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  color: var(--color-text-tertiary, #BBB);

  font-family: NanumSquareRound;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  flex: 1 0 0;
`;

const ErrorMsg = styled.div`
  color: #F44336;
  font-size: 13px;
  margin-top: 6px;
`;

const BottomArea = styled.div`
  padding: 16px 24px calc(env(safe-area-inset-bottom, 0) + 24px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const VoiceText = styled.p`
  color: #bbb;
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ArrowIcon = styled.img`
  width: 14px;
  height: 14px;
`;

const NextButton = styled.button`
  width: 100%;
  max-width: 343px;
  height: 56px;
  border-radius: 999px;
  border: none;
  background: #ffd342;
  color: white;
  font-family: NanumSquareRound;
  font-size: 16px;
  font-weight: 800;

  &:disabled {
    opacity: 0.4;
  }
`;

const Dim = styled.div`
  position: absolute;
  inset: 0;
  width: 390px;
  height: 852px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Modal = styled.div`
  width: 320px;
  height: 196px;
  padding: 24px 24px 16px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
`;

const ModalTitle = styled.h3`
  color: #393939;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
`;

const ModalDesc = styled.p`
  color: #7a7a7a;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
`;

const ModalBtnRow = styled.div`
  display: flex;
  gap: 12px;
`;

const ModalBtnGray = styled.button`
  width: 130px;
  height: 40px;
  background-color: #f1f1f1;
  border-radius: 99px;
  border: none;
  color: #7a7a7a;
  font-size: 14px;
  font-weight: 800;
`;

const ModalBtnYellow = styled.button`
  width: 130px;
  height: 40px;
  background: #ffd342;
  border-radius: 99px;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 800;
`;
