import { Box, Grid } from '@mui/material';
import { listRGB } from '../../../data/color';
import EmptyRateUI from '../common/EmptyRateUI';
import AccumulationPotion from '../Exp/AccumulationPotion';
import BoostRing from '../Exp/BoostRing';
import ElvenBlessing from '../Exp/ElvenBlessing';
import ExpCoupon from '../Exp/ExpCoupon';
import ExpEtc from '../Exp/ExpEtc';
import ExpEventSkill from '../Exp/ExpEventSkill';
import ExpHolySymbol from '../Exp/ExpHolySymbol';
import ExpPcRoom from '../Exp/ExpPCroom';
import ExpShowDownSkill from '../Exp/ExpShowDownSkill';
import ExpTitle from '../Exp/ExpTitle';
import ExpUnionArtifact from '../Exp/ExpUnionArtifact';
import ExtremeGoldPotion from '../Exp/ExtremeGoldPotion';
import HyperStats from '../Exp/HyperStats';
import KinshipRing from '../Exp/KinshipRing';
import LoadedDice from '../Exp/LoadedDice';
import MvpCoupon from '../Exp/MvpCoupon';
import SolJanus from '../Exp/SolJanus';
import SpiritPendant from '../Exp/SpiritPendant';
import UnionPlacement from '../Exp/UnionPlacement';
import VIPCoupon from '../Exp/VIPCoupon';
import ZeroUnion from '../Exp/ZeroUnion';
import RateItemListUI from './UI/RateItemListUI';

const ExpList = () => {
  const expList: RateList[] = [
    {
      label: '버프 아이템',
      Components: [
        ExpCoupon,
        MvpCoupon,
        ExtremeGoldPotion,
        AccumulationPotion,
        VIPCoupon,
        ExpPcRoom,
      ],
      rgb: listRGB.blue,
    },
    {
      label: '착용 아이템',
      Components: [
        SpiritPendant,
        BoostRing,
        KinshipRing,
        ExpTitle,
        EmptyRateUI,
        EmptyRateUI,
      ],
      rgb: listRGB.green,
    },
    {
      label: '유니온 / 스탯 / 링크',
      Components: [
        ExpUnionArtifact,
        UnionPlacement,
        ZeroUnion,
        HyperStats,
        ElvenBlessing,
        EmptyRateUI,
      ],
      rgb: listRGB.orange,
    },
    {
      label: '스킬 관련 / 기타',
      Components: [
        ExpHolySymbol,
        SolJanus,
        LoadedDice,
        ExpShowDownSkill,
        ExpEventSkill,
        ExpEtc,
      ],
      rgb: listRGB.purple,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {expList.map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <RateItemListUI item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExpList;
