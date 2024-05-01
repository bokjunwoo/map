import { expRateState } from '../../../atoms/expRateState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const SpiritPendant = () => {
  const { value, handleRateChange } = useRateSelect(expRateState);

  const rateOption: RateSelectOption = {
    label: '정령의 팬던트',
    key: 'spirit_pendant',
    values: [
      { value: 0, label: '미적용' },
      { value: 10, label: '+10%' },
      { value: 20, label: '+20%' },
      { value: 30, label: '+30%' },
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

export default SpiritPendant;
