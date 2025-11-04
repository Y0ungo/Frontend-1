import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../components/Button';

function StoryPlayer() {
    const navigate = useNavigate();

    const pages = [
        {img: '/imges/illust-landscape.png', page: '1페이지', type: '자막 영역입니다.자막 영역입니다.자막 영역입니다.자막 영역입니다.자막 영역입니다.자막 영역입니다.자막 영역입니다. 자막 영역입니다'},
        {img: '/imges/story-play.png', page: '2페이지', type: '자막 영역입니다.자막 영역입니다.자막 영역입니다.자막 영역입니'},
        {img: '/imges/illust-style.png', page: '3페이지', type: '자막 영역입니다.자막 영역입니다.자막 영역입니다.자막 영역입니'},
        {img: '/imges/illust-style.png', page: '4페이지', type: '자막 영역입니다.자막 영역입니다.자막 영역입니다.자막 영역입니'},
        {img: '/imges/illust-style.png', page: '5페이지', type: '자막 영역입니다.자막 영역입니다.자막 영역입니다.자막 영역입니'},
        {img: '/imges/illust-style.png', page: '6페이지', type: '자막 영역입니다.자막 영역입니다.자막 영역입니다.자막 영역입니'},
    ];

    const voices = [
        {avatar: '/icons/voice-avatar.svg', name: '목소리1'},
        {avatar: '/icons/voice-avatar.svg', name: '목소리2'},
    ]

    const [selectedImg, setSelectedImg] = useState(0);
    const [selectedVoice, setSelectedVoice] = useState(0);

    const [step, setStep] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const [typeOn, setTypeOn] = useState(false);
    const [playOn, setPlayOn] = useState(false);
    const [voiceModal, setVoiceModal] = useState(false);

    const handleClick = () => {
        if (showMenu) return;
        if (step < 2) {
            setStep(step + 1);
        } else {
            setShowMenu(true);
        }
    };

    const voiceClick = () => {
        setVoiceModal(true);
    }

    return (
        <Wrapper onClick={handleClick}>
            <StoryImg>
                <img src={pages[selectedImg].img} />

                {typeOn && (
                    <Type>{pages[selectedImg].type}</Type>
                )}
            </StoryImg>
            {step < 2 && (
                <Overlay onClick={handleClick}>
                    {step === 0 && (
                        <Text01>
                            <img src='/icons/backward.svg' />
                            <Text>왼쪽 더블탭은 이전 페이지로</Text>
                        </Text01>
                    )}
                    {step === 1 && (
                        <Text02>
                            <Text>오른쪽 더블탭은 다음 페이지로</Text>
                            <img src='/icons/forward.svg' />
                        </Text02>
                    )}
                </Overlay>
            )}

            {step >= 2 && showMenu && (
                <Overlay onClick={() => {
                    setShowMenu(false);
                    setVoiceModal(false);
                }}>
                    <TopBar>
                        <LeftGroup onClick={(e) => e.stopPropagation()}>
                            <img src='/icons/Leftpart-white.svg' />
                            <Title
                                placeholder='동화 제목을 입력해주세요'
                            />
                        </LeftGroup>
                        <RightButtons onClick={(e) => e.stopPropagation()}>
                            <BtnContainer onClick={() => setTypeOn(!typeOn)}>
                                <img 
                                    src={typeOn ? '/icons/type-off.svg' : '/icons/type-on.svg'}
                                    width={24}
                                />
                                {typeOn ? "자막끄기" : "자막켜기"}
                            </BtnContainer>
                            <BtnContainer onClick={voiceClick}>
                                <img src='/icons/sound-white.svg' width={24} />
                                읽어주기
                            </BtnContainer>
                        </RightButtons>
                    </TopBar>
                    <PlayBtn
                        onClick={(e) => {
                            e.stopPropagation();
                            setPlayOn(!playOn);
                        }}
                    >
                        <img
                            src={playOn ? '/icons/stop.svg' : '/icons/play.svg'}
                            width={40}
                        />
                    </PlayBtn>
                    <PageContainer onClick={(e) => e.stopPropagation()}>
                        <PageTitle>
                            전체 페이지
                            <Count>{pages.length}</Count>
                        </PageTitle>
                        <Scroll>
                            {pages.map((p, i) => (
                                <Page
                                    key={i}
                                    $isSelected={selectedImg === i}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImg(i);
                                    }}
                                    >
                                    <PageImg $isSelected={selectedImg === i}>
                                        <img src={p.img} />
                                    </PageImg>
                                    <PageNum $isSelected={selectedImg === i}>{p.page}</PageNum>
                                </Page>
                            ))}
                        </Scroll>
                    </PageContainer>
                    {voiceModal && (
                        <VoiceModal onClick={(e) => e.stopPropagation()}>
                            <VoiceContainer>
                                {voices.map((v, i) => (
                                    <VoiceSelect
                                        key={i}
                                        $isSelected={selectedVoice === i}
                                        onClick={() => setSelectedVoice(i)}
                                    >
                                        <LeftVoice $isSelected={selectedVoice === i}>
                                            <img src={v.avatar} width={44}/>
                                            {v.name}
                                        </LeftVoice>
                                        <RightVoice>
                                            <img src='/icons/voice-edit.svg' width={20} />
                                            <img src='/icons/voice-delete.svg' width={20} />
                                        </RightVoice>
                                    </VoiceSelect>
                                ))}
                                <VoiceSelect>
                                    <LeftVoice>
                                        <img src='/icons/voice-add.svg' width={44} />
                                        추가하기                                    </LeftVoice>
                                </VoiceSelect>
                            </VoiceContainer>
                            <Button
                                $width="272px"
                                $height="40px"
                                $bgColor="#393939"
                                onClick={() => {setVoiceModal(false)}}
                            >
                                확인
                            </Button>
                        </VoiceModal>
                    )}
                </Overlay>
            )}
        </Wrapper>
    );
}

