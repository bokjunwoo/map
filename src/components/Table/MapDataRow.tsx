import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { TableCell, TableRow, IconButton } from '@mui/material';
import { useState } from 'react';
import { symbolsColor } from '../../data/color';
import { generateHeadCells } from '../../data/headCell';
import { MapInfo } from '../../interface/map';
import MapDetailCollapseUI from '../Collapse/MapDetailCollapse';
import MapCellContent from './MapCellContent';

interface MapDataRowProps {
  item: MapInfo;
  storedValue: string;
}

const MapDataRow = ({ item, storedValue }: MapDataRowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const headCells = generateHeadCells(storedValue);
  const backgroundColor = symbolsColor[item.map_region].bgColor;

  return (
    <>
      <TableRow sx={{ bgcolor: backgroundColor }}>
        <TableCell>
          <IconButton onClick={toggleOpen}>
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        {headCells.map((headCell) => (
          <TableCell key={headCell.id} sx={{ p: 0 }}>
            <MapCellContent item={item} headCell={headCell} />
          </TableCell>
        ))}
      </TableRow>

      <MapDetailCollapseUI open={isOpen} item={item} />
    </>
  );
};

export default MapDataRow;
