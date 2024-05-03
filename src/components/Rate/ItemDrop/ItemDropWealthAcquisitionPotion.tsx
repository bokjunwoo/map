import { itemDropState } from '../../../atoms/itemDropState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const ItemDropWealthAcquisitionPotion = () => {
  const { value, handleRateChange } = useRateSelect({
    state: itemDropState,
    rateName: 'wealth_acquisition_potion',
  });

  const rateOption: RateSelectOption = {
    label: '재물 획득의 비약',
    key: 'wealth_acquisition_potion',
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

export default ItemDropWealthAcquisitionPotion;
