import usePortalBuffInfo from '../../../../hooks/usePortalBuffInfo';
import usePortalCheckInfo from '../../../../hooks/usePortalCheckInfo';
import useRateInfo from '../../../../hooks/useRateInfo';
import MapStatsUI from '../../../List/common/MapStatsUI';

const MapPortalRateStatsSection = () => {
  const { onChangeCheckBox, checkRuneInfo, checkSundayEventInfo } =
    usePortalCheckInfo();

  const { buffButtonOption } = usePortalBuffInfo();

  const { expInfo } = useRateInfo({});

  const rateList: RateListOption[] = [expInfo];

  const checkBoxList: CheckBoxGroup = {
    onChange: onChangeCheckBox,
    option: [checkRuneInfo, checkSundayEventInfo],
  };

  return <MapStatsUI rateList={rateList} checkBoxList={checkBoxList} />;
};

export default MapPortalRateStatsSection;
