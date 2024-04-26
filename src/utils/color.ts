export const getTimePrittoColor = (seconds: number) => {
  if (seconds <= 0) {
    return '#fde2e4';
  } else if (seconds <= 15) {
    return '#fff1e6';
  } else if (seconds <= 30) {
    return '#e2ece9';
  } else {
    return '#dfe7fd';
  }
};

export const getTimePolloColor = (seconds: number) => {
  if (seconds <= 60) {
    return '#fff1e6';
  } else if (seconds <= 120) {
    return '#e2ece9';
  } else {
    return '#dfe7fd';
  }
};

export const getTimeInfernoWolfColor = (seconds: number) => {
  if (seconds <= 0) {
    return '#fde2e4';
  } else if (seconds <= 25) {
    return '#fff1e6';
  } else if (seconds <= 50) {
    return '#e2ece9';
  } else {
    return '#dfe7fd';
  }
};
