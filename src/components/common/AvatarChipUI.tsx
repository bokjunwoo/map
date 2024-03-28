import { Avatar, ListItem, Typography } from '@mui/material';

type AvatarWithTextUIProps = {
  src: string;
  text: string;
};

const AvatarWithTextUI = ({ src, text }: AvatarWithTextUIProps) => {
  return (
    <ListItem>
      <Avatar alt={text} src={src} sx={{ mr: 1 }} variant="rounded" />

      <Typography variant="h6" fontWeight={500} sx={{ display: 'block' }}>
        {text}
      </Typography>
    </ListItem>
  );
};

export default AvatarWithTextUI;
