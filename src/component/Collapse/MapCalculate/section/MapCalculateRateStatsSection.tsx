import useRateInfo from '../../../../hooks/useRateInfo';
import MapStatsUI from '../../../List/common/MapStatsUI';

type MapCalculateRateStatsSectionProps = {
  burningField: number;
};

const MapCalculateRateStatsSection = ({
  burningField,
}: MapCalculateRateStatsSectionProps) => {
  const { expInfo, burningFieldInfo, itemDropInfo, mesoDropInfo } = useRateInfo(
    { burningField }
  );

  const rateList: RateListOption[] = [
    expInfo,
    burningFieldInfo,
    itemDropInfo,
    mesoDropInfo,
  ];

  return <MapStatsUI rateList={rateList} />;
};

export default MapCalculateRateStatsSection;
