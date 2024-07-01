import ListSubTitleUI from '../../../List/common/ListSubTitleUI';
import ListItemStyle from '../../../List/style/ListItemStyle';
import MapEventSkillExpRewardTable from '../../../Table/MapContent/MapEventSkill/MapEventSkillExpRewardTable';

const MapEventSkillExpRewardSection = ({ mapInfo }: MapInfoProps) => {
  return (
    <ListItemStyle>
      <ListSubTitleUI title="경험치 계산" />

      <MapEventSkillExpRewardTable mapInfo={mapInfo} />
    </ListItemStyle>
  );
};

export default MapEventSkillExpRewardSection;
