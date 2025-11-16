import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header.jsx";
import { useNavigate } from "react-router-dom";

const Storystep04 = () => {
  const navigate = useNavigate();

  // 더미 데이터
  const [text, setText] = useState(
    `옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요.옛날옛날에 여우와 두루미가 살았어요. 

여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요.옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요.옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요.옛날옛날에 여우와 두루미가 살았어요. 

여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요.옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요.옛날옛날에 여우와 두루미가 살았어요. .는 털이 북슬북슬하고 두루미는 아주 키가 컸어요.옛날옛날에 여우와 두루미가 살았어요. .는 털이 북슬북슬하고 두루미는 아주 키가 컸어요.`
  );

  return (
    <Screen>
      <Header title="동화 만들기" showBack={true} onBack={() => navigate(-1)} />

      <ProgressWrapper>
        <ProgressBar $progress={60} />
      </ProgressWrapper>

      <Content>
        <Label>에피소드</Label>
        <SubText>자유롭게 수정해 보세요.</SubText>

        <InputBox
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
          onClick={() => navigate("/mystory/ai_story/step05")}
        >
          다음
        </NextButton>
      </BottomArea>
    </Screen>
  );
};

export default Storystep04;


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
  overflow: hidden;  
  color: var(--color-text-primary, #393939);
  font-family: NanumSquareRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

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
