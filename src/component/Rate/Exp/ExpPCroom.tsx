import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const ExpPcRoom = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.PC_ROOM,
  });

  const rateOption: RateSelectOption = {
    label: '프리미엄 PC방',
    key: RATE_NAME.PC_ROOM,
    values: [
      { value: 0, label: '미적용' },
      { value: 30, label: '적용 (+30%)' },
    ],
  };

  return (
    <RateSelectUI
      option={rateOption}
      value={value}
      handleChange={handleRateChange}
    />
  );
};

export default ExpPcRoom;
