import AppLayout from './components/Layout/AppLayout';
import MapTableContainer from './components/Table/MapTable';
import UserLevelSearchInput from './components/TextField/UserLevelSearchInputContainer';
import RegionDetails from './contents/RegionDetails';
import SelectedRateList from './contents/SelectedRateType';
import SelectedTimeUI from './contents/SelectedTimeUI';

const App = () => {
  return (
    <AppLayout>
      <UserLevelSearchInput />

      <SelectedRateList />

      <RegionDetails />

      <SelectedTimeUI />

      <MapTableContainer
        defaultOptionValue="30분"
        localStorageKey="selectedTimeOption"
      />
    </AppLayout>
  );
};

export default App;
