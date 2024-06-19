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
        title="이벤트 사냥 스킬"
        subTitle="캐릭터당 일일 20회 레벨 범위 몬스터 200마리당 스킬 1회 발동"
        imagePath={require('../../../assets/etc_icon/event_skill.png')}
      />
      <ListDividerUI />

      <MapExplanationUI
        title="스킬 설명"
        description="스킬발동시 90마리 몬스터의 경험치 획득"
        subText="스킬딜레이(6초)"
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
