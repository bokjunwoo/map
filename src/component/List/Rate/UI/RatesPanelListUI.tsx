import { Stack, Divider, useMediaQuery, useTheme } from '@mui/material';
import RatePanelBoxUI from '../../../common/Rate/RatePanelBoxUI';

type RatesPanelListUIProps = {
  rateData: RateItem[];
};

const RatesPanelListUI = ({ rateData }: RatesPanelListUIProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      sx={{ mt: 2, mb: 2 }}
      direction="row"
      divider={
        <Divider orientation="vertical" flexItem sx={{ bgcolor: '#777777' }} />
      }
      spacing={isSmallScreen ? 1 : 2}
    >
      {rateData.map((rate) => {
        return <RatePanelBoxUI key={rate.label} rate={rate} />;
      })}
    </Stack>
  );
};

export default RatesPanelListUI;
