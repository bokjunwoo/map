import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { ReactNode } from 'react';

type AvatarChipUIProps = {
  src: string;
  text: string;
  secondaryComponent?: ReactNode;
};

const ListHeaderUI = ({ src, text, secondaryComponent }: AvatarChipUIProps) => {
  if (secondaryComponent !== undefined) {
    return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={text} src={src} variant="rounded" />
        </ListItemAvatar>

        <ListItemText
          primary={
            <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
              {text}
            </Typography>
          }
          secondary={secondaryComponent}
        />
      </ListItem>
    );
  }
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={text} src={src} variant="rounded" />
      </ListItemAvatar>

      <ListItemText
        primary={
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default ListHeaderUI;
