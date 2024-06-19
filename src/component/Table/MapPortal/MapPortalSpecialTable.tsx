import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../atoms/userLevelState';
import {
  PORTAL_INITIAL_TIME,
  PORTAL_EXP_MULTIPLIER,
} from '../../../constants/constants';
import useSelectState from '../../../hooks/useSelectState';
import useUpDownButton from '../../../hooks/useUpDownButton';
import { getTimePolloColor, getTimePrittoColor } from '../../../utils/color';
import MapPortalSpecialTableUI from './UI/MapPortalSpecialTableUI';

const MapPortalSpecialTable = ({ mapInfo }: MapInfoProps) => {
  const userLevel = useRecoilValue(userLevelState);

  const [infernoWolfExtremeExpMultiplier, handleInfernoWolfExtremeChange] =
    useSelectState(PORTAL_EXP_MULTIPLIER.INFERNO_WOLF_EXTREME);
  const [infernoWolfChaosExpMultiplier, handleInfernoWolfChaosChange] =
    useSelectState(PORTAL_EXP_MULTIPLIER.INFERNO_WOLF_CHAOS);

  const wolfMode = userLevel >= 260 ? '익스트림' : '카오스';
  const wolfExpMultiplier =
    userLevel >= 260
      ? infernoWolfExtremeExpMultiplier
      : infernoWolfChaosExpMultiplier;
  const handleWolfExpMultiplierChange =
    userLevel >= 260
      ? handleInfernoWolfExtremeChange
      : handleInfernoWolfChaosChange;

  const specialPortalTimes = {
    totemSlash: useUpDownButton({
      initialValue: PORTAL_INITIAL_TIME.TOTEM_SLASH,
    }),
    infernoWolf: useUpDownButton({
      initialValue: PORTAL_INITIAL_TIME.INFERNO_WOLF,
    }),
  };

  const specialPortalTypeList: PortalTypeList[] = [
    {
      type: 'Pollo',
      label: '에스페시아',
      expMultiplier: PORTAL_EXP_MULTIPLIER.TOTEM_SLASH,
      playTime: specialPortalTimes.totemSlash.count,
      increment: specialPortalTimes.totemSlash.increment,
      decrement: specialPortalTimes.totemSlash.decrement,
      getTimeColor: getTimePolloColor,
    },
    {
      type: 'Pritto',
      label: `불꽃늑대(${wolfMode})`,
      expMultiplier: wolfExpMultiplier,
      playTime: specialPortalTimes.infernoWolf.count,
      increment: specialPortalTimes.infernoWolf.increment,
      decrement: specialPortalTimes.infernoWolf.decrement,
      getTimeColor: getTimePrittoColor,
      expMultiplierChange: handleWolfExpMultiplierChange,
    },
  ];

  return (
    <MapPortalSpecialTableUI
      mapInfo={mapInfo}
      specialPortalTypeList={specialPortalTypeList}
      wolfExpMultiplier={wolfExpMultiplier}
      handleWolfExpMultiplierChange={handleWolfExpMultiplierChange}
    />
  );
};

export default MapPortalSpecialTable;
