export const araneRiverRegions: AraneRiverRegion[] = [
  '소멸의여로',
  '리버스시티',
  '츄츄아일랜드',
  '얌얌아일랜드',
  '레헬른',
  '아르카나',
  '모라스',
  '에스페라',
  '셀라스',
  '문브릿지',
  '고통의미궁',
  '리멘',
];

export const grandisRegions: GrandisRegion[] = [
  '세르니움',
  '불타는세르니움',
  '호텔아르크스',
  '오디움',
  '도원경',
  '아르테리아',
  '카르시온',
];

export const allRegions = [
  '소멸의여로',
  '리버스시티',
  '츄츄아일랜드',
  '얌얌아일랜드',
  '레헬른',
  '아르카나',
  '모라스',
  '에스페라',
  '셀라스',
  '문브릿지',
  '고통의미궁',
  '리멘',
  '세르니움',
  '불타는세르니움',
  '호텔아르크스',
  '오디움',
  '도원경',
  '아르테리아',
  '카르시온',
] as (GrandisRegion | AraneRiverRegion)[];

export const minRegionsLevel: Record<string, number> = {
  소멸의여로: 200,
  리버스시티: 205,
  츄츄아일랜드: 210,
  얌얌아일랜드: 215,
  레헬른: 220,
  아르카나: 225,
  모라스: 230,
  에스페라: 235,
  셀라스: 240,
  문브릿지: 245,
  고통의미궁: 250,
  리멘: 255,
  세르니움: 260,
  불타는세르니움: 260,
  호텔아르크스: 265,
  오디움: 270,
  도원경: 275,
  아르테리아: 280,
  카르시온: 285,
};

export const araneRiverDailyQuestMinRegionsLevel = {
  소멸의여로: 200,
  츄츄아일랜드: 210,
  레헬른: 220,
  아르카나: 225,
  모라스: 230,
  에스페라: 235,
  문브릿지: 245,
  고통의미궁: 250,
  리멘: 255,
};

export const grandisDailyQuestMinRegionsLevel = {
  세르니움: 260,
  호텔아르크스: 265,
  오디움: 270,
  도원경: 275,
  아르테리아: 280,
  카르시온: 285,
};

export const weeklyQuestMinRegionsLevel = {
  소멸의여로: 200,
  츄츄아일랜드: 210,
  레헬른: 220,
  아르카나: 225,
  모라스: 230,
  에스페라: 235,
};

export const epicDungeonMinRegionsLevel: Record<EpicDungeonRegion, number> = {
  하이마운틴: 260,
  앵글러컴퍼니: 270,
};

export const highEndDungeonMinRegionsLevel: Record<
  HighEndDungeonRegion,
  number
> = {
  소멸의여로: 200,
  츄츄아일랜드: 210,
  레헬른: 220,
  아르카나: 225,
  모라스: 230,
  에스페라: 235,
  셀라스: 240,
  문브릿지: 245,
  고통의미궁: 250,
  리멘: 255,
};

export const extremeDungeonMinRegionLevel = { '익스트림 몬스터파크': 260 };
