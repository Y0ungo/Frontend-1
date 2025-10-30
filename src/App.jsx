import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from 'react-router-dom'; // Navigate 제거
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle.jsx';

//공통 컴포넌트
import Button from './components/Button.jsx';
import Header from './components/Header.jsx';
import BottomBar from './components/Bottom.jsx';

//공통 컴포넌트 확인용
import OnboardingIntro from './pages/onboarding/main.jsx'; //온보딩 첫 화면
import OnboardingStep01 from './pages/onboarding/step_01.jsx'; // 온보딩 두번째
import OnboardingStep02 from './pages/onboarding/step_02.jsx'; // 온보딩 세번째
import OnboardingStep03 from './pages/onboarding/step_03.jsx'; // 온보딩 네번째
import OnboardingStep04 from './pages/onboarding/step_04.jsx'; // 온보딩 다섯번째
import OnboardingStep05 from './pages/onboarding/step_05.jsx'; // 온보딩 여섯번째
import Onboardingend from './pages/onboarding/end.jsx'; // 온보딩 끝
import Signup from './pages/signup/signup.jsx'; // 회원가입
import SignupAgree from './pages/signup/signup-agree.jsx'; // 약관 설명 페이지
import Login from './pages/login/login.jsx'; // 로그인 페이지
import Intro from './pages/intro/intro.jsx'; // 인트로 페이지
import Splash from './pages/intro/splash.jsx'; // 로고 띄우는 페이지
import Home from './pages/home/home.jsx'; // 홈 페이지
import Mylib from './pages/mylib/mylib.jsx'; // 내 서재 페이지
import Script from './pages/mylib/mylib-script.jsx'; // 내 서재와 연결되는 스크립트 페이지
import Mypage from './pages/mypage/mypage.jsx'; // 마이 페이지
import Profile from './pages/mypage/mypage-profile.jsx'; //프로필 편집 페이지
import MypageKid from './pages/mypage/mypage-kid.jsx'; // 아이 정보 페이지
import KidRegister from './pages/mypage/mypage-kid-register.jsx'; // 아이 정보 등록 페이지

function App() {
  return (
    <Root>
      <GlobalStyle />
      <PageWrapper>
        <Router> 
          <Routes>
            {/* <Route path="/" element={<PageWrapper orientation="portrait"><LoginPage /></PageWrapper>}/> */}

            {/* 온보딩 페이지 추가 */}
            <Route path="/onboarding" element={<PageWrapper orientation="portrait"><OnboardingIntro /></PageWrapper>} />
            <Route path="/onboarding/step_01" element={<PageWrapper orientation="portrait"><OnboardingStep01 /></PageWrapper>} />
            <Route path="/onboarding/step_02" element={<PageWrapper orientation="portrait"><OnboardingStep02 /></PageWrapper>} />
            <Route path="/onboarding/step_03" element={<PageWrapper orientation="portrait"><OnboardingStep03 /></PageWrapper>} />
            <Route path="/onboarding/step_04" element={<PageWrapper orientation="portrait"><OnboardingStep04 /></PageWrapper>} />
            <Route path="/onboarding/step_05" element={<PageWrapper orientation="portrait"><OnboardingStep05 /></PageWrapper>} />
            <Route path="/onboarding/end" element={<PageWrapper orientation="portrait"><Onboardingend /></PageWrapper>} />
            {/* 회원가입 페이지 */}
            <Route path="/signup" element={<PageWrapper orientation="portrait"><Signup /></PageWrapper>} />
            <Route path="/signup/agree/:type" element={<PageWrapper orientation="portrait"><SignupAgree /></PageWrapper>} />
            {/* 로그인 페이지 */}
            <Route path='/login' element={<PageWrapper orientation="portrait"><Login /></PageWrapper>} />
            {/* 인트로 페이지 */}
            <Route path='/intro' element={<PageWrapper orientation="portrait"><Intro /></PageWrapper>} />
            <Route path='/splash' element={<PageWrapper orientation="portrait"><Splash /></PageWrapper>} />
            {/* 홈 페이지 */}
            <Route path="/home" element={<PageWrapper orientation="portrait"><Home /></PageWrapper>} />
            {/* 내 서재 페이지 */}
            <Route path='/mylib' element={<PageWrapper orientation="portrait"><Mylib /></PageWrapper>} />
            <Route path='/mylib-script/:bookId' element={<PageWrapper orientation="portrait"><Script /></PageWrapper>} />
            {/* 마이 페이지 */}
            <Route path='/mypage' element={<PageWrapper orientation="portrait"><Mypage /></PageWrapper>} />
            <Route path='/mypage-profile' element={<PageWrapper orientation="portrait"><Profile /></PageWrapper>} />
            <Route path='/mypage-kid' element={<PageWrapper orientation="portrait"><MypageKid /></PageWrapper>} />
            <Route path='/mypage-kid-register' element={<PageWrapper orientation="portrait"><KidRegister /></PageWrapper>} />
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
  height: ${props => props.orientation === 'landscape' ? '390px' : '852px'};
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  overflow: hidden;
`;
