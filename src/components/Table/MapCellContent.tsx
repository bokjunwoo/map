import { SelectChangeEvent } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  burningFieldState,
  getburningFieldValue,
} from '../../atoms/burningFieldState';
import MapCellContentUI from './UI/MapCellContentUI';

interface MapCellContentProps {
  headCell: HeadCell;
  item: MapInfo;
}

const MapCellContent = ({ headCell, item }: MapCellContentProps) => {
  const burningField = useRecoilValue(getburningFieldValue(item.map_name));
  const setBurningField = useSetRecoilState(burningFieldState);

  const selectOptions: SelectOptions = {
    label: '버닝',
    values: Array.from({ length: 11 }, (_, index) => ({
      value: index * 10,
      label: String(index),
    })),
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
  };

  return (
    <MapCellContentUI
      headCell={headCell}
      item={item}
      selectedValue={burningField}
      handleChange={handleChange}
      selectOptions={selectOptions}
    />
  );
};

export default MapCellContent;
