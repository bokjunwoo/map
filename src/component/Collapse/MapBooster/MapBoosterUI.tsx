import ListDividerUI from '../../List/common/ListDividerUI';
import ListTitleUI from '../../List/common/ListTitleUI';
import MapExplanationUI from '../../List/common/MapExplanationUI';
import ListStyle from '../../List/style/ListStyle';
import MapBoosterExpRewardSection from './section/MapBoosterExpRewardSection';
import MapBoosterMobKillInputSection from './section/MapBoosterMobKillInputSection';
import MapBoosterMobStatsSection from './section/MapBoosterMobStatsSection';
import MapBoosterRateStatsSection from './section/MapBoosterRateStatsSection';

const MapBoosterUI = ({ mapInfo }: MapInfoProps) => {
  return (
    <ListStyle>
      <ListTitleUI
        title="VIP 부스터"
        subTitle="캐릭터당 일일 10회 100초 동안 최대 180마리 처치 가능"
        imagePath={require('../../../assets/etc_icon/booster.png')}
      />
      <ListDividerUI />

      <MapExplanationUI
        title="아이템 설명"
        description="100초간 생성된 몬스터 1마리당 필드 몬스터 순수 경험치 x 10배의 경험치 획득"
        subText="젠 주기 5.5초 +(서버렉) 10마리씩 젠되며 최대 15마리를 넘지 않습니다. (총 180마리)"
      />
      <ListDividerUI />

      <MapBoosterRateStatsSection
        mapName={mapInfo.map_name}
        burningField={mapInfo.burning_field}
      />
      <ListDividerUI />

      <MapBoosterMobStatsSection mapInfo={mapInfo} />
      <ListDividerUI />

      <MapBoosterMobKillInputSection mapName={mapInfo.map_name} />
      <ListDividerUI />

      <MapBoosterExpRewardSection mapInfo={mapInfo} />
    </ListStyle>
  );
};

export default MapBoosterUI;
