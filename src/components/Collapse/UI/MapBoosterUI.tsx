import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent } from 'react';
import { MapInfo, MapMonsterInfo } from '../../../interface/map';
import { SelectOptions } from '../../../interface/select';
import AvatarChipUI from '../../common/AvatarChipUI';
import DividerChipUI from '../../common/DividerChipUI';
import SelectCellUI from '../../common/SelectCellUI';
import TextAndAmountLocaleStringUI from '../../common/TextAndAmountLocaleStringUI';
import MapCalculateRewardUI from './MapCalculateRewardUI';

type MapBoosterUIProps = {
  highestLevelMonster: MapMonsterInfo;
  selectOptions: SelectOptions;
  selectedValue: number;
  numberOfMonster: number;
  handleSelectChange: (event: SelectChangeEvent<number>) => void;
  handleNumberOfMonsterValue: (event: ChangeEvent<HTMLInputElement>) => void;
  item: MapInfo;
  expRate: number;
};

const MapBoosterUI = ({
  highestLevelMonster,
  selectOptions,
  selectedValue,
  numberOfMonster,
  handleSelectChange,
  handleNumberOfMonsterValue,
  item,
  expRate,
}: MapBoosterUIProps) => {
  return (
    <List
      sx={{
        bgcolor: 'background.paper',
      }}
      dense
    >
      <AvatarChipUI
        src="https://i.namu.wiki/i/DD0L-rzfOKMRj7b39GQA2JlWTdxM1RTJK5l90IBW5nWWt5MdoeicWit6QU1T9Ws7PYlnv0MsKctng8yyVOit7g.webp"
        text="VIP 부스터 / 헤이스트"
        label="이벤트 진행중 (03.28 ~ 04.24)"
      />

      <Divider variant="middle" />

      <ListItem>
        <ListItemText
          primary={
            <Typography variant="body2">
              캐릭터당 일일 10회 100초 동안 최대 180마리 기준
            </Typography>
          }
        ></ListItemText>
      </ListItem>

      <DividerChipUI label="몬스터 스탯" />

      <ListItem>
        <ListItemText
          primary={
            <>
              <Typography variant="body2" color="#d32f2f">
                필드 최고렙 일반 몬스터 기본 경험치 적용, 레벨차이에 따른 경험치
                배율 적용 X
              </Typography>
              <TextAndAmountLocaleStringUI
                text="레벨(필드 몬스터 레벨):"
                amount={highestLevelMonster.level}
              />
              <TextAndAmountLocaleStringUI
                text="경험치(필드 몬스터 순수 경험치):"
                amount={highestLevelMonster.experience}
              />
            </>
          }
        />
      </ListItem>

      <DividerChipUI label="경험치 계산" />

      <ListItem>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SelectCellUI
            options={selectOptions}
            value={selectedValue}
            onChange={handleSelectChange}
          />

          <Typography variant="body1" marginLeft={0.5}>
            회
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', ml: 0.5 }}>
          <TextField
            sx={{ width: 50 }}
            id="outlined-size-small"
            size="small"
            value={numberOfMonster}
            onChange={handleNumberOfMonsterValue}
            inputProps={{ sx: { p: 0.5, textAlign: 'center' } }}
          />

          <Typography variant="body1" marginLeft={0.5}>
            마리 기준
          </Typography>
        </Box>
      </ListItem>

      <MapCalculateRewardUI
        label="1회 사용 경험치 획득량:"
        rewardValue={
          highestLevelMonster.experience *
          numberOfMonster *
          ((400 + item.burning_field) / 100)
        }
        rewardUnit="경험치"
      />

      <MapCalculateRewardUI
        label={`총 사용(${selectedValue}회) 경험치 획득량:`}
        rewardValue={
          highestLevelMonster.experience *
          numberOfMonster *
          selectedValue *
          ((400 + item.burning_field) / 100)
        }
        rewardUnit="경험치"
      />

      <DividerChipUI label="효율 계산" />

      <ListItem>
        <ListItemText
          primary={
            <>
              <Typography variant="body1">
                경험치 도핑 {expRate}% + 룬 {2}배 기준:
              </Typography>

              <Typography variant="body1">
                1회 사용:{' '}
                {(highestLevelMonster.experience *
                  numberOfMonster *
                  selectedValue *
                  ((expRate + item.burning_field) / 100)) /
                  highestLevelMonster.experience}
                마리를 잡는 효과
              </Typography>

              <Typography variant="body1">
                부스트가 약{' '}
                {(
                  (highestLevelMonster.experience *
                    numberOfMonster *
                    selectedValue *
                    ((expRate + item.burning_field) / 100)) /
                  highestLevelMonster.experience /
                  (item.number_of_monster * 8)
                ).toFixed(1)}
                분의 효율을 가짐
              </Typography>
            </>
          }
        ></ListItemText>
      </ListItem>
    </List>
  );
};

export default MapBoosterUI;
