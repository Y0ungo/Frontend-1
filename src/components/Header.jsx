import React from 'react';
import styled from 'styled-components';

const Header = ({
    title,
    showBack,
    onBack,
    action,
}) => {
    return (
        <StyledHeader>
            {/* 1. 좌측 (뒤로가기) */}
            <StyledLeft>
                {showBack && (
                    <StyledBackBtn onClick={onBack}>
                        <img src="/icons/Leftpart.svg" alt="뒤로가기" />
                    </StyledBackBtn>
                )}
            </StyledLeft>

            {/* 2. 중앙 타이틀 */}
            <StyledTitle>{title}</StyledTitle>

            {/* 3. 우측 액션 */}
            <StyledRight>
                {action && (
                    <StyledActionBtn onClick={action.handler}>
                        {action.icon ? (
                            <img src={action.icon} alt="action" />
                        ) : (
                            action.text
                        )}
                    </StyledActionBtn>
                )}
            </StyledRight>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.div`
    height: 64px;
    width: 390px;
    display: flex;
    align-items: center;
    background-color: #FFF;
    box-sizing: border-box;
    position: relative;
`;

const StyledLeft = styled.div`
    position: absolute;
    left: 16px;
    display: flex;
    align-items: center;
`;

const StyledBackBtn = styled.button`
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 20px;
        height: 20px;
    }
`;

const StyledTitle = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    font-weight: 800;
    color: #393939;
`;

const StyledRight = styled.div`
    position: absolute;
    right: 16px;
    display: flex;
    align-items: center;
`;

const StyledActionBtn = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 20px;
        height: 20px;
        display: block;
    }
`;
