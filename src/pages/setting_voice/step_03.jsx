import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header.jsx";
import Button from "../../components/Button.jsx";

// const RECORD_ICON = "/img/onboarding/sound.svg";   // 녹음하기 아이콘
const CLOSE_ICON  = "/img/setting_voice/close.svg";       // 우측 상단 X 아이콘
const AVATARS = [
  { key: "dog",   src: "/img/onboarding/Avatar.svg" },
  { key: "bear",  src: "/img/onboarding/Avatar_1.svg" },
  { key: "cat",   src: "/img/onboarding/Avatar_3.svg" },
  { key: "alien", src: "/img/onboarding/Avatar_4.svg" },
];

const VoiceSetStep03 = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(AVATARS[0].key);
  const [name, setName] = useState("");

  // 모달 (나가기 경고)
  const [openModal, setOpenModal] = useState(false);

  // 스낵(알림 바)
  const [snack, setSnack] = useState({ open: false, type: "success" });
  // type: "success" | "duplicate"

  const current = AVATARS.find((a) => a.key === selected) || AVATARS[0];

  const handleBack = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleExit = () => {
    // 나가기
    setOpenModal(false);
    navigate(-1);
  };

  const handleContinue = () => {
    // 이어서 등록
    setOpenModal(false);
  };

  const handleSubmit = () => {
    // (백x) 더미 검증: 이름이 "목소리1"이면 중복 스낵, 아니면 성공 스낵
    const duplicate = name.trim() === "목소리1";
    setSnack({ open: true, type: duplicate ? "duplicate" : "success" });

    // 자동닫기
    setTimeout(() => {
      setSnack((s) => ({ ...s, open: false }));
    }, 2200);
  };

  return (
    <Screen>
      <Header
        title="목소리 등록하기"
        showBack={true}
        onBack={handleBack}
      />

      {/* 우측 상단 X 아이콘 */}
      <CloseButton type="button" onClick={() => setOpenModal(true)} aria-label="닫기">
        <img src={CLOSE_ICON} alt="" />
      </CloseButton>

      {/* 콘텐츠 */}
      <Content>
        {/* 선택된 캐릭터 크게 표시 */}
        <MainIllust src={current.src} alt="선택된 캐릭터" />

        {/* 캐릭터 선택 리스트 */}
        <SelectorRow>
          {AVATARS.map(({ key, src }) => (
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
            onChange={(e) => setName(e.target.value)}
            placeholder="사용자 이름"
            aria-label="이름 입력"
          />
        </FieldGroup>
      </Content>

      {/* 스낵(알림 바) 우선, 버튼 위 영역에 렌더 */}
      {snack.open && (
        <SnackWrapper>
          <Snack>
            {snack.type === "success" ? "목소리 등록이 완료되었어요." : "이미 등록된 목소리예요."}
          </Snack>
        </SnackWrapper>
      )}

      {/* 하단 버튼 */}
      <BottomArea>
        <Button bgColor="#342E29" color="#FFF" onClick={handleSubmit}>
          <BtnContent>
            <BtnText>등록하기</BtnText>
          </BtnContent>
        </Button>
      </BottomArea>

      {/* 나가기 경고 모달 */}
      {openModal && (
        <Dim onClick={handleCloseModal}>
          <Modal role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <ModalTitle>목소리를 등록하지 않았어요</ModalTitle>
            <ModalDesc>
              지금까지 저장된 목소리가
              <br />
              모두 삭제됩니다.
            </ModalDesc>

            <BtnRow>
              <CancelBtn onClick={handleExit}>나가기</CancelBtn>
              <DeleteBtn onClick={handleContinue}>이어서 등록</DeleteBtn>
            </BtnRow>
          </Modal>
        </Dim>
      )}
    </Screen>
  );
};

export default VoiceSetStep03;

// 스타일컴포넌트
const Screen = styled.div`
  position: relative;
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

const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 16px;
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  img { width: 24px; height: 24px; display: block; }
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
  border: ${({ $active }) => ($active ? "2px solid #FFD342" : "2px solid transparent")};
  box-shadow: ${({ $active }) => ($active ? "0 0 0 2px rgba(255, 211, 66, 0.25) inset" : "none")};
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
  border: 1px solid #eee;
  background: #fff;
  padding: 0 16px;
  font-size: 16px;
  font-family: NanumSquareRound;
  color: #393939;
  box-sizing: border-box;

  &::placeholder { color: #bdbdbd; }
  &:focus {
    outline: none;
    border-color: #ffd342;
    box-shadow: 0 0 0 3px rgba(255, 211, 66, 0.25);
  }
`;

const SnackWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0 6px;
`;

const Snack = styled.div`
  border-radius: 12px;
  background: var(--color-bg-quaternary, #FFF8E3);
  display: flex;
  width: 358px;
  padding: 12px;
  align-items: center;
  gap: 12px;

  color: #3a372f;
  font-size: 14px;
  font-family: NanumSquareRound;
  line-height: 20px;
`;

const BottomArea = styled.div`
  padding: 0 24px calc(env(safe-area-inset-bottom, 0) + 20px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
`;

const BtnContent = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 800;
`;


const BtnText = styled.span`
  color: #fff;
  text-align: center;
  font-family: "NanumSquareRound";
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 24px;
`;

const Dim = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 1000;
`;

const Modal = styled.div`
  display: flex;
  width: 320px;
  max-width: var(--Large-Sizes-sm, 384px);
  flex-direction: column;
  align-items: center;
  border-radius: var(--border-radius-2xl, 16px);
  background: var(--bg-panel, #fff);
  box-shadow: 0 0 1px 0 rgba(24, 24, 27, 0.3),
    0 8px 16px 0 rgba(24, 24, 27, 0.1);
  padding: 20px;
  text-align: center;
`;

const ModalTitle = styled.h3`
  margin: 6px 0 8px;
  color: #3a372f;
  font-size: 20px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: -0.01em;
  text-align: center;
`;

const ModalDesc = styled.p`
  margin: 0 0 16px;
  color: #7a7a7a;
  font-size: 14px;
  font-family: NanumSquareRound;
  line-height: 22px;
  width: 100%;
  max-width: 272px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const BtnRow = styled.div`
  margin-top: 8px;
  margin-bottom: 4px;
  display: flex;
  gap: 8px;
`;

const CancelBtn = styled.button`
  width: 132px;
  height: 48px;
  border: none;
  border-radius: 24px;
  background: #f1f1f1;
  color: #7a7a7a;
  font-family: NanumSquareRound;
  font-size: 16px;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  width: 132px;
  height: 48px;
  border: none;
  border-radius: 24px;
  background: #ffd342;
  color: #fff;
  font-family: NanumSquareRound;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;
