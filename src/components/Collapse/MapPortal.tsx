import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../atoms/userLevelState';
import { MapInfo } from '../../interface/map';
import { calculateIndividualExperienceMultiplier } from '../../utils/calculate';
import MapPortalUI from './UI/MapPortalUI';

type MapPortalProps = {
  item: MapInfo;
};

const MapPortal = ({ item }: MapPortalProps) => {
  const userLevel = useRecoilValue(userLevelState);
  const [checkState, setCheckState] = useState({
    rune: false,
    sundayEvent: false,
  });

  const onChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckState({
      ...checkState,
      [event.target.name]: event.target.checked,
    });
  };

  const highestLevelMonster = item.monsters.reduce((prev, curr) => {
    return prev.level > curr.level ? prev : curr;
  });

  const expMultiplier = calculateIndividualExperienceMultiplier(
    userLevel,
    highestLevelMonster
  );

  return (
    <MapPortalUI
      mapName={item.map_name}
      highestLevelMonster={highestLevelMonster}
      checkState={checkState}
      onChangeCheckBox={onChangeCheckBox}
      expMultiplier={expMultiplier}
    />
  );
};

export default MapPortal;
