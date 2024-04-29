import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  burningFieldState,
  getburningFieldValue,
} from '../../../atoms/burningFieldState';
import { MapInfo } from '../../../interface/map';
import MapSettingBuringFieldUI from './UI/MapSettingBuringFieldUI';

const MapSettingBuringField = ({ item }: { item: MapInfo }) => {
  const burningField = useRecoilValue(getburningFieldValue(item.map_name));
  const setBurningField = useSetRecoilState(burningFieldState);

  const [sliderValue, setSliderValue] = useState<number>(burningField / 10);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setBurningField((prevBurningField) => {
      const existingItemIndex = prevBurningField.findIndex(
        (value) => value.map_name === item.map_name
      );
      if (existingItemIndex !== -1) {
        return prevBurningField.map((item, index) =>
          index === existingItemIndex
            ? { ...item, burning_field: (newValue as number) * 10 }
            : item
        );
      } else {
        return [
          ...prevBurningField,
          { map_name: item.map_name, burning_field: (newValue as number) * 10 },
        ];
      }
    });

    setSliderValue(newValue as number);
  };

  return (
    <MapSettingBuringFieldUI
      sliderValue={sliderValue}
      handleSliderChange={handleSliderChange}
    />
  );
};

export default MapSettingBuringField;
