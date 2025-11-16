import React from "react";
import styled from "styled-components";
import Header from "../../components/Header.jsx";
import { useNavigate } from "react-router-dom";

const LION = "/img/end_rewrite/lion.svg";
const STAR_Y = "/img/end_rewrite/star_yellow.svg";
const STAR_P = "/img/end_rewrite/purple_star.svg";
const STAR_O = "/img/end_rewrite/org_star.svg";
const PENCIL = "/img/end_rewrite/pencil.svg";
const PIGTAIL = "/img/end_rewrite/pigtail.svg";
const BOOK = "/img/end_rewrite/book.svg";

const MIC_BUTTON = "/img/end_rewrite/record.svg";

const Endwritemain = () => {
  const navigate = useNavigate();

  return (
    <Screen>
      <Header title="" showBack={true} onBack={() => navigate(-1)} />

      <DecorWrapper>
        <StarYellow />
        <StarPurple />
        <StarOrange />
        <Pencil />
        <Pigtail />
        <BookDeco />
      </DecorWrapper>

      <Content>
        <Character src={LION} alt="캐릭터" />

        <TextGroup>
          <Line1>안녕, 000!</Line1>
          <Line2>
            <Highlight>신데렐라</Highlight> 동화에 대해
            <br />
            같이 이야기해볼까?
          </Line2>
        </TextGroup>
      </Content>

      {/*반원*/}
      <ArcArea>
        <Arc />
        <HintText>
          버튼을 눌러 <br /> 대화를 시작해보세요
        </HintText>

        <MicButton type="button" onClick={() => navigate("/rewrite_end/step01")}>
          <img src={MIC_BUTTON} alt="녹음 버튼" />
        </MicButton>
      </ArcArea>
    </Screen>
  );
};

export default Endwritemain;


const Screen = styled.div`
  position: relative;
  width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background: #ffffff;
`;

const DecorWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StarYellow = styled.img.attrs({ src: STAR_Y })`
  position: absolute;
  width: 20px;
  height: 100px;
  left: 119px;
  top: 70px; /* 50px 아래 */
`;

const StarPurple = styled.img.attrs({ src: STAR_P })`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 303px;
  top: 310px;
`;

const StarOrange = styled.img.attrs({ src: STAR_O })`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 51px;
  top: 450px;
`;

const Pencil = styled.img.attrs({ src: PENCIL })`
  position: absolute;
  width: 60px;
  height: 45px;
  left: 55.484px;
  top: 260px; /* 20px 아래 */
`;

const BookDeco = styled.img.attrs({ src: BOOK })`
  position: absolute;
  width: 80px;
  height: 70px;
  left: 290px;
  top: 430px; /* 40px 아래 */
  transform: rotate(-10deg);
`;

const Pigtail = styled.img.attrs({ src: PIGTAIL })`
  position: absolute;
  width: 50px;
  height: 40px;
  right: 64.803px;
  top: 130px; /* 60px 아래 */
  transform: rotate(350deg);
`;

const Content = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const Character = styled.img`
  width: 138px;
  height: auto;
  margin-bottom: 20px;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Line1 = styled.h2`
  color: #fbf4e3;
  -webkit-text-stroke: 1px #105a6e;
  font-size: 24px;
  font-weight: 700;
  font-family: "SOYO Maple";
`;

const Line2 = styled.p`
  color: #fbf4e3;
  -webkit-text-stroke: 1px #105a6e;
  font-size: 24px;
  font-weight: 700;
  font-family: "SOYO Maple";
  line-height: 34px;
`;

const Highlight = styled.span`
  color: #72cacb;
`;


const ArcArea = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  flex-shrink: 0;
`;

const Arc = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #fff8e3;
  border-top-left-radius: 90% 50%;
  border-top-right-radius: 90% 50%;
`;

const MicButton = styled.button`
  position: absolute;
  bottom: 140px;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 64px;
  background: transparent;
  border: none;
`;

const HintText = styled.p`
  position: absolute;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: #bbb;
  text-align: center;
  font-family: "NanumSquareRound";
  line-height: 18px;
`;
