import { useRecoilValue } from 'recoil';
import { numberOfMonsterState } from '../../../atoms/numberOfMonsterState';
import MapCalculateMobResultTableUI from './UI/MapCalculateMobResultTableUI';

const MapCalculateMobResultTable = ({ mapInfo }: MapInfoProps) => {
  const editNumberOfMonster = useRecoilValue(
    numberOfMonsterState(mapInfo.map_name)
  );

  const updatedMap = { ...mapInfo, number_of_monster: editNumberOfMonster };

  return (
    <MapCalculateMobResultTableUI
      mapInfo={updatedMap}
      initialNumberOfMonster={mapInfo.number_of_monster}
    />
  );
};

export default MapCalculateMobResultTable;
