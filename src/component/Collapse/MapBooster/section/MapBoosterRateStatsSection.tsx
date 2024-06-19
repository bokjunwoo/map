import { useRecoilValue } from 'recoil';
import { boosterRuneState } from '../../../../atoms/boosterRuneState';
import useRateInfo from '../../../../hooks/useRateInfo';
import MapStatsUI from '../../../List/common/MapStatsUI';

type MapBoosterRateStatsSectionProps = {
  mapName: string;
  burningField: number;
};

const MapBoosterRateStatsSection = ({
  mapName,
  burningField,
}: MapBoosterRateStatsSectionProps) => {
  const rune = useRecoilValue(boosterRuneState(mapName));

  const { expInfo, burningFieldInfo, runeInfo } = useRateInfo({
    burningField,
    rune,
  });

  const rateList: RateListOption[] = [expInfo, burningFieldInfo, runeInfo];

  return <MapStatsUI rateList={rateList} />;
};

export default MapBoosterRateStatsSection;
