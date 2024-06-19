import { listRGB } from '../../../data/color';
import EmptyRateUI from '../../Rate/common/EmptyRateUI';
import AccumulationPotion from '../../Rate/Exp/AccumulationPotion';
import BoostRing from '../../Rate/Exp/BoostRing';
import ElvenBlessing from '../../Rate/Exp/ElvenBlessing';
import ExpCoupon from '../../Rate/Exp/ExpCoupon';
import ExpEtc from '../../Rate/Exp/ExpEtc';
import ExpEventStat from '../../Rate/Exp/ExpEventStat';
import ExpHolySymbol from '../../Rate/Exp/ExpHolySymbol';
import ExpPcRoom from '../../Rate/Exp/ExpPCroom';
import ExpShowDownSkill from '../../Rate/Exp/ExpShowDownSkill';
import ExpTitle from '../../Rate/Exp/ExpTitle';
import ExpUnionArtifact from '../../Rate/Exp/ExpUnionArtifact';
import ExtremeGoldPotion from '../../Rate/Exp/ExtremeGoldPotion';
import HyperStat from '../../Rate/Exp/HyperStat';
import KinshipRing from '../../Rate/Exp/KinshipRing';
import LoadedDice from '../../Rate/Exp/LoadedDice';
import MvpCoupon from '../../Rate/Exp/MvpCoupon';
import SolJanus from '../../Rate/Exp/SolJanus';
import SpiritPendant from '../../Rate/Exp/SpiritPendant';
import UnionOccupied from '../../Rate/Exp/UnionOccupied';
import UnionZero from '../../Rate/Exp/UnionZero';
import VIPCoupon from '../../Rate/Exp/VIPCoupon';
import RateGridUI from './UI/RateGridUI';

const ExpRateList = () => {
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
        UnionOccupied,
        UnionZero,
        HyperStat,
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
        ExpEventStat,
        ExpEtc,
      ],
      rgb: listRGB.purple,
    },
  ];

  return <RateGridUI rateList={expList} />;
};

export default ExpRateList;
