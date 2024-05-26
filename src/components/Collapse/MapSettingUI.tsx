import { List } from '@mui/material';
import MapSettingBuringField from './MapSetting/MapSettingBuringField';
import MapSettingImageUI from './MapSetting/UI/MapSettingImageUI';
import MapSettingNumberOfMobUI from './MapSetting/UI/MapSettingNumberOfMobUI';

const MapSettingUI = ({ item }: { item: MapInfo }) => {
  return (
    <>
      <MapSettingImageUI item={item} />

      <List
        sx={{
          bgcolor: 'background.paper',
          mt: 1,
        }}
      >
        <MapSettingBuringField item={item} />

        <MapSettingNumberOfMobUI item={item} />
      </List>
    </>
  );
};

export default MapSettingUI;
