import useBurningFieldSlider from '../../../../hooks/useBurningFieldSlider';
import ListSubTitleUI from '../../../List/common/ListSubTitleUI';
import ListItemStyle from '../../../List/style/ListItemStyle';
import BurningFieldSliderUI from '../../../Slider/BurningFieldSliderUI';

const MapInfoBurningFieldSection = ({ mapName }: MapNameProps) => {
  const { sliderValue, handleSliderChange } = useBurningFieldSlider(mapName);

  return (
    <ListItemStyle>
      <ListSubTitleUI
        title="버닝필드"
        subtitle={`${sliderValue}단계 적용중`}
        subtitleImportant={true}
      />

      <BurningFieldSliderUI
        sliderValue={sliderValue}
        handleSliderChange={handleSliderChange}
      />
    </ListItemStyle>
  );
};

export default MapInfoBurningFieldSection;
