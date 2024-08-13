import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../atoms/userLevelState';
import PunchkingEventListUI from './UI/PunchkingEventListUI';

const PunchkingEvent = () => {
  const characterLevel = useRecoilValue(userLevelState);

  return (
    <PunchkingEventListUI
      title="펀치킹 컨텐츠"
      characterLevel={characterLevel}
    />
  );
};

export default PunchkingEvent;
