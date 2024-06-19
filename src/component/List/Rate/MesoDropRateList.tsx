import { listRGB } from '../../../data/color';
import EmptyRateUI from '../../Rate/common/EmptyRateUI';
import MesoDropAbility from '../../Rate/MesoDrop/MesoDropAbility';
import MesoDropEtc from '../../Rate/MesoDrop/MesoDropEtc';
import MesoDropItemEquipment from '../../Rate/MesoDrop/MesoDropItemEquipment';
import MesoDropUnionArtifact from '../../Rate/MesoDrop/MesoDropUnionArtifact';
import MesoDropWealthAcquisitionPotion from '../../Rate/MesoDrop/MesoDropWealthAcquisitionPotion';
import SkillGreed from '../../Rate/MesoDrop/SkillGreed';
import UnionPhantom from '../../Rate/MesoDrop/UnionPhantom';
import UnionWealthCoupon from '../../Rate/MesoDrop/UnionWealthCoupon';
import RateGridUI from './UI/RateGridUI';

const MesoDropRateList = () => {
  const mesoDropList: RateList[] = [
    {
      label: '버프 아이템',
      Components: [
        UnionWealthCoupon,
        MesoDropWealthAcquisitionPotion,
        EmptyRateUI,
        EmptyRateUI,
        EmptyRateUI,
        EmptyRateUI,
      ],
      rgb: listRGB.blue,
    },
    {
      label: '착용 아이템',
      Components: [
        MesoDropItemEquipment,
        EmptyRateUI,
        EmptyRateUI,
        EmptyRateUI,
        EmptyRateUI,
        EmptyRateUI,
      ],
      rgb: listRGB.green,
    },
    {
      label: '유니온 / 스탯',
      Components: [
        MesoDropUnionArtifact,
        UnionPhantom,
        MesoDropAbility,
        EmptyRateUI,
        EmptyRateUI,
        EmptyRateUI,
      ],
      rgb: listRGB.orange,
    },
    {
      label: '스킬 관련 / 기타',
      Components: [
        SkillGreed,
        MesoDropEtc,
        EmptyRateUI,
        EmptyRateUI,
        EmptyRateUI,
        EmptyRateUI,
      ],
      rgb: listRGB.purple,
    },
  ];
  return <RateGridUI rateList={mesoDropList} />;
};

export default MesoDropRateList;
