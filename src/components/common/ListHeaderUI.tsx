import { Avatar, Box, ListItem, ListItemText, Typography } from '@mui/material';
import { ReactNode } from 'react';

type AvatarChipUIProps = {
  src: string;
  text: string;
  secondaryComponent?: ReactNode;
};

const ListHeaderUI = ({ src, text, secondaryComponent }: AvatarChipUIProps) => {
  return (
    <ListItem>
      <Box sx={{ mr: 1 }}>
        <Avatar
          alt={text}
          src={src}
          variant="rounded"
          sx={{ width: 32, height: 32 }}
        />
      </Box>

      <ListItemText
        primary={
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 'bold',
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
