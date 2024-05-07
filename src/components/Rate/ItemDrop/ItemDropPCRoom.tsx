import { itemDropState, rateValueSelector } from '../../../atoms/itemDropState';
import useRateSelect from '../../../hooks/useRateSelect';
import { RateSelectOption } from '../../../interface/rate';
import RateSelectUI from '../common/RateSelectUI';

const ItemDropPCRoom = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: itemDropState,
    rateName: 'PC_room',
  });

  const rateOption: RateSelectOption = {
    label: '프리미엄 PC방',
    key: 'PC_room',
    values: [
      { value: 0, label: '미적용' },
      { value: 10, label: '적용 (+10%)' },
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

export default ItemDropPCRoom;
