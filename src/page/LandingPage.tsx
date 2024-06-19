import { Box, Typography } from '@mui/material';
import AlertUI from '../component/Alret/AlretUI';
import DirectInputChip from '../component/Chip/DirectInputChip';
import CharacterNameInput from '../component/Input/Character/CharacterNameInput';

const LandingPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/landing.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: -3,
        mb: -3,
      }}
    >
      <Box
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.4)',
          width: '100%',
          height: '100%',
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          fontSize={48}
          color="#FFFFFF"
          fontWeight="bold"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 3,
            letterSpacing: '10px',
          }}
        >
          버닝필드
        </Typography>
        <Typography
          color="#FFFFFF"
          fontSize={16}
          sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}
        >
          메이플스토리 사냥터 정보 서비스
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <CharacterNameInput />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Typography
            color="#FFFFFF"
            fontSize={12}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            ❖ 200레벨 이상, 5차전직이 완료된 캐틱터만 이용가능합니다.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <DirectInputChip />
        </Box>
      </Box>

      <AlertUI />
    </Box>
  );
};

export default LandingPage;
