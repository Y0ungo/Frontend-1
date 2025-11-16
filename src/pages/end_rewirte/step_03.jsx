import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header.jsx";

const PROFILE = "/img/end_rewrite/profile.svg";
const RECORD = "/img/end_rewrite/yellow_rec.svg";
const SEND = "/img/end_rewrite/send.svg";
const CLOSE_ICON = "/icons/new_right_part.svg";

const Endwritestep03 = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    { sender: "bot", text: "신데렐라 동화에서 가장 좋아했던 캐릭터가 뭐야?" },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const [open, setOpen] = useState(false); // 닫기 모달
  const [loading, setLoading] = useState(false); // 로딩 모달
  const [stepCount, setStepCount] = useState(0); // 왕복 횟수

  const chatEndRef = useRef(null);

  // 자동 스크롤
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 메시지 전송
  const handleSend = (e) => {
    e.preventDefault();

    if (!isFocused) {
      navigate("/rewrite_end/step02");
      return;
    }

    if (inputValue.trim() === "") return;

    // 사용자 메시지 추가
    const userMsg = { sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    const nextStep = stepCount + 1;
    setStepCount(nextStep);

    // 더미 챗봇 응답
    setTimeout(() => {
      const botReply =
        nextStep >= 3
          ? { sender: "bot", text: "이제 결말을 확장해도 될까?" }
          : { sender: "bot", text: "그렇구나! 신데렐라 이야기 정말 다양하게 해석할 수 있지!" };

      setMessages((prev) => [...prev, botReply]);
    }, 900);
  };

  // 결말 확장하기
  const handleExpandEnding = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/rewrite_end/step04");
    }, 2000);
  };

  return (
    <Screen>
      {/* 상단 헤더 */}
      <Header title="채팅" showBack={false} />

      {/* 닫기 버튼 */}
      <CloseBtn onClick={() => setOpen(true)}>
        <img src={CLOSE_ICON} alt="닫기" />
      </CloseBtn>

      {/* 닫기 모달 */}
      {open && (
        <Dim onClick={() => setOpen(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalTitle>앗! 그만두시겠어요?</ModalTitle>
            <ModalDesc>
              아직 대화를 완성하기엔 대화가 조금 부족해요.
              <br />
              그만하면 지금까지의 대화를 되돌릴 수 없어요.
            </ModalDesc>

            <BtnRow>
              <CancelBtn onClick={() => navigate("/rewrite_end/")}>
                나가기
              </CancelBtn>
              <DeleteBtn onClick={() => setOpen(false)}>
                계속 대화하기
              </DeleteBtn>
            </BtnRow>
          </Modal>
        </Dim>
      )}

      {/* 로딩 모달 */}
      {loading && (
        <LoadingDim>
          <LoadingBox>
            <Spinner>
              <Dot1 />
              <Dot2 />
            </Spinner>
            <LoadingText>
              결말을 확장하고 있어요!
              <br />
              조금만 기다려주세요
            </LoadingText>
          </LoadingBox>
        </LoadingDim>
      )}

      {/* 채팅 영역 */}
      <ChatContainer>
        {messages.map((msg, idx) => (
          <MessageRow key={idx} $isUser={msg.sender === "user"}>
            {msg.sender === "bot" && (
              <ProfileIcon src={PROFILE} alt="profile" />
            )}
            <MessageBubble $isUser={msg.sender === "user"}>
              {msg.text}
            </MessageBubble>
          </MessageRow>
        ))}

        {/* 결말 확장하기 버튼 */}
        {stepCount >= 3 && (
          <ButtonWrapper>
            <EndButton onClick={handleExpandEnding}>결말 확장하기</EndButton>

            <EndButton
              onClick={() =>
                setMessages((prev) => [
                  ...prev,
                  { sender: "bot", text: "좋아! 조금 더 이야기해보자." },
                ])
              }
            >
              더 대화하기
            </EndButton>
          </ButtonWrapper>
        )}

        <div ref={chatEndRef} />
      </ChatContainer>

      {/* 인풋 바 */}
      <InputBar onSubmit={handleSend}>
        <Input
          type="text"
          placeholder="메시지를 입력해주세요"
          value={inputValue}
          onFocus={() => setIsFocused(true)}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <RecordBtn type="submit">
          <img src={isFocused ? SEND : RECORD} alt="send / record" />
        </RecordBtn>
      </InputBar>
    </Screen>
  );
};

export default Endwritestep03;


const LoadingDim = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const LoadingBox = styled.div`
  width: 280px;
  padding: 24px 20px;
  background: #ffffff;
  border-radius: 16px;
  text-align: center;
`;

const moveLeft = keyframes`
  0%, 100% { transform: translateX(-13px); }
  50% { transform: translateX(13px); }
`;

const moveRight = keyframes`
  0%, 100% { transform: translateX(13px); }
  50% { transform: translateX(-13px); }
`;

const Spinner = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  margin: 0 auto;
`;

const Dot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

const Dot1 = styled(Dot)`
  background-color: #efefef;
  animation: ${moveLeft} 1.3s ease-in-out infinite;
`;

const Dot2 = styled(Dot)`
  background-color: #ffd342;
  animation: ${moveRight} 1.3s ease-in-out infinite;
`;

const LoadingText = styled.p`
  margin-top: 12px;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  color: #000;
`;


const Screen = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #ffffff;
  overflow: hidden;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px 120px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  &::-webkit-scrollbar {
    display: none;
  }
`;


const MessageRow = styled.div`
  display: flex;
  gap: 8px;

  ${({ $isUser }) =>
    $isUser &&
    css`
      justify-content: flex-end;
    `}
`;

const ProfileIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const appear = keyframes`
  0% { opacity: 0; transform: translateY(6px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const MessageBubble = styled.div`
  max-width: 260px;
  padding: 12px 16px;
  border-radius: 14px;
  font-size: 14px;
  line-height: 22px;
  white-space: pre-wrap;
  animation: ${appear} 0.25s ease-out both;

  ${({ $isUser }) =>
    $isUser
      ? css`
          background: #f5f5f5;
          color: #000;
        `
      : css`
          background: #ffffff;
          color: #3a372f;
        `}
`;


const InputBar = styled.form`
  position: fixed;
  bottom: 0;
  width: 390px;
  height: 80px;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

const Input = styled.input`
  flex: 1;
  height: 48px;
  border-radius: 24px;
  border: none;
  padding: 0 16px;
  background: #f5f5f5;

  &:focus {
    background: #eeeeee;
  }
`;

const RecordBtn = styled.button`
  background: transparent;
  border: none;
  margin-left: 12px;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
  }
`;


const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const EndButton = styled.button`
  display: flex;
  height: 34px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  border: 1px solid #f1f1f1;
  background: #ffffff;
  cursor: pointer;
`;

const Dim = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9990;
`;

const Modal = styled.div`
  width: 320px;
  border-radius: 16px;
  padding: 20px 20px 16px;
  background: #ffffff;
  text-align: center;
`;

const ModalTitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 8px;
`;

const ModalDesc = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`;

const BtnRow = styled.div`
  display: flex;
  gap: 8px;
`;

const CancelBtn = styled.button`
  flex: 1;
  height: 48px;
  background: #f1f1f1;
  border-radius: 24px;
  border: none;
  color: #7a7a7a;
  font-size: 16px;
`;

const DeleteBtn = styled.button`
  flex: 1;
  height: 48px;
  background: #ffd342;
  border-radius: 24px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
`;
