import { Box, SelectChangeEvent } from '@mui/material';
import { HeadCell } from '../../../interface/headCell';
import { MapInfo } from '../../../interface/map';
import { formatNumber } from '../../../utils/etc';
import SelectCellUI from '../../common/SelectCellUI';

interface TableCellContentUIProps {
  headCell: HeadCell;
  item: MapInfo;
  selectedValue: number;
  handleChange: (event: SelectChangeEvent<number>) => void;
  selectOptions: SelectOptions;
}

const TableCellContentUI = ({
  headCell,
  item,
  selectedValue,
  handleChange,
  selectOptions,
}: TableCellContentUIProps) => {
  switch (headCell.id) {
    case 'burning_field':
      return (
        <SelectCellUI
          value={selectedValue}
          onChange={handleChange}
          options={selectOptions}
        />
      );
    case 'number_of_monster':
      return <Box>{item.number_of_monster}</Box>;
    case 'max_number_of_monster':
      return <Box>{item.max_number_of_monster.toLocaleString()}</Box>;
    case 'max_experience_per_monster':
      return (
        <Box>
          {formatNumber(item.max_experience_per_monster)}
          <br />
          {item.max_experience_per_monster !== 0 &&
            `(${item.max_experience_per_monster.toLocaleString()})`}
        </Box>
      );
    case 'max_meso_per_monster':
      return (
        <Box>
          {formatNumber(item.max_meso_per_monster)}
          <br />
          {item.max_meso_per_monster !== 0 &&
            `(${item.max_meso_per_monster.toLocaleString()})`}
        </Box>
      );

    default:
      return <Box>{item[headCell.id]}</Box>;
  }
};

export default TableCellContentUI;