export default StoryPlayer;

const Wrapper = styled.div`
    width: 798px;
    height: 390px;
    position: relative;
    background-color: black;
    overflow: hidden;
`

const StoryImg = styled.div`
    width: 694px;
    height: 390px;
    margin-left: 29px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 0;
    }
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.80);
    display: flex;
    color: #fff;
    font-size: 16px;
    font-weight: 800;
    z-index: 100;
    align-items: center;
    cursor: pointer;
`

const Text = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Text01 = styled.div`
    position: absolute;
    left: 44px;
    display: flex;
    width: 238px;
    height: 24px;
    justify-content: space-around;
    align-items: center;
`

const Text02 = styled.div`
    position: absolute;
    right: 90px;
    display: flex;
    width: 238px;
    height: 24px;
    justify-content: space-around;
    align-items: center;
`

const TopBar = styled.div`
    width: 774px;
    height: 40px;
    padding: 9px 16;
    position: absolute;
    top: 16px;
    left: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LeftGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const RightButtons = styled.div`
    display: flex;
    gap: 8px;
`

const Title = styled.input`
    margin-left: 4px;
    height: 22px;
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    background-color: transparent;
    border: none;
    padding: 0 8px;
    outline: none;

    ::placeholder {
        color: #fff;
        opacity: 1;
    }
`

const BtnContainer = styled.div`
    width: 111px;
    height: 40px;
    display: flex;
    padding: 0 16px 0 8px;
    gap: 12px;
    color: #fff;
    font-size: 14px;
    font-weight: 800px;
    align-items: center;
`

const PlayBtn = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 126px;
    right: 402px;
`

const PageContainer = styled.div`
    height: 148px;
    width: 798px;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: absolute;
    bottom: 32px;
`

const PageTitle = styled.div`
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    display: flex;
    gap: 4px;
`

const Count = styled.div`
    color: #ffd342;
`

const Scroll = styled.div`
    width: 784px;
    height: 118px;
    display: flex;
    gap: 16px;
    overflow-x: auto;
    scrollbar-width: none;
    padding-right: 16px;
`

const Page = styled.div`
    width: 120px;
    height: 118px;
    padding: 7px 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const PageImg = styled.div`
    width: 120px;
    height: 80px;
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid ${({ $isSelected }) => ($isSelected ? '#ffd342' : 'transparent')};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const PageNum = styled.div`
    width: 120px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 800;
    color: ${({ $isSelected }) => ($isSelected) ? '#ffd342' : '#fff'};
`

const Type = styled.div`
    position: absolute;
    width: 694px;
    height: 112px;
    bottom: 0;
    left: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    transform: translateX(-50%);
    padding: 24px;
    display: inline-flex;
    color: #fff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #393939;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 24px;
    font-weight: 1200;
    line-height: 32px;
`

const VoiceModal = styled.div`
    height: 326px;
    width: 320px;
    padding: 24px 24px 16px 24px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 0 1px 0 rgba(24, 24, 27, 0.30), 0 8px 16px 0 rgba(24, 24, 27, 0.10);
    display: flex;
    flex-direction: column;
    z-index: 100;
    position: absolute;
    top: 32px;
    right: 262px;
    justify-content: space-between;
`

const VoiceContainer = styled.div`
    width: 272px;
    overflow-y: auto;
    scrollbar-width: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const VoiceSelect = styled.div`
    width: 272px;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LeftVoice = styled.div`
    display: flex;
    gap: 12px;
    color: ${({ $isSelected }) => ($isSelected ? '#ffd342' : '#393939')};
    font-size: 16px;
    font-weight: 700;
    align-items: center;

    img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border:  ${({ $isSelected }) => $isSelected ? '1.5px solid #ffd342' : '1.5px solid transparent'};
        box-sizing: border-box;
    }
`

const RightVoice = styled.div`
    width: 52px;
    height: 44px;
    display: flex;
    gap: 12px;
    align-items: center;
`