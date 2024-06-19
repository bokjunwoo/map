import ListChipDividerUI from '../../List/common/ListChipDividerUI';
import ListMobTitleUI from '../../List/common/ListMobTitleUI';
import ListStyle from '../../List/style/ListStyle';
import MapMobBaseInfoSection from './section/MapMobBaseInfoSection';
import MapMobCompareSection from './section/MapMobCompareSection';
import MapMobDetailSection from './section/MapMobDetailSection';

const MapMobUI = ({ mobInfo }: MobInfoProps) => {
  return (
    <ListStyle>
      <ListMobTitleUI
        title={mobInfo.name}
        imagePath={require('../../../assets/etc_icon/mob.png')}
      />

      <ListChipDividerUI label="기본 몬스터 스탯" />
      <MapMobBaseInfoSection mobInfo={mobInfo} />

      <ListChipDividerUI label="내 배율에 따른 몬스터 스탯" />
      <MapMobCompareSection mobInfo={mobInfo} />

      <ListChipDividerUI label="자세한 정보" />
      <MapMobDetailSection mobInfo={mobInfo} />
    </ListStyle>
  );
};

export default MapMobUI;
