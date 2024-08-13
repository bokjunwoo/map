import { Box, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

const QuestCharacterInfoUIT = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundImage: 'url(/images/landing.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        p: 0,
        borderRadius: 1,
      }}
    >
      <Box
        bgcolor="rgba(0, 0, 0, 0.7)"
        sx={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
        borderRadius={100}
        p={1}
      >
        <Typography
          fontSize={40}
          textAlign="center"
          fontWeight={500}
          color="white"
          variant="body2"
          lineHeight={1}
          mb={1}
        >
          메할일만 했는데도
        </Typography>
        <Typography
          fontSize={24}
          textAlign="center"
          color="white"
          fontWeight={500}
          variant="body2"
          lineHeight={1}
        >
          획득 경험치가{' '}
          <Typography
            component="span"
            fontSize={32}
            color="#ddfe01"
            fontWeight={500}
            variant="body2"
          >
            14.544%
          </Typography>{' '}
          이야..
        </Typography>
      </Box>

      <Grid container>
        <Grid item xs={4} position="relative" height="inherit">
          <CardContent
            sx={{ position: 'absolute', bottom: '0', width: '100%' }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              bgcolor="rgba(158, 158, 158, 0.8)"
              color="white"
              borderRadius={5}
              py={0.3}
              mt={1}
            >
              <Typography
                variant="h6"
                width="inherit"
                textAlign="center"
                ml={2}
              >
                월드
              </Typography>
              <Typography variant="h6" textAlign="center" mr={2}>
                스카이나
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              bgcolor="rgba(158, 158, 158, 0.8)"
              color="white"
              borderRadius={5}
              py={0.3}
              mt={1}
            >
              <Typography
                variant="h6"
                width="inherit"
                textAlign="center"
                ml={2}
              >
                직업
              </Typography>
              <Typography variant="h6" textAlign="center" mr={2}>
                키네시스
              </Typography>
            </Box>
          </CardContent>
        </Grid>

        <Grid item xs={4}>
          <CardContent
            sx={{
              pt: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              sx={{ width: 150 }}
              height="150"
              image="https://open.api.nexon.com/static/maplestory/Character/PELAGEKODCBHKMADDEPGMHADNNKFOCIDKBDLAHOEFECDDLLNEDJNHJFBFJGPBCMFPCKJKJOKIFPENEHFLIIEBLMJOINEPDDFAECGNDJMKFDLHEOAACEHALOMAKABFJOBOOLDCMENFHLACHDOJCPLICLPKJMPCKCFCCKACDHNINCKILGEFIPNBMNHPOKOKNDAFPBLMCELPCOMCOIGCLKGBCHFGAFMBGPPNFJGFIHAPJOAFDCMGCEOFOHFBBLNGMOA.png"
            />
            <Typography
              variant="h6"
              py={0.3}
              width={180}
              textAlign="center"
              bgcolor={grey[900]}
              color="white"
              borderRadius={5}
            >
              오지환
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={4} position="relative" height="inherit">
          <CardContent
            sx={{ position: 'absolute', bottom: '0', width: '100%' }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              bgcolor="rgba(158, 158, 158, 0.8)"
              color="white"
              borderRadius={5}
              py={0.3}
              mt={1}
            >
              <Typography
                variant="h6"
                width="inherit"
                textAlign="center"
                ml={2}
              >
                Lv.
              </Typography>
              <Typography variant="h6" textAlign="center" mr={2}>
                297
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              bgcolor="rgba(158, 158, 158, 0.8)"
              color="white"
              borderRadius={5}
              py={0.3}
              mt={1}
            >
              <Typography
                variant="h6"
                width="inherit"
                textAlign="center"
                ml={2}
              >
                경험치
              </Typography>
              <Typography
                variant="h6"
                textAlign="center"
                mr={2}
                color="#FFC107"
              >
                77.445%
              </Typography>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuestCharacterInfoUIT;
