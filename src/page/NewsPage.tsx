import { Box } from '@mui/material';
import FAQTableUI from '../contents/FAQTableUI';
import UpdateHistoryTableUI from '../contents/UpdateHistoryTableUI';

const NewsPage = () => {
  return (
    <>
      <UpdateHistoryTableUI />

      <Box sx={{ mt: 2, mb: 2 }}>
        <FAQTableUI />
      </Box>

      <Box sx={{ height: 200 }}></Box>
    </>
  );
};

export default NewsPage;
