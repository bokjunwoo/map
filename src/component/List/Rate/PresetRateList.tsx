import { listRGB } from '../../../data/color';
import AccumulationPotion from '../../Rate/Preset/AccumulationPotion';
import ExpCoupon from '../../Rate/Preset/ExpCoupon';
import ExpPcRoom from '../../Rate/Preset/ExpPCroom';
import ExtremeGoldPotion from '../../Rate/Preset/ExtremeGoldPotion';
import MvpCoupon from '../../Rate/Preset/MvpCoupon';
import UnionLuckCoupon from '../../Rate/Preset/UnionLuckCoupon';
import UnionWealthCoupon from '../../Rate/Preset/UnionWealthCoupon';
import VIPCoupon from '../../Rate/Preset/VIPCoupon';
import WealthAcquisitionPotion from '../../Rate/Preset/WealthAcquisitionPotion';
import PresetListUI from './UI/PresetListUI';

const PresetRateList = () => {
  const presetList: RateList[] = [
    {
      label: '경험치 획득량',
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
      label: '아이템 드롭률 / 메소 획득량',
      Components: [UnionLuckCoupon, UnionWealthCoupon, WealthAcquisitionPotion],
      rgb: listRGB.green,
    },
  ];

  return <PresetListUI rateList={presetList} />;
};

export default PresetRateList;
