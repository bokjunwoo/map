import { Box, Grid } from '@mui/material';
import { listRGB } from '../../../data/color';
import EmptyRateUI from '../common/EmptyRateUI';
import ItemDropAbility from '../ItemDrop/ItemDropAbility';
import ItemDropEquipmentItem from '../ItemDrop/ItemDropEquipmentItem';
import ItemDropEtc from '../ItemDrop/ItemDropEtc';
import ItemDropHolySymbol from '../ItemDrop/ItemDropHolySymbol';
import ItemDropPCRoom from '../ItemDrop/ItemDropPCRoom';
import ItemDropShowDownSkill from '../ItemDrop/ItemDropShowDownSkill';
import ItemDropUnionArtifact from '../ItemDrop/ItemDropUnionArtifact';
import ItemDropWealthAcquisitionPotion from '../ItemDrop/ItemDropWealthAcquisitionPotion';
import UnionLuckCoupon from '../ItemDrop/UnionLuckCoupon';
import RateItemListUI from './UI/RateItemListUI';

const ItemDropList = () => {
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
        ItemDropEquipmentItem,
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {itemDropList.map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <RateItemListUI item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemDropList;
