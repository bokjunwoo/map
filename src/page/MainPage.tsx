import MapTableContent from '../content/MapTableContent';
import RatesOptionContent from '../content/RatesOptionContent';
import RegionDetails from '../content/RegionDetails';
import SelectedTimeUI from '../content/SelectedTimeUI';

const MainPage = () => {
  return (
    <>
      <RatesOptionContent />

      <RegionDetails />

      <SelectedTimeUI />

      <MapTableContent
        defaultOptionValue="30분"
        localStorageKey="selectedTimeOption"
      />
    </>
  );
};

export default MainPage;
