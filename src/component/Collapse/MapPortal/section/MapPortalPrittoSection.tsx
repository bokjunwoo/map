import ListSubTitleUI from '../../../List/common/ListSubTitleUI';
import ListItemStyle from '../../../List/style/ListItemStyle';
import MapPortalPrittoTable from '../../../Table/MapPortal/MapPortalPrittoTable';

const MapPortalPrittoSection = ({ mapInfo }: MapInfoProps) => {
  return (
    <ListItemStyle>
      <ListSubTitleUI title="프리토 효율" />

      <MapPortalPrittoTable mapInfo={mapInfo} />
    </ListItemStyle>
  );
};

export default MapPortalPrittoSection;
