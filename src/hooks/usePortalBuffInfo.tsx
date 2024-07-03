import { useRecoilState } from 'recoil';
import { portalBuffState } from '../atoms/portalBuffState';
import { listRGB } from '../data/color';

const usePortalBuffInfo = () => {
  const [buff, setBuff] = useRecoilState(portalBuffState);

  const increment = () => {
    setBuff((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setBuff((prevCount) => prevCount - 1);
  };

  const buffButtonOption: BuffButtonOption = {
    bgcolor: `rgba(${listRGB.orange}, 0.5)`,
    text: '메디사의 축복',
    count: buff,
    increment,
    decrement,
    disableIncrement: 6,
    disableDecrement: 0,
  };

  return {
    buffButtonOption,
  };
};

export default usePortalBuffInfo;
