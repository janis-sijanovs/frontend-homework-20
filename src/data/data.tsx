export type ResultType = {
  firstName: string,
  lastName: string,
  gender: string,
  hasActiveLoan: boolean,
  loanType: string,
  explanation: string;
  sum: number;
}

const resultPreset: ResultType = {
  firstName: '',
  lastName: '',
  gender: '',
  hasActiveLoan: false,
  loanType: '',
  explanation: '',
  sum: 0,
};

export const getPresetData = () => resultPreset;
