import { expRateState, rateValueSelector } from '../../../atoms/expRateState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const ExpShowDownSkill = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: expRateState,
    rateName: RATE_NAME.SHOW_DOWN_SKILL,
  });

  const rateOption: RateSelectOption = {
    label: '쇼다운 챌린지(나로)',
    key: RATE_NAME.SHOW_DOWN_SKILL,
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
