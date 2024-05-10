import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../../atoms/expRateState';
import { listRGB } from '../../../data/color';
import { CheckBoxGroup, RateListOption } from '../../../interface/stats';
import MapRateUI from '../common/MapStatsUI';

type MapPortalRateProps = {
  state: { rune: boolean; sundayEvent: boolean };
  onChangeCheckBox: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const MapPortalRate = ({ state, onChangeCheckBox }: MapPortalRateProps) => {
  const expRate = useRecoilValue(totalExpSelector);

  const rateList: RateListOption[] = [
    {
      iconName: 'exp',
      value: expRate,
      text: '경험치 획득량',
      bgcolor: `rgba(${listRGB.blue}, 0.3)`,
    },
  ];
  const checkBoxList: CheckBoxGroup = {
    onChange: onChangeCheckBox,
    option: [
      {
        checked: state.rune,
        text: '룬 2배',
        name: 'rune',
        bgcolor: `rgba(${listRGB.purple}, 0.3)`,
      },
      {
        checked: state.sundayEvent,
        text: '선데이 메이플',
        name: 'sundayEvent',
        bgcolor: `rgba(${listRGB.red}, 0.6)`,
      },
    ],
  };

  return <MapRateUI rateList={rateList} checkBoxList={checkBoxList} />;
};

export default MapPortalRate;
