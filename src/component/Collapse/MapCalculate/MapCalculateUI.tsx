import ListDividerUI from '../../List/common/ListDividerUI';
import ListTitleUI from '../../List/common/ListTitleUI';
import ListStyle from '../../List/style/ListStyle';
import MapCalculateMobResultSection from './section/MapCalculateMobResultSection';
import MapCalculateRateStatsSection from './section/MapCalculateRateStatsSection';

const MapCalculateUI = ({ mapInfo }: MapInfoProps) => {
  return (
    <ListStyle>
      <ListTitleUI
        title="마릿수 계산기"
        subTitle="1젠당 잡을 수 있는 몬스터를 수정한 정보를 얻을 수 있습니다."
        imagePath={require('../../../assets/etc_icon/mop_setting.png')}
      />
      <ListDividerUI />

      <MapCalculateRateStatsSection burningField={mapInfo.burning_field} />
      <ListDividerUI />

      <MapCalculateMobResultSection mapInfo={mapInfo} />
    </ListStyle>
  );
};

export default MapCalculateUI;
