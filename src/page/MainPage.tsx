import MapTable from '../components/Table/MapTable';
import UserLevelSearchInputContainer from '../components/TextField/UserLevelSearchInputContainer';
import RegionDetails from '../contents/RegionDetails';
import SelectedRateType from '../contents/SelectedRateType';
import SelectedTimeUI from '../contents/SelectedTimeUI';

const MainPage = () => {
  return (
    <>
      <UserLevelSearchInputContainer />

      <SelectedRateType />

      <RegionDetails />

      <SelectedTimeUI />

      <MapTable
        defaultOptionValue="30분"
        localStorageKey="selectedTimeOption"
      />
    </>
  );
};

export default MainPage;
