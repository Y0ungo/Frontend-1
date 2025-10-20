import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header.jsx';
import Button from '../../components/Button.jsx';


const RECORD_ICON = '/img/onboarding/sound.svg'; // 녹음하기

const CHARACTERS = [ //온보딩 캐릭터
  { key: 'dog',  src: '/img/onboarding/Avatar.svg' },
  { key: 'bear', src: '/img/onboarding/Avatar_1.svg' },
  { key: 'lion', src: '/img/onboarding/Avatar_2.svg' },
  { key: 'cat',  src: '/img/onboarding/Avatar_3.svg' },
  { key: 'alien',src: '/img/onboarding/Avatar_4.svg' },
];

const OnboardingStep01 = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(CHARACTERS[0].key);
  const [name, setName] = useState('');

  const current = CHARACTERS.find(c => c.key === selected) || CHARACTERS[0];

  return (
    <Screen>
      {/* Header: 뒤로가기 X, 우측 액션 */}
      <Header
        title="목소리 설정"
        showBack={false}
        action={{ text: '건너뛰기', handler: () => navigate('/home') }}
      />

      {/* 콘텐츠 */}
      <Content>
        {/* 선택된 캐릭터 크게 표시 */}
        <MainIllust src={current.src} alt="선택된 캐릭터" />

        {/* 캐릭터 선택 리스트 */}
        <SelectorRow>
          {CHARACTERS.map(({ key, src }) => (
            <SelectButton
              key={key}
              onClick={() => setSelected(key)}
              aria-pressed={key === selected}
            >
              <SelectIllust src={src} alt={`${key} 캐릭터`} />
            </SelectButton>
          ))}
        </SelectorRow>

        {/* 이름 입력 */}
        <FieldGroup>
          <FieldLabel>이름</FieldLabel>
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="이름을 입력해주세요."
            aria-label="이름 입력"
          />
        </FieldGroup>
      </Content>

      {/* 하단 버튼 */}
      <BottomArea>
        <Button bgColor="#342E29" color="#FFF" onClick={() => navigate('/onboarding/step_02')}>
          <BtnContent>
            <BtnIcon src={RECORD_ICON} alt="" aria-hidden="true" />
            <span>녹음하기</span>
          </BtnContent>
        </Button>
      </BottomArea>
    </Screen>
  );
};

export default OnboardingStep01;

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
  padding: 16px 20px 0;
`;

const MainIllust = styled.img`
  width: 144px;
  height: auto;
  margin-top: 8px;
  margin-bottom: 16px;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
`;

const SelectorRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const SelectButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
`;

const SelectIllust = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;
  pointer-events: none;
`;

const FieldGroup = styled.div`
  width: 100%;
  margin-top: 6px;
`;

const FieldLabel = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #3a372f;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  height: 52px;
  border-radius: 12px;
  border: 1px solid #eee;
  background: #fff;
  padding: 0 16px;
  font-size: 14px;
  color: #393939;

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    outline: none;
    border-color: #ffd342;
    box-shadow: 0 0 0 3px rgba(255, 211, 66, 0.25);
  }
`;

const BottomArea = styled.div`
  padding: 0 24px calc(env(safe-area-inset-bottom, 0) + 20px);
  display: flex;
  justify-content: center;
`;

const BtnContent = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
`;

const BtnIcon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
  display: block;
`;
