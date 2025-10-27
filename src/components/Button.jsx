import React from 'react';
import styled from 'styled-components';

/**
 *  ## 공통 버튼 컴포넌트
 *
 *  @param {object} props
 *  @param {string} [props.height] - 버튼 세로 길이
 *  @param {string} [props.width] - 버튼 가로 길이
 *  @param {string} [props.bgColor] - 배경색
 *  @param {string} [props.color] - 글자색
 *  @param {React.ReactNode} props.children - 버튼에 들어갈 텍스트
 *  @param {function} props.onClick - 클릭 이벤트 핸들러
*/
export default function Button({ children, ...props }) {
    return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button`
    height: ${({ $height }) => $height || '56px'};
    width: ${({ $width }) => $width || '358px'};
    background-color: ${({ $bgColor }) => $bgColor || '#FFD342'};
    color: ${({ $color }) => $color || '#FFF'};
    padding: 0 16px;
    border: none;
    border-radius: 999px;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;

    /* 비활성화 스타일 */
    &:disabled {
        background-color: #F1F1F1;
        color: #DEDEDE;
        cursor: not-allowed;
    }
`;