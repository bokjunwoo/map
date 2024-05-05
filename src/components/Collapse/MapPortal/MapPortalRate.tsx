import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../../atoms/expRateState';
import { listRGB } from '../../../data/color';
import MapPortalRateUI from './UI/MapPortalRateUI';

const MapPortalRate = ({ burningField }: { burningField: number }) => {
  const expRate = useRecoilValue(totalExpSelector);

  const resourceList: ResourceListOption = [
    {
      iconName: 'exp',
      value: expRate,
      text: '경험치 획득량',
      color: `rgba(${listRGB.blue}, 0.3)`,
    },
  ];

  return <MapPortalRateUI resourceList={resourceList} />;
};

export default MapPortalRate;
