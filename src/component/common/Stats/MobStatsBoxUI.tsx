import { Box, Typography } from '@mui/material';

type MobStatsBoxUIProps = {
  text: string;
  amount: number;
};

const MobStatsBoxUI = ({ text, amount }: MobStatsBoxUIProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="body2"
        component="span"
        sx={{
          pl: 1,
          width: 200,
          height: 30,
          fontSize: 12,
          border: '1px solid #ddd',
          borderTopLeftRadius: 2,
          borderBottomLeftRadius: 2,
          bgcolor: '#f5f5f5',
          lineHeight: '30px',
        }}
      >
        {text}
      </Typography>

      <Typography
        variant="body2"
        component="span"
        sx={{
          pr: 1,
          width: 85,
          height: 30,
          fontSize: 12,
          borderTop: '1px solid #ddd',
          borderRight: '1px solid #ddd',
          borderBottom: '1px solid #ddd',
          borderTopRightRadius: 2,
          borderBottomRightRadius: 2,
          lineHeight: '30px',
          textAlign: 'end',
        }}
      >
        {amount.toLocaleString()}
      </Typography>
    </Box>
  );
};

export default MobStatsBoxUI;
