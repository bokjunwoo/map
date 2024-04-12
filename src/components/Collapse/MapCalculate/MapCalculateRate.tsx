import { useExpRateValue } from '../../../contexts/ExpRateStateProvider';
import MapCalculateRateUI from './UI/MapCalculateRateUI';

const MapCalculateRate = ({ burningField }: { burningField: number }) => {
  const expRate = useExpRateValue();
  const mesoRate = 0;
  const dropRate = 0;

  const resourceList = [
    { iconName: 'exp', label: expRate, color: '#bfff8a' },
    { iconName: 'meso', label: mesoRate, color: '#ffec8a' },
    { iconName: 'drop', label: dropRate, color: '#b0dcf5' },
    { iconName: 'burning', label: burningField, color: '#fcaeae' },
  ];

  return <MapCalculateRateUI resourceList={resourceList} />;
};

export default MapCalculateRate;
