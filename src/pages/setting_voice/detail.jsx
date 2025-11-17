import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header.jsx";
import Button from "../../components/Button.jsx";

const AVATARS = [
  { key: "dog", src: "/img/onboarding/Avatar.svg" },
  { key: "bear", src: "/img/onboarding/Avatar_1.svg" },
  { key: "cat", src: "/img/onboarding/Avatar_3.svg" },
  { key: "alien", src: "/img/onboarding/Avatar_4.svg" },
];

const VoiceSetStep03 = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(AVATARS[0].key);
  const [name, setName] = useState("");

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const current = AVATARS.find((a) => a.key === selected) || AVATARS[0];

  return (
    <Screen>
      <Header
        title="목소리1"
        showBack={true}
        onBack={() => navigate(-1)}
        action={{
          icon: "/img/setting_voice/pencil.svg",
          handler: () => navigate("/mypage/voice_set/detail/edit"),
        }}
      />

      <Content>
        <MainIllust src={current.src} alt="선택된 캐릭터" />

        <SelectorRow>
          {AVATARS.map(({ key, src }) => (
            <AvatarButton
              key={key}
              onClick={() => setSelected(key)}
              $active={selected === key}
            >
              <AvatarIllust src={src} alt={key} />
            </AvatarButton>
          ))}
        </SelectorRow>

        <FieldGroup>
          <FieldLabel>이름</FieldLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="사용자 이름"
          />
        </FieldGroup>

        <VoiceLabel>목소리</VoiceLabel>
        <VoiceDesc>
          녹음된 목소리가 동화에서 어떻게 적용되는지 미리 들어보세요.
        </VoiceDesc>

        <ProgressContainer>
          <ProgressBar />
          <TimeText>00:04</TimeText>
        </ProgressContainer>

        <ControlRow>
          <ControlBtn onClick={() => console.log("뒤로 3초")}>
            <ControlIcon src="/img/setting_voice/play_3_back.svg" />
          </ControlBtn>

          <ControlBtn onClick={togglePlay}>
            <ControlIcon
              src={
                isPlaying
                  ? "/img/setting_voice/pause.svg"
                  : "/img/setting_voice/sound_play.svg"
              }
            />
          </ControlBtn>

          <ControlBtn onClick={() => console.log("앞으로 3초")}>
            <ControlIcon src="/img/setting_voice/play_3_front.svg" />
          </ControlBtn>
        </ControlRow>
      </Content>
    </Screen>
  );
};

export default VoiceSetStep03;


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
  margin-top: 48px;
  margin-bottom: 24px;
`;

const SelectorRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
`;

const AvatarButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 9999px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: ${({ $active }) =>
    $active ? "none" : "1.5px solid #F1F1F1"};
  background: ${({ $active }) =>
    $active ? "#FFF1C4" : "#E2F5B9"};
`;

const AvatarIllust = styled.img`
  width: 46px;
  height: 46px;
`;

const FieldGroup = styled.div`
  width: 343px;
  margin-bottom: 10px;
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
  padding: 0 16px;
  font-size: 16px;
  font-family: NanumSquareRound;
`;

const VoiceLabel = styled.div`
  width: 343px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 12px;
  margin-bottom: 6px;
  color: #3a372f;
`;

const VoiceDesc = styled.div`
  width: 343px;
  font-size: 13px;
  color: #7a7a7a;
  margin-bottom: 15px;
`;

const ProgressContainer = styled.div`
  width: 343px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 6px;
  background: #f7dd68;
  border-radius: 4px;
`;

const TimeText = styled.div`
  font-size: 10px;
  color: #7a7a7a;
`;

const ControlRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 28px;
  margin-top: 5px;
  margin-bottom: 40px;
`;

const ControlBtn = styled.button`
  display: flex;
  width: 56px;
  height: 56px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;

const ControlIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;
