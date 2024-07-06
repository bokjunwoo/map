import { mesoDropState, rateValueSelector } from '../../../atoms/mesoDropState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const SkillGreed = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: mesoDropState,
    rateName: RATE_NAME.SKILL_GREED,
  });

  const rateOption: RateSelectOption = {
    label: '그리드(섀도어)',
    key: RATE_NAME.SKILL_GREED,
    values: [
      { value: 0, label: '미적용' },
      { value: 20, label: '적용 (+20%)' },
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

export default SkillGreed;
