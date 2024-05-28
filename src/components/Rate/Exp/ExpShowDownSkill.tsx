import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const ExpShowDownSkill = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: 'show_down_skill',
  });

  const rateOption: RateSelectOption = {
    label: '쇼다운 챌린지(나로)',
    key: 'show_down_skill',
    values: [
      { value: 0, label: '미적용' },
      { value: 5, label: '기본 (+5%)' },
      { value: 10, label: '하이퍼 스킬 (+10%)' },
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

export default ExpShowDownSkill;
