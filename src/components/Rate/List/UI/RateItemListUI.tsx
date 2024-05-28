import { Divider, Box, Typography } from '@mui/material';

const RateItemListUI = ({ item }: { item: RateList }) => {
  return (
    <Box
      sx={{
        pt: 0,
        pb: 0,
        border: `1px solid rgb(${item.rgb})`,
        borderRadius: 1,
        bgcolor: `rgba(${item.rgb}, 0.1)`,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          p: 1.3,
          textAlign: 'center',
          fontSize: 16,
          bgcolor: `rgb(${item.rgb})`,
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        {item.label}
      </Typography>

      <Divider />

      {item.Components.map((Component, idx) => (
        <Component key={idx} />
      ))}
    </Box>
  );
};

export default RateItemListUI;
