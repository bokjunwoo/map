import { Chip, Avatar, Box, Typography } from '@mui/material';

type IconChipUIProps = {
  iconName: string;
  value: number;
  text: string;
  bgcolor: string;
};

const IconChipUI = ({ iconName, value, text, bgcolor }: IconChipUIProps) => {
  return (
    <Box sx={{ width: 80 }}>
      <Box
        sx={{
          textAlign: 'center',
          bgcolor,
          p: 0.5,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
      >
        <Typography variant="body2" sx={{ fontSize: 12 }}>
          {text}
        </Typography>
      </Box>

      <Chip
        component="span"
        sx={{
          display: 'flex',
          fontSize: '0.7rem',
          fontWeight: 600,
          height: 25,
          bgcolor: 'white',
          border: `1px solid ${bgcolor}`,
          borderRadius: 0,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          '.MuiChip-label': {
            pr: '4px',
          },
        }}
        avatar={
          <Avatar
            alt={iconName}
            src={require(`../../../assets/etc_icon/${iconName}.png`)}
            variant="rounded"
          />
        }
        label={`+ ${value}%`}
        size="small"
      />
    </Box>
  );
};

export default IconChipUI;
