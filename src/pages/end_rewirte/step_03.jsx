import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header.jsx";

// === 이미지 경로 ===
const PROFILE = "/img/end_rewrite/profile.svg";
const RECORD = "/img/end_rewrite/yellow_rec.svg";

const Endwritestep03 = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { sender: "bot", text: "신데렐라 동화에서 가장 좋아했던 캐릭터가 뭐야?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef(null); // 스크롤 참조용

  // ✅ 메시지 추가 시 자동 스크롤
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✅ 사용자 입력 후 메시지 추가
  const handleSend = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const userMsg = { sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    // ✅ 더미 챗봇 응답 (1초 후)
    setTimeout(() => {
      const botReply = { sender: "bot", text: "챗봇 답변입니다. 대화 내용입니다." };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <Screen>
      {/* 상단 헤더 */}
      <Header
        title="채팅"
        showBack={false}
        action={{
          text: "×",
          handler: () => navigate("/rewrite_end"),
        }}
      />

      {/* 채팅 메시지 영역 */}
      <ChatContainer>
        {messages.map((msg, idx) => (
          <MessageRow key={idx} $isUser={msg.sender === "user"}>
            {msg.sender === "bot" && <ProfileIcon src={PROFILE} alt="profile" />}
            <MessageBubble $isUser={msg.sender === "user"}>{msg.text}</MessageBubble>
          </MessageRow>
        ))}
        <div ref={chatEndRef} /> {/* ✅ 자동 스크롤 기준점 */}
      </ChatContainer>

      {/* 하단 입력창 */}
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

//
// ============ 스타일 정의 ============
//

const Screen = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #ffffff;
  overflow: hidden;
`;

// 채팅 영역 (자동 스크롤)
const ChatContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px 100px; /* 인풋창 높이만큼 패딩 */
  display: flex;
  flex-direction: column;
  gap: 14px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

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
  max-width: 240px;
  padding: 12px 16px;
  border-radius: 14px;
  line-height: 22px;
  font-size: 14px;
  font-family: "NanumSquareRound";
  ${({ $isUser }) =>
    $isUser
      ? `
        background: #F5F5F5;
        color: #000;
      `
      : `
        background: #FFF;
        color: #3A372F;
        border: 1px solid #EEE;
      `}
`;

// 인풋 바 (고정)
const InputBar = styled.form`
  position: fixed;
  bottom: 0;
  width: 390px;
  height: 80px;
  background: #ffffff;
  border-top: 1px solid #eee;
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
  }
`;
