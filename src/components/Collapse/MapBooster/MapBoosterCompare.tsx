import { ChangeEvent, useState } from 'react';
import { REGEX } from '../../../constants/constants';
import MapBoosterCompareUI from './UI/MapBoosterCompareUI';

type MapBoosterCompareUIProps = {
  burningField: number;
  runeValue: number;
  monsterExperience: number;
  boosterKillNumberOfMonster: number;
  FieldKillNumberOfMonster: number;
};

const MapBoosterCompare = ({
  burningField,
  runeValue,
  monsterExperience,
  boosterKillNumberOfMonster,
  FieldKillNumberOfMonster,
}: MapBoosterCompareUIProps) => {
  const [accumulationPotionPrice, setAccumulationPotionPrice] = useState(350);

  const handleAccumulationPotionPriceChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const targetValue = Number(event.target.value);

    if (REGEX.NUMBER_UP_TO_THREE_DIGITS_REGEX.test(targetValue.toString())) {
      setAccumulationPotionPrice(targetValue);
    }
  };

  return (
    <MapBoosterCompareUI
      burningField={burningField}
      runeValue={runeValue}
      monsterExperience={monsterExperience}
      boosterKillNumberOfMonster={boosterKillNumberOfMonster}
      FieldKillNumberOfMonster={FieldKillNumberOfMonster}
      accumulationPotionPrice={accumulationPotionPrice}
      handleAccumulationPotionPriceChange={handleAccumulationPotionPriceChange}
    />
  );
};

export default MapBoosterCompare;
