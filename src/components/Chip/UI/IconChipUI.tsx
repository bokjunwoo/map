import { Chip, Avatar } from '@mui/material';

const IconChipUI = ({
  iconName,
  label,
  bgcolor,
}: {
  iconName: string;
  label: number;
  bgcolor: string;
}) => {
  return (
    <Chip
      component="span"
      sx={{
        fontSize: '0.7rem',
        fontWeight: 600,
        height: 20,
        bgcolor,
        borderRadius: 1,
      }}
      avatar={
        <Avatar
          alt={iconName}
          src={require(`../../../assets/etc_icon/${iconName}.png`)}
          variant="rounded"
        />
      }
      label={`+ ${label}%`}
      size="small"
    />
  );
};

export default IconChipUI;
