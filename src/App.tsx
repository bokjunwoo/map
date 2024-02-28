import AppLayout from './components/Layout/AppLayout';
import SelectButtonGroupContainer from './components/SelectButtonGroup/SelectButtonGroupContainer';
import UserLevelSearchInputContainer from './components/TextField/UserLevelSearchInputContainer';

const App = () => {
  return (
    <AppLayout>
      <SelectButtonGroupContainer
        options={['직접선택', '불러오기']}
        defaultOptionValue="직접선택"
        localStorageKey="selectedOption"
      />

      <UserLevelSearchInputContainer />
    </AppLayout>
  );
};

export default App;
