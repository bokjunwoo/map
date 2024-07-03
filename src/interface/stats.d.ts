interface CommonOption {
  text: string;
  bgcolor: string;
}

interface RateListOption extends CommonOption {
  iconName: string;
  value: number;
}

interface CheckBoxOption extends CommonOption {
  name: string;
  checked: boolean;
}

interface CheckBoxGroup {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  option: CheckBoxOption[];
}

interface BuffButtonOption extends CommonOption {
  count: number;
  disableIncrement: number;
  disableDecrement: number;
  increment: () => void;
  decrement: () => void;
}
