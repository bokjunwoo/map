import { Typography } from '@mui/material';

type Props = {
  title: string;
};

const QuestTitleUI = ({ title }: Props) => {
  return (
    <Typography
      variant="h6"
      fontSize={18}
      color="white"
      bgcolor="#24aad2"
      borderRadius={1}
      px={1.5}
      py={0.5}
      mb={0.5}
    >
      {title}
    </Typography>
  );
};

export default QuestTitleUI;
