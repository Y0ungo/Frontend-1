import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header.jsx';
import Button from '../../components/Button.jsx';

const Onboardingsetp04 = () => {
  const navigate = useNavigate();

  return (
    <Screen>
      {/* 헤더: 뒤로가기 X, 이름 수정 */}
      <Header
        title="아이 정보 등록"
        showBack={false}
        action={{ text: '건너뛰기', handler: () => navigate('/home') }}
      />

      {/* 중앙 콘텐츠 */}
      <Content>
        <Illust
          src="/img/onboarding/avator_sec.svg"
          alt="콩 흥얼거리는 일러스트"
        />
        <Title>
          동화를 읽어줄
          <br />
          아이에 대해 알려주세요.
        </Title>
        <Subtitle>
          아이 정보 등록 시, 보다 손쉽게 맞춤형 동화를 만들 수 있어요.
        </Subtitle>
      </Content>

      {/* 하단 버튼 */}
      <BottomArea>
        <Button onClick={() => navigate('/onboarding/step_05')}>다음</Button>
      </BottomArea>
    </Screen>
  );
};

export default Onboardingsetp04;

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

const Title = styled.h1`
  margin: 0;
  color: #3a372f;
  font-size: 22px;
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  margin: 6px 0 0;
  color: #8e8e8e;
  font-size: 12px;
  line-height: 1.6;
  letter-spacing: -0.01em;
`;

const BottomArea = styled.div`
  padding: 0 24px 24px;
  display: flex;
  justify-content: center;
`;
