import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, matchPath } from 'react-router-dom';
import styled from 'styled-components';

//공통 컴포넌트
import Button from './components/Button.jsx';
import Header from './components/Header.jsx';

//공통 컴포넌트 확인용
import Homepage from './pages/pages.jsx';

function App() {
  return (
    <Root>
      <PageWrapper>
        <Router> 
          <Routes>
            <Route path="/" element={<PageWrapper orientation="portrait"><Homepage /></PageWrapper>} />
            {/* <Route path="/" element={<PageWrapper orientation="portrait"><LoginPage /></PageWrapper>}/> */}
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