import { PORTAL_EXP_MULTIPLIER } from '../../../constants/constants';
import useSelectState from '../../../hooks/useSelectState';
import MapPortalSelectRowUI from './UI/MapPortalSelectRowUI';

const MapPortalPrittoSelectRow = () => {
  const [eagleHuntingExpMultiplier, handleEagleHuntingChange] = useSelectState(
    PORTAL_EXP_MULTIPLIER.EAGLE_HUNTING
  );
  const [dragonEggStealingExpMultiplier, handleDragonEggStealingChange] =
    useSelectState(PORTAL_EXP_MULTIPLIER.DRAGON_EGG_STEALING);

  const dragonEggStealingItem = [
    { label: '1단계 (EXP x 240)', value: 240 },
    { label: '2단계 (EXP x 480)', value: 480 },
    { label: '3단계 (EXP x 720)', value: 720 },
    { label: '4단계 (EXP x 1200)', value: 1200 },
    { label: '5단계 (EXP x 1680)', value: 1680 },
    { label: '완주 (EXP x 2400)', value: 2400 },
  ];

  const courtshipDanceExpMultiplier = PORTAL_EXP_MULTIPLIER.COURTSHIP_DANCE;

  const eagleHuntingItem = [
    { label: '0 ~ 300점 (EXP x 240)', value: 240 },
    { label: '350 ~ 600점 (EXP x 480)', value: 480 },
    { label: '650 ~ 950점 (EXP x 720)', value: 720 },
    { label: '1000점 (EXP x 1200)', value: 1200 },
  ];

  const prittoPortalSelectTypeList: PortalSelectTypeList[] = [
    {
      label: '드래곤의 알',
      initialExpMultiplier: dragonEggStealingExpMultiplier,
      menuItem: dragonEggStealingItem,
      handleChange: handleDragonEggStealingChange,
    },
    {
      label: '구애의 춤',
      initialExpMultiplier: courtshipDanceExpMultiplier,
      text: ' 10단계 (EXP x 1200)',
    },
    {
      label: '독수리 사냥',
      initialExpMultiplier: eagleHuntingExpMultiplier,
      menuItem: eagleHuntingItem,
      handleChange: handleEagleHuntingChange,
    },
  ];

  return (
    <MapPortalSelectRowUI portalSelectTypeList={prittoPortalSelectTypeList} />
  );
};

export default MapPortalPrittoSelectRow;
