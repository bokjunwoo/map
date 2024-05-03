import { Box, Grid } from '@mui/material';
import { listRGB } from '../../../data/color';
import { RateList } from '../../../interface/rate';
import EmptyRateUI from '../common/EmptyRateUI';
import GreedSkill from '../MesoDrop/GreedSkill';
import MesoDropAbility from '../MesoDrop/MesoDropAbility';
import MesoDropEquipmentItem from '../MesoDrop/MesoDropEquipmentItem';
import MesoDropEtc from '../MesoDrop/MesoDropEtc';
import MesoDropUnionArtifact from '../MesoDrop/MesoDropUnionArtifact';
import MesoDropWealthAcquisitionPotion from '../MesoDrop/MesoDropWealthAcquisitionPotion';
import PhantomUnion from '../MesoDrop/PhantomUnion';
import UnionWealthCoupon from '../MesoDrop/UnionWealthCoupon';
import RateItemListUI from './UI/RateItemListUI';

const MesoDropList = () => {
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
        MesoDropEquipmentItem,
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
        PhantomUnion,
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
        GreedSkill,
        MesoDropEtc,
        EmptyRateUI,
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
        {mesoDropList.map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <RateItemListUI item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MesoDropList;
