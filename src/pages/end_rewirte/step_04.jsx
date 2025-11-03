import React from "react";
import styled from "styled-components";
import Header from "../../components/Header.jsx";
import { useNavigate } from "react-router-dom";

const CHARACTER = "/img/end_rewrite/elephant.svg";
const play_icon = "/img/end_rewrite/yellow_plat.svg";
const FLOWER = "/img/end_rewrite/flower.svg";
const DECO = "/img/end_rewrite/deco.svg";
const MINI_HOME = "/img/end_rewrite/mini_home.svg";

const Endwritestep04 = () => {
    const navigate = useNavigate(); 
  return (
    <Screen>
      <Header title="" showBack={false} />

      {/*배경*/}
      <Flower src={FLOWER} alt="꽃 장식" />
      <Deco src={DECO} alt="데코" />
      <MiniHome src={MINI_HOME} alt="집 아이콘" />

      {/*중앙*/}
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

      {/*녹음*/}
      <BottomArea>
        <MicButton type="button" onClick={() => navigate('/rewrite_end/main')}> 
            {/* 라우터 수정 필요: 제작동화 1-1로 이동 */}
          <img src={play_icon} alt="녹음 버튼" />
        </MicButton>
        <HintText>
          버튼을 눌러
          <br />
          동화를 시작해보세요
        </HintText>
      </BottomArea>
    </Screen>
  );
};

export default Endwritestep04;

//스타일 컴포넌트

const Screen = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  overflow: hidden;
`;

//중앙
const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  margin-top: 105px;
`;

//코끼리
const Character = styled.img`
  width: 138px;
  height: 106px;
  aspect-ratio: 69 / 53;
  user-select: none;
  pointer-events: none;
  margin-bottom: 20px;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const Line1 = styled.h2`
  margin: 0;
  color: #fbf4e3;
  text-align: center;
  text-shadow: -1px -1px 0 #105a6e, 1px -1px 0 #105a6e,
    -1px 1px 0 #105a6e, 1px 1px 0 #105a6e;
  font-family: "SOYO Maple TTF";
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
`;

const Line2 = styled.p`
  margin: 0;
  color: #fbf4e3;
  text-align: center;
  text-shadow: -1px -1px 0 #105a6e, 1px -1px 0 #105a6e,
    -1px 1px 0 #105a6e, 1px 1px 0 #105a6e;
  font-family: "SOYO Maple TTF";
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
`;

const Highlight = styled.span`
  color: var(--color-teal-500, #72cacb);
  font-family: "SOYO Maple TTF";
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 2.4px;
`;

//녹음
const BottomArea = styled.div`
  position: absolute;
  bottom: 160px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MicButton = styled.button`
  background: transparent;
  border: none;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease;
  &:active {
    transform: scale(0.96);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const HintText = styled.p`
  color: var(--color-text-tertiary, #bbb);
  text-align: center;
  font-family: "NanumSquareRound";
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 12px;
`;

//배경
const Flower = styled.img`
  position: absolute;
  top: 90px;
  left: 75px;
  width: 36px;
  height: 38px;
  aspect-ratio: 18 / 19;
`;

const Deco = styled.img`
  position: absolute;
  bottom: 370px;
  left: 90px;
  width: 28px;
  height: 17px;
  aspect-ratio: 28 / 17;
`;

const MiniHome = styled.img`
  position: absolute;
  top: 295px;
  right: 55px;
  width: 28px;
  height: 30px;
  aspect-ratio: 16 / 17;
`;
