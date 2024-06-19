import { ListItemText, Box } from '@mui/material';
import MobInfoTextUI from '../../common/Stats/MobInfoTextUI';

type MobInfoListUIProps = {
  mobInfo: MobInfo[];
};

const MobInfoListUI = ({ mobInfo }: MobInfoListUIProps) => {
  return (
    <ListItemText
      primary={mobInfo.map((mobInfo) => {
        return (
          <Box sx={{ mt: 0.2, mb: 0.2 }} key={mobInfo.text}>
            <MobInfoTextUI
              text={mobInfo.text}
              amount={mobInfo.amount}
              unit={mobInfo.unit}
            />
          </Box>
        );
      })}
    />
  );
};

export default MobInfoListUI;
