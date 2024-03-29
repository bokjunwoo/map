import {
  Avatar,
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

type AvatarChipUIProps = {
  src: string;
  text: string;
  label: string;
};

const AvatarChipUI = ({ src, text, label }: AvatarChipUIProps) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={text} src={src} variant="rounded" />
      </ListItemAvatar>

      <ListItemText
        primary={
          <Typography sx={{ fontSize: 20, fontWeight: 500 }}>{text}</Typography>
        }
        secondary={
          <Chip
            component="span"
            label={label}
            sx={{
              fontSize: '0.7rem',
              fontWeight: 600,
              height: 20,
              color: 'rgb(255, 135, 0)',
              bgcolor: 'rgb(255, 153, 0, 0.3)',
            }}
          />
        }
      />
    </ListItem>
  );
};

export default AvatarChipUI;
