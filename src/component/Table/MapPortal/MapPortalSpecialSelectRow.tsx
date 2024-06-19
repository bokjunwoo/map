import { SelectChangeEvent } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../atoms/userLevelState';
import { PORTAL_EXP_MULTIPLIER } from '../../../constants/constants';
import MapPortalSelectRowUI from './UI/MapPortalSelectRowUI';

type MapPortalPrittoSelectRowProps = {
  wolfExpMultiplier: number;
  handleWolfExpMultiplierChange: (event: SelectChangeEvent<unknown>) => void;
};

const MapPortalPrittoSelectRow = ({
  wolfExpMultiplier,
  handleWolfExpMultiplierChange,
}: MapPortalPrittoSelectRowProps) => {
  const userLevel = useRecoilValue(userLevelState);

  const infernoWolfExtremeItem = [
    { label: '적당한 (EXP x 800)', value: 800 },
    { label: '상당한 (EXP x 1500)', value: 1500 },
    { label: '치명적인 (EXP x 1600)', value: 1600 },
    { label: '처치 (EXP x 1700)', value: 1700 },
  ];
  const infernoWolfChaosItem = [
    { label: '적당한 (EXP x 800)', value: 600 },
    { label: '상당한 (EXP x 1500)', value: 1100 },
    { label: '치명적인 (EXP x 1600)', value: 1200 },
    { label: '처치 (EXP x 1700)', value: 1300 },
  ];

  const prittoPortalSelectTypeList: PortalSelectTypeList[] = [
    {
      label: '에스페시아',
      initialExpMultiplier: PORTAL_EXP_MULTIPLIER.TOTEM_SLASH,
      text: '-',
    },
    {
      label: '불꽃 늑대',
      initialExpMultiplier: wolfExpMultiplier,
      menuItem:
        userLevel >= 260 ? infernoWolfExtremeItem : infernoWolfChaosItem,
      handleChange: handleWolfExpMultiplierChange,
    },
  ];

  return (
    <MapPortalSelectRowUI portalSelectTypeList={prittoPortalSelectTypeList} />
  );
};

export default MapPortalPrittoSelectRow;
