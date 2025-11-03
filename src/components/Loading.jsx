import styled, { keyframes } from 'styled-components';

function LoadingModal({ text }) {
    return (
        <Overlay>
            <Spinner>
                <Dot1 />
                <Dot2 />
            </Spinner>
            <Text>{text}</Text>
        </Overlay>
    );
}

export default LoadingModal;

const moveLeft = keyframes`
    0%, 100% { transform: translateX(-13px); }
    50% { transform: translateX(13px); }
`;

const moveRight = keyframes`
    0%, 100% { transform: translateX(13px); }
    50% { transform: translateX(-13px); }
`;

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(255,255,255,0.85);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const Spinner = styled.div`
    position: relative;
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -20px;
`;

const Dot = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
`;

const Dot1 = styled(Dot)`
    background-color: #efefef;
    animation: ${moveLeft} 1.3s ease-in-out infinite;
`;

const Dot2 = styled(Dot)`
    background-color: #ffd342;
    animation: ${moveRight} 1.3s ease-in-out infinite;
`;

const Text = styled.p`
    font-size: 16px;
    color: #bbb;
    font-weight: 700;
    text-align: center;
    line-height: 24px;
    font-style: normal;
`;
