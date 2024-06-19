import { Box } from '@mui/material';
import LocalStorageSelectButtonGroup from '../components/SelectButtonGroup/LocalStorageSelectButtonGroup';

const SelectedTimeUI = () => {
  const timeOption = ['30분', '1시간', '2시간'];

  return (
    <Box sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'end' }}>
      <LocalStorageSelectButtonGroup
        options={timeOption}
        defaultOptionValue="30분"
        localStorageKey="selectedTimeOption"
        fullWidth={false}
        colorVariant="black"
      />
    </Box>
  );
};

export default SelectedTimeUI;
