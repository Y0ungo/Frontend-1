import React from 'react';
import styled from 'styled-components';
import { useNavigate, useMatch } from 'react-router-dom';

// 아이콘 import (활성/비활성 각각)
import HomeActive from '../../public/icons/home-active.svg';
import HomeInactive from '../../public/icons/home-inactive.svg';
import MyStoryActive from '../../public/icons/story-active.svg';
import MyStoryInactive from '../../public/icons/story-inactive.svg';
import MyLibActive from '../../public/icons/lib-active.svg';
import MyLibInactive from '../../public/icons/lib-inactive.svg';
import MypageActive from '../../public/icons/mypage-active.svg';
import MypageInactive from '../../public/icons/mypage-inactive.svg';

const BottomBar = () => {
    const navigate = useNavigate();

    const routes = [
        { path: '/home', label: '홈', activeIcon: HomeActive, inactiveIcon: HomeInactive },
        { path: '/mystory', label: '나의 동화', activeIcon: MyStoryActive, inactiveIcon: MyStoryInactive },
        { path: '/mylib', label: '내서재', activeIcon: MyLibActive, inactiveIcon: MyLibInactive },
        { path: '/mypage', label: '마이', activeIcon: MypageActive, inactiveIcon: MypageInactive },
    ];

    return (
        <Bar role="navigation" aria-label="bottom bar">
            {routes.map(({ path, label, activeIcon, inactiveIcon }) => {
                const isActive = !!useMatch(path + '/*');

                return (
                    <Button
                        key={path}
                        onClick={() => navigate(path)}
                        $active={isActive}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        <IconImg src={isActive ? activeIcon : inactiveIcon} alt={label} />
                        <Label $active={isActive}>{label}</Label>
                    </Button>
                );
            })}
        </Bar>
    );
};

export default BottomBar;

// ------------------ styled-components ------------------
const Bar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  background: var(--background-color);
  padding-bottom: env(safe-area-inset-bottom, 0);
`;

const Button = styled.button`
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: none;
  border: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const IconImg = styled.img`
  width: 24px;
  height: 24px;
  display: block;
`;

const Label = styled.span`
  margin-top: 2px;
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: -0.01rem;
  color: ${({ $active }) => ($active ? '#393939' : '#dedede')};
`;
