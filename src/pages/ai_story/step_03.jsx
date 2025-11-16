import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header.jsx";
import { useNavigate } from "react-router-dom";

const Storystep03 = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  return (
    <Screen>
      <Header title="동화 만들기" showBack={true} onBack={() => navigate(-1)} />

      <ProgressWrapper>
        <ProgressBar $progress={40} />
      </ProgressWrapper>

      <Content>
        <Label>에피소드</Label>
        <SubText>자유롭게 적어주세요.</SubText>

        <InputBox
          placeholder="구체적인 템플릿을 플레이스홀더로 넣기"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Content>

      <BottomArea>
        <VoiceText onClick={() => navigate("/mystory/ai_story/step02")}>
          음성으로 입력하기 &gt;
        </VoiceText>
        <NextButton
          disabled={!text.trim()}
          onClick={() => navigate("/mystory/ai_story/step04")}
        >
          다음
        </NextButton>
      </BottomArea>
    </Screen>
  );
};

export default Storystep03;


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
  background: var(--color-bg-primary, #FFD342);
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
  color: var(--color-text-primary, #393939);
  font-family: NanumSquareRound;
  font-size: 16px;
  font-weight: 800;
  line-height: 24px;
`;

const SubText = styled.p`
  color: var(--color-text-secondary, #7A7A7A);
  font-family: NanumSquareRound;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 12px;
`;

const InputBox = styled.textarea`
  width: 100%;
  height: 456px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background: #fff;
  padding: 12px;
  resize: none;
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #393939;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-color: var(--color-bg-primary, #FFD342);
  }
`;

const BottomArea = styled.div`
  padding: 16px 24px calc(env(safe-area-inset-bottom, 0) + 24px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const VoiceText = styled.p`
  color: var(--color-text-tertiary, #bbb);
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  cursor: pointer;
`;

const NextButton = styled.button`
  width: 100%;
  max-width: 343px;
  height: 56px;
  border-radius: 999px;
  border: none;
  background: var(--color-bg-primary, #FFD342);
  color: var(--color-text-interactive-inverse, #FFF);
  font-family: NanumSquareRound;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;
