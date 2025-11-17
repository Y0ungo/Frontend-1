import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header.jsx";
import Button from "../../components/Button.jsx";

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

  // 기존 경고 모달
  const [openModal, setOpenModal] = useState(false);

  // 새 "등록 완료" 모달
  const [openCompleteModal, setOpenCompleteModal] = useState(false);

  const current = AVATARS.find((a) => a.key === selected) || AVATARS[0];

  // "등록하기" 버튼 → 완료 모달 열기
  const handleSubmit = () => {
    setOpenCompleteModal(true);
  };

  // 기존 모달 → 나가기
  const handleExit = () => {
    setOpenModal(false);
    navigate("/mypage/voice_set/main");
  };

  return (
    <Screen>
      <Header
        title="목소리 등록하기"
        showBack={false}
        action={{
          icon: "/icons/new_right_part.svg",
          handler: () => setOpenModal(true),
        }}
      />

      <Content>
        <MainIllust src={current.src} alt="선택된 캐릭터" />

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

      {/* 등록하기 버튼 */}
      <BottomArea>
        <Button $bgColor="#342E29" $color="#FFF" onClick={handleSubmit}>
          <BtnContent>
            <BtnText>등록하기</BtnText>
          </BtnContent>
        </Button>
      </BottomArea>

      {/* 기존 모달 (나가기 경고) */}
      {openModal && (
        <Dim onClick={() => setOpenModal(false)}>
          <Modal role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <ModalTitle>등록이 완료되지 않았어요</ModalTitle>
            <ModalDesc>
              지금 나가면
              <br />
              저장된 내용이 모두 사라져요.
            </ModalDesc>

            <BtnRow>
              <CancelBtn onClick={handleExit}>나가기</CancelBtn>
              <DeleteBtn onClick={() => setOpenModal(false)}>이어서 등록</DeleteBtn>
            </BtnRow>
          </Modal>
        </Dim>
      )}

      {/* 새 모달 (등록 완료) */}
      {openCompleteModal && (
        <Dim onClick={() => setOpenCompleteModal(false)}>
          <Modal role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <ModalTitle>목소리가 등록되었어요</ModalTitle>
            <ModalDesc>
              이제 이 목소리로
              <br />
              동화를 들을 수 있어요.
            </ModalDesc>

            <Button
              $bgColor="#FFD342"
              $color="#FFF"
              $width="100%"
              $height="48px"
              onClick={() => {
                setOpenCompleteModal(false);
                navigate("/mypage/voice_set/main");
              }}
            >
              확인
            </Button>
          </Modal>
        </Dim>
      )}
    </Screen>
  );
};

export default VoiceSetStep03;


/* ===== 스타일 ===== */

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

const MainIllust = styled.img`
  width: 144px;
  height: auto;
  margin-top: 48px;
  margin-bottom: 32px;
  object-fit: contain;
  user-select: none;
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
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ $active }) =>
    $active ? "2px solid #FFD342" : "2px solid transparent"};
  box-shadow: ${({ $active }) =>
    $active ? "0 0 0 2px rgba(255, 211, 66, 0.25) inset" : "none"};
  transition: 120ms ease;
`;

const SelectIllust = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;
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
  justify-content: center;
  font-weight: 800;
`;

const BtnText = styled.span`
  color: #fff;
  font-family: "NanumSquareRound";
  font-size: 16px;
  font-weight: 800;
`;

/* 모달 공통 */

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
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 0 1px rgba(24, 24, 27, 0.3),
              0 8px 16px rgba(24, 24, 27, 0.1);
  padding: 20px;
  text-align: center;
`;

const ModalTitle = styled.h3`
  margin: 6px 0 8px;
  color: #3a372f;
  font-size: 20px;
  font-weight: 800;
`;

const ModalDesc = styled.p`
  margin: 0 0 16px;
  color: #7a7a7a;
  font-size: 14px;
  font-family: NanumSquareRound;
  line-height: 22px;
  width: 100%;
  max-width: 272px;
`;

const BtnRow = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
`;

const CancelBtn = styled.button`
  width: 132px;
  height: 48px;
  border-radius: 24px;
  background: #f1f1f1;
  color: #7a7a7a;
  font-family: NanumSquareRound;
  font-size: 16px;
  border: none;
`;

const DeleteBtn = styled.button`
  width: 132px;
  height: 48px;
  border-radius: 24px;
  background: #ffd342;
  color: #fff;
  font-family: NanumSquareRound;
  font-weight: 700;
  font-size: 16px;
  border: none;
`;
