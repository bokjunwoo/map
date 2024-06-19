import { SelectChangeEvent, Box, TableCell } from '@mui/material';
import SelectCellUI from '../../../../components/common/SelectCellUI';
import { formatNumber } from '../../../../utils/etc';

type MapCellUIProps = {
  headCell: HeadCell;
  item: MapInfo;
  selectedValue: number;
  handleChange: (event: SelectChangeEvent<number>) => void;
  selectOptions: SelectOptions;
};

const MapCellUI = ({
  headCell,
  item,
  selectedValue,
  handleChange,
  selectOptions,
}: MapCellUIProps) => {
  let content;

  switch (headCell.id) {
    case 'burning_field':
      content = (
        <SelectCellUI
          value={selectedValue}
          onChange={handleChange}
          options={selectOptions}
        />
      );
      break;
    case 'number_of_monster':
      content = <Box>{item.number_of_monster}</Box>;
      break;
    case 'max_number_of_monster':
      content = <Box>{item.max_number_of_monster.toLocaleString()}</Box>;
      break;
    case 'max_experience_per_monster':
      content = (
        <Box>
          {formatNumber(item.max_experience_per_monster)}
          <br />
          {item.max_experience_per_monster !== 0 &&
            `(${item.max_experience_per_monster.toLocaleString()})`}
        </Box>
      );
      break;
    case 'max_meso_per_monster':
      content = (
        <Box>
          {formatNumber(item.max_meso_per_monster)}
          <br />
          {item.max_meso_per_monster !== 0 &&
            `(${item.max_meso_per_monster.toLocaleString()})`}
        </Box>
      );
      break;
    default:
      content = <Box>{item[headCell.id]}</Box>;
      break;
  }

  return (
    <TableCell key={headCell.id} sx={{ p: 1 }}>
      {content}
    </TableCell>
  );
};

export default MapCellUI;
