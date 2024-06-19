export const LEVEL_RANGE = {
  MIN: 200,
  MAX: 300,
};

export const REGEX = {
  NUMBER: /^[0-9]*$/,
  NUMBER_UP_TO_THREE_DIGITS_REGEX: /^[0-9]{1,3}$/,
  NUMBER_AND_DOT: /^\d*(\.\d{0,2})?$/,
  CHARACTER_NAME: /^[A-Za-z0-9가-힣]{2,10}$/,
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
  TITLE: '반 레온의 검술 - 신입기사',
  SKILL_DESCRIPTION:
    '최대 15마리의 적을 1500% 데미지로 6번 공격하는 폭발이 3회 발동되는 스킬이 1회 발동',
  INITIAL_MOB_KILL: 135,
  REQUIRED_MOB_COUNT: 300,
  DELAY: 8,
  ACTIVATION_COUNT: 30,
};

export const BOOSTER = {
  EXP_MULTIPLIER: 10,
  INITIAL_MOB_KILL: 180,
  ACTIVATION_COUNT: 10,
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
  DRAGON_EGG_STEALING: 480,
  COURTSHIP_DANCE: 1200,
  EAGLE_HUNTING: 1200,
};

export const PORTAL_EXP_MULTIPLIER = {
  BOUNTY_HUNTING: 800,
  CASTLE_GATES: 860,
  STORMWING: 1150,
  TOTEM_SLASH: 1200,
  DRAGON_EGG_STEALING: 480,
  COURTSHIP_DANCE: 1200,
  EAGLE_HUNTING: 1200,
  INFERNO_WOLF_EXTREME: 1600,
  INFERNO_WOLF_CHAOS: 1200,
};

export const RATE_NAME = {
  ABILITY: 'ability',
  ACCUMULATION_POTION: 'accumulation_potion',
  BOOST_RING: 'boost_ring',
  ELVEN_BLESSING: 'elven_blessing',
  ETC_EXP: 'etc_exp',
  ETC_ITEM_DROP: 'etc_item_drop',
  ETC_MESO_DROP: 'etc_meso_drop',
  EXP_COUPON: 'exp_coupon',
  EXP_EVENT_STAT: 'exp_event_stat',
  EXP_TITLE: 'exp_title',
  EXTREME_GOLD_POTION: 'extreme_gold_potion',
  HOLY_SYMBOL: 'holy_symbol',
  HYPER_STAT: 'hyper_stat',
  ITEM_EQUIPMENT: 'item_equipment',
  KINSHIP_RING: 'kinship_ring',
  LOADED_DICE: 'loaded_dice',
  MVP_COUPON: 'mvp_coupon',
  PC_ROOM: 'PC_room',
  SHOW_DOWN_SKILL: 'show_down_skill',
  SKILL_GREED: 'skill_greed',
  SOL_JANUS: 'sol_janus',
  SPIRIT_PENDANT: 'spirit_pendant',
  UNION_ARTIFACT: 'union_artifact',
  UNION_LUCK_COUPON: 'union_luck_coupon',
  UNION_PHANTOM: 'union_Phantom',
  UNION_OCCUPIED: 'union_occupied',
  UNION_WEALTH_COUPON: 'union_wealth_coupon',
  UNION_ZERO: 'union_Zero',
  VIP_COUPON: 'VIP_coupon',
  WEALTH_ACQUISITION_POTION: 'wealth_acquisition_potion',
};
