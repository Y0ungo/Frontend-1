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

function App() {
  return (
    <Root>
      <PageWrapper>
        <Router> 
          <Routes>
            <Route path="/home" element={<PageWrapper orientation="portrait"><Home /></PageWrapper>} />
            {/* <Route path="/" element={<PageWrapper orientation="portrait"><LoginPage /></PageWrapper>}/> */}

            {/* 온보딩 페이지 추가 */}
            <Route path="/onboarding" element={<PageWrapper orientation="portrait"><OnboardingIntro /></PageWrapper>} />
            <Route path="/onboarding/step_01" element={<PageWrapper orientation="portrait"><OnboardingStep01 /></PageWrapper>} />
            <Route path="/onboarding/step_02" element={<PageWrapper orientation="portrait"><OnboardingStep02 /></PageWrapper>} />
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
