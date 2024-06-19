import { ListItemText, Box } from '@mui/material';
import MobStatsBoxUI from '../../common/Stats/MobStatsBoxUI';

type MobStatsListUIProps = {
  mobInfo: MobInfo[];
};

const MobStatsListUI = ({ mobInfo }: MobStatsListUIProps) => {
  return (
    <ListItemText
      primary={mobInfo.map((mobInfo) => {
        return (
          <Box sx={{ mb: 0.5 }} key={mobInfo.text}>
            <MobStatsBoxUI text={mobInfo.text} amount={mobInfo.amount} />
          </Box>
        );
      })}
    />
  );
};

export default MobStatsListUI;
