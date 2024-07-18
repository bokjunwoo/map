import { Box } from '@mui/material';
import RateListUI from './RateListUI';

type Props = {
  rateList: RateList[];
};

const PresetListUI = ({ rateList }: Props) => {
  return (
    <Box>
      {rateList.map((item, index) => (
        <Box key={index} mb={1}>
          <RateListUI item={item} />
        </Box>
      ))}
    </Box>
  );
};

export default PresetListUI;
