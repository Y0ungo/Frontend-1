import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header.jsx';
import Button from '../../components/Button.jsx';

const Onboarding_intro_01 = () => {
  const navigate = useNavigate();

  return (
    <Screen>
      {/* 헤더: 뒤로가기 X, 이름 수정 */}
      <Header
        title="목소리 설정"
        showBack={false}
        action={{ text: '건너뛰기', handler: () => navigate('/home') }}
      />

      {/* 중앙 콘텐츠 */}
      <Content>
        <Illust
          src="/img/onboarding/character_main.svg"
          alt="헤드셋을 쓴 토끼 일러스트"
        />
        <Title>
          동화를 읽어줄
          <br />
          목소리를 설정해보아요
        </Title>
        <Subtitle>
          부모의 목소리는 아이에게
          <br />
          정서적 안정감을 주는 효과가 있어요
        </Subtitle>
      </Content>

      {/* 하단 버튼 */}
      <BottomArea>
        <Button onClick={() => navigate('/onboarding/step_01')}>다음</Button>
      </BottomArea>
    </Screen>
  );
};

export default Onboarding_intro_01;

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
