import styled from 'styled-components';
import BottomBar from '../../components/Bottom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Mylib() {
    const navigate = useNavigate();

    const [activeBookId, setActiveBookId] = useState(null);

    const books = [
        { id: 1, title: '빨간망토', viewedAt: '25.10.27', createdAt: '25.09.01', min: '3~4분', bookmark: "제작", img: '/icons/book.svg', progress: 80 },
        { id: 2, title: '성냥팔이 소녀', viewedAt: '25.10.25', createdAt: '25.10.15', min: '3~4분', bookmark: "명작", img: '/icons/book.svg', progress: 30 },
        { id: 3, title: '미운오리새끼', viewedAt: '25.10.28', createdAt: '25.10.10', min: '3~4분', bookmark: "명작", img: '/icons/book.svg', progress: 50 },
        { id: 4, title: '미운오리새끼', viewedAt: '25.10.28', createdAt: '25.10.10', min: '3~4분', bookmark: "확장", img: '/icons/book.svg', progress: 10 },
        { id: 5, title: '빨간망토', viewedAt: '25.10.27', createdAt: '25.09.01', min: '3~4분', bookmark: "제작", img: '/icons/book.svg', progress: 80 },
        { id: 6, title: '성냥팔이 소녀', viewedAt: '25.10.25', createdAt: '25.10.15', min: '3~4분', bookmark: "명작", img: '/icons/book.svg', progress: 30 },
        { id: 7, title: '미운오리새끼', viewedAt: '25.10.28', createdAt: '25.10.10', min: '3~4분', bookmark: "명작", img: '/icons/book.svg', progress: 50 },
        { id: 8, title: '미운오리새끼', viewedAt: '25.10.28', createdAt: '25.10.10', min: '3~4분', bookmark: "확장", img: '/icons/book.svg', progress: 10 },
        { id: 9, title: '빨간망토', viewedAt: '25.10.27', createdAt: '25.09.01', min: '3~4분', bookmark: "제작", img: '/icons/book.svg', progress: 80 },
        { id: 10, title: '성냥팔이 소녀', viewedAt: '25.10.25', createdAt: '25.10.15', min: '3~4분', bookmark: "명작", img: '/icons/book.svg', progress: 30 },
        { id: 11, title: '미운오리새끼', viewedAt: '25.10.28', createdAt: '25.10.10', min: '3~4분', bookmark: "명작", img: '/icons/book.svg', progress: 50 },
        { id: 12, title: '미운오리새끼', viewedAt: '25.10.28', createdAt: '25.10.10', min: '3~4분', bookmark: "확장", img: '/icons/book.svg', progress: 10 },
    ];

    const handleCardClick = (id) => {
      setActiveBookId(id === activeBookId ? null : id);
    };

    const [sortType, setSortType] = useState('recentView');

    const parseDate = (str) => {
      const [yy, mm, dd] = str.split('.').map(Number);
      return new Date(2000 + yy, mm - 1, dd); // 25 -> 2025
    };

    const sortedBooks = [...books].sort((a, b) => {
      if (sortType === 'recentView') return parseDate(b.viewedAt) - parseDate(a.viewedAt);
      if (sortType === 'recentCreate') return parseDate(b.createdAt) - parseDate(a.createdAt);
    });


    const [open, setOpen] = useState(false);

    const viewScript = (book) => {
      navigate(`/mylib-script/${book.id}`, { state: { book } });
    }

    return (
        <>
        <MylibHeader>내 서재</MylibHeader>

        <MylibContainer>
                  <SortHeader>
        <SortMenu>
          <SortButton onClick={() => setOpen(!open)}>
            {sortType === 'recentView' ? '최근 시청 순' : '최근 제작 순'}
            <img src='/icons/arrow-down.svg' />
          </SortButton>
          <Dropdown open={open}>
            <li onClick={() => { setSortType('recentView'); setOpen(false); }}>최근 시청순</li>
            <li onClick={() => { setSortType('recentCreate'); setOpen(false); }}>최근 제작순</li>
          </Dropdown>
        </SortMenu>
      </SortHeader>

            <BookGrid>
                {sortedBooks.map((book) => (
                  <BookCard key={book.id} onClick={() => handleCardClick(book.id)}>
                  {activeBookId === book.id ? (
                    <OptionCard>
                      <CloseBtn onClick={(e) => { e.stopPropagation(); setActiveBookId(null); }}>×</CloseBtn>
                      <Option onClick={() => playBook(book)}>재생하기</Option>
                      <Option onClick={() => viewScript(book)}>스크립트 보기</Option>
                      <Option onClick={() => deleteBook(book)}>삭제하기</Option>
                    </OptionCard>
                  ) : (
                    <>
                    <BookWrapper>
                      <img src={book.img} alt={book.title} />
                      <ProgressContainer>
                        <ProgressFill style={{ width: `${book.progress}%` }} />
                      </ProgressContainer>
                    </BookWrapper>
                    <Badge>
                        <img
                          src={
                            book.bookmark === '명작'
                            ? '/icons/Bookmark-cream.svg'
                            : book.bookmark === '확장'
                            ? '/icons/Bookmark-yellow.svg'
                            : '/icons/Bookmark-black.svg'
                          }
                        />
                      </Badge>
                    </>
                  )}
                    <Title>{book.title}</Title>
                    <ViewMin>
                      <img src='/icons/time.svg' width={15} />
                      {sortType === 'recentView' ? book.viewedAt : book.createdAt}
                      <Separator>|</Separator>
                      {book.min}
                    </ViewMin>
                  </BookCard>
                ))}
            </BookGrid>
        </MylibContainer>

        <BottomBar />
        </>
    );
}

