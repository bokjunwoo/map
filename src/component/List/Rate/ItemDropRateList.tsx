import { listRGB } from '../../../data/color';
import EmptyRateUI from '../../Rate/common/EmptyRateUI';
import ItemDropAbility from '../../Rate/ItemDrop/ItemDropAbility';
import ItemDropEtc from '../../Rate/ItemDrop/ItemDropEtc';
import ItemDropHolySymbol from '../../Rate/ItemDrop/ItemDropHolySymbol';
import ItemDropItemEquipment from '../../Rate/ItemDrop/ItemDropItemEquipment';
import ItemDropPCRoom from '../../Rate/ItemDrop/ItemDropPCRoom';
import ItemDropShowDownSkill from '../../Rate/ItemDrop/ItemDropShowDownSkill';
import ItemDropUnionArtifact from '../../Rate/ItemDrop/ItemDropUnionArtifact';
import ItemDropWealthAcquisitionPotion from '../../Rate/ItemDrop/ItemDropWealthAcquisitionPotion';
import UnionLuckCoupon from '../../Rate/ItemDrop/UnionLuckCoupon';
import RateGridUI from './UI/RateGridUI';

const ItemDropRateList = () => {
  const itemDropList: RateList[] = [
    {
      label: '버프 아이템',
      Components: [
        UnionLuckCoupon,
        ItemDropWealthAcquisitionPotion,
        ItemDropPCRoom,
        EmptyRateUI,
        EmptyRateUI,
        EmptyRateUI,
      ],
      rgb: listRGB.blue,
    },
    {
      label: '착용 아이템',
      Components: [
        ItemDropItemEquipment,
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
        ItemDropUnionArtifact,
        ItemDropAbility,
        EmptyRateUI,
        EmptyRateUI,
        EmptyRateUI,
        EmptyRateUI,
      ],
      rgb: listRGB.orange,
    },
    {
      label: '스킬 관련 / 기타',
      Components: [
        ItemDropHolySymbol,
        ItemDropShowDownSkill,
        ItemDropEtc,
        EmptyRateUI,
        EmptyRateUI,
        EmptyRateUI,
      ],
      rgb: listRGB.purple,
    },
  ];
  return <RateGridUI rateList={itemDropList} />;
};

export default ItemDropRateList;
