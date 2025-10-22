import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header.jsx';
import Button from '../../components/Button.jsx';

const CHARACTERS = [
  { key: 'dog',  src: '/img/onboarding/Avatar.svg' },
  { key: 'bear', src: '/img/onboarding/Avatar_1.svg' },
  { key: 'cat',  src: '/img/onboarding/Avatar_3.svg' },
  { key: 'alien',src: '/img/onboarding/Avatar_4.svg' },
];

const OnboardingStep05 = () => {
  const navigate = useNavigate();

  // 캐릭터 상태
  const [selected, setSelected] = useState(CHARACTERS[0].key);
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [gender, setGender] = useState(''); // 'female' | 'male' | ''

  // 모달 상태
  const [openSkip, setOpenSkip] = useState(false);
  const [openDone, setOpenDone] = useState(false);

  const current = CHARACTERS.find(c => c.key === selected) || CHARACTERS[0];

  // 유효성: 이름 + 출생연도(숫자 4자리) + 성별
  const isValid = useMemo(() => {
    const yearOk = /^\d{4}$/.test(birthYear);
    return name.trim().length > 0 && yearOk && (gender === 'female' || gender === 'male');
  }, [name, birthYear, gender]);

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    if (!isValid) return;
    setOpenDone(true);
  };

  const resetForm = () => {
    setName('');
    setBirthYear('');
    setGender('');
    setSelected(CHARACTERS[0].key);
  };

  return (
    <Screen>
      {/* 헤더: 건너뛰기 → 확인 모달 */}
      <Header
        title="아이 정보 등록"
        showBack={true}
        onBack={() => navigate(-1)}
        action={{ text: '건너뛰기', handler: () => setOpenSkip(true) }}
      />

      {/* 콘텐츠 */}
      <Content as="form" onSubmit={handleSubmit}>
        {/* 선택된 캐릭터 크게 표시 */}
        <MainIllust src={current.src} alt="선택된 캐릭터" />

        {/* 캐릭터 선택 리스트 */}
        <SelectorRow>
          {CHARACTERS.map(({ key, src }) => (
            <SelectButton
              key={key}
              type="button"
              onClick={() => setSelected(key)}
              aria-pressed={key === selected}
              $active={key === selected}
            >
              <SelectIllust src={src} alt={`${key} 캐릭터`} />
            </SelectButton>
          ))}
        </SelectorRow>

        {/* 이름 */}
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

        {/* 출생연도 */}
        <FieldGroup>
          <FieldLabel>출생연도</FieldLabel>
          <Input
            inputMode="numeric"
            pattern="\d*"
            maxLength={4}
            value={birthYear}
            onChange={e => {
              const onlyNum = e.target.value.replace(/\D/g, '').slice(0, 4);
              setBirthYear(onlyNum);
            }}
            placeholder="출생연도를 입력해주세요"
            aria-label="출생연도 입력"
          />
        </FieldGroup>

        {/* 성별 */}
        <FieldGroup>
          <FieldLabel>성별</FieldLabel>
          <GenderRow role="radiogroup" aria-label="성별 선택">
            <GenderOption
              type="button"
              aria-checked={gender === 'female'}
              onClick={() => setGender('female')}
              $active={gender === 'female'}
            >
              <RadioIcon $active={gender === 'female'} />
              <span>여자</span>
            </GenderOption>

            <GenderOption
              type="button"
              aria-checked={gender === 'male'}
              onClick={() => setGender('male')}
              $active={gender === 'male'}
            >
              <RadioIcon $active={gender === 'male'} />
              <span>남자</span>
            </GenderOption>
          </GenderRow>
        </FieldGroup>
      </Content>

      {/* 하단: 등록하기 (유효 시 노란색 / 비활성 시 회색) */}
      <BottomArea>
        <Button
          width="343px"
          height="56px"
          bgColor={isValid ? '#FFD342' : '#EDEDED'}
          color={isValid ? '#342E29' : '#B9B9B9'}
          disabled={!isValid}
          onClick={handleSubmit}
        >
          등록하기
        </Button>
      </BottomArea>

      {/* 건너뛰기 모달 */}
      {openSkip && (
        <Dim onClick={() => setOpenSkip(false)}>
          <Modal role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <ModalTitle>등록을 건너뛰시겠습니까?</ModalTitle>
            <ModalDesc>
              지금까지 입력한 정보는 저장되지 않아요.
            </ModalDesc>

            <BtnRow>
              <Button
                width="132px"
                height="48px"
                bgColor="#F1F1F1"
                color="#7A7A7A"
                onClick={() => { setOpenSkip(false); }}
              >
                건너뛰기
              </Button>
              <Button
                width="147px"
                height="48px"
                bgColor="#FFD342"
                color="#ff"
                onClick={() => setOpenSkip(false)}
              >
                이어서 등록
              </Button>
            </BtnRow>
          </Modal>
        </Dim>
      )}

      {/* 등록 완료 모달 */}
      {openDone && (
        <Dim onClick={() => setOpenDone(false)}>
          <Modal role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <ModalTitle>아이 정보 등록이 완료되었어요</ModalTitle>
            <ModalDesc>등록된 아이 정보로 맞춤 동화를 만들 수 있어요.</ModalDesc>
            <BtnRow>
              <Button
                width="132px"
                height="48px"
                bgColor="#F1F1F1"
                color="#7A7A7A"
                onClick={() => { setOpenDone(false); resetForm(); }}
              >
                추가 등록
              </Button>
              <Button
                width="147px"
                height="48px"
                bgColor="#FFD342"
                color="#FF"
                onClick={() => navigate('/onboarding/end')}
              >
                확인
              </Button>
            </BtnRow>
          </Modal>
        </Dim>
      )}
    </Screen>
  );
};

