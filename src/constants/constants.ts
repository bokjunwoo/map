export const LEVEL_RANGE = {
  MIN: 200,
  MAX: 300,
};

export const REGEX = {
  NUMBER: /^[0-9]*$/,
  NUMBER_UP_TO_THREE_DIGITS_REGEX: /^[0-9]{1,3}$/,
  NUMBER_AND_DOT: /^\d*(\.\d{0,2})?$/,
};

export const GRANDIS_REGION = '그란디스';
export const ARCANERIVER_REGION = '아케인리버';

export const TIME_OPTIONS = [
  { time: '6분', multiplier: 6 },
  { time: '30분', multiplier: 30 },
  { time: '1시간', multiplier: 60 },
  { time: '2시간', multiplier: 120 },
];

export const EVENT_SKILL = {
  KILL_MONSTER_COUNT: 90,
  REQUIRED_MONSTER_COUNT: 200,
  DELAY: 8,
  ACTIVATION_COUNT: 20,
};

export const PORTAL_INITIAL_TIME = {
  BOUNTY_HUNTING: 40,
  CASTLE_GATES: 50,
  STORMWING: 35,
  DRAGON_EGG_STEALING: 8,
  COURTSHIP_DANCE: 25,
  EAGLE_HUNTING: 30,
  TOTEM_SLASH: 20,
  INFERNO_WOLF: 25,
};

export const PORTAL_EXP_VALUE = {
  BOUNTY_HUNTING: 800,
  CASTLE_GATES: 860,
  STORMWING: 1150,
  TOTEM_SLASH: 1200,
};
