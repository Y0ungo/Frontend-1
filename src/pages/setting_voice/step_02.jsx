import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header.jsx';
import Button from '../../components/Button.jsx';

const ICON_RECORDING = '/img/onboarding/recording.svg';
const ICON_RECORD11  = '/img/onboarding/Record11.svg';
const ICON_PAUSE     = '/img/onboarding/record_pause.svg';
const ICON_RESTART   = '/img/onboarding/restart.svg';
const ICON_DONE      = '/img/onboarding/done.svg';

const VoiceSetStep02 = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleMicClick = () => {
    if (status === 'idle') setStatus('recording');
    else if (status === 'recording') setStatus('paused');
    else setStatus('idle');
  };

  const statusIcon = status === 'idle' ? ICON_RECORDING
                    : status === 'recording' ? ICON_RECORD11
                    : ICON_PAUSE;

  const renderArcTexts = () => {
    if (status === 'recording') {
      return <ArcText>10초 내에 가이드 문장을 읽어주세요.</ArcText>;
    }
    if (status === 'paused') {
      return <ArcText>내가 방금 녹음한 목소리를 들어보세요.</ArcText>;
    }
    return (
      <>
        <ArcText>조용한 곳에서 또박또박 말씀해주세요.</ArcText>
        <ArcText>반드시 가이드 문장과 동일하게 녹음해야 해요.</ArcText>
      </>
    );
  };

  return (
    <Screen>
      <Header
        title="목소리 설정"
        showBack={true}
        onBack={() => navigate(-1)}
        action={{ text: '건너뛰기', handler: () => setOpen(true) }}
      />

      <Content>
        {/* 가이드 문장 묶음 */}
        <GuideWrap>
          <Badge>가이드 문장</Badge>
          <Quote>
            “이게 뭐지? 작은 상자 안엔
            <br />
            반짝이는 돌이 들어 있었어요.
            <br />
            누가 여기다 두고 간 걸까?”
          </Quote>
        </GuideWrap>

        <Spacer />

        {/* 하단 반원 영역 */}
        <ArcArea>
          <Arc />
          <ArcTexts>{renderArcTexts()}</ArcTexts>

          {/* 상태별 컨트롤 */}
          {status !== 'paused' ? (
            <MicButton type="button" onClick={handleMicClick} aria-label="녹음 컨트롤">
              <img src={statusIcon} alt="" width="64" height="64" />
            </MicButton>
          ) : (
            <ControlRow>
              <IconBtn type="button" aria-label="다시 녹음" onClick={() => setStatus('recording')}>
                <img src={ICON_RESTART} alt="" width="64" height="64" />
              </IconBtn>

              <IconBtn type="button" aria-label="일시정지" onClick={handleMicClick}>
                <img src={ICON_PAUSE} alt="" width="64" height="64" />
              </IconBtn>

              <IconBtn type="button" aria-label="완료" onClick={() => navigate('/mypage/voice_set/step03')}>
                <img src={ICON_DONE} alt="" width="64" height="64" />
              </IconBtn>
            </ControlRow>
          )}
        </ArcArea>
      </Content>

      {/* 모달창 (VoiceSetStep03 동일 디자인 적용) */}
      {open && (
        <Dim onClick={() => setOpen(false)}>
          <Modal role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <ModalTitle>목소리 설정을 건너뛰시겠습니까?</ModalTitle>
            <ModalDesc>
              지금까지 입력한 정보는 저장되지 않으며,
              <br />
              기본 음성으로 동화가 재생돼요.
            </ModalDesc>

            <BtnRow>
              <CancelBtn onClick={() => { setOpen(false); navigate('/home'); }}>
                나가기
              </CancelBtn>
              <DeleteBtn onClick={() => setOpen(false)}>
                이어서 설정
              </DeleteBtn>
            </BtnRow>
          </Modal>
        </Dim>
      )}
    </Screen>
  );
};

export default VoiceSetStep02;

//스타일 컴포넌트
const Screen = styled.div`
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

/* 가이드 문장 */
const GuideWrap = styled.div`
  display: flex;
  margin-top: 90px;
  width: 239px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  background: #ffd342;
  color: #fff;
  font-size: 12px;
  font-family: NanumSquareRound;
  font-weight: 800;
`;

const Quote = styled.p`
  margin: 0;
  text-align: center;
  color: #3a372f;
  font-size: 20px;
  font-family: NanumSquareRound;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.02em;
`;

const Spacer = styled.div`
  flex: 1;
`;

const ArcArea = styled.div`
  position: relative;
  width: 390px;
  height: 330px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

/* 노란 반원 */
const Arc = styled.div`
  position: absolute;
  inset: 0;
  background: #fff5d2;
  border-top-left-radius: 40% 40%;
  border-top-right-radius: 40% 40%;
`;

/* 반원 안 텍스트 */
const ArcTexts = styled.div`
  position: absolute;
  bottom: 176px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 320px;
  text-align: center;
`;

const ArcText = styled.div`
  color: var(--color-text-interactive-secondary-hovered, #736A64);
  text-align: center;
  font-family: 'NanumSquareRound';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

const MicButton = styled.button`
  position: absolute;
  bottom: 80px;
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

const ControlRow = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const IconBtn = styled.button`
  width: 64px;
  height: 64px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
`;

//모달창 스타일
const Dim = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 1000;
`;

const Modal = styled.div`
  display: flex;
  width: 320px;
  max-width: var(--Large-Sizes-sm, 384px);
  flex-direction: column;
  align-items: center;
  border-radius: var(--border-radius-2xl, 16px);
  background: var(--bg-panel, #fff);
  box-shadow: 0 0 1px 0 rgba(24, 24, 27, 0.3),
              0 8px 16px 0 rgba(24, 24, 27, 0.1);
  padding: 20px;
  text-align: center;
`;

const ModalTitle = styled.h3`
  margin: 6px 0 8px;
  color: #3a372f;
  font-size: 20px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: -0.01em;
  text-align: center;
`;

const ModalDesc = styled.p`
  margin: 0 0 16px;
  color: #7a7a7a;
  font-size: 14px;
  font-family: NanumSquareRound;
  line-height: 22px;
  width: 100%;
  max-width: 272px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const BtnRow = styled.div`
  margin-top: 8px;
  margin-bottom: 4px;
  display: flex;
  gap: 8px;
`;

const CancelBtn = styled.button`
  width: 132px;
  height: 48px;
  border: none;
  border-radius: 24px;
  background: #f1f1f1;
  color: #7a7a7a;
  font-family: NanumSquareRound;
  font-size: 16px;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  width: 132px;
  height: 48px;
  border: none;
  border-radius: 24px;
  background: #ffd342;
  color: #fff;
  font-family: NanumSquareRound;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;
