import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import styled from 'styled-components';
import { useEffect } from 'react';

function Script() {
    const location = useLocation();
    const { book } = location.state || {};

    const navigate = useNavigate();

    const Scripts = [
        { page: "1페이지", content: "옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요."},
        { page: "2페이지", content: "옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요."},
        { page: "3페이지", content: "옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요."},
        { page: "4페이지", content: "옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요."},
        { page: "5페이지", content: "옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요."},
        { page: "6페이지", content: "옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요."},
        { page: "7페이지", content: "옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요."},
        { page: "8페이지", content: "옛날옛날에 여우와 두루미가 살았어요. 여우는 털이 북슬북슬하고 두루미는 아주 키가 컸어요."}
    ]

    return (
        <>
        <Header
            title="스크립트 보기"
            showBack={true}
            onBack={() => navigate(-1)}
        />

        <Contents>
            {Scripts.map((Scripts, index) => (
                <ScriptBlock key={index}>
                    <PageNum>{Scripts.page}</PageNum>
                    <ScriptContent>{Scripts.content}</ScriptContent>
                </ScriptBlock>
            ))}
        </Contents>
        </>
    );
}

export default Script;

const Contents = styled.div`
    width: 390px;
    height: 812px;
    padding: 24px 16px;
    overflow-y: auto;
    scrollbar-width: none;
`

const ScriptBlock = styled.div`
    width: 358px;
    height: 76px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const PageNum = styled.div`
    height: 24px;
    width: 358px;
    font-weight: 800;
    font-size: 16px;
`

const ScriptContent = styled.div`
    height: 44px;
    width: 358px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`