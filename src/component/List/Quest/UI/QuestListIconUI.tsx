import { Avatar } from '@mui/material';

type Props = {
  error: boolean;
};

const QuestListIconUI = ({ error }: Props) => {
  if (error) {
    return (
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 20, height: 20, mt: -1, mr: 0.5 }}
      />
    );
  }
  return (
    <Avatar
      alt="Remy Sharp"
      src="/static/images/avatar/1.jpg"
      sx={{ width: 20, height: 20, mr: 0.5 }}
    />
  );
};

export default QuestListIconUI;
