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
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={text} src={src} variant="rounded" />
      </ListItemAvatar>

      <ListItemText
        primary={
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            {text}
          </Typography>
        }
        secondary={secondaryComponent}
      />
    </ListItem>
  );
};

export default ListHeaderUI;
