import { Card } from '@mui/material';
import MiniMapBodyUI from '../../Card/MiniMapBodyUI';
import MiniMapHeaderUI from '../../Card/MiniMapHeaderUI';

const MapImageUI = ({ mapInfo }: MapInfoProps) => {
  return (
    <Card sx={{ border: '4px solid #ffffff' }}>
      <MiniMapHeaderUI mapInfo={mapInfo} />
      <MiniMapBodyUI mapInfo={mapInfo} />
    </Card>
  );
};

export default MapImageUI;
