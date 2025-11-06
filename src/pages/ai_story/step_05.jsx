import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header.jsx";
import Button from "../../components/Button.jsx";

const ADD_ICON = "/img/ai_story/add.svg";
const LIGHTNING_ICON = "/img/ai_story/flash.svg";

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
        action={false}
      />

      <ProgressBarContainer>
        <ProgressBar />
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
              <LightningIcon src={LIGHTNING_ICON} alt="AI 추천" />
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

        {/* === 직접 입력 === */}
        <CustomBox>
          <Label>찾으시는 교훈이 없으신가요?</Label>

          <ChipContainer>
            {customList.map((v) => (
              <CustomChip key={v}>
                {v}
                <DeleteBtn onClick={() => removeCustom(v)}>×</DeleteBtn>
              </CustomChip>
            ))}

            <InputWrapper
              $focused={focused}
              $filled={!!customInput}
              onClick={() => setFocused(true)}
            >
              <AddIcon src={ADD_ICON} alt="직접 입력하기" />
              <CustomInput
                type="text"
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
    </Screen>
  );
};

export default Storystep05;


//스타일 컴포넌트
const Screen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  overflow-x: hidden;
`;


const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background: #f1f1f1;
`;
const ProgressBar = styled.div`
  width: 85%;
  height: 100%;
  background: #ffd342;
  border-radius: 4px;
  transition: width 0.4s ease;
`;

const Content = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
`;

const TitleBox = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 800;
  font-family: NanumSquareRound;
  color: #3a372f;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Star = styled.span`
  color: #ff8041;
  font-family: NanumSquareRound;
  font-size: 16px;
  font-weight: 800;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: #8d8d8d;
  margin-top: 4px;
`;


const AIBoxWrapper = styled.div`
  margin-bottom: 24px;
`;

const AIBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 16px;
  width: calc(100% + 48px);
  margin-left: -24px;
  border-radius: 8px;
  border: 1px solid #fcf9e6;
  background: linear-gradient(274deg, #fcf9e6 -8.83%, #f2fbe0 100%);
  box-sizing: border-box;
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
  color: var(--color-green-500, #c1e776);
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 800;
  line-height: 22px;
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
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 700;
`;

const Dots = styled.span`
  display: flex;
  align-items: center;
  margin-left: 6px;
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(props) => props.color || "#C1E776"};
  margin-left: 4px;
  animation: ${blink} 1.2s infinite;
  animation-delay: ${(props) => props.delay || "0s"};
`;

const AITagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const AITag = styled.button`
  display: flex;
  height: 36px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 999px;
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 800;
  line-height: 22px;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ $active }) =>
    $active
      ? css`
          background: var(--color-green-500, #c1e776);
          color: var(--color-text-interactive-inverse, #fff);
        `
      : css`
          border: 1px solid var(--color-green-300, #d6f29c);
          background: var(--color-green-100, #f9fdf0);
          color: var(--color-green-500, #c1e776);
        `}
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const DefaultTag = styled.button`
  display: flex;
  height: 36px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 999px;
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;

  ${({ $active }) =>
    $active
      ? css`
          background: var(--color-bg-inverse-bold, #342e29);
          color: #fff;
        `
      : css`
          background: var(--color-Grey-100, #f1f1f1);
          color: #bbbbbb;
        `}
`;

const CustomBox = styled.div`
  margin-top: 24px;
`;

const Label = styled.div`
  color: #393939;
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 8px;
`;

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CustomChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #342e29;
  color: #fff;
  border-radius: 999px;
  padding: 0 12px;
  height: 36px;
  font-size: 14px;
  font-weight: 600;
`;

const DeleteBtn = styled.button`
  border: none;
  background: none;
  color: #fff;
  font-size: 14px;
  margin-left: 6px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 138px;
  height: 36px;
  padding: 0 16px;
  align-items: center;
  gap: 4px;
  border-radius: 999px;
  border: 1px solid var(--color-Grey-100, #f1f1f1);
  background: transparent;
  transition: all 0.2s ease;
  cursor: text;
`;

const AddIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 6px;
`;

const CustomInput = styled.input`
  border: none;
  background: transparent;
  font-size: 14px;
  color: #3a372f;
  width: 90px;
  font-family: NanumSquareRound;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #bdbdbd;
  }
`;

const BottomArea = styled.div`
  padding: 0 24px calc(env(safe-area-inset-bottom, 0) + 20px);
  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  transform: translateX(4px);
  width: 100%;
  display: flex;
  justify-content: center;
`;
