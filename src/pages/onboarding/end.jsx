import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button.jsx';

const Onboardingend = () => {
  const navigate = useNavigate();

  return (
    <Screen>
      {/* 중앙 콘텐츠 */}
      <Content>
        <Illust
          src="/img/onboarding/avator_group.svg"
          alt="캐릭터 집단"
        />

        {/* 가운데 문구 */}
        <CenterCopy>
          환영해요!
          <br />
          우리 가족만의
          <br />
          동화를 시작해보세요
        </CenterCopy>
      </Content>

      {/* 하단 버튼 두 개 */}
      <BottomArea>
        <ButtonsCol>
          <StyledButton
            bgColor="var(--color-bg-primary, #FFD342)"
            color="#FFF"
            onClick={() => navigate('/home')}
          >
            홈으로
          </StyledButton>

          <StyledButton
            bgColor="var(--color-bg-inverse-bold, #342E29)"
            color="#FFF"
            onClick={() => navigate('/home')} 
            // 동화만들기로 라우터 수정 필요 
          >
            동화 만들기
          </StyledButton>
        </ButtonsCol>
      </BottomArea>
    </Screen>
  );
};

export default Onboardingend;

// 스타일 컴포넌트
const Screen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
`;

const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
  padding: 0 20px;
`;

const Illust = styled.img`
  width: 160px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 8px;
  user-select: none;
  pointer-events: none;
`;

const CenterCopy = styled.h1`
  margin: 0;
  color: var(--color-text-interactive-secondary, #342E29);
  text-align: center;

  font-family: "SOYO Maple TTF";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.02em;
`;

const BottomArea = styled.div`
  margin-top: 48px;
  padding: 0 24px calc(env(safe-area-inset-bottom, 0) + 24px + 12px);
  display: flex;
  justify-content: center;
`;

const ButtonsCol = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 220px;
  gap: 8px;             
  top: -240px;
  align-items: stretch;   
`;

/* 공통 버튼 스타일 오버라이드 */
const StyledButton = styled(Button)`
  display: flex;
  width: 220px;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 999px;
`;
