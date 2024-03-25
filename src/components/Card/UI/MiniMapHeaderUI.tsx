import { Avatar, CardHeader } from '@mui/material';
import { MapInfo } from '../../../interface/map';

const MiniMapHeaderUI = ({ mapInfo }: { mapInfo: MapInfo }) => {
  return (
    <CardHeader
      avatar={
        <Avatar
          aria-label={`${mapInfo.map_name}`}
          variant="rounded"
          src={require(`../../../assets/region_icon/${mapInfo.map_region}.png`)}
          sx={{ m: -1 }}
        />
      }
      title={mapInfo.map_region}
      subheader={mapInfo.map_name}
      sx={{
        bgcolor: '#404142',
        color: '#ffffff',
        '& .MuiCardHeader-title': { fontWeight: 500 },
        '& .MuiCardHeader-subheader': { color: '#ffffff' },
        borderRadius: 1,
      }}
    />
  );
};
export default MiniMapHeaderUI;
