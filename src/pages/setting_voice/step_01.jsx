import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header.jsx';
import Button from '../../components/Button.jsx';

const RECORD_ICON = '/img/onboarding/sound.svg'; // 녹음하기

const CHARACTERS = [
  { key: 'dog',   src: '/img/onboarding/Avatar.svg' },
  { key: 'bear',  src: '/img/onboarding/Avatar_1.svg' },
  { key: 'cat',   src: '/img/onboarding/Avatar_3.svg' },
  { key: 'alien', src: '/img/onboarding/Avatar_4.svg' },
];

const VoiceSetStep01 = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(CHARACTERS[0].key);
  const [name, setName] = useState('');
  const [error, setError] = useState(false); // 미입력 에러 상태

  const current = CHARACTERS.find(c => c.key === selected) || CHARACTERS[0];

  // ✅ 버튼 클릭 시 이름 입력 검증
  const handleNext = () => {
    if (name.trim() === '') {
      setError(true);
      return;
    }
    navigate('/mypage/voice_set/step02');
  };

  return (
    <Screen>
      <Header
        title="목소리 등록하기"
        showBack={true}
        onBack={() => navigate(-1)}
        action={false}
      />

      <Content>
        <MainIllust src={current.src} alt="선택된 캐릭터" />

        <SelectorRow>
          {CHARACTERS.map(({ key, src }) => (
            <SelectButton
              key={key}
              onClick={() => setSelected(key)}
              aria-pressed={key === selected}
              $active={key === selected}
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
            onChange={(e) => {
              setName(e.target.value);
              if (e.target.value.trim() !== '') setError(false); // 입력 시 에러 해제
            }}
            placeholder="이름을 입력해주세요."
            aria-label="이름 입력"
            $error={error}
            $shake={error} // 흔들림 애니메이션 트리거
          />
          {error && <ErrorText>목소리 이름을 입력해주세요.</ErrorText>}
        </FieldGroup>
      </Content>

      <BottomArea>
        <Button
          bgColor="#342E29"
          color="#FFF"
          onClick={handleNext} // 검증 로직 추가된 버튼
        >
          <BtnContent>
            <BtnIcon src={RECORD_ICON} alt="" aria-hidden="true" />
            <BtnText>녹음하기</BtnText>
          </BtnContent>
        </Button>
      </BottomArea>
    </Screen>
  );
};

export default VoiceSetStep01;

//스토리
// 흔들림 애니메이션 정의
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
  margin-top: 48px;
  margin-bottom: 32px;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
`;

const SelectorRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 48px;
`;

const SelectButton = styled.button`
  background: none;
  cursor: pointer;
  padding: 0;
  width: 62px;
  height: 62px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  border: ${({ $active }) => ($active ? '2px solid #FFD342' : '2px solid transparent')};
  box-shadow: ${({ $active }) => ($active ? '0 0 0 2px rgba(255, 211, 66, 0.25) inset' : 'none')};
  transition: border-color 120ms ease, box-shadow 120ms ease, transform 120ms ease;
  &:active { transform: scale(0.98); }
`;

const SelectIllust = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;
  pointer-events: none;
`;

const FieldGroup = styled.div`
  width: 343px;
  margin-top: 6px;
`;

const FieldLabel = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-family: NanumSquareRound;
  color: #3a372f;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 343px;
  height: 52px;
  border-radius: 12px;
  border: 1px solid ${({ $error }) => ($error ? '#F44336' : '#eee')};
  background: #fff;
  padding: 0 16px;
  font-size: 16px;
  font-family: NanumSquareRound;
  color: #393939;
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  ${({ $shake }) =>
    $shake &&
    css`
      animation: ${shake} 0.3s ease;
    `}

  &::placeholder { color: #bdbdbd; }

  &:focus {
    outline: none;
    border-color: ${({ $error }) => ($error ? '#F44336' : '#FFD342')};
    box-shadow: ${({ $error }) =>
      $error
        ? '0 0 0 3px rgba(244, 67, 54, 0.15)'
        : '0 0 0 3px rgba(255, 211, 66, 0.25)'};
  }
`;

const ErrorText = styled.div`
  color: #f44336;
  font-size: 13px;
  margin-top: 6px;
  font-family: NanumSquareRound;
`;

const BottomArea = styled.div`
  padding: 0 24px calc(env(safe-area-inset-bottom, 0) + 20px);
  display: flex;
  justify-content: center;
`;

const BtnContent = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 800;
`;

const BtnIcon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
  display: block;
`;

const BtnText = styled.span`
  color: var(--color-text-interactive-inverse, #FFF);
  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 24px;
`;
