export const convertTimepickerFormat = (obj: any) => {
  const result: any = {};
  Object.keys(obj).forEach((key: string) => {
    let hour = obj[key]['hour'] ? obj[key]['hour'] : '00';
    let minute = obj[key]['minute'] ? obj[key]['minute'] : '00';
    const time = hour + ':' + minute;
    result[key] = time;
  });
  return result;
};
