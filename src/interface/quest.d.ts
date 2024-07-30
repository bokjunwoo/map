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

interface CalculateTotalExpPercentageParams {
  characterLevel: number;
  regions: GrandisDailyQuestRegion[];
}
