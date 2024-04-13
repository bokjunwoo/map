import MapBoosterRuneUI from './UI/MapBoosterRuneUI';

type MapBoosterRuneProps = {
  selectedRuneValue: number;
  setSelectedRuneValue: React.Dispatch<React.SetStateAction<number>>;
};

const MapBoosterRune = ({
  selectedRuneValue,
  setSelectedRuneValue,
}: MapBoosterRuneProps) => {
  const selectedRuneOption: SelectOptions = {
    label: '룬 설정',
    values: [
      { value: 0, label: '룬 X' },
      { value: 100, label: '룬 2배' },
      { value: 200, label: '룬 3배' },
    ],
  };

  const handleSelectRuneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedRuneValue(Number(event.target.value));
  };

  return (
    <MapBoosterRuneUI
      selectedRuneOption={selectedRuneOption}
      selectedRuneValue={selectedRuneValue}
      handleSelectRuneChange={handleSelectRuneChange}
    />
  );
};

export default MapBoosterRune;
