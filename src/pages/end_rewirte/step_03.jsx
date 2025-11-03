import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header.jsx";

const PROFILE = "/img/end_rewrite/profile.svg";
const RECORD = "/img/end_rewrite/yellow_rec.svg";

const Endwritestep03 = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { sender: "bot", text: "신데렐라 동화에서 가장 좋아했던 캐릭터가 뭐야?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef(null); // 자동 스크롤

  //자동 스크롤
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 메시지 전송
  const handleSend = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const userMsg = { sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    //더미 챗봇 응답
    setTimeout(() => {
      const botReply = {
        sender: "bot",
        text: "그렇구나! 신데렐라의 이야기는 언제 들어도 재밌지. 혹시 신데렐라의 결말을 바꾼다면 어떻게 해보고 싶어?",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <Screen>
      {/* 상단 헤더 */}
      <Header title="채팅" showBack={false} />
      <CloseBtn onClick={() => navigate("/rewrite_end")}>×</CloseBtn>

      {/* 채팅 영역 */}
      <ChatContainer>
        {messages.map((msg, idx) => (
          <MessageRow key={idx} $isUser={msg.sender === "user"}>
            {msg.sender === "bot" && <ProfileIcon src={PROFILE} alt="profile" />}
            <MessageBubble $isUser={msg.sender === "user"}>
              {msg.text}
            </MessageBubble>
          </MessageRow>
        ))}
        <div ref={chatEndRef} />
      </ChatContainer>

      {/* 인풋 바 */}
      <InputBar onSubmit={handleSend}>
        <Input
          type="text"
          placeholder="Your message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <RecordBtn type="submit">
          <img src={RECORD} alt="녹음 버튼" />
        </RecordBtn>
      </InputBar>
    </Screen>
  );
};

export default Endwritestep03;

//스타일 컴포넌트

// 말풍선 등장 애니메이션
const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(6px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
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
  font-size: 28px;
  color: #342e29;
  background: transparent;
  border: none;
  cursor: pointer;
`;

// 채팅 메시지 컨테이너
const ChatContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px 100px; /* 인풋창 여백 확보 */
  display: flex;
  flex-direction: column;
  gap: 14px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

// 메시지
const MessageRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  ${({ $isUser }) =>
    $isUser &&
    `
    justify-content: flex-end;
  `}
`;

const ProfileIcon = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

const MessageBubble = styled.div`
  max-width: 260px;
  padding: 12px 16px;
  border-radius: 14px;
  line-height: 22px;
  font-size: 14px;
  font-family: "NanumSquareRound";
  white-space: pre-wrap;
  word-break: break-word;
  animation: ${appear} 0.25s ease-out both;

  ${({ $isUser }) =>
    $isUser
      ? css`
          background: #f5f5f5;
          color: #000;
          align-self: flex-end;
        `
      : css`
          background: #ffffff;
          color: #3a372f;
          border: none;
          align-self: flex-start;
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
  box-sizing: border-box;
  z-index: 10;
`;

const Input = styled.input`
  flex: 1;
  height: 48px;
  border-radius: 24px;
  border: none;
  background: #f5f5f5;
  padding: 0 16px;
  font-family: "NanumSquareRound";
  font-size: 14px;
  color: #3a372f;
  outline: none;
  transition: background 0.2s ease;

  &:focus {
    background: #f0f0f0;
  }

  &::placeholder {
    color: #b0b0b0;
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
    transition: transform 0.15s ease;
  }

  &:active img {
    transform: scale(0.95);
  }
`;
