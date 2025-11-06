
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BottomBar from "../../components/Bottom.jsx";

const GROUP_BANNER = "/img/ai_story/mystory.svg";
const SAMPLE_THUMB = "/img/ai_story/sample.svg";
const MAGIC_PEN = "/img/ai_story/magicpen.svg";

const BAR_HEIGHT = 80;  
const FAB_GAP = 20;        
const CONTENT_BOTTOM_PAD = BAR_HEIGHT + 60; 

const Storymain = () => {
  const [activeId, setActiveId] = useState(null);
  const navigate = useNavigate();

  const parentStories = [
    { id: 1, title: "강아지 산책의 비밀", createdAt: "25.10.27", min: "4", img: SAMPLE_THUMB },
    { id: 2, title: "빨간모자", createdAt: "25.10.25", min: "3", img: SAMPLE_THUMB },
    { id: 3, title: "거위와 금알", createdAt: "25.10.28", min: "5", img: SAMPLE_THUMB },
    { id: 4, title: "잠자는 숲속의 아이", createdAt: "25.10.22", min: "4", img: SAMPLE_THUMB },
    { id: 5, title: "빨강오리", createdAt: "25.10.20", min: "4", img: SAMPLE_THUMB },
    { id: 6, title: "아기와 사자", createdAt: "25.10.18", min: "3", img: SAMPLE_THUMB },
  ];

  const childStories = [
    { id: 7, title: "토끼와 거북이", createdAt: "25.10.27", min: "4", img: SAMPLE_THUMB },
    { id: 8, title: "신데렐라", createdAt: "25.10.26", min: "5", img: SAMPLE_THUMB },
    { id: 9, title: "미운 오리 새끼", createdAt: "25.10.25", min: "3", img: SAMPLE_THUMB },
    { id: 10, title: "잠자는 숲속의 공주", createdAt: "25.10.24", min: "4", img: SAMPLE_THUMB },
    { id: 11, title: "헨젤과 그레텔", createdAt: "25.10.23", min: "5", img: SAMPLE_THUMB },
    { id: 12, title: "개구리 왕자", createdAt: "25.10.22", min: "3", img: SAMPLE_THUMB },
  ];

  const handleCardClick = (id) => {
    setActiveId(id === activeId ? null : id);
  };

  const goStep01 = () => navigate("/mystory/ai_story/step01");

  return (
    <Screen>
      <Title>나의 동화</Title>

      {/*스크롤 되는 영역*/}
      <Content>
        <BannerBox onClick={goStep01}>
          <BannerImg src={GROUP_BANNER} alt="AI로 만드는 우리 가족 동화" />
        </BannerBox>

        <Section>
          <SectionTitle>부모의 에피소드를 아이에게</SectionTitle>
          <BookGrid>
            {parentStories.map((book) => (
              <BookCard key={book.id} onClick={() => handleCardClick(book.id)}>
                <BookWrapper>
                  <Thumb src={book.img} alt={book.title} />
                  {activeId === book.id && (
                    <OptionCard>
                      <CloseBtn onClick={(e) => { e.stopPropagation(); setActiveId(null); }}>×</CloseBtn>
                      <Option>재생하기</Option>
                      <Option>스크립트 보기</Option>
                      <Option>삭제하기</Option>
                    </OptionCard>
                  )}
                </BookWrapper>
                <CardTitle>{book.title}</CardTitle>
                <ViewMin>
                  <Icon src="/img/setting_voice/edit.svg" alt="작성 아이콘" />
                  {book.createdAt}
                  <Separator>|</Separator>
                  약 {book.min}분
                </ViewMin>
              </BookCard>
            ))}
          </BookGrid>
        </Section>

        <Section style={{ marginTop: 50 }}>
          <SectionTitle>우리 아이가 다시 쓴 명작 동화</SectionTitle>
          <BookGrid>
            {childStories.map((book) => (
              <BookCard key={book.id} onClick={() => handleCardClick(book.id)}>
                <BookWrapper>
                  <Thumb src={book.img} alt={book.title} />
                  {activeId === book.id && (
                    <OptionCard>
                      <CloseBtn onClick={(e) => { e.stopPropagation(); setActiveId(null); }}>×</CloseBtn>
                      <Option>재생하기</Option>
                      <Option>스크립트 보기</Option>
                      <Option>삭제하기</Option>
                    </OptionCard>
                  )}
                </BookWrapper>
                <CardTitle>{book.title}</CardTitle>
                <ViewMin>
                  <Icon src="/img/setting_voice/edit.svg" alt="작성 아이콘" />
                  {book.createdAt}
                  <Separator>|</Separator>
                  약 {book.min}분
                </ViewMin>
              </BookCard>
            ))}
          </BookGrid>
        </Section>
      </Content>

      <Fab onClick={goStep01}>
        <img src={MAGIC_PEN} alt="동화 만들기" />
        <span>동화 만들기</span>
      </Fab>

      <FixedBottomWrap>
        <BottomBar />
      </FixedBottomWrap>
    </Screen>
  );
};

