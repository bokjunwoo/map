import { TableBody } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { burningFieldState } from '../../atoms/burningFieldState';
import { getSelectedMapData } from '../../atoms/mapDataState';
import { regionListState } from '../../atoms/regionListState';
import { useExpRateValue } from '../../contexts/ExpRateStateProvider';
import { useLevelState } from '../../contexts/LevelStateProvider';
import { MapInfo } from '../../interface/map';
import {
  calculateSumOfMonsters,
  calculateTotalExperience,
  calculateTotalMeso,
  calculateTotalMonstersWithTime,
} from '../../utils/calculate';
import MapDataRow from './MapDataRow';
import EmptyTableDataRowUI from './UI/EmptyTableDataRowUI';

type MapSortBodyProps = {
  storedValue: string;
  order: 'desc' | 'asc';
  orderBy: keyof MapInfo;
};

type TimeMap = {
  [key: string]: number;
};

const MapSortBody = ({ storedValue, order, orderBy }: MapSortBodyProps) => {
  const expRate = useExpRateValue();
  const { level: playerLevel } = useLevelState();

  const regionList = useRecoilValue(regionListState);
  const selectedMapData = useRecoilValue(getSelectedMapData(regionList));
  const burningField = useRecoilValue(burningFieldState);

  const timeMap: TimeMap = {
    '30분': 30,
    '1시간': 60,
    '2시간': 120,
  };
  const time = timeMap[storedValue] || 0;

  const updatedData = selectedMapData.map((item) => {
    const updatedBurningField = burningField.find(
      (v) => v.map_name === item.map_name
    );
    const burningFieldValue = updatedBurningField
      ? updatedBurningField.burning_field
      : item.burning_field;

    return {
      ...item,
      burning_field: burningFieldValue,
      number_of_monster: calculateSumOfMonsters(item.monsters),
      max_number_of_monster: calculateTotalMonstersWithTime(
        item.monsters,
        time
      ),
      max_experience_per_monster:
        calculateTotalExperience({
          monsters: item.monsters,
          burningField: burningFieldValue,
          expRate,
          playerLevel,
        }) * time,
      max_meso_per_monster:
        calculateTotalMeso({
          monsters: item.monsters,
          playerLevel,
        }) * time,
    };
  });

  const sortedData =
    orderBy === 'map_name'
      ? updatedData
      : updatedData.slice().sort((a, b) => {
          const aValue = a[orderBy];
          const bValue = b[orderBy];
          if (order === 'desc') {
            return aValue < bValue ? -1 : 1;
          } else {
            return bValue < aValue ? -1 : 1;
          }
        });

  return (
    <TableBody>
      {selectedMapData.length === 0 ? (
        <EmptyTableDataRowUI colSpan={8} text="선택된 맵 데이터가 없습니다" />
      ) : (
        sortedData.map((row) => (
          <MapDataRow key={row.map_name} item={row} storedValue={storedValue} />
        ))
      )}
    </TableBody>
  );
};

export default MapSortBody;
