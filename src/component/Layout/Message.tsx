import { Alert, styled } from '@mui/material';

const ScrollingAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'yellow',
  overflow: 'hidden',
  position: 'relative', // 애니메이션 위치 조정
  height: '50px', // Alert의 높이 설정 (애니메이션을 위해)
  display: 'flex', // 컨텐츠가 수평 중앙 정렬될 수 있도록 flex 사용
  alignItems: 'center', // 수직 중앙 정렬
  '& .MuiAlert-message': {
    whiteSpace: 'nowrap', // 텍스트가 줄 바꿈되지 않게 설정
    display: 'inline-block', // 텍스트를 인라인 블록으로 설정
    paddingLeft: '40%',
    position: 'absolute', // 애니메이션 적용을 위해 절대 위치 설정
    animation: 'scroll 20s linear infinite', // 애니메이션 설정
  },
  '@keyframes scroll': {
    '0%': {
      transform: 'translateX(100%)', // 애니메이션 시작 위치 (화면 오른쪽 끝)
    },
    '100%': {
      transform: 'translateX(-100%)', // 애니메이션 끝 위치 (화면 왼쪽 끝)
    },
  },
}));

const Message = () => {
  return (
    <ScrollingAlert
      severity="warning"
      sx={{ mb: 3, bgcolor: '#2b2b2b', color: '#FFD400', borderRadius: 0 }}
    >
      [KMS v1.2.395] 패치에 추가된 탈라하트 지역이 9월 16일에 업데이트 될
      예정입니다. 추가적으로 버닝필드 웹사이트가 리뉴얼 됩니다.
    </ScrollingAlert>
  );
};

export default Message;
