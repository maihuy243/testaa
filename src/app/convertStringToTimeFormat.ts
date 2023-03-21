export const convertStringToTimeFormat = (obj: any) => {
  const result: any = {};
  Object.keys(obj).forEach((key: string) => {
    let crrTime = obj[key].split(':');
    result[key] = {
      hour: Number(crrTime[0]) ? Number(crrTime[0]) : 0,
      minute: Number(crrTime[1]) ? Number(crrTime[1]) : 0,
    };
  });
  return result;
};
