import { CardMedia } from '@mui/material';

const MiniMapBodyUI = ({ mapInfo }: { mapInfo: MapInfo }) => {
  return (
    <CardMedia
      sx={{
        borderTop: '4px solid #ffffff',
        borderRadius: 1,
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        maxWidth: 400,
      }}
      component="img"
      image={require(`../../../assets/map/${mapInfo.map_region}/${mapInfo.map_name}.png`)}
      alt={mapInfo.map_name}
    />
  );
};

export default MiniMapBodyUI;
