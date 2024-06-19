import { EVENT_SKILL } from '../../../constants/constants';
import ListDividerUI from '../../List/common/ListDividerUI';
import ListTitleUI from '../../List/common/ListTitleUI';
import MapExplanationUI from '../../List/common/MapExplanationUI';
import ListStyle from '../../List/style/ListStyle';
import MapEventSkillExpRewardSection from './section/MapEventSkillExpRewardSection';
import MapEventSkillMobStatsSection from './section/MapEventSkillMobStatsSection';
import MapEventSkillRateStatsSection from './section/MapEventSkillRateStatsSection';

const MapEventSkillUI = ({ mapInfo }: MapInfoProps) => {
  return (
    <ListStyle>
      <ListTitleUI
        title={`이벤트 사냥 스킬(${EVENT_SKILL.TITLE})`}
        subTitle={`캐릭터당 일일 ${EVENT_SKILL.ACTIVATION_COUNT}회 레벨 범위 몬스터 ${EVENT_SKILL.REQUIRED_MOB_COUNT}마리당 스킬 1회 발동`}
        imagePath={require('../../../assets/etc_icon/event_skill.png')}
      />
      <ListDividerUI />

      <MapExplanationUI
        title="스킬 설명"
        description={`스킬발동시 약 ${EVENT_SKILL.INITIAL_MOB_KILL}마리 분량의 경험치 획득`}
        subText={EVENT_SKILL.SKILL_DESCRIPTION}
      />
      <ListDividerUI />

      <MapEventSkillRateStatsSection
        mapName={mapInfo.map_name}
        burningField={mapInfo.burning_field}
      />
      <ListDividerUI />

      <MapEventSkillMobStatsSection mapInfo={mapInfo} />
      <ListDividerUI />

      <MapEventSkillExpRewardSection mapInfo={mapInfo} />
    </ListStyle>
  );
};

export default MapEventSkillUI;
