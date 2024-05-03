import { mesoDropState } from '../../../atoms/mesoDropState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const GreedSkill = () => {
  const { value, handleRateChange } = useRateSelect({
    state: mesoDropState,
    rateName: 'greed_skill',
  });

  const rateOption: RateSelectOption = {
    label: '그리드(섀도어)',
    key: 'greed_skill',
    values: [
      { value: 0, label: '미적용' },
      { value: 20, label: '+20%' },
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

export default GreedSkill;
