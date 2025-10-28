import styled from 'styled-components';
import BottomBar from '../../components/Bottom';

function Home() {
    return (
        <>
        <Logo>
            <img src='/icons/logo_home.svg' />
        </Logo>

        <Contents>
            <Banner>
                <img src='/icons/banner.svg' />
            </Banner>

            <StoryContent>
                <StoryLabel>
                    최근 본 히스토리
                    <img src='/icons/right-part.svg' width={20} height={20} />
                </StoryLabel>
                <StoryScroll>
                    <HistoryContainer>
                        <Card>
                            <img src='/icons/book.svg' />
                            <Badge>
                                <img src='/icons/Bookmark.svg' width={25}/>
                            </Badge>
                        </Card>
                        <TextBox>
                            <StoryTitle>빨간망토</StoryTitle>
                            <StoryTime>3:36</StoryTime>
                        </TextBox>
                    </HistoryContainer>
                    <HistoryContainer>
                        <Card>
                            <img src='/icons/book.svg' />
                            <Badge>
                                <img src='/icons/Bookmark.svg' width={25}/>
                            </Badge>
                        </Card>
                        <TextBox>
                            <StoryTitle>빨간망토</StoryTitle>
                            <StoryTime>3:36</StoryTime>
                        </TextBox>
                    </HistoryContainer>
                </StoryScroll>
            </StoryContent>

            <CreatedStoryContent>
                <StoryLabel>
                    내가 만든 동화
                    <img src='/icons/right-part.svg' width={20} height={20} />
                </StoryLabel>
                <CreatedStoryScroll>
                    <CreatedContainer>
                        <img src='/imges/created_story.svg' />
                        <CreatedTitle>꿈꾸는 코스모스</CreatedTitle>
                        <CreatedMin>3~4분</CreatedMin>
                    </CreatedContainer>

                    <CreatedContainer>
                        <img src='/imges/created_story.svg' />
                        <CreatedTitle>꿈꾸는 코스모스</CreatedTitle>
                        <CreatedMin>3~4분</CreatedMin>
                    </CreatedContainer>
                    <CreatedContainer>
                        <img src='/imges/created_story.svg' />
                        <CreatedTitle>꿈꾸는 코스모스</CreatedTitle>
                        <CreatedMin>3~4분</CreatedMin>
                    </CreatedContainer>
                    <CreatedContainer>
                        <img src='/imges/created_story.svg' />
                        <CreatedTitle>꿈꾸는 코스모스</CreatedTitle>
                        <CreatedMin>3~4분</CreatedMin>
                    </CreatedContainer>

                </CreatedStoryScroll>
            </CreatedStoryContent>

            <CreatedStoryContent>
                <StoryLabel>
                    추천 명작 동화
                    <img src='/icons/right-part.svg' width={20} height={20} />
                </StoryLabel>
                <CreatedStoryScroll>
                    <CreatedContainer>
                        <img src='/imges/created_story.svg' />
                        <CreatedTitle>꿈꾸는 코스모스</CreatedTitle>
                        <CreatedMin>3~4분</CreatedMin>
                    </CreatedContainer>

                    <CreatedContainer>
                        <img src='/imges/created_story.svg' />
                        <CreatedTitle>꿈꾸는 코스모스</CreatedTitle>
                        <CreatedMin>3~4분</CreatedMin>
                    </CreatedContainer>
                    <CreatedContainer>
                        <img src='/imges/created_story.svg' />
                        <CreatedTitle>꿈꾸는 코스모스</CreatedTitle>
                        <CreatedMin>3~4분</CreatedMin>
                    </CreatedContainer>
                    <CreatedContainer>
                        <img src='/imges/created_story.svg' />
                        <CreatedTitle>꿈꾸는 코스모스</CreatedTitle>
                        <CreatedMin>3~4분</CreatedMin>
                    </CreatedContainer>
                    
                </CreatedStoryScroll>
            </CreatedStoryContent>
        </Contents>

        <BottomBar />
        </>
    );
}

export default Home;

const Logo = styled.div`
    width: 390px;
    height: 64px;
`

const Banner = styled.div`
    width: 390px;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -32px;
`

const Contents = styled.div`
    width: 390px;
    height: 708px;
    padding: 0 0 64px 0;
    display: flex;
    flex-direction: column;
    gap: 64px;
    overflow-y: auto;
    scrollbar-width: none;
`

const StoryContent = styled.div`
    height: 170px;
    width: 390px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const CreatedStoryContent = styled.div`
    height: 246px;
    width: 390px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const StoryLabel = styled.div`
    height: 28px;
    width: 390px;
    display: flex;
    justify-content: space-between;
    color: #393939;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    padding: 0 16px;
    align-items: center;
`

const StoryScroll = styled.div`
    height: 126px;
    margin-left: 16px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    overflow-x: auto;
    scrollbar-width: none;
    padding-right: 16px;

    &::-webkit-scrollbar {
        display: none;
    }
`

const CreatedStoryScroll = styled.div`
    height: 202px;
    margin-left: 16px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    overflow-x: auto;
    scrollbar-width: none;
    padding-right: 16px;

    &::-webkit-scrollbar {
        display: none;
    }
`

const HistoryContainer = styled.div`
    position: relative;
`

const Card = styled.div`
    position: absolute;
    left: 14px;
    bottom: 14px;
    width: 80px;
    height: 112px;
    border-radius: 10px;
    border: 0.5px solid #DEDEDE;
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.10);

    img {
        width: 80px;
        height: 112px;
        object-fit: contain;
    }
`;

const Badge = styled.div`
    width: 25px;
    height: 18px;
    position: absolute;
    left: 56px;
    bottom: 12px;
    padding: 0;
    margin: 0;

    img {
        width: 25px;
        height: 18px;
        object-fit: cover;
        display: block;
    }
`;

const TextBox = styled.div`
    margin-top: 30px;
    padding-left: 107px;
    padding-top: 33px;
    width: 200px;
    height: 96px;
    border-radius: 8px 20px 0 8px;
    border: 1px solid #F1F1F1;
    background: linear-gradient(0deg, #FFF) 0%, #FFF 100%, #D9D9D9;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
`;

const StoryTitle = styled.div`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    align-self: stretch;
    color: #393939;
    text-overflow: ellipsis;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 6px;
`;

const StoryTime = styled.div`
    color: #BBB;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
`;

const CreatedContainer = styled.div`
    width: 110px;
    height: 202px;
`

const CreatedTitle = styled.div`
    margin-top: 6px;
    width: 110px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    align-self: stretch;
    overflow: hidden;
    color: #393939;
    text-overflow: ellipsis;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
`

const CreatedMin = styled.div`
    margin-top: 6px;
    width: 110px;
    color: #BBB;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
`