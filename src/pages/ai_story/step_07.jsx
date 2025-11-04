import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header.jsx";
import { useNavigate } from "react-router-dom";

const EDIT_ICON = "/img/setting_voice/edit.svg";

const Storystep07 = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("여우, 두루미와의 피크닉");
  const [story, setStory] = useState(
    `옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요.옛날옛날에 여우와 두루미가 살았어요.

여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요.옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요.옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요.옛날옛날에 여우와 두루미가 살았어요.

여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요.옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요.옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요.`
  );

  //제목 상태
  const [isEditing, setIsEditing] = useState(false);

  //edit 클릭 시 편집 모드
  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <Screen>
      <Header title="동화 만들기" showBack={true} onBack={() => navigate(-1)} />

      <ProgressWrapper>
        <ProgressBar $progress={100} />
      </ProgressWrapper>

      <Content>
        <Label>제목</Label>
        <TitleInputWrapper>
          <TitleInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            readOnly={!isEditing}
          />
          <EditIcon
            src={EDIT_ICON}
            alt="수정 아이콘"
            onClick={handleEditClick}
            $active={isEditing}
          />
        </TitleInputWrapper>

        <Label>스토리</Label>
        <StoryBox
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
      </Content>

      <BottomArea>
        <NextButton onClick={() => navigate("/mystory/ai_story/main")}>
          다음
        </NextButton>
      </BottomArea>
    </Screen>
  );
};

export default Storystep07;


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
  gap: 16px;
  overflow-y: auto;

  /* 스크롤바 숨김 */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Label = styled.h3`
  color: var(--color-text-primary, #393939);
  font-family: NanumSquareRound;
  font-size: 16px;
  font-weight: 800;
  line-height: 24px;
`;

const TitleInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 10px 40px 10px 12px;
  background: #fff;
`;

const TitleInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: var(--color-text-primary, #393939);
  font-family: NanumSquareRound;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;


  ${({ readOnly }) =>
    readOnly &&
    `
      color: #7a7a7a;
      cursor: default;
  `}
`;

const EditIcon = styled.img`
  position: absolute;
  right: 12px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  opacity: ${({ $active }) => ($active ? 1 : 0.7)};
  transition: opacity 0.2s ease;
`;

const StoryBox = styled.textarea`
  width: 100%;
  height: 456px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background: #fff;
  padding: 12px;
  resize: none;
  overflow-y: scroll;

  color: var(--color-text-primary, #393939);
  font-family: NanumSquareRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-color: var(--color-bg-primary, #FFD342);
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BottomArea = styled.div`
  padding: 16px 24px calc(env(safe-area-inset-bottom, 0) + 24px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
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
