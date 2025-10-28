import styled from 'styled-components';
import Header from '../../components/Header';
import { useParams, useNavigate } from 'react-router-dom';

function SignupAgree() {
    const navigate = useNavigate();
    const { type } = useParams();

    const TERMS = {
        service: {
            title: '서비스 이용약관',
            content: '서비스 이용과 관련된 자세한 약관 내용이 여기에 들어갑니다.',
        },
        privacy: {
            title: '개인정보 수집 및 이용 동의',
            content: '개인정보 수집 및 이용에 대한 내용이 여기에 들어갑니다.',
        },
        marketing: {
            title: '마케팅 및 메시지 수신 동의',
            content: '광고성 정보 수신 및 관련 안내가 여기에 들어갑니다.',
        },
    };

    const { title, content } = TERMS[type] || {};

    return (
        <>
        <Header
            title={title || '이용약관'}
            showBack={true}
            onBack={() => navigate(-1)}
        />
        <Contents>{content}</Contents>
        </>
    );
}

export default SignupAgree;

const Contents = styled.div`
    width: 393px;
    padding: 24px 16px;
    font-size: 14px;
    font-weight: 400;
    font-style: regular;
`