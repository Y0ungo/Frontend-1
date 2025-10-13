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
    /* 1. Primary 디자인 */
    height: 56px;
    width: 343px;
    padding: 0 16px;
    border: none;
    border-radius: 999px;
    background-color: #FFD342;
    color: #FFF;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;

    /* 2. Props로 전달된 값으로 덮어쓰기 - 다른 디자인 이용하실 때*/
    height: ${({height}) => height}; /* 48, 40 */
    width: ${({ width }) => width}; /* 147, 132 */
    background-color: ${({ bgColor }) => bgColor}; /* #342E29, #F1F1F1 */
    color: ${({ color }) => color}; /* #7A7A7A */

    /* 비활성화 스타일 */
    &:disabled {
        background-color: #F1F1F1;
        color: #DEDEDE;
        cursor: not-allowed;
    }
`;