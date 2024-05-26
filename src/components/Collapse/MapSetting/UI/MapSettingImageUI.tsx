import { Card } from '@mui/material';
import MiniMapBodyUI from '../../../Card/UI/MiniMapBodyUI';
import MiniMapHeaderUI from '../../../Card/UI/MiniMapHeaderUI';

const MapSettingImageUI = ({ item }: { item: MapInfo }) => {
  return (
    <Card sx={{ border: '4px solid #ffffff' }}>
      <MiniMapHeaderUI mapInfo={item} />
      <MiniMapBodyUI mapInfo={item} />
    </Card>
  );
};

export default MapSettingImageUI;
