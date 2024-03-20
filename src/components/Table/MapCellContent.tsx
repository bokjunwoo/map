import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { burningFieldState } from '../../atoms/burningFieldState';
import { MapInfo } from '../../interface/data';
import { HeadCell } from '../../interface/headCell';
import { SelectOptions } from '../../interface/select';
import MapCellContentUI from './UI/MapCellContentUI';

interface MapCellContentProps {
  headCell: HeadCell;
  item: MapInfo;
}

const MapCellContent = ({ headCell, item }: MapCellContentProps) => {
  const setBurningField = useSetRecoilState(burningFieldState);

  const [selectedValue, setSelectedValue] = useState(item.burning_field);

  const selectOptions: SelectOptions = {
    label: '버닝',
    values: [
      { value: 0, label: '0' },
      { value: 10, label: '1' },
      { value: 20, label: '2' },
      { value: 30, label: '3' },
      { value: 40, label: '4' },
      { value: 50, label: '5' },
      { value: 60, label: '6' },
      { value: 70, label: '7' },
      { value: 80, label: '8' },
      { value: 90, label: '9' },
      { value: 100, label: '10' },
    ],
  };

  const handleChange = (event: SelectChangeEvent<number>) => {
    const targetValue = Number(event.target.value);
    setBurningField((prevBurningField) => {
      const existingItemIndex = prevBurningField.findIndex(
        (value) => value.map_name === item.map_name
      );
      if (existingItemIndex !== -1) {
        return prevBurningField.map((item, index) =>
          index === existingItemIndex
            ? { ...item, burning_field: targetValue }
            : item
        );
      } else {
        return [
          ...prevBurningField,
          { map_name: item.map_name, burning_field: targetValue },
        ];
      }
    });
    setSelectedValue(targetValue);
  };

  return (
    <MapCellContentUI
      headCell={headCell}
      item={item}
      selectedValue={selectedValue}
      handleChange={handleChange}
      selectOptions={selectOptions}
    />
  );
};

export default MapCellContent;
