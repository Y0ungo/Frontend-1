import styled from 'styled-components';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useState } from 'react';
import LoadingModal from '../../components/Loading';

function IllustPortrait() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

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

    const [images] = useState([
        '/imges/illust-portrait.png',
        '/imges/illust-portrait.png',
        '/imges/illust-portrait.png',
        '/imges/illust-portrait.png',
    ]);

    const [styles] = useState([
        { label: '수채화', img: '/imges/illust-style.png'},
        { label: '유화', img: '/imges/illust-style.png'},
        { label: '크레파스', img: '/imges/illust-style.png'},
        { label: '색연필', img: '/imges/illust-style.png'},
    ]);

    const [selectedStyle, setSelectedStyle] = useState(null);

    return (
        <>
        <Header
            title='동화 만들기'
            showBack={true}
            onBack={() => navigate(-1)}
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

        <ButtonContainer>
            <Button onClick={handleNext}>다음</Button>
        </ButtonContainer>
        {isLoading && <LoadingModal />}
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