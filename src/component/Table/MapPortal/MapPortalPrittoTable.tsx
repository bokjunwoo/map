import {
  PORTAL_INITIAL_TIME,
  PORTAL_EXP_MULTIPLIER,
} from '../../../constants/constants';
import useUpDownButton from '../../../hooks/useUpDownButton';
import { getTimePrittoColor } from '../../../utils/color';
import MapPortalPrittoTableUI from './UI/MapPortalPrittoTableUI';

const MapPortalPrittoTable = ({ mapInfo }: MapInfoProps) => {
  const PrittoPortalTimes = {
    dragonEggStealing: useUpDownButton({
      initialValue: PORTAL_INITIAL_TIME.DRAGON_EGG_STEALING,
    }),
    courtshipDance: useUpDownButton({
      initialValue: PORTAL_INITIAL_TIME.COURTSHIP_DANCE,
    }),
    eagleHunting: useUpDownButton({
      initialValue: PORTAL_INITIAL_TIME.EAGLE_HUNTING,
    }),
  };

  const prittoPortalTypeList: PortalTypeList[] = [
    {
      type: 'Pritto',
      label: '드래곤의 알',
      expMultiplier: PORTAL_EXP_MULTIPLIER.DRAGON_EGG_STEALING,
      playTime: PrittoPortalTimes.dragonEggStealing.count,
      increment: PrittoPortalTimes.dragonEggStealing.increment,
      decrement: PrittoPortalTimes.dragonEggStealing.decrement,
      getTimeColor: getTimePrittoColor,
    },
    {
      type: 'Pritto',
      label: '구애의 춤',
      expMultiplier: PORTAL_EXP_MULTIPLIER.COURTSHIP_DANCE,
      playTime: PrittoPortalTimes.courtshipDance.count,
      increment: PrittoPortalTimes.courtshipDance.increment,
      decrement: PrittoPortalTimes.courtshipDance.decrement,
      getTimeColor: getTimePrittoColor,
    },
    {
      type: 'Pritto',
      label: '독수리 사냥',
      expMultiplier: PORTAL_EXP_MULTIPLIER.EAGLE_HUNTING,
      playTime: PrittoPortalTimes.eagleHunting.count,
      increment: PrittoPortalTimes.eagleHunting.increment,
      decrement: PrittoPortalTimes.eagleHunting.decrement,
      getTimeColor: getTimePrittoColor,
    },
  ];

  return (
    <MapPortalPrittoTableUI
      mapInfo={mapInfo}
      prittoPortalTypeList={prittoPortalTypeList}
    />
  );
};

export default MapPortalPrittoTable;
