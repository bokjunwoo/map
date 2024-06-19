import ListSubTitleUI from '../../../List/common/ListSubTitleUI';
import ListItemStyle from '../../../List/style/ListItemStyle';
import MapPortalPolloTable from '../../../Table/MapPortal/MapPortalPolloTable';

const MapPortalPolloSection = ({ mapInfo }: MapInfoProps) => {
  return (
    <ListItemStyle>
      <ListSubTitleUI title="폴로 효율" />

      <MapPortalPolloTable mapInfo={mapInfo} />
    </ListItemStyle>
  );
};

export default MapPortalPolloSection;
