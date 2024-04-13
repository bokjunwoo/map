import { useExpRateValue } from '../../../contexts/ExpRateStateProvider';
import MapBoosterRateUI from './UI/MapBoosterRateUI';

type MapBoosterRateProps = {
  burningField: number;
  rune: number;
};

const MapBoosterRate = ({ burningField, rune }: MapBoosterRateProps) => {
  const expRate = useExpRateValue();

  const resourceList = [
    { iconName: 'exp', label: expRate, color: '#bfff8a' },
    { iconName: 'burning', label: burningField, color: '#fcaeae' },
    { iconName: 'rune', label: rune, color: '#ecd1ff' },
  ];

  return <MapBoosterRateUI resourceList={resourceList} />;
};

export default MapBoosterRate;