export default Mylib;

const MylibHeader = styled.div`
    width: 390px;
    height: 64px;
    display: flex;
    padding: 16px 134px 16px 16px;
    align-items: center;
    align-self: stretch;
    color: #393939;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
`

const MylibContainer = styled.div`
    width: 390px;
    height: 738px;
    overflow-y: auto;
    scrollbar-width: none;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    padding: 0 16px;
`

const SortHeader = styled.div`
    display: flex;
    color: #7A7A7A;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    justify-content: flex-end;
`;

const SortMenu = styled.div`
    position: relative;
`;

const SortButton = styled.button`
    display: flex;
    color: #7A7A7A;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    gap: 4px;
    margin-bottom: 8px;
`;

const Dropdown = styled.ul`
  display: ${({open}) => (open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: -3px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  list-style: none;
  border-radius: 8px;
  width: 90px;
  z-index: 10;

  li {
    padding: 12px 16px;
    font-size: 12px;
    font-weight: 700;
    color: #393939;
    cursor: pointer;
  }
`;


const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .book-img {
    width: 110px;
    height: 154px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 0.5px solid #DEDEDE;
    background: lightgray 50% / cover no-repeat;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.10);
  }
`;

const ViewMin = styled.div`
  display: flex;
  flex-direction: row;
  color: #BBB;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  align-items: center;
  margin-top: 8px;
`

const Separator = styled.span`
  color: #DeDeDe;
  margin: 0 4px;
`;

const Title = styled.span`
  overflow: hidden;
  color: #393939;
  text-overflow: ellipsis;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  margin-top: 10px;
`;

const Badge = styled.div`
    width: 37px;
    height: 26px;
    position: absolute;
    left: 76px;
    bottom: 70px;
    padding: 0;
    margin: 0;

    img {
        width: 37px;
        height: 26px;
        object-fit: cover;
        display: block;
    }
`;

const OptionCard = styled.div`
  width: 110px;
  height: 154px;
  border-radius: 12px;
  background: url('/icons/click-card.svg') center / cover no-repeat; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  position: relative;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
`;

const Option = styled.div`
  font-size: 12px;
  margin: 6px 0;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 6px;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
`;

const ProgressContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #EDEDED;
  border-radius: 0 0 12px 12px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: #ff4242;
  border-radius: 99px;
`;

const BookWrapper = styled.div`
  position: relative;
  width: 110px;
  height: 154px;
  border-radius: 12px;
  border: 0.5px solid #DEDEDE;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: white;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
