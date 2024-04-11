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
