import { useRecoilValue } from 'recoil';
import { burningFieldState } from '../../../atoms/burningFieldState';
import { totalExpSelector } from '../../../atoms/expRateState';
import { totalItemDropSelector } from '../../../atoms/itemDropState';
import { getSelectedMapData } from '../../../atoms/mapDataState';
import { regionListState } from '../../../atoms/regionListState';
import { userLevelState } from '../../../atoms/userLevelState';
import {
  calculateItemDropMultiplier,
  calculateSumOfMonsters,
  calculateTotalMonstersWithTime,
  calculateTotalExperience,
  calculateTotalMeso,
} from '../../../utils/calculate';
import EmptyTableRowCommon from '../common/EmptyTableDataRowUI';
import MapTableSortBodyUI from './UI/MapTableSortBodyUI';

type MapSortBodyProps = {
  storedValue: string;
  order: 'desc' | 'asc';
  orderBy: keyof MapInfo;
};

type TimeMap = {
  [key: string]: number;
};

const MapSortBody = ({ storedValue, order, orderBy }: MapSortBodyProps) => {
  const expRate = useRecoilValue(totalExpSelector);
  const itemDropRate = useRecoilValue(totalItemDropSelector);
  const userLevel = useRecoilValue(userLevelState);

  const regionList = useRecoilValue(regionListState);
  const selectedMapData = useRecoilValue(getSelectedMapData(regionList));
  const burningField = useRecoilValue(burningFieldState);

  const itemDropMultiplier = calculateItemDropMultiplier(itemDropRate);

  const timeMap: TimeMap = {
    '30분': 30,
    '1시간': 60,
    '2시간': 120,
  };
  const time = timeMap[storedValue] || 0;

  const updatedData = selectedMapData.map((mapInfo) => {
    const updatedBurningField = burningField.find(
      (v) => v.map_name === mapInfo.map_name
    );
    const burningFieldValue = updatedBurningField
      ? updatedBurningField.burning_field
      : mapInfo.burning_field;

    return {
      ...mapInfo,
      burning_field: burningFieldValue,
      number_of_monster: calculateSumOfMonsters(mapInfo.monsters),
      max_number_of_monster: calculateTotalMonstersWithTime(
        mapInfo.monsters,
        time
      ),
      max_experience_per_monster:
        calculateTotalExperience({
          monsters: mapInfo.monsters,
          burningField: burningFieldValue,
          expRate,
          userLevel,
        }) * time,
      max_meso_per_monster:
        calculateTotalMeso({
          monsters: mapInfo.monsters,
          userLevel,
        }) *
        time *
        itemDropMultiplier,
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
    <>
      {selectedMapData.length === 0 ? (
        <EmptyTableRowCommon colSpan={8} text="선택된 맵(지역)이 없습니다" />
      ) : (
        sortedData.map((row) => (
          <MapTableSortBodyUI
            key={row.map_name}
            item={row}
            storedValue={storedValue}
          />
        ))
      )}
    </>
  );
};

export default MapSortBody;
