import { 고통의미궁 } from './map/고통의미궁';
import { 도원경 } from './map/도원경';
import { 레헬른 } from './map/레헬른';
import { 리멘 } from './map/리멘';
import { 리버스시티 } from './map/리버스시티';
import { 모라스 } from './map/모라스';
import { 문브릿지 } from './map/문브릿지';
import { 불타는세르니움 } from './map/불타는세르니움';
import { 세르니움 } from './map/세르니움';
import { 셀라스 } from './map/셀라스';
import { 소멸의여로 } from './map/소멸의여로';
import { 아르카나 } from './map/아르카나';
import { 아르테리아 } from './map/아르테리아';
import { 얌얌아일랜드 } from './map/얌얌아일랜드';
import { 에스페라 } from './map/에스페라';
import { 오디움 } from './map/오디움';
import { 츄츄아일랜드 } from './map/츄츄아일랜드';
import { 카르시온 } from './map/카르시온';
import { 호텔아르크스 } from './map/호텔아르크스';

export const mapData: MapData = {
  소멸의여로: 소멸의여로,
  리버스시티: 리버스시티,
  츄츄아일랜드: 츄츄아일랜드,
  얌얌아일랜드: 얌얌아일랜드,
  레헬른: 레헬른,
  아르카나: 아르카나,
  모라스: 모라스,
  에스페라: 에스페라,
  셀라스: 셀라스,
  문브릿지: 문브릿지,
  고통의미궁: 고통의미궁,
  리멘: 리멘,
  세르니움: 세르니움,
  불타는세르니움: 불타는세르니움,
  호텔아르크스: 호텔아르크스,
  오디움: 오디움,
  도원경: 도원경,
  아르테리아: 아르테리아,
  카르시온: 카르시온,
};

export const questMapData = {
  소멸의여로: {
    ...소멸의여로[21],
    max_number_of_monster: 30,
  },
  츄츄아일랜드: { ...츄츄아일랜드[12], max_number_of_monster: 28 },
  레헬른: { ...레헬른[5], max_number_of_monster: 38 },
  아르카나: { ...아르카나[3], max_number_of_monster: 28 },
  모라스: { ...모라스[8], max_number_of_monster: 37 },
  에스페라: { ...에스페라[6], max_number_of_monster: 26 },
  문브릿지: { ...문브릿지[0], max_number_of_monster: 37 },
  고통의미궁: { ...고통의미궁[0], max_number_of_monster: 34 },
  리멘: { ...리멘[15], max_number_of_monster: 32 },
  세르니움: { ...세르니움[13], max_number_of_monster: 34 },
  호텔아르크스: { ...호텔아르크스[2], max_number_of_monster: 38 },
  오디움: { ...오디움[4], max_number_of_monster: 39 },
  도원경: { ...도원경[6], max_number_of_monster: 39 },
  아르테리아: { ...아르테리아[10], max_number_of_monster: 40 },
  카르시온: { ...카르시온[17], max_number_of_monster: 40 },
};
