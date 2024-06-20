import ListSubTitleUI from '../../../List/common/ListSubTitleUI';
import ListItemStyle from '../../../List/style/ListItemStyle';
import MapPortalSpecialTable from '../../../Table/MapPortal/MapPortalSpecialTable';

const MapPortalSpecialSection = ({ mapInfo }: MapInfoProps) => {
  return (
    <ListItemStyle>
      <ListSubTitleUI title="에스페시아 & 불꽃 늑대 효율" />

      <MapPortalSpecialTable mapInfo={mapInfo} />
    </ListItemStyle>
  );
};

export default MapPortalSpecialSection;
