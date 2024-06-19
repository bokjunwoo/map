import { Avatar, Box, ListItemText } from '@mui/material';
import ListItemStyle from '../style/ListItemStyle';

type ListTitleUIProps = {
  imagePath: string;
  title: string;
  subTitle: string;
};

const ListTitleUI = ({ imagePath, title, subTitle }: ListTitleUIProps) => {
  return (
    <ListItemStyle>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          alt={title}
          src={imagePath}
          variant="rounded"
          sx={{ width: 32, height: 32 }}
        />

        <ListItemText
          primary={title}
          primaryTypographyProps={{ fontSize: 18, fontWeight: 'bold', ml: 1 }}
        />
      </Box>

      <ListItemText
        primary={subTitle}
        primaryTypographyProps={{ fontSize: 14 }}
      />
    </ListItemStyle>
  );
};

export default ListTitleUI;
