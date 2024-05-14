import { EVENT_SKILL } from '../constants/constants';

export const formatNumber = (number: number, unit?: '메소' | '경험치') => {
  if (number === 0) {
    return '0';
  }

  const units = [' ', '만', '억', '조', '경'];
  let result = '';
  let unitIndex = 0;

  number = Math.floor(number);

  while (number > 0) {
    const remainder = number % 10000;
    const chunk = remainder > 0 ? remainder + units[unitIndex] + ' ' : '';
    result = chunk + result;
    number = Math.floor(number / 10000);
    unitIndex++;
  }

  if (unit) {
    return result.trim() + ' ' + unit;
  } else {
    return result.trim();
  }
};

export const formatEfficiency = (huntEfficiency: number) => {
  let formattedResult;

  if (huntEfficiency % 1 === 0) {
    formattedResult = huntEfficiency.toFixed(0);
  } else if ((huntEfficiency * 10) % 1 === 0) {
    formattedResult = huntEfficiency.toFixed(1);
  } else {
    formattedResult = huntEfficiency.toFixed(2);
  }

  return formattedResult;
};

export const minutesToMinutesAndSeconds = (totalMinutes: number) => {
  if (totalMinutes === Infinity) return '계산불가';

  let minutes = Math.floor(totalMinutes);
  let seconds = Math.round((totalMinutes - minutes) * 60);

  // 초가 60초를 넘어가면 분과 초를 조정
  if (seconds >= 60) {
    const extraMinutes = Math.floor(seconds / 60);
    seconds %= 60;
    minutes += extraMinutes;
  }

  // 분이 0인 경우
  if (minutes === 0) {
    // 초가 7보다 크면 범위를 설정하여 출력
    if (seconds + 7 >= 60) {
      return `${seconds}초 ~ ${seconds + 7 - 60}초`;
    } else {
      return `${seconds}초 ~ ${seconds + 7}초`;
    }
  } else {
    // 분과 초 모두 출력
    if (seconds + 7 >= 60) {
      const endSeconds = seconds + 7 - 60;
      const endMinutes = minutes + 1;
      return `${minutes}분 ${seconds}초 ~ ${endMinutes}분 ${endSeconds}초`;
    } else {
      return `${minutes}분 ${seconds}초 ~  ${seconds + 7}초`;
    }
  }
};

export const convertToFirstDecimal = (numberOfMonster: number) => {
  return Math.floor(
    ((EVENT_SKILL.REQUIRED_MONSTER_COUNT / numberOfMonster) % 1) * 10
  );
};

export const convertToSeconds = (firstDecimal: number) => {
  switch (firstDecimal) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
    case 4:
      return 3;
    case 5:
      return 4;
    case 6:
    case 7:
      return 5;
    case 8:
      return 6;
    case 9:
      return 7;
    default:
      return 0;
  }
};

export const formatTime = (totalSeconds: number) => {
  const absTotalSeconds = Math.abs(totalSeconds);
  const minutes = Math.floor(absTotalSeconds / 60);
  const seconds = absTotalSeconds % 60;

  const sign = totalSeconds < 0 ? '-' : '';

  if (minutes === 0) {
    return `${sign}${seconds}초`;
  } else {
    return `${sign}${minutes}분 ${seconds}초`;
  }
};
