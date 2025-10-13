import styled from 'styled-components';
import Button from '../components/Button'; // 방금 만든 심플한 버튼

export default function Homepages() {
  return (
    <Container>
      <h1>심플한 공통 버튼 사용 예시</h1>

      {/* Props 없이 사용 -> 기본 디자인 적용 */}
      <Button onClick={() => alert('기본 버튼 클릭!')}>
        확인
      </Button>

      {/* Props로 원하는 스타일만 살짝 변경 */}
      <Button
        bgColor="#28a745"
      >
        성공
      </Button>

      <Button
        bgColor="#dc3545"
      >
        삭제
      </Button>

      <Button
        width="100%"
        bgColor="#6c757d"
      >
        전체 너비 버튼
      </Button>

      <Button
        bgColor="#f8f9fa"
        color="black"
      >
        취소
      </Button>
      
      <Button disabled>
        비활성화된 버튼
      </Button>
    </Container>
  );
}

// 예시 페이지를 위한 간단한 스타일
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* 버튼 사이 간격 */
  padding: 40px;
  width: 300px;
  margin: 0 auto;
`;