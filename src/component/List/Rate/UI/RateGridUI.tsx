import { Box, Grid } from '@mui/material';
import RateItemListUI from './RateItemListUI';

type RateListUIProps = {
  rateList: RateList[];
};

const RateListUI = ({ rateList }: RateListUIProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {rateList.map((item, index) => (
          <Grid item xs={12} sm={12} md={6} lg={3} key={index}>
            <RateItemListUI item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RateListUI;
