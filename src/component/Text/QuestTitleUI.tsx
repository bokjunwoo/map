import { Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

type Props = {
  title: string;
};

const QuestTitleUI = ({ title }: Props) => {
  return (
    <Typography
      variant="h6"
      fontSize={18}
      color="white"
      bgcolor={blue[500]}
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
