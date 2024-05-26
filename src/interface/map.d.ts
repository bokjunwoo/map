interface MapRegion {
  map_region:
    | '소멸의여로'
    | '리버스시티'
    | '츄츄아일랜드'
    | '얌얌아일랜드'
    | '레헬른'
    | '아르카나'
    | '모라스'
    | '에스페라'
    | '셀라스'
    | '문브릿지'
    | '고통의미궁'
    | '리멘'
    | '세르니움'
    | '불타는세르니움'
    | '호텔아르크스'
    | '오디움'
    | '도원경'
    | '아르테리아'
    | '카르시온';
}

interface MonsterInfo {
  name: string;
  level: number;
  meso: number;
  experience: number;
}

interface MapMonsterInfo extends MonsterInfo {
  number_of_monster: number;
}

interface MapInfo extends HeadCellInfo {
  id: number;
  symbols: number;
  monsters: MapMonsterInfo[];
}

type MapData = {
  [key in AraneRiverRegion | GrandisRegion]: MapInfo[];
};

interface MapInfoProps {
  mapInfo: MapInfo;
}
