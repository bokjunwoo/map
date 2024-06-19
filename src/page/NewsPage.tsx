import { Box, Container } from '@mui/material';
import FAQTableContent from '../content/FAQTableContent';
import HistoryTableContent from '../content/HistoryTableContent';

const NewsPage = () => {
  return (
    <Container maxWidth="lg">
      <HistoryTableContent />

      <Box sx={{ mt: 2, mb: 2 }}>
        <FAQTableContent />
      </Box>

      <Box sx={{ height: 200 }}></Box>
    </Container>
  );
};

export default NewsPage;
