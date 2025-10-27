import styled from 'styled-components';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function Intro() {
    const navigate = useNavigate();

    return (
        <IntroWrapper>
        <Logo><img src='/icons/logo_intro.svg' /></Logo>

        <Button
        $height='48px'
        $width='220px'
        $bgColor='#FFF8E3'
        $color='#342E29'
        onClick={() => navigate('/login')}
        >
        로그인
        </Button>

        <Button
        $height='48px'
        $width='220px'
        $bgColor='#F1F1F1'
        $color='#7A7A7A'
        onClick={() => navigate('/signup')}
        >
        회원가입
        </Button>

        </IntroWrapper>
    );
}

export default Intro;

const IntroWrapper = styled.div`
    width: 390px;
    height: 852px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

const Logo = styled.div`
    margin-bottom:56px;
`