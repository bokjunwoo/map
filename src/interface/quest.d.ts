type AraneRiverDailyQuestRegion =
  | '소멸의여로'
  | '츄츄아일랜드'
  | '레헬른'
  | '아르카나'
  | '모라스'
  | '에스페라'
  | '문브릿지'
  | '고통의미궁'
  | '리멘';

type GrandisDailyQuestRegion =
  | '세르니움'
  | '호텔아르크스'
  | '오디움'
  | '도원경'
  | '아르테리아'
  | '카르시온';

type AraneRiverWeeklyQuestRegion =
  | '소멸의여로'
  | '츄츄아일랜드'
  | '레헬른'
  | '아르카나'
  | '모라스'
  | '에스페라';

type HighEndDungeonRegion =
  | '소멸의여로'
  | '츄츄아일랜드'
  | '레헬른'
  | '아르카나'
  | '모라스'
  | '에스페라'
  | '셀라스'
  | '문브릿지'
  | '고통의미궁'
  | '리멘';

type ExtremeParkRegion = '익스트림 몬스터파크';

type MonsterParkRegion = HighEndDungeonRegion | ExtremeParkRegion;

type QuestRegion =
  | AraneRiverDailyQuestRegion
  | GrandisDailyQuestRegion
  | AraneRiverWeeklyQuestRegion
  | HighEndDungeonRegion;

type AllQuestRegion =
  | AraneRiverDailyQuestRegion
  | GrandisDailyQuestRegion
  | AraneRiverWeeklyQuestRegion
  | EpicDungeonRegion
  | MonsterParkRegion
  | ExtremeParkRegion;

interface CalculateTotalExpPercentageParams<T> {
  characterLevel: number;
  regions: T[];
  questExp: { [key in T]: number };
  minLevelData: { [key in T]: number };
}

type EpicDungeonRegion = '하이마운틴' | '앵글러컴퍼니';

type EpicDungeonExp = {
  [dungeonName: string]: LevelExperience;
};

interface CalculateEpicDungeonTotalExpPercentage {
  characterLevel: number;
  regions: EpicDungeonRegion[];
  epicDungeonExp: EpicDungeonExp;
}

interface CalculateMonsterParkTotalExpPercentage {
  characterLevel: number;
  regions: MonsterParkRegion[];
}

type PunchkingScoreLabel =
  | '150점'
  | '400점'
  | '1000점'
  | '1600점'
  | '2000점'
  | '2050점';

interface CalculatePunchkingExpPercentage {
  characterLevel: number;
  score: number;
}
