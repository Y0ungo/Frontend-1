import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from 'react-router-dom'; // Navigate 제거
import styled from 'styled-components';

//공통 컴포넌트
import Button from './components/Button.jsx';
import Header from './components/Header.jsx';
import BottomBar from './components/Bottom.jsx';

//공통 컴포넌트 확인용
import Home from './pages/pages.jsx';
import OnboardingIntro from './pages/onboarding/main.jsx'; //온보딩 첫 화면
import OnboardingStep01 from './pages/onboarding/step_01.jsx'; // 온보딩 두번째
import OnboardingStep02 from './pages/onboarding/step_02.jsx'; // 온보딩 세번째
import OnboardingStep03 from './pages/onboarding/step_03.jsx'; // 온보딩 네번째
import OnboardingStep04 from './pages/onboarding/step_04.jsx'; // 온보딩 다섯번째
import OnboardingStep05 from './pages/onboarding/step_05.jsx'; // 온보딩 여섯번째
import Onboardingend from './pages/onboarding/end.jsx'; // 온보딩 끝
import VoiceSettingMain from './pages/setting_voice/main.jsx'; //목소리 세팅

function App() {
  return (
    <Root>
      <PageWrapper>
        <Router> 
          <Routes>
            <Route path="/home" element={<PageWrapper orientation="portrait"><Home /></PageWrapper>} />
            {/* <Route path="/" element={<PageWrapper orientation="portrait"><LoginPage /></PageWrapper>}/> */}

            {/* 온보딩 페이지 */}
            <Route path="/onboarding" element={<PageWrapper orientation="portrait"><OnboardingIntro /></PageWrapper>} />
            <Route path="/onboarding/step_01" element={<PageWrapper orientation="portrait"><OnboardingStep01 /></PageWrapper>} />
            <Route path="/onboarding/step_02" element={<PageWrapper orientation="portrait"><OnboardingStep02 /></PageWrapper>} />
            <Route path="/onboarding/step_03" element={<PageWrapper orientation="portrait"><OnboardingStep03 /></PageWrapper>} />
            <Route path="/onboarding/step_04" element={<PageWrapper orientation="portrait"><OnboardingStep04 /></PageWrapper>} />
            <Route path="/onboarding/step_05" element={<PageWrapper orientation="portrait"><OnboardingStep05 /></PageWrapper>} />
            <Route path="/onboarding/end" element={<PageWrapper orientation="portrait"><Onboardingend /></PageWrapper>} />
            {/* 목소리 세팅 페이지 */}
            <Route path="/mypage/voice_set/main" element={<PageWrapper orientation="portrait"><VoiceSettingMain /></PageWrapper>} />
          </Routes>
        </Router>
      </PageWrapper>
    </Root>
  );
}

export default App;

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;  
  background-color: #f5f5f5;
`;

// PageWrapper: 페이지 중앙 고정 + 세로/가로 모드
const PageWrapper = styled.div`
  width: ${props => props.orientation === 'landscape' ? '844px' : '390px'};
  height: ${props => props.orientation === 'landscape' ? '390px' : '898px'};
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  overflow: hidden;
`;
