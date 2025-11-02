import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Splash() {
    const navigate = useNavigate();

    const logos = [
        '/icons/splash-logo-1.svg',
        '/icons/splash-logo-2.svg',
        '/icons/splash-logo-3.svg',
        '/icons/splash-logo-4.svg',
        '/icons/splash-logo-5.svg',
    ];

    const [currentLogo, setCurrentLogo] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLogo(prev => {
                if (prev === logos.length - 1) {
                    clearInterval(interval);
                    setTimeout(() => navigate('/intro'), 1000);
                    return prev;
                }
                return prev + 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <SplashWrapper>
            <SplashContent>
                <img src={logos[currentLogo]} />
            </SplashContent>
        </SplashWrapper>
    );
}

export default Splash;

const SplashWrapper = styled.div`
    width: 393px;
    height: 852px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SplashContent = styled.div`
    width: 168px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
`