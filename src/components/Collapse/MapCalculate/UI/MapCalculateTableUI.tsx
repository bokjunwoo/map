import { Box, ListItem, ListItemText } from '@mui/material';
import { TIME_OPTIONS } from '../../../../constants/constants';
import { MapInfo } from '../../../../interface/map';
import CalculateMonsterStatsUI from '../../../common/CalculateMonsterStatsUI';
import ListSubheaderUI from '../../../common/ListSubheaderUI';
import MultiplierTableUI from '../../../Table/UI/MultiplierTableUI';

type MapCalculateTableUIProps = {
  item: MapInfo;
  expReward: number;
  mesoReward: number;
};

const MapCalculateTableUI = ({
  item,
  expReward,
  mesoReward,
}: MapCalculateTableUIProps) => {
  const monstersLength = item.monsters.length > 1;
  return (
    <ListItem sx={{ display: 'block' }}>
      <Box sx={{ display: 'flex', alignItems: 'top' }}>
        <ListSubheaderUI title="경험치 계산" />

        <ListItemText
          sx={{
            display: 'flex',
            justifyContent: 'end',
            p: 0,
            alignItems: monstersLength ? 'initial' : 'center',
          }}
          secondary={
            <>
              {item.monsters.map((monster) => {
                return (
                  <CalculateMonsterStatsUI
                    key={monster.name}
                    monster={monster}
                    burningField={item.burning_field}
                  />
                );
              })}
            </>
          }
        />
      </Box>

      <MultiplierTableUI
        item={item}
        timeOptions={TIME_OPTIONS}
        expReward={expReward}
        mesoReward={mesoReward}
      />
    </ListItem>
  );
};

export default MapCalculateTableUI;
