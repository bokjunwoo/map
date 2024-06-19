import { Avatar, Box, ListItemText } from '@mui/material';
import ListItemStyle from '../style/ListItemStyle';

type ListMobTitleUIProps = {
  imagePath: string;
  title: string;
};

const ListMobTitleUI = ({ imagePath, title }: ListMobTitleUIProps) => {
  return (
    <ListItemStyle>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          alt={title}
          src={imagePath}
          variant="rounded"
          sx={{ width: 24, height: 24 }}
        />

        <ListItemText
          primary={title}
          primaryTypographyProps={{ fontSize: 16, fontWeight: 'bold', ml: 1 }}
        />
      </Box>
    </ListItemStyle>
  );
};

export default ListMobTitleUI;
