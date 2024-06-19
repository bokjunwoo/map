import { ListItemText } from '@mui/material';

type ListSubTitleUIProps = {
  title: string;
  subtitle?: string;
  subtitleImportant?: boolean;
};

const ListSubTitleUI = ({
  title,
  subtitle,
  subtitleImportant,
}: ListSubTitleUIProps) => {
  return (
    <ListItemText
      primary={title}
      secondary={subtitle}
      primaryTypographyProps={{ fontSize: 16, fontWeight: 600 }}
      secondaryTypographyProps={{
        fontSize: 12,
        color: subtitleImportant ? '#D32F2F' : 'text.secondary',
      }}
    ></ListItemText>
  );
};

export default ListSubTitleUI;
