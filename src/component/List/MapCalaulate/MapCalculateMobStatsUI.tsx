import { ListItemText } from '@mui/material';
import MobStatsTextUI from '../../common/Stats/MobStatsTextUI';

const MapCalculateMobStatsUI = ({ mapInfo }: MapInfoProps) => {
  const hasMultipleMonsters = mapInfo.monsters.length > 1;

  return (
    <ListItemText
      sx={{
        display: 'flex',
        justifyContent: 'end',
        p: 0,
        alignItems: hasMultipleMonsters ? 'initial' : 'center',
      }}
      secondary={
        <>
          {mapInfo.monsters.map((mob) => {
            return (
              <MobStatsTextUI
                key={mob.name}
                mob={mob}
                burningField={mapInfo.burning_field}
              />
            );
          })}
        </>
      }
    />
  );
};

export default MapCalculateMobStatsUI;
