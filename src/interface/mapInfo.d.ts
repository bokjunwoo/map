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

interface MapNameProps {
  mapName: string;
}

interface MobInfoProps {
  mobInfo: MapMonsterInfo;
}
