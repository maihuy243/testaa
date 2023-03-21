import { convertStringToTimeFormat } from './convertStringToTimeFormat';

export const formatTimeStringToObj = (value: any) => {
  let result: any = [];
  let lstChecked: any = [];

  if (value) {
    Object.keys(value).forEach((key: string, index: number) => {
      if (Object.keys(value[key]).length) {
        lstChecked.push({
          daySelect: [key],
          row: index,
        });
        result.push(convertStringToTimeFormat(value[key]));
      } else {
        result.push({
          timeStart: { hour: null, minute: null },
          timeEnd: { hour: null, minute: null },
          timeFrom: { hour: null, minute: null },
          timeTo: { hour: null, minute: null },
        });
      }
    });
  }

  return {
    result: result,
    lstChecked: lstChecked,
  };
};
