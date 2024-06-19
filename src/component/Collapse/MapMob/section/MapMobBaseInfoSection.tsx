import MobInfoListUI from '../../../List/common/MobInfoListUI';
import ListItemStyle from '../../../List/style/ListItemStyle';

const MapMobBaseInfoSection = ({ mobInfo }: MobInfoProps) => {
  const mobBaseInfo: MobInfo[] = [
    { text: '레벨', amount: mobInfo.level },
    {
      text: '경험치',
      amount: Math.floor(mobInfo.experience),
    },
    { text: '메소(평균)', amount: mobInfo.meso },
  ];

  return (
    <ListItemStyle sx={{ pt: 0.5, pb: 0.5 }}>
      <MobInfoListUI mobInfo={mobBaseInfo} />
    </ListItemStyle>
  );
};

export default MapMobBaseInfoSection;
