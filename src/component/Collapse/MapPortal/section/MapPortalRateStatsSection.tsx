import { listRGB } from '../../../../data/color';
import usePortalCheckInfo from '../../../../hooks/usePortalCheckInfo';
import useRateInfo from '../../../../hooks/useRateInfo';
import useUpDownButton from '../../../../hooks/useUpDownButton';
import MapStatsUI from '../../../List/common/MapStatsUI';

const MapPortalRateStatsSection = () => {
  const { onChangeCheckBox, checkRuneInfo, checkSundayEventInfo } =
    usePortalCheckInfo();

  const { count, increment, decrement } = useUpDownButton(0);

  const { expInfo } = useRateInfo({});

  const rateList: RateListOption[] = [expInfo];

  const checkBoxList: CheckBoxGroup = {
    onChange: onChangeCheckBox,
    option: [checkRuneInfo, checkSundayEventInfo],
  };

  const buffButtonOption: BuffButtonOption = {
    bgcolor: `rgba(${listRGB.orange}, 0.5)`,
    text: '메디사의 축복',
    count,
    increment,
    decrement,
    disableIncrement: 5,
    disableDecrement: 0,
  };

  return (
    <MapStatsUI
      rateList={rateList}
      checkBoxList={checkBoxList}
      buffButtonOption={buffButtonOption}
    />
  );
};

export default MapPortalRateStatsSection;
