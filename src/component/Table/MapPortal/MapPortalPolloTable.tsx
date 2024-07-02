import {
  PORTAL_INITIAL_TIME,
  PORTAL_EXP_MULTIPLIER,
} from '../../../constants/constants';
import useUpDownButton from '../../../hooks/useUpDownButton';
import { getTimePolloColor } from '../../../utils/color';
import MapPortalPolloTableUI from './UI/MapPortalPolloTableUI';

const MapPortalPolloTable = ({ mapInfo }: MapInfoProps) => {
  const PolloPortalTimes = {
    castleGates: useUpDownButton(PORTAL_INITIAL_TIME.CASTLE_GATES),
    bountyHunting: useUpDownButton(PORTAL_INITIAL_TIME.BOUNTY_HUNTING),
    stormwing: useUpDownButton(PORTAL_INITIAL_TIME.STORMWING),
  };

  const polloPortalTypeList: PortalTypeList[] = [
    {
      type: 'Pollo',
      label: '성벽 지키기',
      expMultiplier: PORTAL_EXP_MULTIPLIER.CASTLE_GATES,
      initialPlayTime: PORTAL_INITIAL_TIME.CASTLE_GATES,
      playTime: PolloPortalTimes.castleGates.count,
      increment: PolloPortalTimes.castleGates.increment,
      decrement: PolloPortalTimes.castleGates.decrement,
      getTimeColor: getTimePolloColor,
    },
    {
      type: 'Pollo',
      label: '현상금 사냥',
      expMultiplier: PORTAL_EXP_MULTIPLIER.BOUNTY_HUNTING,
      initialPlayTime: PORTAL_INITIAL_TIME.BOUNTY_HUNTING,
      playTime: PolloPortalTimes.bountyHunting.count,
      increment: PolloPortalTimes.bountyHunting.increment,
      decrement: PolloPortalTimes.bountyHunting.decrement,
      getTimeColor: getTimePolloColor,
    },
    {
      type: 'Pollo',
      label: '스톰윙',
      expMultiplier: PORTAL_EXP_MULTIPLIER.STORMWING,
      initialPlayTime: PORTAL_INITIAL_TIME.STORMWING,
      playTime: PolloPortalTimes.stormwing.count,
      increment: PolloPortalTimes.stormwing.increment,
      decrement: PolloPortalTimes.stormwing.decrement,
      getTimeColor: getTimePolloColor,
    },
  ];

  return (
    <MapPortalPolloTableUI
      mapInfo={mapInfo}
      polloPortalTypeList={polloPortalTypeList}
    />
  );
};

export default MapPortalPolloTable;
