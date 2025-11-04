import React from "react";
import styled from "styled-components";
import Header from "../../components/Header.jsx";
import { useNavigate } from "react-router-dom";

const CHARACTER = "/img/end_rewrite/elephant.svg";
const Play_ICON = "/img/end_rewrite/yellow_plat.svg";
const FLOWER = "/img/end_rewrite/flower.svg";
const DECO = "/img/end_rewrite/deco.svg";
const MINI_HOME = "/img/end_rewrite/mini_home.svg";

const Endwritestep04 = () => {
  const navigate = useNavigate();

  return (
    <Screen>
      <Header
  title=""
  showBack={true}
  onBack={() => navigate(-1)}
/>


      {/* 배경 */}
      <Flower src={FLOWER} alt="꽃 장식" />
      <Deco src={DECO} alt="데코" />
      <MiniHome src={MINI_HOME} alt="집 아이콘" />

      {/* 중앙 */}
      <Content>
        <Character src={CHARACTER} alt="코끼리 캐릭터" />
        <TextGroup>
          <Line1>스토니가 쓴</Line1>
          <Line2>
            <Highlight>신데렐라</Highlight> 동화가
            <br />
            완성되었어!
          </Line2>
        </TextGroup>
      </Content>

      {/*하단 반원*/}
      <ArcArea>
        <Arc />
        <HintText>버튼을 눌러<br/>동화를 시작해보세요</HintText>
        <PlayButton type="button" onClick={() => navigate("/rewrite_end/step01")}> 
          {/* 📌📌📌 제작 동화 1-1로 라우터 수정 필요 */}
          <img src={Play_ICON} alt="녹음 버튼" />
        </PlayButton>
      </ArcArea>
    </Screen>
  );
};

export default Endwritestep04;


const Screen = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

// 중앙
const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  margin-top: 105px;
`;

// 코끼리
const Character = styled.img`
  width: 138px;
  height: 106px;
  aspect-ratio: 69 / 53;
  user-select: none;
  pointer-events: none;
  margin-bottom: 36px;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

/* 텍스트 */
const Line1 = styled.h2`
  color: #fbf4e3;
  text-align: center;
  -webkit-text-stroke-width: 1.25px;
  -webkit-text-stroke-color: #105a6e;
  font-family: "SOYO Maple";
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 1.44px;
`;

const Line2 = styled.p`
  color: #fbf4e3;
  text-align: center;
  -webkit-text-stroke-width: 1.25px;
  -webkit-text-stroke-color: #105a6e;
  font-family: "SOYO Maple";
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 1.44px;
`;

const Highlight = styled.span`
  color: var(--color-teal-500, #72cacb);
  font-family: "SOYO Maple";
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 1.44px;
`;

const ArcArea = styled.div`
  position: relative;
  width: 390px;
  height: 330px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Arc = styled.div`
  position: absolute;
  inset: 0;
  background: #FFF8E3;
  border-top-left-radius: 90% 50%;
  border-top-right-radius: 90% 50%;
`;

const PlayButton = styled.button`
  position: absolute;
  bottom: 170px;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 64px;
  padding: 0;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const HintText = styled.p`
  position: absolute;
  bottom: 120px; 
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-text-tertiary, #bbb);
  text-align: center;
  font-family: "NanumSquareRound";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
`;

const Flower = styled.img`
  position: absolute;
  top: 250px; 
  right: 65px;
  width: 36px;
  height: 38px;
  flex-shrink: 0;
  aspect-ratio: 18/19;
`;

const Deco = styled.img`
  position: absolute;
  bottom: 360px; 
  left: 40px; 
  width: 36px;
  height: 22px;
  transform: rotate(24deg);
  flex-shrink: 0;
  aspect-ratio: 18/11;
`;

const MiniHome = styled.img`
  position: absolute;
  top: 430px; 
  right: 45px;
  width: 32px;
  height: 32px;
  transform: rotate(-14.704deg);
  flex-shrink: 0;
`;
