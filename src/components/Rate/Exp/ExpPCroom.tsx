import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const ExpPcRoom = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: 'PC_room',
  });

  const rateOption: RateSelectOption = {
    label: '프리미엄 PC방',
    key: 'PC_room',
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