export default Storymain;


//스타일 컴포넌트
const Screen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;         /* PageWrapper 내부에서 꽉 채움 */
  background: #fff;
  position: relative;
`;

const Title = styled.div`
  display: flex;
  padding: 16px 134px 16px 16px;
  align-items: center;
  align-self: stretch;

  color: var(--color-text-primary, #393939);
  font-family: NanumSquareRound;
  font-size: 24px;
  font-weight: 800;
  line-height: 32px;
`;

//스크롤
const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 12px ${CONTENT_BOTTOM_PAD}px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }
`;

//배너
const BannerBox = styled.div`
  width: 100%;
  margin-bottom: 50px;
  cursor: pointer;
`;
const BannerImg = styled.img`
  width: 100%;
  border-radius: 8px;
  display: block;
`;


const Section = styled.div`
  margin-bottom: 36px;
`;
const SectionTitle = styled.div`
  color: #342e29;
  font-family: NanumSquareRound;
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 16px;
`;


const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  justify-items: center;
`;


const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:active { transform: scale(0.98); }
`;

const BookWrapper = styled.div`
  position: relative;
  width: 110px;
  height: 154px;
  border-radius: 12px;
  border: 0.5px solid #dedede;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: white;
`;
const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CardTitle = styled.div`
  color: #3a372f;
  font-family: NanumSquareRound;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  margin-top: 8px;
`;
const ViewMin = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: #bbb;
  font-size: 10px;
  line-height: 14px;
  font-weight: 400;
  margin-top: 4px;
`;
const Icon = styled.img`
  width: 10px;
  height: 10px;
  display: block;
`;
const Separator = styled.span`
  color: #dedede;
  margin: 0 3px;
`;

const OptionCard = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 110px; height: 154px;
  border-radius: 12px;
  background: url("/icons/click-card.svg") center / cover no-repeat;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  color: #fff; font-weight: 800;
`;
const Option = styled.div`
  font-size: 12px; margin: 6px 0; cursor: pointer; transition: 0.2s;
  &:hover { transform: scale(1.05); }
`;
const CloseBtn = styled.div`
  position: absolute; top: 6px; right: 10px; font-size: 18px; cursor: pointer;
`;

//플로깅 버튼
const Fab = styled.button`
  position: fixed;
  right: 16px;
  bottom: ${BAR_HEIGHT + FAB_GAP}px;
  display: flex;
  height: 48px;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 999px;
  background: var(--color-bg-inverse-bold, #342E29);
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(0,0,0,0.18);
  img { width: 20px; height: 20px; }
  span {
    color: var(--color-text-interactive-inverse, #FFF);
    font-family: NanumSquareRound;
    font-size: 16px; font-weight: 800; line-height: 24px;
  }
`;

//공통 buttom, 고정
const FixedBottomWrap = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 390px;    
  z-index: 1000;
`;
