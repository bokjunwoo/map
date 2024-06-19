import { ChangeEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { numberOfMonsterState } from '../../../atoms/numberOfMonsterState';
import { REGEX } from '../../../constants/constants';
import MobKillInputBoxUI from './UI/MobKillInputBoxUI';

const MapInfoMobKillInput = ({ mapInfo }: MapInfoProps) => {
  const [mobKillCount, setMobKillCount] = useRecoilState(
    numberOfMonsterState(mapInfo.map_name)
  );

  const handleMobKillChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(event.target.value);

    if (REGEX.NUMBER.test(targetValue.toString())) {
      setMobKillCount(targetValue);
    }

    if (targetValue > mapInfo.number_of_monster) {
      setMobKillCount(mapInfo.number_of_monster);
    }

    if (targetValue < 1) {
      setMobKillCount(1);
    }
  };

  useEffect(() => {
    setMobKillCount(mapInfo.number_of_monster);
  }, [mapInfo.number_of_monster, setMobKillCount]);

  return (
    <MobKillInputBoxUI
      description="1젠당 잡을 수 있는 마릿수"
      adornment={mapInfo.number_of_monster}
      value={mobKillCount}
      onChange={handleMobKillChange}
    />
  );
};

export default MapInfoMobKillInput;
