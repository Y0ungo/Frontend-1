import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header.jsx";
import Button from "../../components/Button.jsx";

const ICON_RIGHT_HEADER = "/icons/new_right_part.svg";
const LIGHTNING_ICON = "/img/ai_story/flash.svg";
const ADD_ICON = "/img/ai_story/add.svg";

const RECOMMENDED_VALUES = ["끈기", "배려", "인내"];
const ALL_VALUES = [
  "가족", "감사", "공감", "나눔", "노력", "다양성",
  "사랑", "생명", "신뢰", "용기", "우정", "정직",
  "존중", "절제", "책임감", "희망"
];

const Storystep05 = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

  const [customInput, setCustomInput] = useState("");
  const [customList, setCustomList] = useState([]);
  const [focused, setFocused] = useState(false);

  const [showQuitModal, setShowQuitModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRecommended(RECOMMENDED_VALUES);
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleValue = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else if (selected.length < 3) {
      setSelected([...selected, value]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && customInput.trim() !== "") {
      e.preventDefault();
      if (customList.length < 3) {
        setCustomList([...customList, customInput.trim()]);
        setCustomInput("");
        setFocused(false);
      }
    }
  };

  const removeCustom = (value) => {
    setCustomList(customList.filter((v) => v !== value));
  };

  return (
    <Screen>
      <Header
        title="동화 만들기"
        showBack={true}
        onBack={() => navigate(-1)}
        action={{
          icon: ICON_RIGHT_HEADER,
          handler: () => setShowQuitModal(true),
        }}
      />

      <ProgressBarContainer>
        <ProgressBar $progress={60} />
      </ProgressBarContainer>

      <Content>
        <TitleBox>
          <Title>
            교훈 <Star>*</Star>
          </Title>
          <Subtitle>최대 3개의 교훈을 선택할 수 있어요.</Subtitle>
        </TitleBox>

        <AIBoxWrapper>
          <AIBox>
            <AIHeader>
              <LightningIcon src={LIGHTNING_ICON} />
              <AILabel>AI 추천 교훈</AILabel>
            </AIHeader>

            {loading ? (
              <LoadingContainer>
                <LoadingText>
                  에피소드에 맞는 교훈을 찾고 있어요
                  <Dots>
                    <Dot delay="0s" color="#C1E776" />
                    <Dot delay="0.2s" color="#E6E4E3" />
                    <Dot delay="0.4s" color="#C1E776" />
                  </Dots>
                </LoadingText>
              </LoadingContainer>
            ) : (
              <AITagList>
                {recommended.map((v) => (
                  <AITag
                    key={v}
                    onClick={() => toggleValue(v)}
                    $active={selected.includes(v)}
                  >
                    {v}
                  </AITag>
                ))}
              </AITagList>
            )}
          </AIBox>
        </AIBoxWrapper>

        <TagList>
          {ALL_VALUES.map((v) => (
            <DefaultTag
              key={v}
              onClick={() => toggleValue(v)}
              $active={selected.includes(v)}
            >
              {v}
            </DefaultTag>
          ))}
        </TagList>

        {/* 직접 입력 */}
        <CustomBox>
          <Label>찾으시는 교훈이 없으신가요?</Label>

          <ChipContainer>
            {customList.map((v) => (
              <CustomChip key={v}>
                {v}
                <DeleteBtn onClick={() => removeCustom(v)}>×</DeleteBtn>
              </CustomChip>
            ))}

            <InputWrapper>
              <AddIconImg src={ADD_ICON} />
              <CustomInput
                placeholder="직접 입력하기"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={handleKeyDown}
              />
            </InputWrapper>
          </ChipContainer>
        </CustomBox>
      </Content>

      <BottomArea>
        <ButtonWrapper>
          <Button
            bgColor="#FFD342"
            color="#342E29"
            onClick={() => navigate("/mystory/ai_story/step06")}
          >
            다음
          </Button>
        </ButtonWrapper>
      </BottomArea>

      {/* 종료 모달 */}
      {showQuitModal && (
        <Dim onClick={() => setShowQuitModal(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalTitle>앗! 그만두시겠어요?</ModalTitle>
            <ModalDesc>
              아직 동화를 완성하지 못했어요.
              <br />
              나가면 지금까지의 기록을 되돌릴 수 없어요.
            </ModalDesc>

            <ModalBtnRow>
              <ModalBtnGray onClick={() => navigate("/home")}>
                그만두기
              </ModalBtnGray>
              <ModalBtnYellow onClick={() => setShowQuitModal(false)}>
                계속 제작하기
              </ModalBtnYellow>
            </ModalBtnRow>
          </Modal>
        </Dim>
      )}
    </Screen>
  );
};

export default Storystep05;


const Screen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background: #f1f1f1;
`;

const ProgressBar = styled.div`
  width: ${({ $progress }) => $progress}%;
  height: 100%;
  background: #ffd342;
`;

const Content = styled.div`
  flex: 1;
  padding: 24px;
`;

const TitleBox = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 800;
  font-family: NanumSquareRound;
  color: #3a372f;
`;

const Star = styled.span`
  color: #ff8041;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: #8d8d8d;
`;

const AIBoxWrapper = styled.div`
  margin-bottom: 24px;
`;

const AIBox = styled.div`
  padding: 16px;
  width: calc(100% + 48px);
  margin-left: -24px;

  border-radius: 8px;
  border: 1px solid #fcf9e6;
  background: linear-gradient(274deg, #fcf9e6 -8.83%, #f2fbe0 100%);
`;

const AIHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const LightningIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const AILabel = styled.div`
  color: #c1e776;
  font-weight: 800;
`;

const blink = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
`;

const LoadingContainer = styled.div`
  margin-top: 10px;
`;

const LoadingText = styled.div`
  display: flex;
  align-items: center;
  color: #bab6b2;
  font-weight: 700;
`;

const Dots = styled.div`
  display: flex;
  margin-left: 6px;
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(p) => p.color};
  margin-left: 4px;
  animation: ${blink} 1.2s infinite;
  animation-delay: ${(p) => p.delay};
`;

const AITagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const AITag = styled.button`
  height: 36px;
  padding: 0 16px;
  border-radius: 999px;
  font-weight: 800;
  cursor: pointer;

  ${({ $active }) =>
    $active
      ? css`
          background: #c1e776;
          color: white;
          border: none !important;
        `
      : css`
          border: 1px solid #d6f29c;
          background: #f9fdf0;
          color: #c1e776;
        `}
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const DefaultTag = styled.button`
  height: 36px;
  padding: 0 16px;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;

  ${({ $active }) =>
    $active
      ? css`
          background: #342e29;
          color: white;
          border: none !important;
        `
      : css`
          background: #f1f1f1;
          color: #bbbbbb;
          border: none !important; 
        `}
`;

const CustomBox = styled.div`
  margin-top: 24px;
`;

const Label = styled.div`
  font-weight: 800;
  margin-bottom: 8px;
`;

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CustomChip = styled.div`
  background: #342e29;
  color: white;
  padding: 0 12px;
  height: 36px;

  display: flex;
  align-items: center;
  border-radius: 999px;
`;

const DeleteBtn = styled.button`
  background: none;
  border: none;
  color: white;
  margin-left: 6px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 16px;

  border: 1px solid #f1f1f1;
  border-radius: 999px;
`;

const AddIconImg = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 6px;
`;

const CustomInput = styled.input`
  border: none;
  background: transparent;
  width: 90px;

  &:focus {
    outline: none;
  }
`;

const BottomArea = styled.div`
  padding: 0 24px calc(env(safe-area-inset-bottom) + 16px);
  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
`;


const Dim = styled.div`
  position: absolute;
  inset: 0;
  width: 390px;
  height: 852px;
  background: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
`;

const Modal = styled.div`
  width: 320px;
  height: 196px;

  padding: 24px 24px 16px;
  background: #fff;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
`;

const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  text-align: center;
`;

const ModalDesc = styled.div`
  font-size: 14px;
  color: #7a7a7a;
  text-align: center;
  line-height: 22px;
`;

const ModalBtnRow = styled.div`
  display: flex;
  gap: 12px;
`;

const ModalBtnGray = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 99px;
  background: #f1f1f1;
  color: #7a7a7a;
  border: none;
  font-weight: 800;
`;

const ModalBtnYellow = styled.button`
  width: 130px;
  height: 40px;
  background: #ffd342;
  color: white;
  border-radius: 99px;
  border: none;
  font-weight: 800;
`;
