import { itemDropState, rateValueSelector } from '../../../atoms/itemDropState';
import { RATE_NAME } from '../../../constants/constants';
import useRateSelect from '../../../hooks/useRateSelect';
import RateSelectUI from '../common/RateSelectUI';

const ItemDropPCRoom = () => {
  const { value, handleRateChange } = useRateSelect({
    rateValueSelector,
    state: itemDropState,
    rateName: RATE_NAME.PC_ROOM,
  });

  const rateOption: RateSelectOption = {
    label: '프리미엄 PC방',
    key: RATE_NAME.PC_ROOM,
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
