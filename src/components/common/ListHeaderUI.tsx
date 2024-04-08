import { Avatar, Box, ListItem, ListItemText } from '@mui/material';

type AvatarChipUIProps = {
  iconPath: string;
  headerText: string;
  SecondaryComponent?: React.ReactNode;
  mainComment: string;
  subComment?: string;
};

const ListHeaderUI = ({
  iconPath,
  headerText,
  SecondaryComponent,
  mainComment,
  subComment,
}: AvatarChipUIProps) => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ mr: 1 }}>
          <Avatar
            alt={headerText}
            src={iconPath}
            variant="rounded"
            sx={{ width: 32, height: 32 }}
          />
        </Box>

        <ListItemText primary={headerText} secondary={SecondaryComponent} />
      </Box>

      <ListItemText
        primary={mainComment}
        secondary={subComment}
        primaryTypographyProps={{ fontSize: 14 }}
        secondaryTypographyProps={{ fontSize: 12 }}
      />
    </ListItem>
  );
};

export default ListHeaderUI;
