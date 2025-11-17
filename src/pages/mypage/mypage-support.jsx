import styled from 'styled-components';
import Header from '../../components/Header';
import { useParams, useNavigate } from 'react-router-dom';

function MypageSupport() {
    const navigate = useNavigate();
    const { type } = useParams();

    const TERMS = {
        a: {
            title: '기기 및 버전 정보',
            content: '기기 및 버전 정보에 대한 내용이 여기에 들어갑니다.',
        },
        b: {
            title: '고객센터',
            content: '고객센터에 대한 내용이 여기에 들어갑니다.',
        },
        c: {
            title: '약관 및 정책',
            content: '약관 및 정책에 대한 내용이 여기에 들어갑니다.',
        },
    };

    const { title, content } = TERMS[type] || {};

    return (
        <>
        <Header
            title={title || '고객 지원'}
            showBack={true}
            onBack={() => navigate('/mypage')}
        />
        <Contents>{content}</Contents>
        </>
    );
}

export default MypageSupport;

const Contents = styled.div`
    width: 393px;
    padding: 24px 16px;
    font-size: 14px;
    font-weight: 400;
    font-style: regular;
`