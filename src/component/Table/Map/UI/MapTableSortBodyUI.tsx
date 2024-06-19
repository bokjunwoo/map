import { TableBody } from '@mui/material';
import { symbolsColor } from '../../../../data/color';
import { generateHeadCells } from '../../../../data/headCell';
import useToggle from '../../../../hooks/useToggle';
import MapCollapseUI from '../../../Collapse/Map/MapCollapseUI';
import TableRowUI from '../../common/TableRowUI';
import TableToggleButtonCellUI from '../../common/TableToggleButtonCellUI';
import MapCellContent from '../MapCellContent';

type MapTableSortBodyUIProps = {
  item: MapInfo;
  storedValue: string;
};

const MapTableSortBodyUI = ({ item, storedValue }: MapTableSortBodyUIProps) => {
  const [isOpen, toggleOpen] = useToggle(false);

  const headCells = generateHeadCells(storedValue);
  const backgroundColor = symbolsColor[item.map_region].bgColor;

  return (
    <TableBody>
      <TableRowUI hover={false} open={isOpen} bgColor={backgroundColor}>
        <TableToggleButtonCellUI
          open={isOpen}
          toggleOpen={toggleOpen}
          padding={1}
        />

        {headCells.map((headCell) => (
          <MapCellContent key={headCell.id} item={item} headCell={headCell} />
        ))}
      </TableRowUI>

      <MapCollapseUI open={isOpen} mapInfo={item} />
    </TableBody>
  );
};

export default MapTableSortBodyUI;
