import ListDividerUI from '../../List/common/ListDividerUI';
import ListTitleUI from '../../List/common/ListTitleUI';
import ListStyle from '../../List/style/ListStyle';
import MapPortalPolloSection from './section/MapPortalPolloSection';
import MapPortalPrittoSection from './section/MapPortalPrittoSection';
import MapPortalRateStatsSection from './section/MapPortalRateStatsSection';
import MapPortalSpecialSection from './section/MapPortalSpecialSection';

const MapPortalUI = ({ mapInfo }: MapInfoProps) => {
  return (
    <ListStyle>
      <ListTitleUI
        title="폴로 & 프리토"
        subTitle="폴로 프리토의 효율에 대한 정보를 알 수 있습니다."
        imagePath={require('../../../assets/etc_icon/Pollo.png')}
      />
      <ListDividerUI />

      <MapPortalRateStatsSection />
      <ListDividerUI />

      <MapPortalPolloSection mapInfo={mapInfo} />
      <ListDividerUI />

      <MapPortalPrittoSection mapInfo={mapInfo} />
      <ListDividerUI />

      <MapPortalSpecialSection mapInfo={mapInfo} />
    </ListStyle>
  );
};

export default MapPortalUI;
