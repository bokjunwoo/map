import { Box, Typography } from '@mui/material';

type TextAmountUIProps = {
  text: string;
  amount: number;
  unit?: string;
};

const TextAmountUI = ({ text, amount, unit }: TextAmountUIProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 0.5,
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
        {Math.floor(amount).toLocaleString()}
        {unit}
      </Typography>
    </Box>
  );
};

export default TextAmountUI;
