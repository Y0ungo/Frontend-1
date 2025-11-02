import Button from '../components/Button';
import Header from '../components/Header';
import BottomBar from '../components/Bottom';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <Header
        title="로그인"
        showBack={true}
        onBack={() => navigate(-1)}
        action={{ text: '건너뛰기' }}
      />
      <main>
        <Button>다음</Button>
      </main>
      <BottomBar />
    </>
  );
}

export default Homepage;