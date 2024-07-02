import {
  PORTAL_INITIAL_TIME,
  PORTAL_EXP_MULTIPLIER,
} from '../../../constants/constants';
import useSelectState from '../../../hooks/useSelectState';
import useUpDownButton from '../../../hooks/useUpDownButton';
import { getTimePrittoColor } from '../../../utils/color';
import MapPortalPrittoTableUI from './UI/MapPortalPrittoTableUI';

const MapPortalPrittoTable = ({ mapInfo }: MapInfoProps) => {
  const [dragonEggStealingExpMultiplier, handleDragonEggStealingChange] =
    useSelectState(PORTAL_EXP_MULTIPLIER.DRAGON_EGG_STEALING);
  const [eagleHuntingExpMultiplier, handleEagleHuntingChange] = useSelectState(
    PORTAL_EXP_MULTIPLIER.EAGLE_HUNTING
  );

  const PrittoPortalTimes = {
    dragonEggStealing: useUpDownButton(PORTAL_INITIAL_TIME.DRAGON_EGG_STEALING),
    courtshipDance: useUpDownButton(PORTAL_INITIAL_TIME.COURTSHIP_DANCE),
    eagleHunting: useUpDownButton(PORTAL_INITIAL_TIME.EAGLE_HUNTING),
  };

  const dragonEggStealingItem = [
    { label: '1단계 (EXP x 240)', value: 240 },
    { label: '2단계 (EXP x 480)', value: 480 },
    { label: '3단계 (EXP x 720)', value: 720 },
    { label: '4단계 (EXP x 1200)', value: 1200 },
    { label: '5단계 (EXP x 1680)', value: 1680 },
    { label: '완주 (EXP x 2400)', value: 2400 },
  ];

  const eagleHuntingItem = [
    { label: '0 ~ 300점 (EXP x 240)', value: 240 },
    { label: '350 ~ 600점 (EXP x 480)', value: 480 },
    { label: '650 ~ 950점 (EXP x 720)', value: 720 },
    { label: '1000점 (EXP x 1200)', value: 1200 },
  ];

  const prittoPortalTypeList: PortalTypeList[] = [
    {
      type: 'Pritto',
      label: '드래곤의 알',
      expMultiplier: dragonEggStealingExpMultiplier,
      initialPlayTime: PORTAL_INITIAL_TIME.DRAGON_EGG_STEALING,
      playTime: PrittoPortalTimes.dragonEggStealing.count,
      increment: PrittoPortalTimes.dragonEggStealing.increment,
      decrement: PrittoPortalTimes.dragonEggStealing.decrement,
      getTimeColor: getTimePrittoColor,
      menuItem: dragonEggStealingItem,
      expMultiplierChange: handleDragonEggStealingChange,
    },
    {
      type: 'Pritto',
      label: '구애의 춤',
      expMultiplier: PORTAL_EXP_MULTIPLIER.COURTSHIP_DANCE,
      initialPlayTime: PORTAL_INITIAL_TIME.COURTSHIP_DANCE,
      playTime: PrittoPortalTimes.courtshipDance.count,
      increment: PrittoPortalTimes.courtshipDance.increment,
      decrement: PrittoPortalTimes.courtshipDance.decrement,
      getTimeColor: getTimePrittoColor,
      menuText: '10단계 (EXP x 1200)',
    },
    {
      type: 'Pritto',
      label: '독수리 사냥',
      expMultiplier: eagleHuntingExpMultiplier,
      initialPlayTime: PORTAL_INITIAL_TIME.EAGLE_HUNTING,
      playTime: PrittoPortalTimes.eagleHunting.count,
      increment: PrittoPortalTimes.eagleHunting.increment,
      decrement: PrittoPortalTimes.eagleHunting.decrement,
      getTimeColor: getTimePrittoColor,
      menuItem: eagleHuntingItem,
      expMultiplierChange: handleEagleHuntingChange,
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