export default OnboardingStep05;

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
  margin-top: 48px;
  margin-bottom: 32px;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
`;

const SelectorRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
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
  margin-top: 24px;
  &:first-of-type {
    margint-top: 0px;
    }
`;

const FieldLabel = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #3a372f;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 343px;
  height: 52px;
  border-radius: 12px;
  border: 1px solid #eee;
  background: #fff;
  padding: 0 16px;
  font-size: 16px;
  color: #393939;
  box-sizing: border-box;

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    outline: none;
    border-color: #ffd342;
    box-shadow: 0 0 0 3px rgba(255, 211, 66, 0.25);
  }
`;

const GenderRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  width: 343px; 
`;

const GenderOption = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0px;
  color: ${({ $active }) => ($active ? '#3a372f' : '#7A7A7A')};
  font-size: 16px;
  font-weight: 600;
`;

const RadioIcon = styled.span`
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 2px solid ${({ $active }) => ($active ? '#FFD342' : '#D8D8D8')};
    background: #FFF;
    display: inline-block;
    box-shadow: ${({ $active }) =>
        $active ? '0 0 0 2px rgba(255, 211, 66, 0.20) inset' : 'none'};
    /* 내부 점 */
    &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${({ $active }) => ($active ? '12px' : '0')};
    height: ${({ $active }) => ($active ? '12px' : '0')};
    border-radius: 50%;
    background: #FFD342;
    transition: width 120ms ease, height 120ms ease;
    }
`;

const BottomArea = styled.div`
  padding: 0 24px calc(env(safe-area-inset-bottom, 0) + 20px);
  display: flex;
  justify-content: center;
`;

const Dim = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 999;
`;

const Modal = styled.div`
  display: flex;
  width: 320px;
  max-width: 384px;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background: #FFF;
  box-shadow:
    0 0 1px 0 rgba(24, 24, 27, 0.30),
    0 8px 16px 0 rgba(24, 24, 27, 0.10);
  padding: 20px;
  text-align: center;
`;

const ModalTitle = styled.h3`
  margin: 6px 0 8px;
  color: #3a372f;
  font-size: 16px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: -0.01em;
`;

const ModalDesc = styled.p`
  margin: 0 0 16px;
  color: #7a7a7a;
  font-size: 16px;
  line-height: 18px;
`;

const BtnRow = styled.div`
  margin-top: 8px;
  margin-bottom: 4px;
  display: flex;
  gap: 8px;
`;
