import { RATE_NAME } from '../../../constants/constants';
import usePresetRateSelcet from '../../../hooks/usePresetRateSelcet';
import RateSelectUI from '../common/RateSelectUI';

const ItemDropWealthAcquisitionPotion = () => {
  const { value, handleRateChange } = usePresetRateSelcet({
    rateName: RATE_NAME.WEALTH_ACQUISITION_POTION,
    key: 'item_drop_rate_preset',
  });

  const rateOption: RateSelectOption = {
    label: '재물 획득의 비약',
    key: RATE_NAME.WEALTH_ACQUISITION_POTION,
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
