import styled, { css } from 'styled-components';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';

function Profile() {
    const navigate = useNavigate();

    const mockUserData = {
        nickname: '예린',
        birth: '2006.09.07',
        userId: 'yerin06',
        password: 'yerin1234',
        avatar: '/icons/avatar2.svg',
        gender: 'female',
    }

    const [nickname, setNickname] = useState('');
    const [birth, setBirth] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [seledtedAvatar, setSelectedAvatar] = useState('/icons/avatar1.svg')
    
    const [showPw, setShowPw] = useState(false);

    const [seledtedGender, setSelectedGender] = useState('female');

    const [showToastModal, setShowToastModal] = useState(false);

    const handleToast = () => {
        setShowToastModal(true);

        setTimeout(() => {
            setShowToastModal(false);
        }, 1000);
    };

    useEffect(() => {
        if (mockUserData) {
            setNickname(mockUserData.nickname || '');
            setBirth(mockUserData.birth || '');
            setUserId(mockUserData.userId || '');
            setPassword(mockUserData.password || '');
            setSelectedGender(mockUserData.gender || '');
            setSelectedAvatar(mockUserData.avatar || '/icons/avatar1.svg');
        }
    }, []);

    const avatars = [
        '/icons/avatar1.svg',
        '/icons/avatar2.svg',
        '/icons/avatar3.svg',
        '/icons/avatar4.svg',
    ]

    const isButtonActive = nickname.trim().length > 0 && birth.trim().length > 0 && userId.trim().length > 0 && password.trim().length > 0;

    return (
        <Wrapper>
        <Header
            title="프로필 편집"
            showBack={true}
            onBack={() => (navigate(-1))}
        />

        <Contents>
            <AvatarContainer>
                <SelectedAvatar>
                    <img src={seledtedAvatar} />
                </SelectedAvatar>
                <AvatarList>
                    {avatars.map((src, index) => (
                        <AvatarBtn
                            key={index}
                            $isSelected={seledtedAvatar === src}
                            onClick={() => setSelectedAvatar(src)}
                            aria-pressed= {setSelectedAvatar === src}
                            aria-label={`아바타 ${index + 1}`}
                        >
                            <img src={src} />
                        </AvatarBtn>
                    ))}
                </AvatarList>
            </AvatarContainer>

            <InputContainer>
                <InputLabel>이름</InputLabel>
                <Input
                    type='text'
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder='이름 입력'
                    $filled={nickname !== ''}
                />
            </InputContainer>

            <InputContainer>
                <InputLabel>출생연도</InputLabel>
                <Input
                    type='text'
                    value={birth}
                    onChange={(e) => setBirth(e.target.value)}
                    placeholder='출생연도 입력'
                    $filled={birth !== ''}
                />
            </InputContainer>

            <InputContainer>
                <InputLabel>아이디</InputLabel>
                <Input
                    type='text'
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder='아이디 입력'
                    $filled={userId !== ''}
                />
            </InputContainer>

            <InputContainer>
                <InputLabel>비밀번호</InputLabel>
                <PwWrapper>
                <Input
                    type={showPw ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='비밀번호 입력'
                    $filled={password !== ''}
                />
                <ShowButton onClick={() => setShowPw(prev => !prev)}>
                    {showPw 
                        ? <img src="/icons/noshowimg.svg" />
                        : <img src="/icons/showimg.svg" />
                    }
                </ShowButton>
                </PwWrapper>
            </InputContainer>

            <GenderContainer>
                <GenderLabel>성별</GenderLabel>
                <GenderSelect>
                    <Female onClick={() => setSelectedGender('female')}>
                        {seledtedGender === 'female'
                            ? <img src='/icons/radio-filled.svg' />
                            : <img src='/icons/radio.svg' />
                        }
                        여자
                    </Female>
                    <Female onClick={() => setSelectedGender('male')}>
                        {seledtedGender === 'male'
                            ? <img src='/icons/radio-filled.svg' />
                            : <img src='/icons/radio.svg' />
                        }
                        남자
                    </Female>
                </GenderSelect>
            </GenderContainer>
        </Contents>

        <BtnContainer>
            <Button
                disabled={!isButtonActive}
                onClick={handleToast}
                $bgColor='#342e29'
                $color='#fff'
            >
                저장
            </Button>
        </BtnContainer>

        {showToastModal && (
            <ToastModal>변경 사항이 저장되었어요.</ToastModal>
        )}
        </Wrapper>
    );
}

export default Profile;

const Wrapper = styled.div`
    width: 390px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`
const Contents = styled.div`
    width: 390px;
    flex: 1;
    padding: 24px 16px 64px 16px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    overflow-y: auto;
    scrollbar-width: none;
`

const AvatarContainer = styled.div`
    width: 358px;
    height: 256px;
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    justify-content: center;
`

const SelectedAvatar = styled.div`
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`

const AvatarList = styled.div`
    width: 358px;
    height: 56px;
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
    justify-content: center;
`

const AvatarBtn = styled.button`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: ${({ $isSelected}) => ( $isSelected ? '2px solid #fff1c4' : '2px solid transparent')};
    background: none;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`

const InputContainer = styled.div`
    height: 86px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const InputLabel = styled.div`
    color: #393939;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
`;

const Input = styled.input`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    color: #DEDEDE;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    width: 358px;
    height: 54px;
    padding: 0 16px;
    border-radius: 8px;
    border: 1px solid #DEDEDE;
    background: #FFF;
    outline: none;

    ${({ $filled }) =>
        $filled &&
        css`
        border-color: #FFD342;
        color: #393939;
    `}

    &:focus {
        border-color: ${({ $error }) => ($error ? '#FF4242' : '#FFD342')};
        color: #393939;
    }

    ${({ $error }) =>
        $error &&
        css`
        border-color: #FF4242;
    `}

    &::placeholder {
        color: #dedede;
    }
`;

const BtnContainer = styled.div`
    width: 390px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ShowButton = styled.button`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
`

const PwWrapper = styled.div`
    position: relative;
    width: 358px;
`;

const GenderContainer = styled.div`
    width: 358px;
    height: 60px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const GenderLabel = styled.div`
    width: 358px;
    height: 24px;
    font-size: 16px;
    font-weight: 800;
`

const GenderSelect = styled.div`
    width: 358px;
    height: 24px;
    display: flex;
    flex-direction: row;
    gap: 12px;
`

const Female = styled.div`
    width: 62px;
    height: 24px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    color: #393939;
    font-size: 16px;
    font-weight: 800;
    align-items: center;
    cursor: pointer;
`

const ToastModal = styled.div`
    height: 46px;
    width: 358px;
    padding: 12px;
    background-color: #fff8e3;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 700;
    font-style: normal;
    display: flex;
    align-items: center;
    position: absolute;
    top: 16px;
`