import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header.jsx";
import BottomBar from "../../components/Bottom.jsx";

// 초기 데이터
const initialMyVoices = [
  { id: 1, name: "목소리1", icon: "/img/onboarding/Avatar_1.svg" },
  { id: 2, name: "목소리1", icon: "/img/onboarding/Avatar_2.svg" },
  { id: 3, name: "목소리1", icon: "/img/onboarding/Avatar_4.svg" },
];
const actorVoices = [
  { id: 1, name: "목소리1", icon: "/img/setting_voice/avatar.svg" },
  { id: 2, name: "목소리1", icon: "/img/setting_voice/avatar.svg" },
  { id: 3, name: "목소리1", icon: "/img/setting_voice/avatar.svg" },
];

const VoiceSettingMain = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("mine");

  const [myVoiceList, setMyVoiceList] = useState(initialMyVoices);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const handleAddClick = () => {
    navigate("/mypage/voice_set/step01");
  };

  const handleDeleteClick = (id) => {
    setTargetId(id);
    setShowDeleteModal(true);
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
    setTargetId(null);
  };

  const handleConfirmDelete = () => {
    if (targetId !== null) {
      setMyVoiceList((prev) => prev.filter((v) => v.id !== targetId));
    }
    setShowDeleteModal(false);
    setTargetId(null);
  };

  return (
    <Container>
      <Header title="목소리 설정" showBack={true} />
      {/* 탭 메뉴 */}
      <TabWrapper>
        <TabButton
          active={activeTab === "mine"}
          onClick={() => setActiveTab("mine")}
        >
          나의 목소리
        </TabButton>
        <TabButton
          active={activeTab === "actor"}
          onClick={() => setActiveTab("actor")}
        >
          성우 목소리
        </TabButton>
      </TabWrapper>

      {/* 리스트 영역 */}
      <ListWrapper>
        {activeTab === "mine"
          ? myVoiceList.map((voice) => (
              <VoiceItem key={voice.id}>
                <LeftArea>
                  <Avatar src={voice.icon} alt="voice icon" />
                  <VoiceName>{voice.name}</VoiceName>
                </LeftArea>
                <RightArea>
                  <IconButton>
                    <img src="/img/setting_voice/edit.svg" alt="edit" />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteClick(voice.id)}>
                    <img src="/img/setting_voice/delete.svg" alt="delete" />
                  </IconButton>
                </RightArea>
              </VoiceItem>
            ))
          : actorVoices.map((voice) => (
              <VoiceItem key={voice.id}>
                <LeftArea>
                  <Avatar src={voice.icon} alt="voice icon" />
                  <VoiceName>{voice.name}</VoiceName>
                </LeftArea>
                <RightArea>
                  <IconButton>
                    <img src="/img/setting_voice/play.svg" alt="play" />
                  </IconButton>
                </RightArea>
              </VoiceItem>
            ))}

        {/* + 등록하기 버튼 */}
        {activeTab === "mine" && (
          <AddButton onClick={handleAddClick}>
            <PlusIcon src="/img/setting_voice/plus.svg" alt="add" />
            등록하기
          </AddButton>
        )}
      </ListWrapper>

      {/* 모달창 */}
      {showDeleteModal && (
        <Dim onClick={handleCloseModal}>
          <Modal
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalTitle>목소리를 삭제하시겠어요?</ModalTitle>
            <ModalDesc>
              이 목소리로 저장된
              <br />
              모든 동화 오디오가 함께 사라져요.
              <br />
              삭제 후에는 복구할 수 없어요.
            </ModalDesc>

            <BtnRow>
              <CancelBtn onClick={handleCloseModal}>취소</CancelBtn>
              <DeleteBtn onClick={handleConfirmDelete}>삭제</DeleteBtn>
            </BtnRow>
          </Modal>
        </Dim>
      )}

      <BottomBar />
    </Container>
  );
};

export default VoiceSettingMain;

// 스타일 컴포넌트
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
  font-family: "NanumSquareRound", sans-serif;
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #e0e0e0;
  margin-top: 4px;
`;

const TabButton = styled.button`
  flex: 1;
  background: none;
  border: none;
  padding: 12px 0;
  font-size: 14px;
  font-weight: ${(props) => (props.active ? "700" : "400")};
  color: ${(props) => (props.active ? "#000" : "#C4C4C4")};
  border-bottom: ${(props) => (props.active ? "2px solid #000" : "none")};
  cursor: pointer;
`;

const ListWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 12px 20px 80px 20px;
`;

const VoiceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
`;

const LeftArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled.img`
  width: 44px;
  height: 44px;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const VoiceName = styled.span`
  font-size: 16px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  background: none;
  border: none;
  color: #393939;
  font-size: 16px;
  cursor: pointer;
  font-family: NanumSquareRound;
  line-height: 24px;
`;

const PlusIcon = styled.img`
  display: flex;
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
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
