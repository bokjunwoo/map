import { useRecoilState } from 'recoil';
import { portalCheckState } from '../atoms/portalCheckState';
import { listRGB } from '../data/color';

const usePortalCheckInfo = () => {
  const [checkState, setCheckState] = useRecoilState(portalCheckState);

  const onChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckState({
      ...checkState,
      [event.target.name]: event.target.checked,
    });
  };

  const checkRuneInfo: CheckBoxOption = {
    checked: checkState.rune,
    text: '룬 2배',
    name: 'rune',
    bgcolor: `rgba(${listRGB.purple}, 0.3)`,
  };

  const checkSundayEventInfo: CheckBoxOption = {
    checked: checkState.sundayEvent,
    text: '선데이 메이플',
    name: 'sundayEvent',
    bgcolor: `rgba(${listRGB.red}, 0.6)`,
  };

  return { onChangeCheckBox, checkRuneInfo, checkSundayEventInfo };
};

export default usePortalCheckInfo;
