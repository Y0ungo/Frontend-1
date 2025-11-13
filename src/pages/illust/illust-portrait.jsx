import styled from 'styled-components';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useState } from 'react';
import LoadingModal from '../../components/Loading';

function IllustPortrait() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [showStopModal, setShowStopModal] = useState(false);

    const handleStopModal = () => {
        setShowStopModal(true);
    };

    const stopStory = () => {
        setShowStopModal(false);
        navigate('/home');
    };

    const keepStory = () => {
        setShowStopModal(false);
    };

    const handleNext = async () => {
        setIsLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 5000));
            setIsLoading(false);
            navigate('/illust-landscape');
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    const styleImages = {
        0: [
            '/imges/style-1-1.svg',
            '/imges/style-1-2.svg',
            '/imges/style-1-3.svg',
            '/imges/style-1-4.svg',
        ],
        1: [
            '/imges/style-2-1.svg',
            '/imges/style-2-2.svg',
            '/imges/style-2-3.svg',
            '/imges/style-2-4.svg',
        ],
        2: [
            '/imges/style-3-1.svg',
            '/imges/style-3-2.svg',
            '/imges/style-3-3.svg',
            '/imges/style-3-4.svg',
        ],
        3: [
            '/imges/style-4-1.svg',
            '/imges/style-4-2.svg',
            '/imges/style-4-3.svg',
            '/imges/style-4-4.svg',
        ],
    };

    const [styles] = useState([
        { label: '수채화', img: '/icons/illust-style-1.svg'},
        { label: '유화', img: '/icons/illust-style-2.svg'},
        { label: '크레파스', img: '/icons/illust-style-3.svg'},
        { label: '3D 애니메이션', img: '/icons/illust-style-4.svg'},
    ]);

    const [selectedStyle, setSelectedStyle] = useState(0);

    const images = styleImages[selectedStyle];

    return (
        <>
        <Header
            title='삽화 스타일 선택'
            showBack={true}
            onBack={() => navigate(-1)}
            action={{ icon: '/icons/right-modal.svg', handler: () => handleStopModal(true) }}
        />

        <img src='/icons/progressbar-illust.svg' />

        <Contents>
            <IllustGrid>
                {images.map((img, index) => (
                    <IllustItem key={index}>
                        <img src={img} />
                    </IllustItem>
                ))}
            </IllustGrid>

            <IllustStyle>
                <StyleHeader>삽화 스타일</StyleHeader>
                <StyleScroll>
                    {styles.map((style, index) => (
                        <StyleContainer
                            key={index}
                            onClick={() => setSelectedStyle(index)}
                        >
                            <StyleItem $selected={selectedStyle === index}>
                                <img src={style.img}/>
                            </StyleItem>
                            <Label $selected={selectedStyle === index}>
                                {style.label}
                            </Label>
                        </StyleContainer>
                    ))}
                </StyleScroll>
            </IllustStyle>
        </Contents>

        {showStopModal && (
            <ModalOverlay>
                <ModalBox>
                    <ModalHeader>앗! 그만두시겠어요?</ModalHeader>
                    <ModalText>아직 동화를 완성하지 못했어요.<br />나가면 지금까지의 기록을 되돌릴 수 없어요.</ModalText>
                    <ModalBtnContainer>
                        <CancelBtn onClick={stopStory}>그만두기</CancelBtn>
                        <ConfirmBtn onClick={keepStory}>계속 제작하기</ConfirmBtn>
                    </ModalBtnContainer>
                </ModalBox>
            </ModalOverlay>
        )}

        <ButtonContainer>
            <Button onClick={handleNext}>다음</Button>
        </ButtonContainer>
        {isLoading &&
            <LoadingModal
                text={<>삽화를 만들고 있어요!<br />조금만 기다려주세요</>} 
            />
        }
        </>
    );
}

export default IllustPortrait;

const Contents = styled.div`
    width: 390px;
    height: 650px;
    display: flex;
    flex-direction: column;
    padding: 24px 16px 64px 16px;
    gap: 32px;
`

const ButtonContainer = styled.div`
    width: 390px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const IllustGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 358px;
    height: 358px;
`;

const IllustItem = styled.div`
    width: 174px;
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    overflow: hidden;
    border-color: #bbb;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const IllustStyle = styled.div`
    width: 358px;
    height: 136px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const StyleHeader = styled.div`
    height: 24px;
    font-size: 16px;
    font-weight: 800;
`

const StyleScroll = styled.div`
    width: 358px;
    height: 104px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    overflow-x: auto;
    scrollbar-width: none;
`

const StyleContainer = styled.div`
    width: 120px;
    height: 104px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const StyleItem = styled.div`
    width: 120px;
    height: 80px;
    border-radius: 12px;
    cursor: pointer;
    border: 2px solid ${({ $selected }) => ($selected ? '#ffd342' : 'transparent')};
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Label = styled.div`
    width: 120px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ $selected }) => ($selected ? '#ffd342' : '#393939')};
    font-size: 12px;
    font-weight: 800;
    text-align: center;
`

const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 390px;
    height: 852px;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`

const ModalBox = styled.div`
    width: 320px;
    height: 196px;
    padding: 24px 24px 16px 24px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background-color: #fff;
`

const ModalHeader = styled.div`
    color: #393939;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
`

const ModalText = styled.div`
    color: #7a7a7a;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
`

const ModalBtnContainer = styled.div`
    display: flex;
    gap: 12px;
`

const CancelBtn = styled.button`
    width: 130px;
    height: 40px;
    background-color: #f1f1f1;
    border-radius: 99px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7a7a7a;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
`

const ConfirmBtn = styled.button`
    width: 130px;
    height: 40px;
    background-color: #ffd342;
    border-radius: 99px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
`